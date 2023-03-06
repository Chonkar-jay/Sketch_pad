function createGrid(x) {
    var container = document.getElementById("container");
    for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        container.appendChild(newDiv);
      };
    };
    var gridItems = document.querySelectorAll(".grid");
    gridItems.forEach(function(item) {
      item.style.width = (960/x) + "px";
      item.style.height = (960/x) + "px";
    });
  };

  function clearGrid() {
    var gridItems = document.querySelectorAll(".grid");
    gridItems.forEach(function(item) {
      item.remove();
    });
  };

  function refreshGrid() {
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
  };

  document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);

    var gridItems = document.querySelectorAll(".grid");
    gridItems.forEach(function(item) {
      item.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
      });
    });

    var newGridButton = document.querySelector(".newGrid");
    newGridButton.addEventListener("click", function() {
      refreshGrid();

      var gridItems = document.querySelectorAll(".grid");
      gridItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
          this.style.backgroundColor = "black";
        });
      });
    });
  });