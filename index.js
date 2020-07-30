const express = require('express');
const app = express();
const port = 3001;

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

app.get('/users/search', (req, res) => {
    const q = req.query.q;
    const matchedUsers = users.filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    });
})

