console.log('Tic Tac Toe');

let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const checkWin = () => {
    let boxes = document.getElementsByClassName("box");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (
            boxes[e[0]].innerText !== "" &&
            boxes[e[0]].innerText === boxes[e[1]].innerText &&
            boxes[e[1]].innerText === boxes[e[2]].innerText
        ) {
            document.getElementsByClassName("info")[0].innerText =
                boxes[e[0]].innerText + " won!";
            gameover = true;
        }
    });
};

let boxes = document.getElementsByClassName("item");
Array.from(boxes).forEach((element, index) => {
    let box = element.querySelector(".box");
    element.addEventListener("click", () => {
        if (box.innerText === "" && !gameover) {
            box.innerText = turn;
            checkWin();
            if (!gameover) {
                turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText =
                    "Turn for " + turn;
            }
        }
    });
});
 reset.addEventListener("click" , (element)=>{
let boxtexts = element.getElementsByClassName("box")
boxtexts.innerText = ""
 })