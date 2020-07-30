const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

//Body parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, () => console.log(`App listening on port ${port}`));

const users = [
    {name: 'Lam', id : 1,},
    {name : 'Quang', id : 2,}
]

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
        users: users
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
app.post('/users/create', (req, res) =>{
    users.push(req.body);
    //Tro ve trang users
    res.redirect('/users')
})

