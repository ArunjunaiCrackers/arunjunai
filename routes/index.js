var express = require('express');
var router = express.Router();
var Products = require('../modals/products');
var fs = require('fs');
const path = require('path'); 
var ejs = require("ejs");
var nodemailer = require('nodemailer');
var multer = require('multer');

var fs = require('fs');
// var pdf = require('html-pdf');
// var _basePath = 'file:///' + __dirname + '\\Media\\';
// var options = {format:'A4', base:_basePath};

// var csrfProtection = csrf({ cookie: true });
// router.use(csrfProtection);


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public/images/newProducts/');
    },
    filename: function(req,file, cb){
        cb(null, file.originalname);
    }
});

var fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
    
}

var upload = multer({
    storage:storage,
    limits:{fileSize: 1024 * 1024 * 5},
    fileFilter: fileFilter
});


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: 'arunjunaicrackers@gmail.com',
      pass: 'lintzlairkpzmvrf'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arunjunai' });
});

router.get('/shop', function(req, res, next) {
  Products.find().sort({code:1})
  .then(result=>{
    let discountChange = [];
    res.render('shop', { title: 'Shop | Arunjunai', products:result, prodLength:result.length });
  }).catch(err=>{
    console.log(err);
    return res.render('/');
  })
  
});

router.get('/safetyTips', function(req,res,next){
  res.render('safetyTips', {title: 'Safety Tips | Arunjunai Traders'});
})

router.get('/successPage', function(req,res,next){
  res.render('successPage', {title: 'successPage | Arunjunai Traders'});
})

router.post('/addProducts', function(req,res,next){
  const {name, aPrice, dPrice, qty, ids, content } = req.body;
  
  var names = [];
  names = name;

  var actPrice = [];
  actPrice = aPrice;

  var disPrice = [];
  disPrice = dPrice;

  var quantities = [];
  quantities = qty;

  var idss = [];
  idss = ids;

  var contents = [];
  contents = content;
 
  var totalItems = 0;
  var totalBillValue = 0;
  var savings = 0;
  var combinedArray = [];
   
  for(i=0; i< quantities.length; i++){
    if(quantities[i] > 0){
      combinedArray[i] = { name:names[i], aprice:actPrice[i], price:disPrice[i],  quantity:quantities[i], ids:idss[i], content:contents[i]};
    }
  }
  
  combinedArray.forEach(item=>{
    console.log(item);
    totalItems += Number(item.quantity);
    totalBillValue = totalBillValue + (Number(item.price) * Number(item.quantity)); 
  })

 console.log('Total Items : ' + totalItems);
 console.log('Total Bill Value :' + totalBillValue);
 var overallTotalValue =  req.body.overallTotalVal;
 var discountTotalValue = req.body.discountTotalVal;
 var subTotalValue = req.body.subTotalVal;
 var packingChargeValue = req.body.pckChargeVal;
 var finalBillvalue = req.body.finalBillValuee;
 var clientEmail = req.body.partyEmail;

 var cart = [];
 cart = [{
  items:combinedArray,
  netValue: overallTotalValue,
  savings: discountTotalValue,
  subTotal: subTotalValue,
  packingCharge: packingChargeValue,
  finalBillvalue: finalBillvalue,
  partyName:req.body.partyName,
  partyMob:req.body.partyMob,
  partyEmail:req.body.partyEmail,
  partyAddress:req.body.partyAddress,
  itemsQty:totalItems,
  date: new Date().toISOString().slice(0, 10)
 }];

 console.log(cart);

//  var templateString = fs.readFileSync(path.join(__dirname,'..','views','mailTemplate.ejs'), 'utf-8');
 
 ejs.renderFile(path.join(__dirname,'..','views','mailTemplateNew.ejs'), { cart: cart, items:combinedArray }, 'utf-8', function(errr, data){
if(errr){
  return console.log(errr);
}
  const mainOptions = {
    from: '"Arunjunai - Order Estimation" arunjunaicrackers@gmail.com',
    to: [
      // { name: "Myself", address: "thamarayan@gmail.com" },
      { name: "Client", address: clientEmail },
      {name: "Prem", address:"premanandhshy89@gmail.com"}
    ],
    subject: 'New Order Estimation',
    html: data
  };
  
  transporter.sendMail(mainOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      res.render('successPage',{title:'Arunjunai Traders'});
    }
  });

 });




//  console.log(cart);

//  res.render('mailTemplate', {title:"Confirm order", order:cart});

})

router.get('/mailTemplate', function(req,res,next){
  res.render('mailTemplateNew',{title:'Confirm Order'});
})

router.get('/prem', function(req,res,next){
  res.render('prem',{title:'Control | Arunjunai Traders', products:[]});
})

router.get('/productsControl', function(req,res,next){
  Products.find(function(err,result){
    if(err){
      console.log(err);
      return res.render('prem');
    }
    res.render('prem',{title:'Products | Arunjunai Traders', products:result});
  })
})

router.post('/update/:id', function(req,res,next){
  var id = req.params.id;
  Products.updateOne(
    {_id:id},
    {$set: {
      code : req.body.code,
      name: req.body.newName,
      type:req.body.productType,
      content: req.body.newContent,
      actualPrice: req.body.newActualPrice,
      discountPrice: req.body.newDiscountPrice
    }}, function(err,ress){
      if(err){
        console.log(err);
        return res.render('prem', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.post('/updateImg/:id', upload.single('prodImage'), function(req,res,next){
  var id = req.params.id;
  Products.updateOne(
    {_id:id},
    {$set: {
      imagePath : req.file.path.slice(6),
    }}, function(err,ress){
      if(err){
        console.log(err);
        return res.render('prem', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.get('/makeAvailable/:id', function(req,res,next){
  var id=req.params.id;
  Products.updateOne(
    {_id:id},
    {$set:{
      availability:true
    }},
    function(err,ress){
      if(err){
        console.log(err);
        return res.render('prem', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.get('/makeUnavailable/:id', function(req,res,next){
  var id=req.params.id;
  Products.updateOne(
    {_id:id},
    {$set:{
      availability:false
    }},
    function(err,ress){
      if(err){
        console.log(err);
        return res.render('prem', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.post('/changeDiscount', function(req,res,next){
  var discValue = req.body.discValue;
  console.log(discValue);
  var discRate = (100 - discValue)/100;
 
  console.log(discRate);

  Products.updateMany(
    {},
    [{
      $set: {discountPrice : { $multiply: [discRate, "$actualPrice"]}}
    }],
    {multi:true},
    function(err,result){
      if(err){
        console.log(err);
      }
      console.log(result);
      res.redirect('/productsControl');
    }
  )
})

router.post('/newProduct', upload.single('prodImage'), function(req,res,next){
console.log(req.file.path);
  var product = new Products({
    imagePath : req.file.path.slice(6),
    code : req.body.code,
    name : req.body.prodName,
    content : req.body.prodContent,
    type : req.body.prodType,
    actualPrice : req.body.prodActPrice,
    discountPrice : req.body.prodDiscPrice
  })

  product.save(function(err,result){
    if(err){
        console.log(err);
        return res.redirect('/productsControl');
    }
    res.redirect('/prem');
})

} )


router.get('/deleteProduct/:id', function(req,res,next){
  var id = req.params.id;
  Products.deleteOne({_id:id}, function(err,result){
    if(err){
      console.log(err);
      return res.render('prem');
    }
    console.log(result);
    res.redirect('/productsControl');
  })
})

module.exports = router;
