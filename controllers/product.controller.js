const db = require("../db");

module.exports.index = (req, res) => {
    const page = parseInt(req.query.page) || 1; //n
    const perPage = 9;//x
    const start = (page - 1) * perPage;
    const end = page * perPage;

    res.render('products/index',{
        products: db.get('products').value().slice(start, end)
    });
};

module.exports