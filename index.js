const express= require('express');
const app = express();
const cors = require ('cors');
const bodyParser = require('body-parser')
const mongoose = require ('mongoose');
const maleClothings = require('./model/maleClothing');
const maleShoes = require('./model/maleShoe');
const femaleDresses = require('./model/femaleDress');
const femaleShoes = require('./model/femaleShoe');




mongoose.connect("mongodb://127.0.0.1:27017/fasion", {useNewUrlParser: true})
.then(() => console.log("Db connection successful!"))
.catch( err => console.log(err));   

app.use(cors());
app.use(express.urlencoded({ extended : false}));
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    message = "hello and welcome to backend!";
    res.send(message);
})

    //------------------------------------------------------------------------
    // ****THIS COMPRISIS OF A GET AND POST REQUEST FOR MALE CLOTHING*********
    //------------------------------------------------------------------------

app.get("/maleclothing", (req, res, next) => {
    maleClothings.find({})
    .then((data) => {
        console.log(`Here is ,your data ${data}`);
        res.send(data)
    })
    .catch( err => console.log(`the error is ${err}`)
    );
        
    })

app.post('/maleclothing', (req, res) => {
    const data = req.body;
    const add = new maleClothings(data);
    console.log(data);
    add.save()
    .then( item => {
        res.json(item);
        console.log(item);
    })
    .catch( err => console.log(err))
})
     //------------------------------------------------------------------------
    // THIS COMPRISIS OF A GET AND POST REQUEST FOR MALE SHOES
    //------------------------------------------------------------------------

    app.get("/maleshoes", (req, res, next) => {
        maleShoes.find({})
        .then((data) => {
            console.log(`Here is ,your data ${data}`);
            res.send(data)
        })
        .catch( err => console.log(`the error is ${err}`)
        );
            
        })
    
    app.post('/maleshoes', (req, res) => {
        const data = req.body;
        const add = new maleShoes(data);
        console.log(data);
        add.save()
        .then( item => {
            res.json(item);
            console.log(item);
        })
        .catch( err => console.log(err))
    })

      //------------------------------------------------------------------------
     // THIS COMPRISIS OF A GET AND POST REQUEST FOR FEMALE DRESSES
    //------------------------------------------------------------------------

     app.get("/femaledresses", (req, res, next) => {
        femaleDresses.find({})
        .then((data) => {
            console.log(`Here is ,your data ${data}`);
            res.send(data)
        })
        .catch( err => console.log(`the error is ${err}`)
        );
            
        })
    
    app.post('/femaledresses', (req, res) => {
        const data = req.body;
        const add = new femaleDresses(data);
        console.log(data);
        add.save()
        .then( item => {
            res.json(item);
            console.log(item);
        })
        .catch( err => console.log(err))
    })

    //------------------------------------------------------------------------
     // THIS COMPRISIS OF A GET AND POST REQUEST FOR FEMALE SHOES
    //------------------------------------------------------------------------

     app.get("/femaleshoes", (req, res, next) => {
        femaleShoes.find({})
        .then((data) => {
            console.log(`Here is ,your data ${data}`);
            res.send(data)
        })
        .catch( err => console.log(`the error is ${err}`)
        );
            
        })
    
    app.post('/femaleshoes', (req, res) => {
        const data = req.body;
        const add = new femaleShoes(data);
        console.log(data);
        add.save()
        .then( item => {
            res.json(item);
            console.log(item);
        })
        .catch( err => console.log(err))
    })




const port = process.env.PORT || 5000;


app.listen( port, () => console.log(`listening on port ${port}`));