let x = [ 1,2,3,4]
let y = [5,6,7,8]
//z= x.concat(y)
//console.log(z);
z = [...x,...y]
//console.log(z);
let a = [1,2,[3,4],[1,[42,[4],4]]]
//let b=a.flat(0l)
//console.log(b);
//console.log(Array.isArray(x));
//console.log(Array.from(name: "anuj"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3,x).flat(Infinity));