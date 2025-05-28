listElement = document.getElementById("list");
newListItem = document.createElement("li");
newListItem.textContent = "Item 3";
setTimeout(() => {
  listElement.appendChild(newListItem);
}
, 1000);
