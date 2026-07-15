const data = {
phones:[
{
name:"iPhone 15",
price:"₹79,900",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw_PYgeZEPd9i5EIfEoRq4Jx_QUMzKTx6PsZIJ8HcTg&s=10"
},
{
name:"Samsung S24",
price:"₹74,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVKgtNuP5WFY3rZZcDZPW0hrq69x4pTEd4iVLhHN46Q&s=10"
},
{
name:"OnePlus 12",
price:"₹59,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8-nKlwNnv07FuH2qAOYXnTeGGuYtsU02Dl8H_kJKxw&s=10"
}],
laptops:[
{
name:"ASUS TUF",
price:"₹84,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVOE1rW8nancERqmD9MDS4mSxx8-Mp1Pblg2POJe-bA&s=10"
},
{
name:"HP Victus",
price:"₹72,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaw1a0X5b_4igz6q5ORh6EK7HYXPSnCQlUGws09nA_g&s=10"
},
{
name:"Lenovo LOQ",
price:"₹78,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhz0QmXhJLarEvaqAxaS_bPM7yHPTpy-lNjtIbcfQJA&s=10"
}],
headphones:[
{
name:"Sony XM5",
price:"₹29,990",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAj-EzmWOdXyPJexHsMJDvsoUcL6Nojg6tNrYQp0-2Q&s=10"
},
{
name:"JBL Tune",
price:"₹4,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81Fo0C9vaq4qSvHrzHxnaIxfEo08BewwH2tRITnK-0g&s=10"
},
{
name:"Boat Rockerz",
price:"₹1,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrPGt3dPNphvugif3Ve1ASV7HaIUqZJOsbreyan9KOQ&s"
}],
watches:[
{
name:"Apple Watch",
price:"₹41,900",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CGED6fqMNdOYFRvzlhgDv_Q7T9ny3CyrUw-bs28_5w&s=10"
},
{
name:"Galaxy Watch",
price:"₹24,999",
image:"https://southport.in/cdn/shop/files/samsung-india-electronics-gear-gold-bluetooth-samsung-galaxy-watch-42mm-40926986109187_87bdb93b-75c4-40a7-a960-74e3976fb2b6.jpg?v=1693642537"
},
{
name:"Noise ColorFit",
price:"₹3,999",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmyOrI2H_GZWGVeLp7QeG2Z0NbXrM_jf0i3QAsq56ug&s=10"
}]
};
function showProducts(category) {
    let output = "";
    for (let product of data[category]) {
        output += `
            <div class="card">
                <img src="${product.image}">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
            </div>
        `;
    }
    document.getElementById("products").textContent = output;
}
showProducts("phones");