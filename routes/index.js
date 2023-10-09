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
    limits:{fileSize: 1024 * 1024 * 2},
    fileFilter: fileFilter
});

const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'droeoicy2', 
  api_key: '595863132678731', 
  api_secret: 'aMN0VZ_m2XyIcGPQQpH-CsTRsgk' 
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

// router.get('/shop', function(req, res, next) {
//   Products.find().sort({code:1})
//   .then(result=>{
//     let discountChange = [];
//     res.render('shop', { title: 'Shop | Arunjunai', products:result, prodLength:result.length });
//   }).catch(err=>{
//     console.log(err);
//     return res.render('/');
//   })
  
// });

router.get('/shop', function(req, res, next) {
  
  Products.find({type:"SOUND CRACKERS"}).sort({code:1})
  .then(result1=>{

    Products.find({type:"GROUND CHAKKAR"}).sort({code:1})
    .then(result2=>{
      
      Products.find({type:"FLOWER POTS"}).sort({code:1})
        .then(result3=>{

         Products.find({type:"BIJILI CRACKERS"}).sort({code:1})
          .then(result4=>{

           Products.find({type:"LITTLE CRACKERS"}).sort({code:1})
            .then(result5=>{

              Products.find({type:"LIGHTING SERIES"}).sort({code:1})
               .then(result6=>{

                Products.find({type:"BOMBS"}).sort({code:1})
                 .then(result7=>{

                  Products.find({type:"ROCKETS"}).sort({code:1})
                   .then(result8=>{

                    Products.find({type:"TWINKLING STAR"}).sort({code:1})
                     .then(result9=>{

                        Products.find({type:"TIN FOUNTAIN"}).sort({code:1})
                         .then(result10=>{

                          Products.find({type:"NEW NOVELTIES"}).sort({code:1})
                            .then(result11=>{

                              Products.find({type:"SHOWER CRACKERS"}).sort({code:1})
                                .then(result12=>{

                                  Products.find({type:"HANDLE CRACKERS"}).sort({code:1})
                                  .then(result13=>{

                                    Products.find({type:"V SERIES"}).sort({code:1})
                                    .then(result14=>{

                                      Products.find({type:"SPARKLERS"}).sort({code:1})
                                      .then(result15=>{

                                        Products.find({type:"CHOTA FANCY"}).sort({code:1})
                                          .then(result16=>{

                                            Products.find({type:"ARIAL FANCY"}).sort({code:1})
                                              .then(result17=>{

                                                Products.find({type:"3 FANCY"}).sort({code:1})
                                                  .then(result18=>{

                                                    Products.find({type:"3½ FANCY"}).sort({code:1})
                                                      .then(result19=>{

                                                        Products.find({type:"4 FANCY"}).sort({code:1})
                                                          .then(result20=>{

                                                            Products.find({type:"REPEATING SHOTS"}).sort({code:1})
                                                              .then(result21=>{

                                                                  Products.find({type:"NET RATE"}).sort({code:1})
                                                                    .then(result22=>{

                                                                      Products.find({type:"GIFT BOX"}).sort({code:1})
                                                                        .then(result23=>{

                                                                          Products.find({type:"Select the Category"}).sort({code:1})
                                                                            .then(result24=>{

                                                                              res.render('shop1', 
                                                                { 
                                                                title: 'Shop | Arunjunai', 
                                                                sc:result1,
                                                                scLength:result1.length, 
                                                                gc:result2,
                                                                gcLength:result2.length,
                                                                fp:result3,
                                                                fpLength:result3.length,
                                                                bc:result4,
                                                                bcLength:result4.length,
                                                                lc:result5,
                                                                lcLength:result5.length ,
                                                                ls:result6,
                                                                lsLength:result6.length,
                                                                bo:result7,
                                                                boLength:result7.length,
                                                                ro:result8,
                                                                roLength:result8.length,
                                                                ts:result9,
                                                                tsLength:result9.length,
                                                                tf:result10,
                                                                tfLength:result10.length,
                                                                nn:result11,
                                                                nnLength:result11.length,
                                                                shc:result12,
                                                                shcLength:result12.length,
                                                                hc:result13,
                                                                hcLength:result13.length,
                                                                vs:result14,
                                                                vsLength:result14.length,
                                                                s:result15,
                                                                sLength:result15.length,
                                                                chf:result16,
                                                                chfLength:result16.length,
                                                                af:result17,
                                                                afLength:result17.length,
                                                                f3:result18,
                                                                f3Length:result18.length,
                                                                f35:result19,
                                                                f35Length:result19.length,
                                                                f4:result20,
                                                                f4Length:result20.length,
                                                                rs:result21,
                                                                rsLength:result21.length,
                                                                nr:result22,
                                                                nrLength:result22.length,
                                                                gb:result23,
                                                                gbLength:result23.length,
                                                                se:result24,
                                                                seLength:result24.length,
                                                                
                                                              } )
                                          
                                                                            })
                                      
                                                                        })
                                  
                                                                    })
                            
                                                              })
                        
                                                          })
                    
                                                      })
                
                                                  })
            
                                              })
        
                                            })
                                        
    
                                        })
  
                                      })
 
                                    })
                                  
                                  })
                              
                              })
                
                         })
                     })
                   })
                 })

               })

            })
          })

        })
      
    })

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
      { name: "Myself", address: "thamarayan@gmail.com" },
      { name: "Client", address: clientEmail },
      // {name: "Prem", address:"premanandhshy89@gmail.com"}
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

  cloudinary.uploader.upload(req.file.path, function(err, result){

    Products.updateOne(
      {_id:id},
      {$set: {
        imagePath : result.url,
      }}, function(err,ress){
        if(err){
          console.log(err);
          return res.render('prem', {products:[], title:'Control | Arunjunai Traders'});
        }
        res.redirect('/productsControl');
      })



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

router.post('/newProduct',  function(req,res,next){

  console.log(req.body)
  var product = new Products({
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
