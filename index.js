// Select the input element
const searchInput = document.querySelector("#search-input");
const tableBody = document.querySelector("#product-table-body");

const debounce = (func, delay = 0) => {
  let timerId = null;

  return (...args) => {
    console.log(...args);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    } else {
      lastCall = now;
      func(...args);
    }
  };
};

function searchQuery(query) {
  if (query.trim() === "") {
    tableBody.innerHTML = ""; // Clear table if input is empty
    return;
  }

  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      const products = data.products || [];
      tableBody.innerHTML = ""; // Clear previous results

      products.forEach((product) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                <td>${product.title}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.rating.toFixed(2)}</td>
                <td>${product.stock}</td>
                <td><img src="${product.thumbnail}" alt="${
          product.title
        }" class="product-image"></td>
                `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
    });
}

const fetchDebounce = debounce(searchQuery, 300);
console.log(fetchDebounce);

searchInput.addEventListener("input", (e) => fetchDebounce(e.target.value));
