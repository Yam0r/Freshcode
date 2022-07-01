function myFunction() {
    document.getElementById("selectedText").style.background = "blue";
    document.getElementById("selectedText1").style.background = "yellow";
    document.getElementById("selectedText2").style.background = "red";

    let day1 = document.getElementById('day_1');
    day1.innerHTML = "Monday";
    let day2 = document.getElementById('day_2');
    day2.innerHTML = "Tuesday";
    let day3 = document.getElementById('day_3');
    day3.innerHTML = "Wednesday";
    let day4 = document.getElementById('day_4');
    day4.innerHTML = "Thursday";
    let day5 = document.getElementById('day_5');
    day5.innerHTML = "Friday";
    let day6 = document.getElementById('day_6');
    day6.innerHTML = "Saturday";
    let day7 = document.getElementById('day_7');
    day7.innerHTML = "Sunday";

}
myFunction();