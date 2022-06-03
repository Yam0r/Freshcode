expr = prompt("Введите номер задания: ");
switch (expr) {
    case "1":
        function Ex_1() {
            let arr = [12, -4, 4, 5, -5];
            arr = arr.filter(function (x) {
                return x > -1
            });
            console.log(arr);
        }
        Ex_1();
        break;
    case "2":
        function Ex_2() {
            var arr = [210, 300, 100, -100, 200, 5],
                sum = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > 100) {
                    sum += arr[i];
                }
            }
            console.log(sum);
        }
        Ex_2();
        break;
    case "3":
        function Ex_3() {
            let arr = [15, 10, 24, 13];
            arr = arr.map((el) => el * 0.3);
            console.log(arr);
        }
        Ex_3();
        break;
    case "4":
        function Ex_4() {
            let arr = [15, 100, 24, 13];
            if (arr.includes(100)) {
                arr = arr.map((el) => el * 0.3);

            }
            console.log(arr);
        }
        Ex_4();
        break;
    case "5":
        function Ex_5() {
            let s = 'ara'
            console.log(s === s.split``.reverse().join`` ? `Палиндром` : `Не палиндром`);
        }
        Ex_5();
        break;
    case "6":
        function Ex_6() {
            let join = [], str1 = 'alpha', str2 = 'beta';
            join = str1 + str2;
            console.log(join);
        }
        Ex_6();
        break;
    case "7":
        function Ex_7() {
            let string = 'alpha, beta';
            for (let i = 0; i < string.length; i++) {
                console.log(string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
            }
        }
        Ex_7();
        break;
    case "8":
        function Ex_8() {
            let arr = [15, 16, 9, 1], lowest = 0;
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < arr[lowest])
                    lowest = i;
            }
            console.log(lowest);
        }
        Ex_8();
        break;
    default:
        console.log("Такого пункта как " + expr + " нет.");

}