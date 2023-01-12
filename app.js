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