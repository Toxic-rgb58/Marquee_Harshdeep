class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void displayInfo() {
        System.out.println(name);
        System.out.println(age);
    }
}

class Student extends Person {
    int roll;
    String course;

    Student(String name, int age, int roll, String course) {
        super(name, age);
        this.roll = roll;
        this.course = course;
    }

    @Override
    void displayInfo() {
        System.out.println("Student");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Roll: " + roll);
        System.out.println("Course: " + course);
        System.out.println();
    }
}

class Teacher extends Person {
    String subject;
    int salary;

    Teacher(String name, int age, String subject, int salary) {
        super(name, age);
        this.subject = subject;
        this.salary = salary;
    }

    @Override
    void displayInfo() {
        System.out.println("Teacher");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Subject: " + subject);
        System.out.println("Salary: " + salary);
        System.out.println();
    }
}

public class Q7 {
    public static void main(String[] args) {
        Person p1 = new Student("Rahul", 20, 101, "BCA");
        Person p2 = new Teacher("Meera", 35, "Java", 50000);

        p1.displayInfo();
        p2.displayInfo();
    }
}