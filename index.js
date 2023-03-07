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
    createGrid(24);

    var gridItems = document.querySelectorAll(".grid");
    color = document.getElementById('pick');
     //var gridItems = document.getElementsById('pick').value= "#FF8040";
     gridItems.forEach(function(item) {
      color = document.getElementById('pick');
      item.addEventListener("mouseover", function() {
      this.style.backgroundColor = color.value;
      });
    });
    //   const color = document.getElementById('favcolor').value;
    //   document.querySelectorAll(".row").forEach(function(row) {
    //   row.addEventListener("mouseover", function() {
    //     this.style.backgroundColor = color;
    //   });
    // });

    var newGridButton = document.querySelector(".newGrid");
    newGridButton.addEventListener("click", function() {
      refreshGrid();

      var gridItems = document.querySelectorAll(".grid");
      gridItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
          this.style.backgroundColor = color.value;
        });
      });
    });
  });
function erase_color()
{
  container.addEventListener("mouseover",e => {
    e.target.style.backgroundColor = null;
  })
}


