const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    categoryName: {
        type : String,
        required: true
    },
   
})

 const CategoryModel = mongoose.model('CategoryDatas',categorySchema)
 module.exports = CategoryModel;