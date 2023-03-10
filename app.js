
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

// Iteración #5: Filter
// 5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const myFunctionMayor18 = (x) => { // Declaramos la función con parámetro x para que podamos comparar con cualquier edad, no solo con 18.
    return ages.filter((number) => number > x); // realizamos funcion filter de la lista ages y cogemos unicamente los valores mayores de el parametro incluido
} 
console.log(myFunctionMayor18(18)); // llamamos a la función e indicamos el parametro que queremos comparar


// 5.2

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const myFunctionPar = () => {
    return numPar = ages1.filter((number) => number %2 === 0);
}
console.log(myFunctionPar());


// 5.3

streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterGameMorePlayed = (gameMorePlayed) => {
    const streamersPlayed = streamers.filter((streamer) => streamer.gameMorePlayed.toLowerCase(gameMorePlayed) === gameMorePlayed.toLowerCase(gameMorePlayed)); // Declarar nueva variable para almacenar un nuevo array, filtrar para que me aparezcan SOLO los streamers que juegan al juego solicitado por parámetro, añadiendo también que si el nombre aparece en minúscula o mayúscula o distintos caracteres llegue igual a la coincidencia
    return streamersPlayed;
}
console.log(filterGameMorePlayed("league of legends")); 


// 5.4

const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const allFilterStreamers = (letra) => {
    const newFilterStreamers = streamers1.filter((streamer) => streamer.name.includes(letra));
    return newFilterStreamers;
}
console.log(allFilterStreamers(""));

// 5.5

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const newFunctionFilter = (palabra, edad) => {
    let newStreamersFilter = streamers2.filter((streamer) => streamer.gameMorePlayed.toLowerCase(streamer.gameMorePlayed).includes(palabra.toLowerCase(palabra))); 

    newStreamersFilter = newStreamersFilter.map((streamer) => streamer.age > edad ? {name: streamer.name, age: streamer.age, gameMorePlayed: streamer.gameMorePlayed.toUpperCase(streamer.gameMorePlayed)} : {name: streamer.name, age: streamer.age, gameMorePlayed: streamer.gameMorePlayed});

    return newStreamersFilter;
}
console.log(newFunctionFilter("Legends", 35));


// Iteración #6: Find
// 6.1

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNum = (x) => {
    const num1 = numbers.find(number => number === x);
    return num1;
}
console.log(findNum(100));


// 6.2

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const findMovieDate = (age) => {
    const movieAge = movies.find((movie) => movie.date === age)
    return movieAge;
}
console.log(findMovieDate());

// 6.3

const aliens = [
	{name_alien: 'Zalamero', planet: 'Eden', age: 4029},
	{name_alien: 'Paktu', planet: 'Andromeda', age: 32},
	{name_alien: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name_mutation: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name_mutation: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name_mutation: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const searchAliens = (name_alien) => {
    const alien = aliens.find((alien) => alien.name_alien === name_alien);
    return alien;
}

const searchMutations = (name_mutation) => {
    const mutation = mutations.find((mutation) => mutation.name_mutation === name_mutation);
    return mutation;
}

const alinesAndMutations = {...searchAliens("Cucushumushu"), ...searchMutations("Porompompero")};
console.log(alinesAndMutations);

// Iteración #7: Reduce
// 7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const functionSumScore = () => {
    const sumScore = exams.reduce((acc, exam) => acc + exam.score, 0);
    return sumScore;
}
console.log(functionSumScore());

// 7.2

const exams1 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const functionSumScoreApproved = () => {

    return exams1.map((alumno) => alumno.score >= 5 ? alumno.score : alumno.score = 0).reduce((acc, score) => acc + score, 0);
   }
console.log(functionSumScoreApproved());

// 7.3

const exams2 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const functionMedScore = () => {
    return exams2.reduce((acc, exam) => acc + exam.score / exams2.length, 0);
}
console.log(functionMedScore());


// Iteración #8: Bonus
// 8.1

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const genderFunction = (gender) => {
    let x = videogames.filter(((videogame) => videogame.genders.includes(gender))).map(((videogame) => videogame.score)); // Realizamos el filtro para encontrar los juegos por el género, inmediatamente concatenamos un map para sacar de esos juegos filtrados anteriormente su puntuación
    return x.reduce((acc, score) => acc + score / x.length, 0); // De los dos métodos aplicados anteriormente (filter y map) hacemos un reduce para devolver la media de las notas de los videojuegos filtrados anteriormente
}
console.log(genderFunction("RPG"));
