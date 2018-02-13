const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

let frances = new Person("frances", 4, 9);
let danny = new Person("danny", 10, 2);
let grubbin = new Person("grubbin", 3, 0);

elevator.call(frances);

// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();

// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();
// elevator.floorDown();