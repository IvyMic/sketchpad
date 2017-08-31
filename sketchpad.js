//function to create the grid
function createGrid(gridSize){
  for (var row = 0; row < gridSize; row++) {
    for (var column = 0; column < gridSize; column++) {
      $('#container').append("<div class='square'></div>");
    }
  }
  $(".square").width(800/gridSize);
  $(".square").height(800/gridSize);
};

//function to remove any 'drawings'
function deleteWork(){
    $(".square").remove();
};

//function to create a new grid
function newGrid(){
  var gridSize = prompt("Please enter the grid size dimensions.\n(e.g enter '14' for a 14x14 grid)");
  deleteWork();
  createGrid(gridSize);
};
/*main function, allowing user to hover over square to change
colour of the square and therefore 'draw'. user can also
start again with any sized grid they want*/

$(document).ready(function(){
  createGrid(16);

  $('.square').mouseover(function(){
    $(this).css("background-color", "black");
  });

  $(".clearGrid").click(function(){
    newGrid();

    $('.square').mouseover(function(){
      $(this).css("background-color", "black");
    });

  });

});
