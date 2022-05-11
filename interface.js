document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleclick);

    })
})
function handleclick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O jogo acabou- o vencedor foi " + playertime);
        }, 10);

    };
    updateSquare(position);


}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
    

}