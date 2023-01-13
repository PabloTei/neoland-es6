// 1.1 Ejecuta esta función sin pasar ningún parametro

const getSum = () => {
    return 10 + 5;
}
const sum = getSum();
console.log(sum);

// 1.2 Ejecuta esta función pasando un solo parametro

const getSum1 = (a) => a + 5; 
    
const sum1 = getSum1(10);
console.log(sum);

// 1.3 Ejecuta esta función pasando dos parametros

const getSum2 = (a, b) => a + b;

const sum2 = getSum2 (10, 5);
console.log(sum);


// Iteración #2: Destructuring
// 2.1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

const {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);

// 2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction();
console.log(name);
console.log(race);

// 2.4  ------ SIN HACER, CONSULTAR.

/*const car = {name1: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name1, itv: (2015)} = car;
console.log(name1);
console.log(itv);*/

// Iteración #3: Spread Operator
// 3.1

const pointsList = [32, 54, 21, 64, 75, 43]

let copy = [...pointsList];
console.log(copy);

// 3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let copy1 = {...toy};
console.log(copy1);

// 3.3

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const unirPointsList = [...pointsList, ...pointsList2];
console.log(unirPointsList);

// 3.4

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToys = {...toy2, ...toyUpdate};
console.log(newToys);

// 3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const eColors = [...colors];
const eColors1 = [eColors.splice(1, 1)];

console.log(colors);
console.log(eColors);


// Iteración #4: Map
// 4.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nameFunction = () => {

    const names = users.map((user) => ({
    name: user.name,
    
    }))

    return names;

}

console.log(nameFunction(users));

// 4.2  

const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nameFunction1 = () => {

    return users1.map((user) => (user.name[0] === "A" ? {name: "Anacleto"} : {name: user.name}))
}
console.log(nameFunction1(users1));


// 4.3

const cities = [
	{isVisited:true, name: 'Tokyo'},  
	{isVisited:false, name: 'Madagascar'}, 
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVisited = () => {

return cities.map((city) => (city.isVisited ? `${city.name}: Visitado` : city.name))

}

console.log(citiesVisited(cities));


