//создаем массивы городов и температуры
let cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];

//используем цикл для наполнения массива с температурой
for (let city of cities) {
let result = prompt(`Температура в ${city}`);
temperatures.push(result);
};

//сортируем массив

let sortTemperatures = temperatures.sort(((a, b) => a - b));

//находим максимальную температуру
let higherTemperature = sortTemperatures[sortTemperatures.length - 1];

//находим минимальную температуру
let lowerTemperature = sortTemperatures[0];

//создаем список 
for (let i = 0; i < 4; i++) {
    let ul = document.getElementById('listOfCities');
    let li = document.createElement('li');
	li.textContent = `Температура в ${cities[i]}: ${temperatures[i]} °C`;
	ul.appendChild(li);
}





