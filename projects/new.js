let products = JSON.parse(localStorage.getItem("cartProducts")) || [];

const productForm = document.getElementById("product-form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const categorySelect = document.getElementById("category");
const editIdInput = document.getElementById("edit-id");
const formTitle = document.getElementById("form-title");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");
const searchInput = document.getElementById("search-input");
const filterCategory = document.getElementById("filter-category");
const productList = document.getElementById("product-list");
const totalProductsEl = document.getElementById("total-products");
const totalQuantityEl = document.getElementById("total-quantity");
const grandTotalEl = document.getElementById("grand-total");
const clearCartBtn = document.getElementById("clear-cart-btn");

function saveToLocalStorage() {
  localStorage.setItem("cartProducts", JSON.stringify(products));
}

function renderApp() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = filterCategory.value;
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
  } else {
    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <p><strong>Quantity:</strong> ${product.quantity}</p>
        <p><strong>Subtotal:</strong> $${(product.price * product.quantity).toFixed(2)}</p>
        <div class="card-actions">
          <button class="btn-edit" onclick="editProduct(${product.id})">Edit</button>
          <button class="btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
      `;
      productList.appendChild(card);
    });
  }

  updateSummary();
}

function updateSummary() {
  const totalProducts = products.length;
  const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  totalProductsEl.textContent = totalProducts;
  totalQuantityEl.textContent = totalQuantity;
  grandTotalEl.textContent = grandTotal.toFixed(2);
}

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);
  const quantity = parseInt(quantityInput.value, 10);
  const category = categorySelect.value;
  const editId = editIdInput.value;

  if (
    !name ||
    isNaN(price) ||
    price < 0 ||
    isNaN(quantity) ||
    quantity < 1 ||
    !category
  ) {
    alert("Please enter valid data in all fields.");
    return;
  }

  if (editId) {
    const product = products.find((p) => p.id === parseInt(editId, 10));
    if (product) {
      product.name = name;
      product.price = price;
      product.quantity = quantity;
      product.category = category;
    }
    resetForm();
  } else {
    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      quantity: quantity,
      category: category,
    };
    products.push(newProduct);
  }

  saveToLocalStorage();
  renderApp();
  productForm.reset();
});

function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  nameInput.value = product.name;
  priceInput.value = product.price;
  quantityInput.value = product.quantity;
  categorySelect.value = product.category;
  editIdInput.value = product.id;

  formTitle.textContent = "Edit Product";
  saveBtn.textContent = "Update Product";
  cancelBtn.style.display = "inline-block";
}

cancelBtn.addEventListener("click", resetForm);

function resetForm() {
  productForm.reset();
  editIdInput.value = "";
  formTitle.textContent = "Add Product";
  saveBtn.textContent = "Add Product";
  cancelBtn.style.display = "none";
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  saveToLocalStorage();
  renderApp();
}

clearCartBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the whole cart?")) {
    products = [];
    localStorage.removeItem("cartProducts");
    renderApp();
  }
});

searchInput.addEventListener("input", renderApp);
filterCategory.addEventListener("change", renderApp);

renderApp();
