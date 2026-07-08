const orders = [
  {
    id: 1,
    customer: "Rahul",
    food: "Pizza",
    price: 500,
    delivered: true
  },
  {
    id: 2,
    customer: "Aman",
    food: "Burger",
    price: 250,
    delivered: false
  },
  {
    id: 3,
    customer: "Priya",
    food: "Pasta",
    price: 400,
    delivered: true
  },
  {
    id: 4,
    customer: "Riya",
    food: "Momos",
    price: 150,
    delivered: false
  }
];

const doubled = orders.map(order => order.price * 2);
console.log(doubled);

const names = orders.map(order => order.customer);
console.log(names);

const prices = orders.map(order => Number(order.price));
console.log(prices);

const foodList = orders.map((order, index) => `${index + 1}. ${order.food}`);
console.log(foodList);


const evenPrices = orders.filter(order => order.price % 2 === 0);
console.log(evenPrices);

const deliveredOrders = orders.filter(order => order.delivered);
console.log(deliveredOrders);

const totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
console.log(totalPrice);

