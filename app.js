/* Tic Tac Toe - or Noughts or Crosses
Lab hints were as follows:
  1) console.log(event.target);  // returns cell clicked on
  2)console.log(event.target.textContent); // return what ever text is in that div
  3) event.target.textContent = "x"; // this places an X in the clicked div
Graphical key to cells
0:1:2
3:4:5
6:7:8  
*/

let cells = document.querySelectorAll(".row > div ");
let counter = 0;
//For loop runs once and adds a listen to each of the div.

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener(`click`, startPlaying);
}
let p = "x";
let a = p; // need this as cellClicked runs first
function startPlaying(a) {
  cellClicked(p);
  if (p === `x`) {
    p = `o`;
  } else {
    p = `x`;
  }
}
function cellClicked(a) {
  let playerPiece = a;
  let emptyCheck = event.target.textContent;
  if (emptyCheck === "" && playerPiece === `x`) {
    event.target.textContent = playerPiece;
    playerPiece = `o`;
    counter++;
    haveWeaWinner(counter);
  } else if (emptyCheck === "" && playerPiece === `o`) {
    event.target.textContent = playerPiece;
    playerPiece = `x`;
    counter++;
    haveWeaWinner(counter);
  } else {
    console.log(`Square filled already`);

    haveWeaWinner(counter);
  }
}

function haveWeaWinner(a) {
  let counterCheck = a;
  let h2Play = document.getElementById(`h2Play`);
  let cellCheck = document.querySelectorAll(".row > div");
  let winner = false;
  //Top Row 0,1,2
  if (
    cellCheck[0].textContent === `x` &&
    cellCheck[1].textContent === `x` &&
    cellCheck[2].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
    return false;
  } else if (
    cellCheck[0].textContent === `o` &&
    cellCheck[1].textContent === `o` &&
    cellCheck[2].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  }
  //Middle Row 3,4,5
  else if (
    cellCheck[3].textContent === `x` &&
    cellCheck[4].textContent === `x` &&
    cellCheck[5].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[3].textContent === `o` &&
    cellCheck[4].textContent === `o` &&
    cellCheck[5].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  }
  //Bottom Row 6,7,8
  else if (
    cellCheck[6].textContent === `x` &&
    cellCheck[7].textContent === `x` &&
    cellCheck[8].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[6].textContent === `o` &&
    cellCheck[7].textContent === `o` &&
    cellCheck[8].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  }
  //Left Vertical 0,3,6
  else if (
    cellCheck[0].textContent === `x` &&
    cellCheck[3].textContent === `x` &&
    cellCheck[6].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[0].textContent === `o` &&
    cellCheck[3].textContent === `o` &&
    cellCheck[6].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  }
  //Middle Vertical 1,4,7
  else if (
    cellCheck[1].textContent === `x` &&
    cellCheck[4].textContent === `x` &&
    cellCheck[7].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[1].textContent === `o` &&
    cellCheck[4].textContent === `o` &&
    cellCheck[7].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  } //Right Vertical 2,5,8
  else if (
    cellCheck[2].textContent === `x` &&
    cellCheck[5].textContent === `x` &&
    cellCheck[8].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[2].textContent === `o` &&
    cellCheck[5].textContent === `o` &&
    cellCheck[8].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  }
  //Left Diagonal 0, 4, 8
  else if (
    cellCheck[0].textContent === `x` &&
    cellCheck[4].textContent === `x` &&
    cellCheck[8].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[0].textContent === `o` &&
    cellCheck[4].textContent === `o` &&
    cellCheck[8].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  }
  //Right Diagonal 2, 4, 6
  else if (
    cellCheck[2].textContent === `x` &&
    cellCheck[4].textContent === `x` &&
    cellCheck[6].textContent === `x`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is X. Click here to play again!";
  } else if (
    cellCheck[2].textContent === `o` &&
    cellCheck[4].textContent === `o` &&
    cellCheck[6].textContent === `o`
  ) {
    winner = true;
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Winner is O. Click here to play again!";
  } else if (counterCheck === 9 && winner === false) {
    h2Play.style.visibility = "visible";
    h2Play.innerHTML = "Its a Draw! Click here to play again!";
  }
}
//Function is called from the H2 element in index.html
function newGame() {
  location.reload(); // Browser refreshes
}
