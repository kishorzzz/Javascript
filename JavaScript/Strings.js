// Stronger way of holding Strings Representation 
let a= new String("kishor");
console.log(a.length);
console.log(a.substring(2,5)); // Substring cannot hold negative values 
console.log(a.slice(0,-2)); // SLice can hold Negative values 
console.log(a.splice(2,0));// We cannot use splice in a String 


console.log(a);
console.log(typeof(a)); // Type is Object

let b="Shaktiman";
console.log(b);
console.log(typeof(b)); //Type is String 

// Maths and Number 

let c=10000000000000000000000000000n;
console.log(c);
console.log(typeof(c));

let d=12783234;
const e=d.toString();
console.log(d.toString());
console.log(typeof(d));
console.log(d.toLocaleString('en-IN'));

let f=[4,6,9,2]
console.log(Math.min(...f));

const num=121.231;
console.log(Number(num.toPrecision(2))); //prints 120
