
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

//import body-parser to handele post request in expreess for contact form
const bodyparser = require('body-parser'); 


// importing mongoose
const { log } = require('console');
const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

// connecting mongoose database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://......./contactDance');
    console.log("connected to local host");
}

//defining mongoose schema 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });


const contact = mongoose.model('Contact',contactSchema);


//for serving static files
app.use("/static",express.static("./static"))//For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC CONTENT
app.set('view engine','pug')//set the template engine as pug
app.set('views', path.join(__dirname,'views'))//set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('./home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('./contact.pug',params)
})
app.get('/about',(req,res)=>{
    const params = {}
    res.status(200).render('./about.pug',params)
})
app.get('/classInfo',(req,res)=>{
    const params = {}
    res.status(200).render('./classInfo.pug',params)
})
// app.get('/services',(req,res)=>{
//     const params = {}
//     res.status(200).render('./services.pug',params)
// })




app.post('/contact',(req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(() => {
          res.render("./msg.pug")
        //   res.send("This item has been saved to the database")
    }).catch((err) => {
        res.status(400).send("Your Query was not submitted :(" );
    }); 
    // res.status(200).render('./contact.pug')
})


// app.get('/contact',(req,res)=>{
//     const params = {}
//     res.status(200).render('./contact.pug',params)
// })
// app.get('/contact',(req,res)=>{
//     const params = {}
//     res.status(200).render('./contact.pug',params)
// })
// app.get('/contact',(req,res)=>{
//     const params = {}
//     res.status(200).render('./contact.pug',params)
// })

//start the server
app.listen(port,()=>{
    console.log(`the application is running successfully on port ${port}`);
});
