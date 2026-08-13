class Vehicle {
    String vno, brand;

    Vehicle(String vno, String brand) {
        this.vno = vno;
        this.brand = brand;
    }

    void showVehicle() {
        System.out.println("Vehicle No: " + vno);
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    int rent, days;

    Car(String vno, String brand, int rent, int days) {
        super(vno, brand);
        this.rent = rent;
        this.days = days;
    }

    int rentAmt() {
        return rent * days;
    }

    void showCar() {
        showVehicle();
        System.out.println("Rent/Day: " + rent);
        System.out.println("Days: " + days);
        System.out.println("Total Rent: " + rentAmt());
        System.out.println();
    }
}

public class Q6 {
    public static void main(String[] args) {
        Car c1 = new Car("GJ01", "Toyota", 1000, 3);
        Car c2 = new Car("MH02", "Honda", 1500, 2);
        Car c3 = new Car("DL03", "Kia", 1200, 5);

        c1.showCar();
        c2.showCar();
        c3.showCar();
    }
}