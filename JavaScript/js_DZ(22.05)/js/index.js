results()
function results(){
    const arr = [2, 12, 14, 3, 2, 6, 21];
    let a;
    a = prompt("Введите номер задания(1-5): ")
    if (a == 1) {
        Ex_1()
    } else if (a == 2) {
        Ex_2()
    } else if (a == 3) {
        Ex_3()
    } else if (a == 4) {
        Ex_4()
    } else {
        alert("Такого задания нет: ");
    }
    function Ex_1() {
        let a, i;
        a = prompt("Число повторений: ");
        for (let i = 0; i < a; i++) {
            console.log("*");
        }
    }
    function Ex_2() {
        let lim1, lim2, num;
        lim1 = prompt("Первое число: ");
        lim2 = prompt("Второе число: ");
        num = prompt("кратное число: ");
        for (; lim1 <= lim2; lim1++) {
            if (lim1 % num === 0) {
                console.log(lim1);
            }
        }
    }
    function Ex_3() {
            sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                sum += arr[i];

            }
        }
        console.log(sum);
    }
    function Ex_4() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 10) {
                arr[i] = 0;

            }
        }
        console.log(arr);
    }
}