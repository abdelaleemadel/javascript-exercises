const fibonacci = function (number) {
    if (number < 1) { return "OOPS" }
    else if (number == 1 || number == 2) {
        return 1
    } else {
        let arr = [1, 1]
        for (let i = 2; i < number; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        }
        return arr[number - 1]
    }
}
/* Recursive way takes so much time */
// Do not edit below this line
module.exports = fibonacci;






