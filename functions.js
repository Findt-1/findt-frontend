const expectedEmail = "findtinteracao2@test.com";
const expectedPassword = "admin";

// localStorage.setItem('isLoggedIn', false);
let isLoggedIn = localStorage.getItem('isLoggedIn');

function addItem() {
  const newItem = document.getElementById("item").value.trim();
  if (newItem === "") {
      alert("Please enter an item.");
      return;
  }

  let items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));

  document.getElementById("item").value = "";
  displayItems();
}

function displayItems() {
  const items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  if(items.length === 0) return;
  
  items.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      itemList.appendChild(li);
  });
}

function searchItem() {
  const searchName = document.getElementById("searchItem").value.trim();
  if (searchName === "") {
      alert("Please enter a search term.");
      return;
  }

  const items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
  const matchingItems = items.filter(item => item.includes(searchName));

  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  matchingItems.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      itemList.appendChild(li);
  });
}

function showAllItems() {
  const searchInput = document.getElementById("searchItem");
  searchInput.value = "";
  displayItems();
}

function validateForm() {


  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  alert('Login successful!');

  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;

  if (email === expectedEmail && senha === expectedPassword) {
      localStorage.setItem('isLoggedIn', true);
      window.location.href = "/";
      alert("Login successful!");
    } else {
      alert("Login failed. Please check your credentials.");
      localStorage.setItem('isLoggedIn', false);
  }
}

function accessProtectedRoute() {
  const itemList = document.getElementById("itemList");
  if (isLoggedIn) {
    if(localStorage.getItem("items") && itemList.innerHTML === "") {
      displayItems();
    } 
  } else {
    alert("You do not have access to the protected route. Please login first.");
    window.location.href = "/pages/login.html";
  }
}

// if(window.location.pathname !== "/pages/login.html" && window.location.pathname !== "/pages/register.html" && isLoggedIn) {
//   accessProtectedRoute()
// }
