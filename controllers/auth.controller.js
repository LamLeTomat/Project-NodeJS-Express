const db = require('../db');

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    const user = db.get('users').find({userName: userName}).value();

    if(!user){
        res.render('auth/login',{
            errors: [
                'user does not exist.'
            ],
            values: req.body
        });
        return;
    }
    if(user.password !== password){
        res.render('auth/login',{
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/');

};