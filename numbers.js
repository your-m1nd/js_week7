let numbers = [];

for (let i = -10; i<= 10; i++) {
  numbers.push(i);
}

console.log(numbers);

//for (number of numbers) {
  //  number ** 2;
//}
//console.log(number);

for (let i in numbers) {
    if (i< 0) {
        numbers.pop(i);
    } else {
        numbers[i] = numbers[i] ** 2};
}
console.log(numbers);

numbers.sort(((a, b) => b - a));
console.log(numbers);



//for (let i = -10; i<= 0; i++) {
   // numbers.pop(i);
//}
//console.log(numbers);


//for (number of numbers) {
    number **2;
//}
//console.log(numbers);

//for (number of numbers) {
  //  numbers **2;
//}

//console.log(numbers);





