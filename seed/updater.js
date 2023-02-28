var Product = require('../modals/products');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arunjunaicrackers:cy7Lknn3UZJFzWTA@cluster0.sgkjuh1.mongodb.net/?retryWrites=true&w=majority');


Product.updateMany(
    {flag:"pass"},
    {$mul:{discountPrice:4 }}, {multi:true}
)