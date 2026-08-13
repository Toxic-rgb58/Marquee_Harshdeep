class Employee{
    int id;
    String name;
    double sal;
    Employee(int id, String name, double sal){
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    double hra(){
        return 0.20*sal;
    }
    double da(){
        return 0.10*sal;
    }
    double pf(){
        return 0.5*sal;
    }
    double netSal(){
        return sal+hra()+da()-pf();
    }
    void show(){
        System.out.println("ID: "+ id);
        System.out.println("Name: "+ name);
        System.out.println("Salary: "+ sal);
        System.out.println("HRA: "+ hra());
        System.out.println("DA: "+ da());
        System.out.println("PF: "+ pf());
        System.out.println("Net Salary: "+ netSal());
    }
}
public class Emp{
    public static void main(String[] args){
        Employee e1 = new Employee(1, "Amit", 30000);
        Employee e2 = new Employee(2, "Himanshu", 50000);
        Employee e3 = new Employee(3, "Rahul", 80000);
        Employee e4 = new Employee(4, "Harsh", 90000);
        e1.show();
        e2.show();
        e3.show();
        e4.show();
    }
}