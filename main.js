document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".column");

  columns.forEach((column) => {
    column.addEventListener("dragover", handleDragOver);
    column.addEventListener("drop", handleDrop);
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("dragstart", handleDragStart);
    card.addEventListener("dragend", handleDragEnd);
  });
});

function handleDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData("text");
  const card = document.getElementById(cardId);
  event.currentTarget.appendChild(card);
}

function handleDragEnd(event) {
  event.target.style.opacity = "1";
}
