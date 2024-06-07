let a = 10 
const b = 20
var c = 30 
if(true ){
    let a =20
    const b = 50
    let c = 40
//console.log("inner :", a );     
}
//console.log(a);
//console.log(b);
//console.log(c);
function one(){
    const username = " anuj"
    function two(){
        const site =' google'
        //console.log(username);
    }
    //console.log(site);
    two()
}

one()

if(true){
    username = "warlord"
    if (username==="warlord"){
        const site =' google'
        console.log(site);
    console.log(username);
        }
}
// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
    }
addTwo(5)
