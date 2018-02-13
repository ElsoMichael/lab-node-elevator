class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "Up";
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
   setInterval(() => this.update(),  1000);
	}
	
  stop() {
    clearInterval(setInterval);
  }
  update() {
		if (this.direction === "Up") {
			this.floorUp();
		} else {
			this.floorDown();
		}

		this.log();
  }
  _passengersEnter() {
		this.waitingList.forEach(function(person, index){
			if(this.person.originFloor === this.floor) {
				this.passengers.push(person);
    		this.waitingList.splice(index, 1);
    		this.requests.push(person.destinationFloor);
    		console.log(`${person.name} has entered the elevator`)
			}
		})
  }
  _passengersLeave() {
		this.passengers.forEach(function(person, index){
			if(this.person.destinationFloor === this.floor) {
    		this.waitingList.splice(index, 1);
    		console.log(`${person.name} has entered the elevator`)
			}
		})
  }
  floorUp() {
    if(this.floor !== this.MAXFLOOR) {
			this.floor++;
			this.waitingList.filter(this.floor);
    } else {
			this.direction = "Down";
		}
	}
	
  floorDown() {
    if (this.floor !== 0) {
			this.floor--;
			this.waitingList.filter(this.floor);
    } else {
			this.direction = "Up";
		}
  }
  call(person) {
    this.waitingList.push(person);
		this.requests.push(person.originFloor);
		this.start();
  }
  log() {
    console.log(`Direction: ${this.direction}, Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
