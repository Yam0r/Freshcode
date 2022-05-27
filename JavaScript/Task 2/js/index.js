const array = [8, 2, 12, 5, 50, 60, 2, -1, 10, 11];
function arraySum() {
    var sum = 0, minussum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
arraySum(array);

function MinusSum() {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            minussum += array[i]
        }
        sum += array[i];
    }
    console.log(sum);
}
arraySum(array);


