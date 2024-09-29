const products = [
  { name: 'Smartphone', category: 'Electronics', price: 699 },
  { name: 'Laptop', category: 'Electronics', price: 999 },
  { name: 'Iphone', category: 'Electronics', price: 1500 },
  { name: 'T-Shirt', category: 'Clothing', price: 25 },
  { name: 'The Prince', category: 'Books', price: 25 },
  { name: 'Jeans', category: 'Clothing', price: 40 },
  { name: 'Harry Poter', category: 'Books', price: 15 },
  { name: 'Headphones', category: 'Electronics', price: 150 },
  { name: 'Jacket', category: 'Clothing', price: 85 }, 
];

const containerProducts = document.querySelector('.products');
const filterDropdown = document.querySelector('.filter-dropdown');

// Functions
const assignCategory = function () {
  // Categories should be unique
  const categories = new Set();
  
  // Add categories for categories set
  categories.add('All');
  products.forEach(product => {
    categories.add(product.category);
  });

  // Create option for each category
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    filterDropdown.appendChild(option);
  });
};

const formateCurrency = function (locale, currency, value) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayProducts = function (filteredProducts) {
  containerProducts.innerHTML = '';

  // loop over products to display the products__row
  filteredProducts.forEach(product => {
    const formatedPrice = formateCurrency('en-US', 'USD', product.price);
    const html = `
      <div class="products__row">
        <div class="products__name">${product.name}</div>
        <div class="products__category">${product.category}</div>
        <div class="products__price">${formatedPrice}</div>
      </div>
    `;
    containerProducts.insertAdjacentHTML('afterbegin', html);
  });
};

// Filter products based on category
function filterProducts(category) {
  displayProducts(category);
}

// display all product at first
displayProducts(products);
// assign category for each product
assignCategory();

// Event handler
filterDropdown.addEventListener('change', e => {
  const selectedCategory = e.target.value;

  if (selectedCategory === 'All') {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      product => product.category === selectedCategory
    );
    displayProducts(filteredProducts);
  }
});
