function bankAccount(customerName , balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount;
    }
    this.withdraw = function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
        }
    }
}

// const account1 = new bankAccount("Ram", 1000);
// console.log(account1);
// const account2 = new bankAccount("Shyam");
// console.log(account2);
// const account3 = new bankAccount();
// console.log(account3);

// account1.deposit(500);
// console.log(account1.balance);
// account1.withdraw(200);
// console.log(account1.balance);
// account1.withdraw(2000);
// console.log(account1.balance);

const accountForm = document.querySelector("#accountForm");
const customerNameInput = document.querySelector("#customerName");
const balanceInput = document.querySelector("#balance");
const accList = [];

accountForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const initialBalance = parseFloat(balanceInput.value) || 0;
    const acc = new bankAccount(customerNameInput.value, initialBalance);
    console.log(acc);
    accList.push(acc);
    customerNameInput.value = "";
    balanceInput.value = "";
});


const depositForm = document.querySelector("#depositForm");
const accNumInput = document.querySelector("#accNum");
const amntInput = document.querySelector("#amnt");
depositForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const account = accList.find(
        acc => acc.accountNumber === +accNumInput.value
    );

    if (account) account.deposit(+amntInput.value);

    console.log(accList);

    accNumInput.value = "";
    amntInput.value = "";
});
const withdrawForm = document.querySelector("#withdrawForm");
const withdrawAccNum = document.querySelector("#withdrawAccNum");
const withdrawAmnt = document.querySelector("#withdrawAmnt");

withdrawForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const account = accList.find(
        acc => acc.accountNumber === +withdrawAccNum.value
    );

    if (account) account.withdraw(+withdrawAmnt.value);

    console.log(accList);

    withdrawAccNum.value = "";
    withdrawAmnt.value = "";
});