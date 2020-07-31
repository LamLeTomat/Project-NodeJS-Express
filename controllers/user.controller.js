const db = require('../db');
const shortid = require('shortid');

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = (req, res) => {
    const q = req.query.q;
    const matchedUsers = db.get('users').value().filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    });
}

module.exports.create = (req, res) => {
    res.render('users/create')
};

module.exports.getIdUser = (req, res) => {
    const id = req.params.id;
    const user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    });
};

module.exports.postCreate = (req, res) =>{

    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    //Tro ve trang users
    res.redirect('/users')
};