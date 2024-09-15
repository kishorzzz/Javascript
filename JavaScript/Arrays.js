// let arr1=[12,2313,2,412,432]
// console.log(arr1);
// console.log(typeof(arr1));
// let a='kishor';
// switch(a){
//     case 'kishor':
//         console.log(`You entered ${a}`);
//         break;
//     default:
//         console.log('You enterend something you fool');
// }
// let kishor=true;
// kishor?console.log("hello Kishor"):console.log('Hello Shravya');

// # Date and Math 


// let a=new Date(); // simply assigning to its value 
// console.log(a.toString()); // changes to string 
// console.log(typeof a) // object bcz eveerything in js is objects 
// console.log(a.getFullYear());
// console.log(a.getMonth());
// console.log(a.getDate());
// console.log(a.getDay());



// let a=Math.PI;
// console.log(a);
// let b=console.log(Math.round(a));
// let c =console.log(Math.random());
// let s=console.log(Math.round(9.6));
// let e=console.log(Math.floor(9.8));
// let f=console.log(Math.ceil(9.3));
// let a=Math.pow(3,2); 
// console.log(a);
// let c=Math.sin(90); // we can also apply trigonometry applicaions inside java script 
// console.log(c);
// console.log(Math.tan(33));



// let otp='';
// for(let i=1;i<=10;i++){
//     otp+=Math.ceil(Math.random()*10);
// }
// console.log(otp+" ");
// let otp = [];
// for (let i = 1; i <= 4; i++) {
//      otp .push( Math.floor(Math.random() * 10)); // Generates a random digit (0-9)
// }
// console.log(otp.toString())

// let a=['kishor','shravya','Charan'];
// a.push('Rakesh'); // used to add the elements in an array at the end 
// console.log(a);
// console.log(a.shift()); // it will delete and prints the values that is deleted  from the beginning or index strating at 0
// console.log(a.unshift()); //reverse of the push starts from the end 
// console.log(a);
// console.log(a.pop()) // reverse of the shift 
// let a=[1,2,3];
// console.log(a);
// console.log(typeof(a)); // object 
// let a=['kishor',['rajesh','Gaadidha'],'shravya','Charan']; // used to print the rrange of the values in a single statement  last index is not consideres in it 
// // console.log(a.slice(0,1)); // 1 is not considered it means end-1 items gets printed 
// console.log(a[1][0]);

// let b=['banana','apple'];
// b.splice(1,2,'carrot','Brinjal'); // 1 is the starting form and 2 is the number to delete how many things that are needed to be deleted 
// console.log(b);
// let a=[1,2,3,4,5,6];

// let b=function addnumbers(arr){
//     let y=0;
//     for(let v of arr){
//         y+=v;
//     }
//     return `the sum of the array is ${y}`;
// }
// // let c=b.slice();
// console.log(b(a));
// console.log(c);
// a.fill('Kishor',2,4);
// console.log(a.includes(1,2,4));
// console.log(a);
// let c=function sumofarray(a,d){
//     for(let b of a){
//        d+=b;
//     }
//     return d;
// }
// console.log(c(a));

// let a=()=>{
//     console.log("Hello World ");
// }
// a();
// let b=(x,y)=>{
//     console.log(x+y);
// };
// b(4,5);

// let d=(...kishor)=>{ // ...kishor is used for our need of teh length of the array 
//     let sum=0;
//     for(let v of kishor){
//         sum+=v;
//     }
//     return sum;
// };
// console.log(d(12,2,2,2,2,2,0));
// let a=['kishor',2,3,4,'Shravya'];
// let newarr=[];
// for(let namings  of a){
//     if(typeof(namings)==="number"){
//         newarr.push(namings)
//     }
// }
// console.log(newarr)
// let user={       //In JavaScript, arrow functions do not have their own this context. Instead, 
//      iam:'kishor',  // they inherit this from the surrounding lexical context, which is outside the user object in this case. 
//     frstname:'Guguloth', //This means that within the arrow function a, this does not refer to the user object, but rather to the global object 
//     college:'iare',
// };
// for(let i in user){
//     console.log(i);
// };
// //     registered:[],
//     a:function(coursename){
//         this.registered.push(coursename); 
//     },
//     coursecount:function(){
//         return this.registered.length;
// };
// let c=(coursename)=>{
//     user.a(coursename);
//     console.log(`You registered : ${user.registered.toString()}`);
// };
// c('Rajesh');
// c('Kishor');
// c('Shravya');
// user.a("Ramesh");
// console.log(user.registered);
// console.log(user.coursecount());
// user.course("React Js");clear
// console.log(user.registered)
// console.log(user.you(4,5));
// console.log(typeof(user));

