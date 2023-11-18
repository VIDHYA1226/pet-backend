const express=require('express');
const categoryController=require("../controllers/categoryController");

const router=express.Router();

//Get all category
router.get('/all', categoryController.getAll);

//create new category
router.post('/create',categoryController.create);

//update category
router.put('/update/:id',categoryController.update);

//delete category
router.delete('/delete/:id',categoryController.delete);

module.exports=router;