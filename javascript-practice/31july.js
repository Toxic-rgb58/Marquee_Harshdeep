class Employee {
    name;
    department;
    salary;
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showSalary() {
        return this.salary;
    }
    increaseSalary(amount) {
        this.salary += amount;
    }

    static companyName() {
        return "Google";
    }
}
const employee1 = new Employee("Himanshu", "HR", 25000);
console.log(Employee.companyName());
console.log(employee1.showSalary());
employee1.increaseSalary(5000);
console.log(employee1.showSalary());