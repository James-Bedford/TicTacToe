let cells = document.querySelectorAll(".row > div ");
//For loop runs once and adds a listen to each of the div.
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener(`click`, cellClickeds);
}
let p = "x";
let a = p; // need this as cellClicked runs first
function cellClickeds(a) {
  cellClicked(p);
  if (p === `x`) {
    p = `o`;
  } else {
    p = `x`;
  }
  console.log(`fired ${p}`);
}
function cellClicked(a) {
  //console.log(event.target.textContent); // return what ever text is in that div
  //event.target.textContent = "x"; // this places an X in the clicked div
  let playerPiece = a; //swap("x"); //this is wrong dude
  let emptyCheck = event.target.textContent;
  if (emptyCheck === "" && playerPiece === `x`) {
    event.target.textContent = playerPiece;
    playerPiece = `o`;
  } else if (emptyCheck === "" && playerPiece === `o`) {
    event.target.textContent = playerPiece;
    playerPiece = `x`;
  } else {
    console.log(`Square filled already`);
    console.log(swap(playerPiece));
    console.log(event.target);
  }
}
