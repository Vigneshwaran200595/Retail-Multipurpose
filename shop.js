// ====================== GLOBAL ELEMENTS ======================
const productList = document.getElementById("product-list");
const pagination = document.getElementById("pagination");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const brandCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const ratingRadios = document.querySelectorAll('input[name="rating"]');

// ====================== STATE VARIABLES ======================
let currentCategory = null;
let currentPage = 1;
const itemsPerPage = 9;
let filteredProducts = [...products];
let selectedBrands = [];
let selectedRating = "all";

// ❤️ Wishlist & 🛒 Cart
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ====================== DISPLAY PRODUCTS ======================
function displayProducts() {
  let productsToDisplay = [];

  // ✅ If category is selected, show all from that category
  if (currentCategory) {
    productsToDisplay = filteredProducts.filter(
      (p) => p.category === currentCategory
    );
  } else {
    // ✅ Show paginated view only for "All"
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    productsToDisplay = filteredProducts.slice(start, end);
  }

  // ✅ Render products
  productList.innerHTML =
    productsToDisplay.length > 0
      ? productsToDisplay
          .map(
            (p) => `
      <div class="product-card">
        <div class="product-image">
          <img src="${p.img}" alt="${p.name}">
          <div class="overlay">
           <i class="${
  wishlist.some(item => item.id === p.id) ? "fa-solid" : "fa-regular"
} fa-heart wishlist-icon" onclick="toggleWishlist(${p.id})"></i>
          </div>
        </div>
        <h4>${p.name}</h4>
        <p class="brand">${p.brand}</p>
        <div class="rating">${"⭐".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</div>
        <span class="price">₹${p.price}</span><br>
        <button class="add-cart" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>`
          )
          .join("")
      : `<p style="grid-column: 1 / -1; text-align:center;">No products found</p>`;

  // ✅ Only show pagination for "All"
  if (!currentCategory) renderPagination();
  else pagination.innerHTML = "";
}

// ====================== WISHLIST ======================
// ====================== WISHLIST ======================
// ❤️ Toggle wishlist (add/remove)
function toggleWishlist(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const index = wishlist.findIndex((item) => item.id === id);

  if (index === -1) {
    wishlist.push(product); // Add full object
  } else {
    wishlist.splice(index, 1); // Remove
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistUI(); // Update header count & dropdown
  displayProducts();  // Update heart icon on shop page
}



function removeFromWishlist(id) {
  wishlist = wishlist.filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  displayProducts();
}


// ====================== CART ======================
function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  const product = products.find((p) => p.id === id);

  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();

  // ✅ Show success message below Add to Cart button
  const btn = document.querySelector(`button[onclick="addToCart(${id})"]`);
  if (btn) {
    // Remove any old message
    const oldMsg = btn.parentElement.querySelector(".added-msg");
    if (oldMsg) oldMsg.remove();

    // Create new message element
    const msg = document.createElement("div");
    msg.className = "added-msg";
    msg.textContent = "✅ Product added to cart!";
    btn.insertAdjacentElement("afterend", msg);

    // Fade out after 2 seconds
    setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 500);
    }, 3000);
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

// ====================== PAGINATION ======================
function renderPagination() {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.toggle("active", i === currentPage);
    btn.addEventListener("click", () => {
      currentPage = i;
      displayProducts();
    });
    pagination.appendChild(btn);
  }
}

// ====================== FILTERS ======================
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const maxPrice = parseInt(priceRange.value);

  // ✅ Always filter from full product list, not filtered subset
  filteredProducts = products.filter((p) => {
    const matchCategory = !currentCategory || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm);
    const matchPrice = p.price <= maxPrice;
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const matchRating =
      selectedRating === "all" || p.rating >= parseInt(selectedRating);

    return (
      matchCategory && matchSearch && matchPrice && matchBrand && matchRating
    );
  });

  if (window.innerWidth <= 768) {
  document.addEventListener("click", () => {
    document.querySelectorAll(".wishlist-icon").forEach(icon => {
      icon.style.display = "block";
    });
  });
}

  currentPage = 1;
  displayProducts();
}

