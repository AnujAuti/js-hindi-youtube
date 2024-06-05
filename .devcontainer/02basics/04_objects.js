const y = new Object()
const x= {}
x.name="anuj"
x.age= "18"
console.log(x);
/* z = {name: "anuj", msge: "hi" ,username :{uname: "warlord" , password :"123"}}
console.log(z.username.password);  */

const A={ 1:"a",2:"b"}
const B ={ 3:"c", 4:"d"}
const z = {A , B}
const p =Object.assign({}, A,B)
//console.log(p);
const q = {...A,...B}
//console.log(z);
const course = {
    coursename: " coding "
    , fees :500 ,
    age : 20 
}
//console.log(course.coursename);
const {fees : k} = course
console.log(k);
/*
{name:"anuj" ,
 age:18 

}
[ 
    {}
    ,{}
]   */