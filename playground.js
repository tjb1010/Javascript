function Car(year, make, model) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.numWheels = 4;
}

Car.prototype.log = function() {
  console.log(this);
};
var myCar = new Car(2012, "Chevy", "Malibu");

myCar.log();
