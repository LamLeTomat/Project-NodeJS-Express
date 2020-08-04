const { postCreate } = require("../controllers/user.controller");

module.exports.postCreate = (req, res, next) => {
    const errors = [];
    if(!req.body.name){
        errors.push('Name is required');
    };
    if(!req.body.phone){
        errors.push('Phone is required')
    };
    if(errors.length > 0){
        res.render('users/create', {
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
};