let num = 4567; 
let sum = 0;

while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);
