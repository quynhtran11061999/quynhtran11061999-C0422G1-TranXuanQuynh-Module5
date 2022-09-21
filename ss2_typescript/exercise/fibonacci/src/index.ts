// happy coding 👻
function fibonacci(n: number): number {
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let sum = 0;
let arr = [];
for (let i = 0; i <10 ; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(arr);
alert(sum);

