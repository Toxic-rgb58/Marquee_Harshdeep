function Car(brand, model, year, color, fuelType) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.fuelType = fuelType;
    }
    Car.prototype.startEngine = function () {
      return `${this.brand} ${this.model} engine started.`;
    };
    Car.prototype.accelerate = function () {
      return `${this.brand} ${this.model} is accelerating.`;
    };
    Car.prototype.nitro = function () {
      return `${this.brand} ${this.model} Nitro Activated.`;
    };
    Car.prototype.displayInfo = function () {
      return `${this.brand} ${this.model} (${this.year}) - ${this.color}, ${this.fuelType}`;
    };
    const myCar = new Car("Lamborghini", "Aventador", 2019, "Black", "disel");
    console.log(myCar.displayInfo());
    console.log(myCar.startEngine());
    console.log(myCar.accelerate());
    console.log(myCar.nitro());