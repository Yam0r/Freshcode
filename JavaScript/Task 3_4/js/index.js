const a = [1, 3, 4, 12, 6, 13];
function t1(a) {
    let sum = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] % 2 != 0) {
            sum += a[i];
        }
        sum += a[i];
    }
}

function t2(a) {
    let res = [],i,j;
    for (i = 0; i < a.length; i++) {
        if (a[i] == 0) {
            res[j] = a[i];
            j++;
        }
        
    }
    return res;
}
function t3(a1, a2) {
    let res = [];
    res = a1.slice();
    for(i=0; j<a1.length, i<a2.length; i++){
        res[j] = a2[i];
    }
    return res.toString();
}