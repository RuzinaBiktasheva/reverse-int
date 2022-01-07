module.exports = function reverse (n) {
    let number = String(n);
    let newN = '';
    let i = number.length - 1;

    if (number[0] != '-') {
        while (i >= 0) {
            newN += number[i];
            i = i - 1;
        }
    } else {
        while (i >= 1) {
            newN += number[i];
            i = i - 1;
        }
    } return newN;
}
