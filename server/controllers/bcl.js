let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let BCL = require('../models/bcl');

module.exports.displayBCList = (req, res, next) => {
    BCL.find((err, BCList) => {
       if(err)
       {
           return console.error(err);
       }
       else
       {
           res.render('bcl/list', {
                title: 'Business Contact List', 
                BCList: BCList, 
                displayName: req.user ? req.user.displayName : ''
            });
       }
   });
}

module.exports.displayBCLAddPage = (req,res,next) =>{
    res.render('bcl/add', {
        title: 'Add Business Contact List',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.processBCLAddPage = (req,res,next) =>{
    let newbcl = BCL({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email,
    })
    BCL.create(newbcl,(err,BCL) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/business-contact-list');
        }
    });
}

module.exports.displayBCLEditPage = (req,res,next) =>{
    let id = req.params.id;

    BCL.findById(id,(err,bclToEdit) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('bcl/edit',{
                title: 'Edit Business Contact List', 
                bcl: bclToEdit,
                displayName: req.user ? req.user.displayName : ''
            });
            
        }
    });
}

module.exports.processBCLEditPage = (req,res,next) =>{
    let id = req.params.id

    let updatedbcl = BCL({
        "_id":id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email

    });

    BCL.updateOne({_id: id}, updatedbcl,(err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/business-contact-list');
        }
    });
}

module.exports.performBCLDelete = (req,res,next) =>{
    let id = req.params.id

    BCL.remove({_id:id},(err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/business-contact-list');
        }
    });

}