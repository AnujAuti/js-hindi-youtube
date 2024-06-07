/* code ={
    username : 'anuj '
    msge: function(){
        console.log(`${this.username} welcome to site`);
        console.log(this);
    }
}  */
    
/* user.msge()

const user = {
    username: "anuj",
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
      
    }
}
user.welcomeMessage() */
const chai = function(){
        let username = "hitesh"
        console.log(username)
            console.log(this);
}
//chai()
const code = () =>{
    let user1 = ' anuj'
    console.log(this);
}
//code()

const addTwo =(num1,num2) => (num1+ num2)    
console.log(addTwo(3,4));

