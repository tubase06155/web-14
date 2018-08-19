const express = require('express');
const path = require('path');
const url = require('url');
let app = express();

//localhost:6969
app.get('/',(req , res) =>{
    console.log(__dirname);
   // res.sendFile(__dirname + '/index.html');
  //   res.sendFile(path.resolve(__dirname,'../FE-CSS/style.css')); 
     res.sendFile(path.resolve(__dirname,'../FE-CSS/index.html'));
  
 
})

//http://localhost:6969/abcxyz
// http://localhost:6969/?name=abcxyz
// --> hello abcyz!
app.get('/nam',(req,res) =>{
    res.send('Hello nam');
})
app.get('/hoang',(req,res) =>{
    res.send('Hello hoang');
})
app.get('/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`)
})
app.get('/',(req,res)=>{
    var q=url.parse(req.url,true);
    res.send("Hello:"+ q.query.name);
})
app.use(express.static('../FE-CSS'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.listen(7000,(err) =>{
    if (err) console.log(err);
    else console.log('Server is listening at port 7000');
});