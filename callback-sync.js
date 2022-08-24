function add(a, b, printResult) {
    printResult("result", a + b);
}
function print(msg, val) {
    console.log(msg + "," + val);
}
add(2, 3, print);
