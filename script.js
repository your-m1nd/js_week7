let cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];

//for (let city of cities) {
   // alert(city);
  //}//
for (let city of cities) {
let result = prompt(`Температура в ${city}`);
temperatures.push(result);
//console.log(temperatures);
};


//НЕ РАБОТАЕТ//
for (let i = 0; i < cities.lenght; i++) {
   let listOfCities = document.querySelector('#listOfCities');
	let li = document.createElement('li');
	li.textContent = `${cities[i]+temperatures[i]}`;
	listOfCities.appendChild(li);
}

//for (i = 0; i < cities.lenght; i++) {
   // temperatures[i] = result;
    
    //temperatures.push(`${result}`);
  //  console.log(temperatures);
//}


//let result = prompt();
//let array = [];
//for (let i = 0; i < result; i++) {
//temperatures.push(result);
//}






//const listOfCities = document.createElement('ul');

//for (i = 0; i < cities.lenght, i++;) {
//const list = document.createElement('li');
 // list.textContent = `${temperature[i]+city[i]}`;
//  listOfCities.append(list);
//}
