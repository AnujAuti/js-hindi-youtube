/* function repeat(){
    console.table(['hi',"hello","bye"]);
}
repeat()   */
 
/* function Sum(num1 , num2 ){
let result = num1+ num2 
return result

    console.log(num1 + num2 );
}
Sum(12,-true)
const result = Sum(12,2)
console.log(result);  */
function username(nam="unkowun "){
    return `${nam} has  loggin `
}
//console.log(username("rick "));
 
function Calculatorprice(...num){
    return num
}
//console.log(Calculatorprice(200,100));

obj= { user :" anuj" , age:18 }
function handleobject(anyobject){
    console.log(`the username is ${anyobject.user} and his age is ${anyobject.age}`);
}
handleobject(obj)
arr = [ 10,20,30,40]
function Newarray(anyarray){
    console.log(`the third val of the array is ${anyarray[2]}`);
}
//Newarray(arr)
Newarray([10,20,30,40])