// console.log(Object.keys(user)); // prints all the keys that used in user 

// console.log(Object.values(user)); // prints all the values 
// console.log(user.hasOwnProperty("frstname")); // checks whether the key exists or not in the object 


// let a=['kishor','Rishi',2,4];
// for(let elements in a){
//     console.log(elements);
// };
// a;

// let isEven=(ele)=>{
//     console.log(ele*ele);
// } ;
// let b=[2,4,6,8];
// let a=[...b].every(isEven);  // it checks the every number and then it will print 
// console.log(a);
// let a=(n)=>{
//     return n**2;
// };
// function cube(a,n){ //passing function as a parameter 
//     return a(n)*n;   //passsing function inside the function 
// };
// setTimeout(()=> console.log(cube(a,5)),3000); // it takes 300 millisecond it means 3 seconds to load in the concsole page 

// let a=[1,2,4,5,5,5,4.2] // another way of iteratinfg array 
// a.forEach((ele)=>{
//     console.log(ele);
// })
// let a=function(){
//     console.log("Hello World");
// };
//  let b=setInterval(()=>{
//     a();
// },2000)

// setTimeout(()=>{ // used to make a break until it reachees the end 
//     clearInterval(b); // used to point the function of the setinterval 
//     console.log("It is stopped");
// },10000); // it will stop at 10 sec 
// let a=[
//     {
//         frstname:"kishor",
//         lstname:'Guguloth',
//         x:function(){
//             console.log("I am Kishor")
//         }
//     },
//     {
//         myname:'Rishi',
//         mylastname:"Sokki",
//         y:function(){
//             console.log("I am Rishi");
//         }
//     }
// ];
// for(let i of a){
//     for(let b in i){
//         console.log(b);
//     }
// };
// let a=['rishior','kishor','Shravya'];
// let d=a.filter((ele)=>{ // it will pass indexes to the output 
//     return ele.includes("or");
// });
// console.log(d);
// let c=[1,2,3,4,5];
// c.forEach((ele)=>{
//     console.log(ele);
// });

// let a =25;
// let b=a.toString();
// console.log(typeof(a));
// console.log(typeof(b));
// let f=[1,2,3,4,5];
// let [a,b,c,...rest]=f; // to escape the arrays we have to pass this element 
// console.log(b)
// console.log(rest);
// let b=(x,y)=>{
//     return x+y;
// };
// let a=[4,5,6,7];
// console.log(b(...a)); // it will take only 2 inputs 
// let a=function(frstname,lstname){
//     this.frstname=frstname;
//     this.lstname=lstname;
// };
// let kishor=new a('GUguloth',"kishor");
// console.log(kishor);
//  let a=new Set();
//  a.add(1);
//  a.add(1);
//  a.delete(1);
//  console.log(a);
//  a.add(2);
//  console.log(a);
//  a.clear();
//  console.log(a);
//  console.log(a.has());


// let a=new Map(); // creation of  map to a new variable 
// a.set('name','kishor'); //setting the value name is the key and kishor is the value 
// a.set(true,'Raju');
// console.log(a);

// console.log("closure"); // this will make as the references (Global values also considered as the reference )
// function a(){
//     let c='kishor';
//     b();
//     function b(){
//         console.log(c); // it will make as the refernces and then gets retrieved the value 
//     };
// };
// a();
// let a=function func{
//     console.log("object");
// };
// // function funccc{
//     console.log("Hello World");
// };
// func();
// let a=function(){
//     console.log("KISHOR");
//     b();
// };
// let b=function(){
//     console.log('GUGULOTH');
// };
// a();

