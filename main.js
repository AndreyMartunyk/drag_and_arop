const list_items = document.querySelectorAll(".list-item");
const columns = document.querySelectorAll(".list");

const LIGHT_OPACITY = 0.3;
const DARK_OPACITY = 0.6;

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", function() {
    draggedItem = item;
    setTimeout(function() {
      item.style.opacity = "0";
    }, 100);
  });

  item.addEventListener("dragend", function() {
    setTimeout(function() {
      item.style.opacity = "1";
      draggedItem = null;
    }, 0);
  });

}

for (let j = 0; j < columns.length; j++) {
  const column = columns[j];

  column.addEventListener("dragover", function(event) {
    event.preventDefault();
    this.style.backgroundColor = `rgba(0, 0, 0, ${DARK_OPACITY})`;

    if (event.target.className === "list-item") {
      if (column.lastElementChild === event.target) {
        this.appendChild(draggedItem);
      }
      else{
        this.insertBefore(draggedItem, event.target);
      }
    }

  });

  column.addEventListener("dragenter", function(event) {
    event.preventDefault();

  });

  column.addEventListener("dragleave", function() {
    this.style.backgroundColor = `rgba(0, 0, 0, ${LIGHT_OPACITY})`;
  });

  column.addEventListener("drop", function(event) {
    this.style.backgroundColor = `rgba(0, 0, 0, ${LIGHT_OPACITY})`;

    if (event.target.className === "list-item") {
      this.insertBefore(draggedItem, event.target);
    }
    else if(event.target.className === "list")  {
      this.appendChild(draggedItem);
    }
  });
}
