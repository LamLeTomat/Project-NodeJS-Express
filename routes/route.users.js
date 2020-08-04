const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');

router.get('/', controller.index);
//route-Search_Page
router.get('/search', controller.search);

//route Create user Page
router.get('/create', controller.create);

//route Detail user page
router.get('/:id', controller.getIdUser);

router.post('/create',validate.postCreate, controller.postCreate );


module.exports =router;