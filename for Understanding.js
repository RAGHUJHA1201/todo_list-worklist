const express = require("express")
const bodyParser=require("body-parser")
const app=express();

app.set('view engine', 'ejs');
//app.use(bodyParser,)

app.get("/",function(req,res){  
 const d = new Date();
 var day = d.getDay();
 var din=''
 switch(day){
     case 0:
     din='Sunday';
     break;
     case 1:
     din='Monday';
     break;
     case 2:
     din='Tuesday'; 
     break;

     case 3:
     din='Wednesday'
     break;
     case 4:
     din='Thursday';
     break;
     case 5:
     din='Friday';
     break;
     case 6:
     din='Saturday';
     break;
     default:
     din=="Day is " + day;

    }
    res.render('lists', {CurrentDay : din});
    
    
// if(day===6|| day===0)
//    {
//     res.send("<h1>hurrAYYYYYYYYYYYYYY its weekend, grab some beerrrrrrrrrr</h1>")
//    }
// else{
//     res.write("<h1> gottaaaaa lotttttttttttttt to dooooooooooooo, its weeeeeeeeeek day </h1>")
// }
    
 })


// app.post("/",function(req, res){

// })



app.listen(3000,function(){
    console.log("server on fire")
})
