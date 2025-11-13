
// ---------- Product Data (6 categories × 6 products) ----------
const products = [
  // ----- Mobile -----
  { id: "Mobile-1", name: "iPhone 15 Pro", category: "Mobile", brand: "Apple", price: 1299, rating: 4.9, stock: "In Stock", popular: true, img: "Images1/mobile1.webp" },
  { id: "Mobile-2", name: "Samsung Galaxy S24", category: "Mobile", brand: "Samsung", price: 1099, rating: 4.7, stock: "In Stock", popular: true, img: "Images1/mobile2.webp" },
  { id: "Mobile-3", name: "Asus ROG Phone 7", category: "Mobile", brand: "Asus", price: 899, rating: 4.6, stock: "In Stock", popular: false, img: "Images1/mobile3.webp" },
  { id: "Mobile-4", name: "Sony Xperia 1 V", category: "Mobile", brand: "Sony", price: 999, rating: 4.5, stock: "Out of Stock", popular: false, img: "Images1/mobile4.webp" },
  { id: "Mobile-5", name: "OnePlus 12", category: "Mobile", brand: "LG", price: 799, rating: 4.4, stock: "In Stock", popular: true, img: "Images1/mobile5.webp" },
  { id: "Mobile-6", name: "Google Pixel 8", category: "Mobile", brand: "Lenovo", price: 899, rating: 4.8, stock: "In Stock", popular: false, img: "Images1/mobile6.webp" },

  // ----- Laptop -----
  { id: "Laptop-1", name: "MacBook Pro M3", category: "Laptop", brand: "Apple", price: 2399, rating: 4.9, stock: "In Stock", popular: true, img: "Images1/laptop1.webp" },
  { id: "Laptop-2", name: "Asus ZenBook 14", category: "Laptop", brand: "Asus", price: 1199, rating: 4.6, stock: "In Stock", popular: false, img: "Images1/laptop2.webp" },
  { id: "Laptop-3", name: "Dell XPS 15", category: "Laptop", brand: "Lenovo", price: 1799, rating: 4.7, stock: "In Stock", popular: true, img: "Images1/laptop3.webp" },
  { id: "Laptop-4", name: "HP Spectre x360", category: "Laptop", brand: "LG", price: 1499, rating: 4.5, stock: "Out of Stock", popular: false, img: "Images1/laptop4.webp" },
  { id: "Laptop-5", name: "Acer Predator Helios", category: "Laptop", brand: "Asus", price: 1599, rating: 4.6, stock: "In Stock", popular: true, img: "Images1/laptop5.webp" },
  { id: "Laptop-6", name: "Samsung Galaxy Book3", category: "Laptop", brand: "Samsung", price: 1399, rating: 4.4, stock: "In Stock", popular: false, img: "Images1/laptop6.webp" },

  // ----- Camera -----
  { id: "Camera-1", name: "Canon EOS R7", category: "Camera", brand: "Sony", price: 1499, rating: 4.8, stock: "In Stock", popular: true, img: "Images1/camera1.webp" },
  { id: "Camera-2", name: "Nikon Z6 II", category: "Camera", brand: "LG", price: 1799, rating: 4.7, stock: "In Stock", popular: false, img: "Images1/camera2.webp" },
  { id: "Camera-3", name: "Sony Alpha A7 IV", category: "Camera", brand: "Sony", price: 1999, rating: 4.9, stock: "In Stock", popular: true, img: "Images1/camera3.webp" },
  { id: "Camera-4", name: "Fujifilm X-T5", category: "Camera", brand: "Samsung", price: 1599, rating: 4.5, stock: "Out of Stock", popular: false, img: "Images1/camera4.webp" },
  { id: "Camera-5", name: "Panasonic Lumix G9", category: "Camera", brand: "Apple", price: 1399, rating: 4.4, stock: "In Stock", popular: false, img: "Images1/camera5.webp" },
  { id: "Camera-6", name: "GoPro Hero 12", category: "Camera", brand: "Asus", price: 499, rating: 4.6, stock: "In Stock", popular: true, img: "Images1/camera6.webp" },

  // ----- Accessories -----
  { id: "Accessories-1", name: "Apple AirPods Pro 2", category: "Accessories", brand: "Apple", price: 299, rating: 4.8, stock: "In Stock", popular: true, img: "Images1/accessories1.webp" },
  { id: "Accessories-2", name: "Sony WH-1000XM5", category: "Accessories", brand: "Sony", price: 399, rating: 4.9, stock: "In Stock", popular: true, img: "Images1/accessories2.webp" },
  { id: "Accessories-3", name: "Logitech MX Master 3S", category: "Accessories", brand: "LG", price: 99, rating: 4.7, stock: "In Stock", popular: false, img: "Images1/accessories3.webp" },
  { id: "Accessories-4", name: "Samsung Galaxy Buds2", category: "Accessories", brand: "Samsung", price: 199, rating: 4.5, stock: "Out of Stock", popular: false, img: "Images1/accessories4.webp" },
  { id: "Accessories-5", name: "Anker PowerCore 20K", category: "Accessories", brand: "Lenovo", price: 59, rating: 4.3, stock: "In Stock", popular: false, img: "Images1/accessories5.webp" },
  { id: "Accessories-6", name: "Apple MagSafe Charger", category: "Accessories", brand: "Apple", price: 129, rating: 4.6, stock: "In Stock", popular: true, img: "Images1/accessories6.webp" },

  // ----- Gaming -----
  { id: "Gaming-1", name: "Sony PlayStation 5", category: "Gaming", brand: "Sony", price: 599, rating: 4.9, stock: "In Stock", popular: true, img: "Images1/game1.webp" },
  { id: "Gaming-2", name: "Xbox Series X", category: "Gaming", brand: "LG", price: 549, rating: 4.8, stock: "In Stock", popular: true, img: "Images1/game2.webp" },
  { id: "Gaming-3", name: "Nintendo Switch OLED", category: "Gaming", brand: "Samsung", price: 399, rating: 4.7, stock: "In Stock", popular: true, img: "Images1/game3.webp" },
  { id: "Gaming-4", name: "Asus ROG Ally", category: "Gaming", brand: "Asus", price: 699, rating: 4.6, stock: "Out of Stock", popular: false, img: "Images1/game4.webp" },
  { id: "Gaming-5", name: "Razer BlackWidow V4", category: "Gaming", brand: "Lenovo", price: 179, rating: 4.5, stock: "In Stock", popular: false, img: "Images1/game5.webp" },
  { id: "Gaming-6", name: "Logitech G Pro X", category: "Gaming", brand: "Apple", price: 199, rating: 4.7, stock: "In Stock", popular: true, img: "Images1/game6.webp" },

  // ----- Home -----
  { id: "Home-1", name: "Wooden Sofa", category: "Home", brand: "Wood", price: 499, rating: 4.8, stock: "In Stock", popular: true, img: "Images1/home1.webp" },
  { id: "Home-2", name: "Dining Table", category: "Home", brand: "Wood", price: 999, rating: 4.7, stock: "In Stock", popular: true, img: "Images1/home2.webp" },
  { id: "Home-3", name: "Dining Table", category: "Home", brand: "Wood", price: 1099, rating: 4.6, stock: "In Stock", popular: false, img: "Images1/home3.webp" },
  { id: "Home-4", name: "Modern Sofa", category: "Home", brand: "Wood", price: 799, rating: 4.7, stock: "In Stock", popular: true, img: "Images1/home4.webp" },
  { id: "Home-5", name: "Wooden Bed", category: "Home", brand: "Wood", price: 149, rating: 4.6, stock: "In Stock", popular: false, img: "Images1/home5.webp" },
  { id: "Home-6", name: "Modern Wooden Bed", category: "Home", brand: "Wood", price: 199, rating: 4.5, stock: "In Stock", popular: false, img: "Images1/home6.webp" },
];



