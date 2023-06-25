let numbers = [];

//заполняем массив числами от -10 до 10
for (let i = -10; i<= 10; i++) {
  numbers.push(i);
}

//возводим в квадрат, убираем отрицательные значения
for (let i in numbers) {
    if (i< 0) {
        numbers.pop(i);
    } else {
        numbers[i] = numbers[i] ** 2};
}

//сортируем числа в порядке убывания
numbers.sort(((a, b) => b - a));

//убираем повторяющиеся значения
let newArr = [];
for (let i in numbers) {
  if (!newArr.includes(numbers[i])) {
    newArr.push(numbers[i]);
  }
}
console.log(newArr);


//for (let i in numbers) - в цикле переменная i принимает индексы массива numbers, а не значения
//фильтрацию можно сделать с помощью метода filter: 
//let newArr = numbers.filter((value, index) => numbers.indexOf(value) === index);



