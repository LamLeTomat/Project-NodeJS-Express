const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => console.log(`App listening on port ${port}`));

//Template engine Pug
app.set('view engine', 'pug');
app.set('views', './views');

//route
app.get('/', (req, res) => {
    res.render('index', {
        name: "Lam ngon zai"
    })
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: [
            {name: 'Lam', id : 1,},
            {name : 'Quang', id : 2,}
        ]
    });
});