// ---------- DOM References ----------
// ---------- DOM References ----------
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const sortSelect = document.getElementById("sortSelect");
const pagination = document.getElementById("pagination");
const wishlistCount = document.getElementById("wishlistCount");
const cartCount = document.getElementById("cartCount");
const wishlistItems = document.getElementById("wishlistItems");
const cartItems = document.getElementById("cartItems");
const emptyWishlist = document.getElementById("emptyWishlist");
const emptyCart = document.getElementById("emptyCart");

let wishlist1 = [];
let cart1 = [];
let currentPage = 1;
const perPage = 12;

// ---------- Display Products ----------
function displayProducts(list) {
  productContainer.innerHTML = list
    .map(
      (p) => `
    <div class="product-card">
      <span class="badge ${p.popular ? "hot" : "sale"}">${p.popular ? "Hot" : "-6%"}</span>
      <img src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="rating">${getStars(p.rating)} <span>(${p.rating})</span></div>
        <p class="price">$${p.price}</p>
        <p class="status ${p.stock === "In Stock" ? "in" : "out"}">${p.stock}</p>
      </div>
      <div class="actions">
        <button class="cart-btn" onclick="addToCart1('${p.id}')"><i class="fa fa-cart-plus"></i></button>
        <button class="wish-btn" onclick="addToWishlist1('${p.id}')"><i class="fa fa-heart"></i></button>
      </div>
    </div>`
    )
    .join("");
}

// ---------- Filter + Sort + Pagination ----------
function applyFilters() {
  let filtered = [...products];

  const checkedRating = document.querySelector(".ratingFilter:checked");
  if (checkedRating && checkedRating.value !== "all") {
    filtered = filtered.filter((p) => p.rating >= parseFloat(checkedRating.value));
  }

  const search = searchInput.value.toLowerCase();
  if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search));

  const maxPrice = +priceRange.value;
  filtered = filtered.filter((p) => p.price <= maxPrice);

  const brandFilters = [...document.querySelectorAll(".brandFilter:checked")].map((b) => b.value);
  if (brandFilters.length) filtered = filtered.filter((p) => brandFilters.includes(p.brand));

  const catFilters = [...document.querySelectorAll(".catFilter:checked")].map((c) => c.value);
  if (catFilters.length) filtered = filtered.filter((p) => catFilters.includes(p.category));

  const sort = sortSelect.value;
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  else filtered.sort((a, b) => b.popular - a.popular);

  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  displayProducts(paginated);
  setupPagination(totalPages);
  document.getElementById("totalResults").textContent = filtered.length;
}

