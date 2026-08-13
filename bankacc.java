class BankAccount {
    @SuppressWarnings("unused")
    int accountNumber;
    @SuppressWarnings("unused")
    String accountName;
    double balance;
    BankAccount(int accountNumber, String accountName, double balance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = balance;
    }
    void deposit(double amount) {
        balance = balance + amount;
    }
    void withdraw(double amount) {
        balance = balance - amount;
    }
    void showBalance() {
        System.out.println("Balance: " + balance);
    }
public static void main(String[] args) {
        BankAccount acc = new BankAccount(101, "Rakesh", 5000);
        acc.showBalance();
        acc.deposit(1000);
        acc.showBalance();
        acc.withdraw(2000);
        acc.showBalance();
    }
}