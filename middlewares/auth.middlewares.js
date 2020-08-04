const db = require('../db');
module.exports.requireAuth = (req, res, next) => {
    if(!req.cookies.userId){
        res.redirect('/login');
        return;
    }
    const user = db.get('user').find({id: req.cookies.userId}).value();
    if(user){
        res.redirect('/login');
        return;
    }
    next();
}