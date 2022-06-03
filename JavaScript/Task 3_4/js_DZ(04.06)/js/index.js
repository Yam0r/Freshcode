/*function Ex_1(){
let arr = [12, -4, 4, 5, -5];
arr = arr.filter(function(x){
    return x > -1 
});
console.log(arr);
}
Ex_1();

function Ex_2() {
var arr = [210,300,100, -100, 200, 5],
sum = 0;
for(var i = 0; i < arr.length; i++){
    if (arr[i] > 100) {
        sum += arr[i];
    }
}
console.log(sum);
}
Ex_2();

function Ex_3() {
    let arr = [15, 10, 24, 13];
    arr = arr.map((el)=>el*0.3);
    console.log(arr);
}
Ex_3();*/
function Ex_4() {
    let arr = [15, 100, 24, 13];
    if (arr.includes(100)) {
        arr = arr.map((el)=>el*0.3);
        
    }
    console.log(arr);
}
Ex_4();