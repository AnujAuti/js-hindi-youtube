const Obj= {name : "anuj",age: 18, location: "India " , "Full name " : "anuj auti "}
//console.log(Obj.name, Obj.age)
//console.log(Obj["Full name "]);
//Obj.greeting = function(){
//console.log("hi");
//console.log(Obj.greeting());
//Obj.g2 = function(){
//    console.log(`hello , ${this.name} and my age is ${this.age}` );}
//console.log(Obj.g2());
Obj.name ="hello"
Object.freeze(Obj)
Obj.location ="amb"
console.log(Obj);