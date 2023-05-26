const express = require("express")
const bodyParser=require("body-parser")
const Date= require(__dirname+"/module.js")
const app=express();
let Items =[]
let works=[]
app.set('view engine', 'ejs');
                                                                                            //app.use(bodyParser,)
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/",function(req,res){  
                                                                                           //  const d = new Date();
//  var day = d.getDay();

                                                                                            // res.render('lists', {CurrentDay :}); })

    //   let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //   let  today  = new Date();
    //                                                                                             //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //                                                                                         //let date =today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    //  let date = (today.toLocaleDateString("hi-IN", options)); 
     var date =Date.getDate();
     res.render('lists', {listTitle :"TO DO LIST", CurrentDay :date, newItems:Items})
 })

app.post("/", function(req, res){
                                                                                                 // console.log(req.body)
     let Item =req.body.Item;
                                                                
             if(req.body.listtype==="Work") { 
                 works.push(Item)                                                                                    // res.render('lists',{newItems:Items} ) this will throw an error : newItems is not defined, as while render ing through the file in in app.get it will come across the Newitem
                 res.redirect('/work')}
                
             else{
                Items.push(Item);   
                 res.redirect('/')}
}) 

app.get("/work",function(req,res){  
                                                                                        //  const d = new Date();
                                                                                       //  var day = d.getDay();

                                                                                     // res.render('lists', {CurrentDay :}); })
 
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// let  today  = new Date();
//                                                                                                      //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
//                                                                                          //let date =today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
// let date = (today.toLocaleDateString("hi-IN", options)); 
var Day= Date.getDay();
res.render('lists', {listTitle :"Work", CurrentDay :Day, newItems: works})
})


// app.post("/work", function(req, res){
//                                                  // let work =req.body.Item;    it can be used qki if stament tab work defined hi nhi rahega and jab redirect hoga form se to post par ayega hi nhi
//        res.redirect('/work')

// })

app.listen(3000,function(){
    console.log("server on fire")
})