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
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  const items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

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

displayItems();