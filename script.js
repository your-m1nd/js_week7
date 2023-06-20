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

for (let i =0; i<1; i++) {
    let div = document.getElementById('higherTemperature');
let p = document.createElement('p');
p.textContent = `Максимальная температура: ${higherTemperature}°C`;
div.appendChild(p);
}

for (let i =0; i<1; i++) {
    let div = document.getElementById('higherTemperature');
let p = document.createElement('p');
p.textContent = `Минимальная температура: ${lowerTemperature}°C`;
div.appendChild(p);
}