function setupPagination(totalPages) {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      applyFilters();
      window.scrollTo(0, 0);
    });
    pagination.appendChild(btn);
  }
}

function getStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(5 - fullStars - (halfStar ? 1 : 0));
}

// ---------- Wishlist1 & Cart1 ----------
function addToWishlist1(id) {
  const product = products.find((p) => p.id === id);
  if (!wishlist1.some((item) => item.id === id)) wishlist1.push(product);
  saveData1();
  updateWishlistUI1();
}

function addToCart1(id) {
  const product = products.find((p) => p.id === id);
  if (!cart1.some((item) => item.id === id)) cart1.push(product);
  saveData1();
  updateCartUI1();

  // ✅ Show "Product added" message below the Add to Cart button
  const btn = document.querySelector(`button[onclick="addToCart1('${id}')"]`);
  if (btn) {
    // Remove old message if exists
    const oldMsg = btn.parentElement.querySelector(".added-msg");
    if (oldMsg) oldMsg.remove();

    // Create new message element
    const msg = document.createElement("div");
    msg.className = "added-msg";
    msg.textContent = "✅ Product added to cart!";
    btn.insertAdjacentElement("afterend", msg);

    // Fade out and remove after 2 seconds
    setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 500);
    }, 3000);
  }
}

function updateWishlistUI1() {
  wishlistItems.innerHTML = "";
  if (!wishlist1.length) {
    emptyWishlist.style.display = "block";
  } else {
    emptyWishlist.style.display = "none";
    wishlist1.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p>${item.name}</p>
        <i class="fa fa-trash" style="color:#ff4757;cursor:pointer"></i>
      `;
      li.querySelector(".fa-trash").addEventListener("click", () => removeFromWishlist1(item.id));
      wishlistItems.appendChild(li);
    });
  }
  wishlistCount.textContent = wishlist1.length;
}

function updateCartUI1() {
  cartItems.innerHTML = "";
  let total = 0;

  if (!cart1.length) {
    emptyCart.style.display = "block";
    document.getElementById("cartCheckout").style.display = "none";
  } else {
    emptyCart.style.display = "none";
    document.getElementById("cartCheckout").style.display = "block";

    cart1.forEach((item) => {
      total += item.price;

      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}" style="width:50px; height:50px; object-fit:cover; margin-right:10px;">
        <div class="cart-item-info" style="display:inline-block; vertical-align:top;">
          <p style="margin:0;">${item.name}</p>
          <p style="margin:0;">$${item.price}</p>
        </div>
        <i class="fa fa-trash" style="color:#ff4757;cursor:pointer; float:right; margin-top:10px;"></i>
      `;
      li.querySelector(".fa-trash").addEventListener("click", () => removeFromCart1(item.id));
      cartItems.appendChild(li);
    });
  }

  cartCount.textContent = cart1.length;
  document.getElementById("cartTotal").textContent = total.toFixed(2);
}

function removeFromWishlist1(id) {
  wishlist1 = wishlist1.filter((item) => item.id !== id);
  saveData1();
  updateWishlistUI1();
}

function removeFromCart1(id) {
  cart1 = cart1.filter((item) => item.id !== id);
  saveData1();
  updateCartUI1();
}

// ---------- LocalStorage ----------
function saveData1() {
  localStorage.setItem("wishlist1", JSON.stringify(wishlist1));
  localStorage.setItem("cart1", JSON.stringify(cart1));
}

function loadData1() {
  wishlist1 = JSON.parse(localStorage.getItem("wishlist1")) || [];
  cart1 = JSON.parse(localStorage.getItem("cart1")) || [];
  updateWishlistUI1();
  updateCartUI1();
}

// ---------- Checkout ----------
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if(cart1.length === 0){
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "checkout1.html"; 
});

// ---------- Dropdown Flicker Fix ----------
document.querySelectorAll(".icon-item").forEach((icon) => {
  const dropdown = icon.querySelector(".dropdown-panel");
  if (!dropdown) return;

  let timeout;
  icon.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    dropdown.style.display = "block";
  });
  icon.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      dropdown.style.display = "none";
    }, 200);
  });
});

// ---------- Event Listeners ----------
searchInput.addEventListener("input", () => {
  currentPage = 1;
  applyFilters();
});

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  currentPage = 1;
  applyFilters();
});

document.querySelectorAll(".brandFilter, .catFilter, .ratingFilter").forEach((f) =>
  f.addEventListener("change", () => {
    currentPage = 1;
    applyFilters();
  })
);

sortSelect.addEventListener("change", () => {
  currentPage = 1;
  applyFilters();
});

// ---------- Initialize ----------
applyFilters();
loadData1();

