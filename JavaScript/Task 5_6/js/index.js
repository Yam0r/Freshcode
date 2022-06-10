/*let array = [1,2,100,200,3];

const [a0, ...rest] = array;
console.log(a0);
console.log(rest);

const [arr0, arr1, ,, ...rest2] = array;
console.log(arr1);
console.log(rest2);

let b2 = [1,2,3,4,[10,20[100, 200, 300], 30, 40],5 , 6];
const[,,,,...rest3] = b;
console.log(rest3)*/


function f(objUser){
    let objUser = {
        name:'Yaroslav',
        surname:'Kolomoets',
        age:17,
        isMale:true,
        experience:20
    }; 
console.log(this.experience);
}
f(objUser);
