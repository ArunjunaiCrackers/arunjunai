
var Product = require('../modals/products');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arunjunaicrackers:cy7Lknn3UZJFzWTA@cluster0.sgkjuh1.mongodb.net/?retryWrites=true&w=majority');

var products =  [
      
    new Product({
        imagePath:"/images/productPhotos/lakshmiGold.jpg",
        name:"4 Gold Deluxe Lakshmi",
        content:"1PKT",
        type:"SOUND CRACKERS",
        actualPrice:132,
        discountPrice: 33
    }),

    new Product({
        imagePath:"/images/productPhotos/lakshmi.jpg",
        name: "4'' Lakshmi",
        content:"1PKT",
        type:"SOUND CRACKERS",
        actualPrice:79,
        discountPrice: 19.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/lakshmi.jpg",
        name:"3 1/2'' Lakshmi",
        content:"1PKT",
        type:"SOUND CRACKERS",
        actualPrice:53,
        discountPrice:13.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/kuruvi.jpg",
        name:"2 3/4'' Kuruvi",
        content:"1PKT",
        type:"SOUND CRACKERS",
        actualPrice:37,
        discountPrice:9.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/gcBig.jpg",
        name:"Ground Chakkar Small",
        content:"1BOX",
        type: "GROUND CRACKERS",
        actualPrice:147,
        discountPrice:36.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/gcSpecial.jpg",
        name:"Ground Chakkar Special",
        content:"1BOX",
        type:"GROUND CRACKERS",
        actualPrice:342,
        discountPrice:85.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/gcDeluxe.jpg",
        name:"Ground Chakkar Deluxe",
        content:"1BOX",
        type:"GROUND CRACKERS",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/gcBig.jpg",
        name:"Chocolate Chakkar",
        content:"1BOX",
        type:"GROUND CRACKERS",
        actualPrice:1052,
        discountPrice:263,
    }),

    new Product({
        imagePath:"/images/productPhotos/fpSmall.jpg",
        name:"Flower Pots Small",	
        content:"1BOX",
        type:"FLOWER POTS",
        actualPrice:210,
        discountPrice:52.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/fpSmall.jpg",
        name:"Flower Pots Big",	
        content:"1BOX",	
        type:"FLOWER POTS", 
        actualPrice:315,
        discountPrice:78.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/fpAshoka.jpg",
        name:"Flower Pots Asoka",	
        content:"1BOX"	,
        type:"FLOWER POTS" ,
        actualPrice:547,
        discountPrice:136.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/fpColorKoti.jpg",
        name:"Colour Koti Giant",	
        content:"1BOX",	
        type:"FLOWER POTS", 
        actualPrice:770,
        discountPrice:192.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/colorKotiGiant.jpg",
        name:"Colour Koti Giant",	
        content:"1BOX",	
        type:"FLOWER POTS",
        actualPrice:2104,
        discountPrice:526,
    }),

    new Product({
        imagePath:"/images/productPhotos/bijili.jpg",
        name:"Red Bijili (50 Pcs)",	
        content:"1PKT",	
        type:"BIJILI CRACKERS",
        actualPrice:58,
        discountPrice:14.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/bijili.jpg",
        name:"Red Bijili (100 Pcs)",	
        content:"1PKT",	
        type:"BIJILI CRACKERS",
        actualPrice:116,
        discountPrice:29,
    }),

    new Product({
        imagePath:"/images/productPhotos/strippedBijili.jpg",
        name:"Stripped Bijili (100 Pcs)",	
        content:"1PKT",	
        type:"BIJILI CRACKERS",
        actualPrice:126,
        discountPrice:31.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Twenty Eight Crackers",	
        content:"1BOX",
        type:"LITTLE CRACKERS", 
        actualPrice:53,
        discountPrice:13.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Fify Six Crackers",	
        content: "1BOX",
        type:"LITTLE CRACKERS", 
        actualPrice:95,
        discountPrice:23.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Fifty Six Gaint",	
        content:"1BOX",
        type:"LITTLE CRACKERS", 
        actualPrice:184,
        discountPrice:46,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"1 Lights",	
        content:"1BOX",
        type:"LIGHTING SERIES",
        actualPrice:997,
        discountPrice:249.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"2 Lights",	
        content:"1BOX",
        type:"LIGHTING SERIES",
        actualPrice:1995,
        discountPrice:498.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"5 Lights",	
        content:"1BOX",
        type:"LIGHTING SERIES",
        actualPrice:5250,
        discountPrice:1312.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"10 Lights",	
        content:"1BOX",
        type:"LIGHTING SERIES",
        actualPrice:10500,	
        discountPrice:2625,
    }),

    new Product({
        imagePath:"/images/productPhotos/bulletBomb.jpg",
        name:"Bullet Bomb",	
        content:"1BOX",
        type:"BOMBS", 
        actualPrice:132,
        discountPrice:33,
    }),

    new Product({
        imagePath:"/images/productPhotos/kingOfKing.jpg",
        name:"King Of King Bomb",	
        content:"1BOX",
        type:"BOMBS", 
        actualPrice:316,
        discountPrice:79,
    }),

    new Product({
        imagePath:"/images/productPhotos/classicBomb.jpg",
        name:"Classic Bomb",	
        content:"1BOX",
        type:"BOMBS",
        actualPrice:605,
        discountPrice:151.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/jugmug5000.jpg",
        name:"Jug Mug 5000",	
        content:"1BOX",
        type:"BOMBS",
        actualPrice:368,
        discountPrice:92,
    }),

    new Product({
        imagePath:"/images/productPhotos/titan.jpg",
        name:"Titan Auto Bomb",	
        content:"1BOX",
        type:"BOMBS",
        actualPrice:842,
        discountPrice:210.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/challengerRocket.jpg",
        name:"Challenger Rockets",	
        content:"1BOX",
        type:"ROCKETS",
        actualPrice:684,
        discountPrice:171,
    }),

    new Product({
        imagePath:"/images/productPhotos/2soundRocket.jpg",
        name:"Two Sound Rockets",	
        content:"1BOX",	
        type:"ROCKETS",
        actualPrice:736,
        discountPrice:184,
    }),

    new Product({
        imagePath:"/images/productPhotos/whistingRocket.jpg",
        name:"Whistilling Rockets",	
        content:"1BOX",	
        type:"ROCKETS",
        actualPrice:1052,
        discountPrice:263,
    }),

    new Product({
        imagePath:"/images/productPhotos/colourRocket.jpg",
        name:"Colour Rockets",	
        content:"1BOX",
        type:"ROCKETS",
        actualPrice:421,
        discountPrice:105.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/twinklingStar.jpg",
        name:"1 1/2'' Twinkling Star",	
        content: "1BOX",
        type:"TWINKLING STAR",
        actualPrice:116,
        discountPrice:29,
    }),

    new Product({
        imagePath:"/images/productPhotos/twinklingStarDeluxe.jpg",
        name:"4'' Twinkling Star",	
        content:"1 BOX",
        type:"TWINKLING STAR",
        actualPrice:289,
        discountPrice:72.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/chitput.jpg",
        name:"Chit Put",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:147,
        discountPrice:36.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/butterfly.jpg",
        name:"Butterfly",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:358,
        discountPrice:89.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/photoFlash.jpg",
        name:"Photo Flash",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:395,
        discountPrice:98.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/siren.jpg",
        name:"Siren",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:736,
        discountPrice:184,        
    }),

    new Product({
        imagePath:"/images/productPhotos/glayPotShower.jpg",
        name:"Glay Pot Shower",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:473,
        discountPrice:118.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/7shot.jpg",
        name:"7 Shot Color",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:526,
        discountPrice:131.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/paperBomb.jpg",
        name:"Hulk Paper Bomb (1/4)",
        content:"1BOX",	
        type:"NEW NOVELTIES",
        actualPrice:289,
        discountPrice:72.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/paperBomb.jpg",
        name:"Hulk Paper Bomb (1/2)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/paperBomb.jpg",
        name:"Hulk Paper Bomb (1 Kg)",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1157,
        discountPrice:289.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/magicShow.jpg",
        name:"Magic Show",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1052,
        discountPrice:263,
    }),

    new Product({
        imagePath:"/images/productPhotos/colourSpinner.jpg",
        name:"Colour Spinner(vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:789,
        discountPrice:197.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/peacock.jpg",
        name:"Peacock",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:789,
        discountPrice:197.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/helicopter.jpg",
        name:"Helicopter",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:526,
        discountPrice:131.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/colorSmoke.jpg",
        name:"Colour Smoke",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1052,
        discountPrice:263,
    }),

    new Product({
        imagePath:"/images/productPhotos/triColour.jpg",
        name:"Tri Colour",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1315,
        discountPrice:328.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/oddbodsMiniFountain.jpg",
        name:"Oddbods Mini Fountain",		
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1052,
        discountPrice:263,
    }),

    new Product({
        imagePath:"/images/productPhotos/chotaMiniFountain.jpg",
        name:"Chotta Mini Fountain"	,
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:631,
        discountPrice:157.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/toyDhamaka.jpg",
        name:"Toy Dhamaka",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:579,
        discountPrice:144*.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Colour Crush Multi Colour Crackling Candle",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:658,
        discountPrice:164.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/dragonBoat.jpg",
        name:"Dragon Boat Fountain",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:526,
        discountPrice:131.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/tapTap.jpg",
        name:"Tap Tap(vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/colourCone.jpg",
        name:"Colour Cone (vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1578,
        discountPrice:394.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/superStick.jpg",
        name:"Super Stick (vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1578,
        discountPrice:394.5,
    }),
    
    new Product({
        imagePath:"/images/productPhotos/lala.jpg",
        name:"La La (vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:842,
        discountPrice:210.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/tinyGun.jpg",
        name:"Tiny Gun (vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1315,
        discountPrice:328.75,
    }),



    new Product({
        imagePath:"/images/productPhotos/fest-o.jpg",
        name:"Fest - O (vanitha)",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:631,
        discountPrice:157.75,
    }),



    new Product({
        imagePath:"/images/productPhotos/ropeColor.jpg",
        name:"Rope Color (vanitha)",
        content:"1 BOX",
        type:"NEW NOVELTIES",
        actualPrice:789,
        discountPrice:197.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/goldDuck.jpg",
        name:"Golden Duck (vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:2104,
        discountPrice:526,
    }),



    new Product({
        imagePath:"/images/productPhotos/lotto.jpg",
        name:"Lotto (vanitha)",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1052,
        discountPrice:263,
    }),



    new Product({
        imagePath:"/images/productPhotos/patrolRedGreen.jpg",
        name:"Patrol Red And Green (vanitha)",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:789,
        discountPrice:197.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/drone.jpg",
        name:"Drone",
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:1052,
        discountPrice:263,
    }),



    new Product({
        imagePath:"/images/productPhotos/selfieStick.jpg",
        name:"Selfie Stick",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:789,
        discountPrice:197.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/tinyGun.jpg",
        name:"Top Gun",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:579,
        discountPrice:144.75,
    }),



    new Product({
        imagePath:"/images/productPhotos/dhaamDhoom.jpg",
        name:"Dhaam Dhoom",	
        content:"1BOX",
        type:"NEW NOVELTIES",
        actualPrice:789,
        discountPrice:197.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/fighterZone.jpg",
        name:"Fighter Zone Red",	
        content:"1BOX",
        type:"TIN FOUNTAIN",
        actualPrice:658,
        discountPrice:164.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/sparkRain.jpg",
        name:"Spark Rain",	
        content:"1BOX",
        type:"TIN FOUNTAIN",
        actualPrice:658,
        discountPrice:164.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/popCorn.jpg",
        name:"Pop Corn",	
        content:"1BOX",
        type:"TIN FOUNTAIN",
        actualPrice:658,
        discountPrice:164.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/chotaBheem.jpg",
        name:"Chota Bheem",	
        content:"1BOX",
        type:"TIN FOUNTAIN",
        actualPrice:526,
        discountPrice:131.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/wonderWorld.jpg",
        name:"Wonder World",	
        content:"1BOX",
        type:"TIN FOUNTAIN",
        actualPrice:789,
        discountPrice:197.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/barbieColourShower.jpg",
        name:"Barbie Colour Shower",	
        content:"1BOX",
        type:"TIN FOUNTAIN",
        actualPrice:1052,
        discountPrice:263,
    }),



    new Product({
        imagePath:"/images/productPhotos/15cmElectricSparklers.jpg",
        name:"7 Cm Electric Sparklers",	
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:47,
        discountPrice:11.75,
    }),



    new Product({
        imagePath:"/images/productPhotos/7cmColourSparklers.jpg",
        name:"7 Cm Colour Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:58,
        discountPrice:14.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/15cmElectricSparklers.jpg",
        name:"10 Cm Elecric Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:89,
        discountPrice:22.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/7cmColourSparklers.jpg",
        name:"10 Cm Colour Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:100,
        discountPrice:25,
    }),



    new Product({
        imagePath:"/images/productPhotos/7cmElectricSparklers.jpg",
        name:"12 Cm Colour Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:153,
        discountPrice:38.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/7cmColourSparklers.jpg",
        name:"12 Cm Electric Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:142,
        discountPrice:35.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/15cmElectricSparklers.jpg",
        name:"15 Cm Electric Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:189,
        discountPrice:47.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/15cmGreenSparklers.jpg",
        name:"15 Cm Green Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:224,
        discountPrice:42.56,
    }),

    new Product({
        imagePath:"/images/productPhotos/15cmSparklersRed.jpg",
        name:"15 Cm Red Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:258,
        discountPrice:56,
    }),

    new Product({
        imagePath:"/images/productPhotos/30cmSparklers.jpg",
        name:"30 Cm Electric Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:189,
        discountPrice:47.25,
    }),

    new Product({
        imagePath:"/images/productPhotos/30cmColorSparklers.jpg",
        name:"30 Cm Colour Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:210,
        discountPrice:52.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/30cmColorSparklers.jpg",
        name:"30 Cm Green Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:224,
        discountPrice:56,
    }),

    new Product({
        imagePath:"/images/productPhotos/30cmColorSparklers.jpg",
        name:"30 Cm Red Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:258,
        discountPrice:64.5,
    }),



    new Product({
        imagePath:"/images/productPhotos/55cmSparklers.jpg",
        name:"50 Cm Sparklers",
        content:"1BOX",
        type:"SPARKLERS",
        actualPrice:789,
        discountPrice:197.25,
    }),



    new Product({
        imagePath:"/images/productPhotos/sunFlashRed.jpg",
        name:"Sun Flash Red",
        content:"1BOX",
        type:"CHOTTA FANCY",
        actualPrice:263,
        discountPrice:65.75,
    }),



    new Product({
        imagePath:"/images/productPhotos/jollyEnjoyGreen.jpg",
        name:"Jolly Enjoy Green",
        content:"1BOX",
        type:"CHOTTA FANCY",
        actualPrice:263,
        discountPrice:65.75,
    }),


    new Product({
        imagePath:"/images/productPhotos/goldRangeSilver.jpg",
        name:"Gold Range Silver",	
        content:"1BOX",
        type:"CHOTTA FANCY",
        actualPrice:263,
        discountPrice:65.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/minnalStarSilver.jpg",
        name:"Minnal Star Silver",
        content:"1BOX",
        type:"CHOTTA FANCY",
        actualPrice:263,
        discountPrice:65.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/flashKing.jpg",
        name:"Flash India Red And Green",
        content:"1BOX",
        type:"CHOTTA FANCY",
        actualPrice:263,
        discountPrice:65.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"White Queen Silver",
        content:"1BOX",
        type:"AERIAL FANCY",
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Diamond Red",
        content:"1BOX",
        type:"AERIAL FANCY", 
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Gold King Gold",	
        content:"1BOX",
        type:"AERIAL FANCY",
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Spade Green",	
        content:"1BOX",
        type:"AERIAL FANCY", 
        actualPrice:999,
        discountPrice:249.75
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Love Bird Red And Green",
        content:"1BOX",
        type:"AERIAL FANCY", 
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Rambo Rack",	
        content:"1BOX",
        type:"AERIAL FANCY",
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Crazy Crazy",
        content:"1BOX",
        type:"AERIAL FANCY",
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Rosy Rosy",	
        content:"1BOX",
        type:"AERIAL FANCY",
        actualPrice:999,
        discountPrice:249.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Gold Fish Gold",
        content:"1BOX",
        type:"2'' FANCY",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/redDiamond.jpg",
        name:"Red Diamond Red",
        content:"1BOX",
        type:"2'' FANCY",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/signal.jpg",
        name:"Signal",	
        content:"1BOX",
        type:"2'' FANCY",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/doubleStarRed.jpg",
        name:"Double Star Red",
        content:"1BOX",
        type:"2'' FANCY",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/silverSeason.jpg",
        name:"Silver Star Silver",
        content:"1BOX",
        type:"2'' FANCY",
        actualPrice:579,
        discountPrice:144.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/birds.jpg",
        name:"Birds",
        content:"1BOX",
        type:"2.75'' FANCY",
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/redRangerRed.jpg",
        name:"Red Ranger Red",
        content:"1BOX",
        type:"2.75'' FANCY",
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Double Heros Red",
        content:"1BOX",
        type:"2.75'' FANCY",
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/goldenQueenGold.jpg",
        name:"Golden Queen Gold",
        content:"1BOX",
        type:"2.75'' FANCY",
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/nightAngel.jpg",
        name:"Night Angleds Silver",
        content:"1BOX",
        type:"2.75'' FANCY",
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/birds.jpg",
        name:"Spider Magic Balm Tree",
        content:"1BOX",
        type:"2.75'' FANCY", 
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/dragulaAttack.jpg",
        name:"Dragula Attack Red",
        content:"1BOX",
        type:"3'' FANCY",
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/raise.jpg",
        name:"Raise",	
        content:"1BOX",
        type:"3'' FANCY", 
        actualPrice:868,
        discountPrice:217,
    }),

    new Product({
        imagePath:"/images/productPhotos/yellowShower.jpg",
        name:"Yellow Shower",
        content:"1BOX",
        type:"3'' FANCY",
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/nightAngel.jpg",
        name:"Night Angle White Blink",
        content:"1BOX",
        type:"3'' FANCY", 
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/ford.jpg",
        name:"Festival Shock Crackling",
        content:"1BOX",
        type:"3'' FANCY", 
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Digital Shower Mixed",
        content:"1BOX",
        type:"3'' FANCY", 
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Boom Rang",	
        content:"1BOX",
        type:"3'' FANCY",
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/bubbleBlaze.jpg",
        name:"Bubble Blaze Orange",
        content:"1BOX",
        type:"3'' FANCY",
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/kingQueenRed.jpg",
        name:"King Queen Red",	
        content:"1BOX",
        type:"3'' FANCY",
        actualPrice:1131,
        discountPrice:282.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/angelDream.jpg",
        name:"Angel Dream",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/heartBeat.jpg",
        name:"Heat Beat Red",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/greenCity.jpg",
        name:"Green City",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/queenShower.jpg",
        name:"Queen Shower",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/goldStar.jpg",
        name:"Gold Star",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Blue Pearl",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/coolRain.jpg",
        name:"Cool Rain",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/sunRise.jpg",
        name:"Sun Rise",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/bingoBoom.jpg",
        name:"Bingo Boom",	
        content:"1BOX",
        type:"3.5'' FANCY",
        actualPrice:1394,
        discountPrice:348.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Kaleido Scpoe",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/redCherry.jpg",
        name:"Red Cherry",	
        content:"1BOX",
        type:"4'' FANCY", 
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/mango.jpg",
        name:"Mango",
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/charlieChaplin.jpg",
        name:"Charlie Chaplin",
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Treasure Chest",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/silverSeason.jpg",
        name:"Silver Season",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Fanta",
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Tianma Square",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Virus",
        content: "1BOX",
        type:"4'' FANCY" ,
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Night Fever",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Leamon Ya",			
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Shangai Noon",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Golden Treasure",	
        content:"1BOX",
        type:"4'' FANCY",
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Red Cravity",	
        content:"1BOX",
        type:"4'' FANCY", 
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"Hot",
        content:"1BOX",
        type:"4'' FANCY", 
        actualPrice:1894,
        discountPrice:473.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/12shot.jpg",
        name:"12 Shot Crackling",	
        content:"1BOX",
        type:"REPEATING SHOTS",
        actualPrice:631,
        discountPrice:157.75,
    }),

    new Product({
        imagePath:"/images/productPhotos/30shot.jpg",
        name:"30 Shot Crackling",	
        content:"1BOX",
        type:"REPEATING SHOTS",
        actualPrice:1578,
        discountPrice:394.5,
    }),

    new Product({
        imagePath:"/images/productPhotos/60shots.jpg",
        name:"60 Shot Crackling",	
        content:"1BOX",
        type:"REPEATING SHOTS",
        actualPrice:3156,
        discountPrice:789,
    }),

    new Product({
        imagePath:"/images/productPhotos/120shots.jpg",
        name:"120 Shot Crackling",	
        content:"1BOX",
        type:"REPEATING SHOTS",
        actualPrice:6312,
        discountPrice:1578,
    }),

    new Product({
        imagePath:"/images/productPhotos/240shots.jpg",
        name:"240 Shot Crackling",	
        content:"1BOX",
        type:"REPEATING SHOTS",
        actualPrice:12624,
        discountPrice:3156,
    }),

    new Product({
        imagePath:"/images/productPhotos/default.png",
        name:"520 Shot Crackling",	
        content:"1BOX",
        type:"REPEATING SHOTS",
        actualPrice:27352,
        discountPrice:6838,
    }),

]

var done = 0;
for(var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        if(err){
            console.log(err);
        }
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}