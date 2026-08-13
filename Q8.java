class Shape {
    void calculateArea() {
        System.out.println("Area");
    }
}

class Circle extends Shape {
    int r = 5;
    @Override
    void calculateArea() {
        System.out.println("Circle Area: " + (3.14 * r * r));
    }
}

class Rectangle extends Shape {
    int l = 10, b = 5;

    @Override
    void calculateArea() {
        System.out.println("Rectangle Area: " + (l * b));
    }
}

class Triangle extends Shape {
    int b = 8, h = 4;

    @Override
    void calculateArea() {
        System.out.println("Triangle Area: " + (0.5 * b * h));
    }
}

public class Q8 {
    public static void main(String[] args) {
        Shape s;

        s = new Circle();
        s.calculateArea();

        s = new Rectangle();
        s.calculateArea();

        s = new Triangle();
        s.calculateArea();
    }
}