let cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];


for (let city of cities) {
let result = prompt(`Температура в ${city}`);
temperatures.push(result);
//console.log(temperatures);
};


//НЕ РАБОТАЕТ//
for (let i = 0; i < cities.lenght; i++) {
    let ul = document.getElementById('listOfCities');
    let li = document.createElement('li');
	li.textContent = `${cities[i]+temperatures[i]}`;
	ul.appendChild(li);
}
