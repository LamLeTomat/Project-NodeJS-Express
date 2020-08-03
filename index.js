const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/route.users');
const productRoutes = require('./routes/route.product');
const { static } = require('express');

const app = express();
const port = 3001;

//Body parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//static route
app.use(express.static('public'))

app.use('/users', userRoutes)
app.use('/products', productRoutes)

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





