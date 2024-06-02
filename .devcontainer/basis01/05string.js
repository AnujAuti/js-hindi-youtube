const name = "anuj "
const num = 18
// console.log(name + num + " hello ");
// console.log(`hello my name is ${name }and my age is ${num}`);
// slicing of strings 
const x = new String('Walking-dead')
//console.table([x[3],x.__proto__, x.length,x.toUpperCase(),x.charAt(2),x.indexOf("k")]);
//console.log(x.toLowerCase());
const y=x.substring(0,7)
const z =x.slice(-1,7)
console.log(z);
//console.log(y); --> walking
//console.log(x.replace("dead", "life")); --> walking-life
//console.log(x.includes("dead"));-->returns a boolean value
//console.log(x.includes("life")); -->returns a boolean value
// console.log(x.split('-')); --> converts the str into array 
console.log(x.split('-'))
console.log(x.indexOf("-"));