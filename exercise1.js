var remainder, reverse;
var reverse= 0;

function reverseNumber(num){
    while(num>0){
        remainder= num%10;
        reverse=(reverse*10)+remainder;
        num=(num/10)|0;
    }
    return reverse;
}
console.log(reverseNumber(32243));


