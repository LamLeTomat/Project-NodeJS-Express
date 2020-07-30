const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const shortid = require('shortid');

const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some defaults
db.defaults({ users: [] })
  .write()

const app = express();
const port = 3001;

//Body parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, () => console.log(`App listening on port ${port}`));


//Template engine Pug
app.set('view engine', 'pug');
app.set('views', './views');

//route
app.get('/', (req, res) => {
    res.render('index', {
        name: "Lam ngon zai"
    });
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
});
//route-Search_Page
app.get('/users/search', (req, res) => {
    const q = req.query.q;
    const matchedUsers = users.filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    });
})

//route Create user Page
app.get('/users/create', (req, res) => {
    res.render('users/create')
});

//route Detail user page
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    });
});

app.post('/users/create', (req, res) =>{

    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    //Tro ve trang users
    res.redirect('/users')
})

