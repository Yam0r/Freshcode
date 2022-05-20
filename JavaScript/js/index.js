results()
function results(){
    let a;
    a = prompt("Введите номер задания(1-5): ")
    if(a == 1){
        result_1()
    }else if(a == 2){
        result_2()
    }else if(a == 3){
        result_3()
    }else if(a == 4){
        result_4()
    }else if(a == 5){
        result_5()
    } 
    else{
        alert("Такого задания нет: ");
    }
}
function result_1() {
    let a = 11,
        b = true,
        c = "java script",
        d = "100";
    console.log(a, b, c, d);
}

function result_2() {
    let greeting = "Hello, ",
        userName;
    userName = prompt("What is your name");
    alert(greeting + userName);
}

function result_3() {
    var min;
    min = prompt("Веведите количество минут");
    if (min >= 0 && min <= 15) {
        alert("В первую четверть.");
    }
    if (min >= 16 && min <= 30) {
        alert("Во вторую четверть.");
    }
    if (min >= 31 && min <= 45) {
        alert("В третью четверть.");
    }
    if (min >= 46 && min <= 60) {
        alert("В четвертую четверть.");
    }
}

function result_4() {
    for (let i = 10, b; i < 51; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
    console.log("End!");
}

function result_5() {
    let result = 1,
        a,
        b;
    for (let a = prompt("lim1: "), b = prompt("lim2: "); a <= b; a++) {
        result *= a;
    }
    console.log(result);
}

