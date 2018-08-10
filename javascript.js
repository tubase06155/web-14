//const // khai bao hang so 
//let // khai bao bien
//var // khai bao bien
// khai bao function

// function functionName(age){
//     console.log("age : " + age);
// }// khai bao duoi goi tren cung duoc 
// const functionName = function(age){
//     console.log(age);
// }
// // functionName(5);
// // const functionName = (age) => {
// //     console.log(age);
// // }
//  a = 6;
// function print(){
//      b = 10;
//     console.log(a);
//     console.log(b);
// }
// print();
// console.log(global.a);
// // console.log(b);
// function count(num){
//     for( let i = num; i >= 0; i--){
//       setTimeout(function(){
//         console.log(i);
//       },1000*(num - i));
//     }
// }
// function print(num,time){
//     setTimeout(function(){
//         console.log(i);
//       },1000*(num - i));
// }
// count(5);

function printA(callback){
    setTimeout(function(){
        console.log("A");
        callback();
    },1000)
}
function printB(){
    console.log("B");
}
printA(printB);
