'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is the pasta with ${ing1},${ing2} and ${ing3}`);
  },
};

const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovani ',
};

rest2.numGuest = rest2.numGuest || 10;
rest1.numGuest = rest1.numGuest || 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

//And Assignment operatior NOT WORKING
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
//Or Assignment operatior NOT WORKING
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;
//Nullish Assignment operatior NOT WORKING (only for null and undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
console.log(rest2);
console.log(rest1);
// const nested = [2, 4, [5, 6]];
// const [first, , [arr, arr2]] = nested;
// console.log(first, arr, arr2);

    // const ingridients = [
    //   prompt("Let's make pasta! Ingredient 1?"),
    //   prompt('Ingredient 2?'),
    //   prompt('Ingredient 3?'),
    // ];
    // console.log(ingridients);
    // // restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
    // restaurant.orderPasta(...ingridients);
    
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
const allPlayers = [...players1, ...players2];
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
const {
  odds: { team1, x: draw, team2 },
} = game;
const printGoals = function (...allPlayers) {
  console.log(
    ...allPlayers,
    `and there were ${allPlayers.length} goals made and the players who made the Goals are ${game.scored} `
  );
};
printGoals('Davies', 'Kimmich', 'Muller', 'Lewandowski');
printGoals(...game.scored);
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
// const [players1] = game.players.slice(0, 1);
// const [players2] = game.players.slice(1, 2);
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// console.log(players1);
// console.log(players2);
// console.log(gk1);
// console.log(gk2);
// console.log(fieldPlayers1);
// console.log(fieldPlayers2);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(fieldPlayers1);
// console.log(team1, draw, team2);
// const [[], []] = game.players;
// console.log(game.players);
// console.log();
// function chunkArray(arr, n) {
//   var chunkLength = Math.max(game.players.length / n, 1);
//   var chunks = [];
//   for (var i = 0; i < n; i++) {
//     if (chunkLength * (i + 1) <= game.players.length)
//       chunks.push(game.players.slice(chunkLength * i, chunkLength * (i + 1)));
//   }
//   return chunks;
// }
// chunkArray(game.players, 2);
// console.log(chunkArray(game.players, 2));
// console.log(game.players);
