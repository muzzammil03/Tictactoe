
//NewGame button
var newgame = document.querySelector("#b");
//Grabs all squares
var squares = document.querySelectorAll('td');

//Clear all the squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}
newgame.addEventListener('click', clearBoard);

//Check the square marker
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}
//For Loop to add event listener to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker)
}

