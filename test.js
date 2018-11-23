//this is the book
//http://eloquentjavascript.net/04_data.html

//this is the keys
//https://eloquentjavascript.net/code/#3.2


console.log('hee o');
console.log("yo tuna");


if (1+1 === 2) {
  console.log("duh?!");
}

/*for (let i = 0; i < 3; i+=1) {
alert("welp");
}*/

let abc = "abc";
let s = "";
console.log(abc.length);
for (var i = 0; i < abc.length; i+=1) {
  s += abc[i];
  console.log(s);
}

//its a shape dood
for (var j = "#"; j.length < 10; j += "#") {
  console.log(j);
}


//get some functions going, huh?
var string = function(inputString) {
  if (inputString % 3 == 0 && inputString % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (inputString % 5 == 0) {
    console.log("Buzz");
  }
  else if (inputString % 3 == 0) {
    console.log("Fizz");
  }
}
for (var k = 0; k < 3; k+=1) {
  //string(prompt("what you got"));
}


//chessBoard
var boardSize = 8;
var line = "";
for (var j = 0; j < boardSize; j+=1) {
  for (var i = 0; i < boardSize; i+=1) {
    if ((i+j) % 2 == 0) {
      line += " ";
    }
    else {
      line += "#";
    }
  }
  line += "\n";
}
console.log(line);



const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(10,2));


//closure and binding
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(10));


function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(cowString +  'Cows');
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);


//going through all entries in iterables
var arr = [1,2,3,4,5];
for (let entry of arr) {
  console.log(entry);
}

//unshift and shift to add and remove element from the beginning
arr.unshift(0);
console.log(arr);

//indexOf and lastIndexOf
console.log(arr.lastIndexOf(2));

//slice to select only a section of the array
console.log(arr.slice(0,1));

//trim() removes all starting and ending white spaces, just like strip() in python
console.log("  hey y'all\"\\n\"     ".trim());

//on rewind
console.log("please no, god no! ".repeat(3));

//pass in the elements of the array -> (...arr)
console.log(Math.max(...arr));

//Math.floor max min random etc

var tuna = {
  height: "tall",
  age: 34,
  marriage: true
};
console.log(tuna);

//destructing an object, take name out
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji

//destructing an array
let [arrEnt, arrEnt2] = [3,6];
console.log(arrEnt, arrEnt2);



//JSON: javascript object notation, serialization
/*{
"squirrel": false,
"events": ["I climb up", "and then I climb down"]
}*/

//JSON stringify or parse
let jsonstring = JSON.stringify({daddy: "is home"});
console.log(jsonstring);
console.log(JSON.parse(jsonstring).daddy);

//04 exercise The sum of a range
var TSOFR = (start, end) => {
  var arr = [];
  var sum = 0;
  for (var i = start; i < end; i+=1) {
    arr.push(i);
    sum += i;
  }
  return sum;
};
console.log(TSOFR(1,10));

//reverse an array
var RAA = function(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
};
console.log(RAA(['A', 'B', 'C']));

//A list
var AL = (arr) => {
  let list = null;
  for (var i = arr.length - 1; i >= 0; i-=1) {
    list = {value : arr[i], rest: list};
  }
  return list;
};
console.log(AL([1,2,3]));


//immediately invoked fucntion expression
(x => x*2)(3);

//abstraction
function repeat(n, action) {
  for (var i = 0; i < n; i += 1)
    action(i);
};
var labels = [];
repeat(5, j => {
  labels.push(j);
});
console.log(labels);

//higher order functions
function greaterThan(n) {
  return m => m > n;
};
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//another higher order function
function unless(test, then) {
  if (!test) then();
}
repeat (3, i => {
  unless(i % 2 == 1, () => {
    console.log(i);
  });
});

//foreach
[1,2].forEach(l => console.log(l));
//this is a fucntion indeed
console.log(typeof (l => console.log(l)));


//class
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line){
    console.log(this.type + line);
  }
}
let nardDog = new Rabbit("nardDog ");
nardDog.speak("eats tuna");
//prototype is a template for classes
Rabbit.prototype.anger = "max";
console.log(Rabbit.prototype.anger);

//map
let ages = {
  nardDog : 35,
  tuna : 31,
  creed : 99999
};
console.log("nardDog" in ages);
let ages2 = new Map();
ages2.set("pamela", 29);

//Symbol interface
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(nardDog[sym]);
// → 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

//iterator interface
let itr = "OK"[Symbol.iterator]();
console.log(itr.next());
/*
class Matrix {
  constructor(row, column, element = (x,y) => undefined) {
    this.row = row;
    this.col = column;
    this.content = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      this.content[i * column + j] = element(i,j);
    }
  }
 }
  get(x,y) {
    return this.content[x * this.col + y];
  }
}
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}
Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};
let matrix = new Matrix(3,3, (x,y) => `x,y`);
for (let {x,y, value} of matrix) {
  console.log(x,y,value);
}*/


//project: A robot
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  if (edges == null)
    return;
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null)
      graph[from] = [to];
    else
      graph[from].push(to);
  }
  for (let [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      //for all parcels in parcels, check
      let parcels = this.parcels.map(p => {
        //parcel's place vs the robot's place
        if (p.place != this.place) return p;
        //update parcel place to destination, address remains the same
        return {place: destination, address: p.address};
        //only keep the parcel if parcel' place isnt where its supposed to be
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

//let object = Object.freeze({value: 5});
//object.value = 10; doesnt change it

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobotAnimation(VillageState.random(),
                  goalOrientedRobot, []);
