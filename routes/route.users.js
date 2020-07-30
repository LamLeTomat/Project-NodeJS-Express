const express = require('express');
const router = express.Router();
const db = require('../db');
const shortid = require('shortid');

router.get('/', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
});
//route-Search_Page
router.get('/search', (req, res) => {
    const q = req.query.q;
    const matchedUsers = users.filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    });
})

//route Create user Page
router.get('/create', (req, res) => {
    res.render('users/create')
});

//route Detail user page
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    });
});

router.post('/create', (req, res) =>{

    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    //Tro ve trang users
    res.redirect('/users')
})


module.exports =router;