// let c=()=>{
//     console.log("I am Kishor");
// }
// // c();
// let a=30;    // memory management 1 // similarly global functions also gets deleted when the global execution is done  
// let b=40; // Global Varaiables (Global Scope)
// function sum(){ // memory management 2  it will be deleted when the inner fucntion is  executed 
//     let a=40; // Local variables the priority for inside the fucntion is for inside the variables => Local variables(Local Scope)
//     console.log(a);
// }
// sum();
// try{
//     let name='kishor';
//     console.log(name+lstname);
// }
// catch(error){
//     console.log(error.message);
// }
// finally{
//     console.log("code Executed after Error ");
// }
// let a=(value)=>{
//     throw new Error("Enter value greater than 18 only ");
// };
// a(15);

// console.log(a);
// const a=5;
// class Kishor{
//     User(){
//         console.log('My name is KIshor');
//     }
// }
// let a=new Kishor();
// console.log(a());
// class Rectangle{
//     constructor(height,width,zindex){ 
//         this.height=height;
//         this.width=width;
//         this.zindex=zindex;
//         this.value=0;
//     }
//     set nowsetscore(value){
//         this.value=value;
//     }
//     get score(){
//         return this.value;
//     }
// }
// class Cuboid extends Rectangle{ // the property is extended from the Rectangle this property is called Inheritance 
//     get area(){
//         return this.height*this.width;
//     }
// }
// let a=new Cuboid(2,4);
// console.log(a.area);

// a.nowsetscore=7; // we should use the setter correctly for the settting of the value 
// console.log(a.score); 
// let two=new Rectangle('',5,6)


// let one=new Rectangle(4,5); // output is in the form of Objects 
// console.log(one.areaof2); // it is telling like functions 
// console.log(one.areaof2());// it will print the function 

// class Linked{
//     constructor(hegiht,width){
//         this.hegiht=hegiht;
//         this.width=width;
//         this.greet=()=>{
//             console.log('Hello World');
//         }
//     }
// }
// // Object.prototype.kishor=fucntion(){

// // };
// // let one=new Linked();
// // one.greet();

// Object.prototype.kishor=function(){ // Creating the Prorotype throuhout the entire website 
//     console.log("Hello I am Kishor"); // Object has a internal Property of Including all the  protos inside the webpage 
// };
// kishor();
// console.log("kishor  ".trim().length);

// const nice=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let arr1=[1,2,3,4,5];
//         if(arr1.length>1){
//             resolve("Yes");
//         }
//         else{
//             reject("Not Found");
//         }
//      },3000);
// });
// const wait=()=>{
//     let a=
// }
// nice.then((element)=>{
//     console.log(element);
// }).catch((element)=>{
//     console.log(element);
// });

// const one=()=>{
//     return "I am One";
// };
// const two=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("I am Two")
//         }),2000
//     })
// };
// const three=()=>{
//     return "I am three";
// };
// const wait=async()=>{
//     let guest1=one();
//     console.log(guest1);
//     let guest2= await two();
//     console.log(guest2);
//     let guest3=three();
//     console.log(guest3);
// };
// wait();
// let a=[1,2,3,4];
// a.forEach((Element,index)=>{
//    console.log(Element+" "+index);
// })
// let a="   kishor guguloth   ";
// console.log(a.endsWith(' '));
// let a=12343265329845;
// let b=a.toLocaleString('en-IN');
// console.log(b);
// console.log(typeof(b));
// let a =new String();// key value Pair of representation in the order of 
// a[1]="kishor";
// a[2]="Rajesh";
// console.log(a);
// console.log(typeof(a));// type is Object 
// let a = new Array();
// a[0]="Rajesh";
// a[1]=1;
// a[2]="kishor";
// a[3]="charan";
// console.log(a);
// console.log(typeof(a));

let arr1=[1,2,3,4];
let arr2=[5,6,[7,8]];
// console.log(typeof(arr1.join(arr2))); // String 
// console.log(arr1.join(arr2));
let new_arr=[...arr1,...arr2]
let newbie=new_arr.flat(Infinity);
// console.log(typeof(arr1.concat(arr2))); //object
// console.log(arr1.concat(arr2));
console.log(new_arr);
console.log(newbie);