// ====================== CATEGORY ======================
categoryList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    document
      .querySelectorAll("#category-list li")
      .forEach((li) => li.classList.remove("active"));

    e.target.classList.add("active");
    currentCategory =
      e.target.dataset.category === "all" ? null : e.target.dataset.category;

    // ✅ Reset filters from full list
    applyFilters();
  }
});

// ====================== SEARCH ======================
searchInput.addEventListener("input", applyFilters);

// ====================== SORT ======================
sortSelect.addEventListener("change", () => {
  if (sortSelect.value === "low-high")
    filteredProducts.sort((a, b) => a.price - b.price);
  else if (sortSelect.value === "high-low")
    filteredProducts.sort((a, b) => b.price - a.price);
  displayProducts();
});

// ====================== PRICE RANGE ======================
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  applyFilters();
});

// ====================== BRAND ======================
brandCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    selectedBrands = Array.from(brandCheckboxes)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);
    applyFilters();
  });
});

// ====================== RATING ======================
ratingRadios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    selectedRating = e.target.value;
    applyFilters();
  });
});

// ====================== WISHLIST & CART DROPDOWN FIX ======================
const wishlistWrapper = document
  .querySelector(".wishlist")
  .closest(".icon-wrapper");
const wishlistDropdown = document.getElementById("wishlist-dropdown");
const cartWrapper = document.querySelector(".cart").closest(".icon-wrapper");
const cartDropdown = document.getElementById("cart-dropdown");

// Smooth hover — prevents flicker
function setupDropdown(wrapper, dropdown) {
  let hideTimeout;

  wrapper.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
  });

  wrapper.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      dropdown.style.opacity = "0";
      dropdown.style.display = "none";
    }, 250);
  });

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
  });

  dropdown.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      dropdown.style.opacity = "0";
      dropdown.style.display = "none";
    }, 250);
  });
}

setupDropdown(wishlistWrapper, wishlistDropdown);
setupDropdown(cartWrapper, cartDropdown);

// ====================== UPDATE DROPDOWN UI ======================
function updateWishlistUI() {
  const count = document.getElementById("wishlist-count");
  count.textContent = wishlist.length;

  const wishlistDropdown = document.getElementById("wishlist-dropdown");

  if (wishlist.length === 0) {
    wishlistDropdown.innerHTML = `<p style="text-align:center; color:#777; padding:10px;">No items in wishlist</p>`;
    return;
  }

  wishlistDropdown.innerHTML = wishlist
    .map(
      (item) => `
        <div class="dropdown-item">
          <img src="${item.img}" alt="${item.name}">
          <div class="dropdown-info">
            <span class="name">${item.name}</span>
            <span class="price">₹${item.price}</span>
          </div>
          <button class="remove-btn" onclick="removeFromWishlist(${item.id})">&times;</button>
        </div>`
    )
    .join("");
}


function updateCartUI() {
  const count = document.getElementById("cart-count");
  const total = document.getElementById("cart-total");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  count.textContent = cart.length;
  total.innerHTML = `₹${subtotal.toFixed(2)}<br>My Cart`;

  if (cart.length === 0) {
    cartDropdown.innerHTML = `<p style="text-align:center; color:#777; padding:10px;">Your cart is empty</p>`;
    return;
  }

  cartDropdown.innerHTML = cart
    .map(
      (item) => `
        <div class="dropdown-item">
          <img src="${item.img}" alt="${item.name}">
          <div class="dropdown-info">
            <span class="name">${item.name}</span>
            <span class="price">₹${item.price} × ${item.qty}</span>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">&times;</button>
        </div>`
    )
    .join("");
}

// ====================== INIT ======================
updateWishlistUI();
updateCartUI();
applyFilters(); // ✅ ensures first load shows all

