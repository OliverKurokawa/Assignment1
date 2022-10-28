let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let BCL = require('../models/bcl')

let passport = require('passport');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


let bclController = require('../controllers/bcl')

router.get('/', bclController.displayBCList);

router.get('/add',requireAuth,bclController.displayBCLAddPage);

router.post('/add',requireAuth,bclController.processBCLAddPage);

router.get('/edit/:id',requireAuth,bclController.displayBCLEditPage);

router.post('/edit/:id',requireAuth,bclController.processBCLEditPage);

router.get('/delete/:id',requireAuth,bclController.performBCLDelete);

module.exports = router;