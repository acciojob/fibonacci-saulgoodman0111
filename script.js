let a=0, b=1;
function fibonacci(num) {
    if(num <= 2)
    return num-1;
    for(let i=1;i<=num-2;i++)
    {
        let temp=b;
        b=a+b;
        a=temp;
    }
    return b;
}
console.log(b);
// your code here
module.exports = fibonacci;
