const fs = require('fs');


const objData = {
    a : 10,
    b : 15,
    c : 25, 
    d : 22
}
let fileData = JSON.stringify(objData);
console.log('Start write file  ' + JSON.stringify(objData));
fs.writeFile('./test.txt',JSON.stringify(objData),(err)=>{
    if (err) console.log(err)
    else console.log('write file successfully');
}); // chay bat dong bo 
//fs.writeFileSync(); 
// let fileData = fs.readFileSync('./test.txt');
// console.log("File data: " +fileData);
// console.log('End write file ');
fs.readFile('./test.txt',(err,fileData)=>{
    if (err) console.log(err);
    else  console.log("File data: " +JSON.parse(fileData).a);
});

console.log('End write file ');