class Pat {
    int id, fee;
    String n, d;

    Pat(int id, String n, String d, int fee) {
        this.id = id;
        this.n = n;
        this.d = d;
        this.fee = fee;
    }

    void admit() {
        System.out.println(n + " Admitted");
    }

    void discharge() {
        System.out.println(n + " Discharged");
    }

    void show() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + n);
        System.out.println("Disease: " + d);
        System.out.println("Fee: " + fee);
        System.out.println();
    }
}

public class Q9 {
    public static void main(String[] args) {
        Pat p1 = new Pat(101, "Amit", "Fever", 500);
        Pat p2 = new Pat(102, "Riya", "Cold", 400);
        Pat p3 = new Pat(103, "Raj", "Cough", 600);

        p1.admit();
        p1.show();
        p1.discharge();

        p2.admit();
        p2.show();
        p2.discharge();

        p3.admit();
        p3.show();
        p3.discharge();
    }
}