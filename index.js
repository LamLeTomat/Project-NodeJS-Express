const express = require('express');
const userRoutes = require('./routes/route.users');
const productRoutes = require('./routes/route.product');
const authRoutes = require('./routes/auth.route');
const { static } = require('express');
const cookieParser = require('cookie-parser');
const authMiddleWare = require('./middlewares/auth.middlewares');

const app = express();
const port = 3001;

//Body parser

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

//static route
app.use(express.static('public'))

app.use('/users',authMiddleWare.requireAuth, userRoutes)
app.use('/products',authMiddleWare.requireAuth, productRoutes)
app.use('/',authRoutes)

app.listen(port, () => console.log(`App listening on port ${port}`));


//Template engine Pug
app.set('view engine', 'pug');
app.set('views', './views');

//route
app.get('/',authMiddleWare.requireAuth, (req, res) => {
    res.render('index', {
        name: "Lam ngon zai"
    });
});





