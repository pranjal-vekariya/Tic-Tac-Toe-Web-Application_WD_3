let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("reset");
let newgamebtn = document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true; //playerX, playerY

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = () => {
    turn0 = true;
    anableboxes()
    msgcontainer.classList.add("hide")
}

boxes.forEach((box => {
    box.addEventListener("click", () => {

        if (turn0) {
            //player0
            box.innerText = "0";
            turn0 = false;
        } else {
            //playerx
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner()
    });
}));

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const anableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
};

const showWinner = (winner) => {
    msg.innerText = ` congratulation winner is  ${winner} `
    msgcontainer.classList.remove("hide")
    disableboxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {

        let post1val = boxes[pattern[0]].innerText
        let post2val = boxes[pattern[1]].innerText
        let post3val = boxes[pattern[2]].innerText

        if (post1val != "" && post2val != "" && post3val != "") {
            if (post1val === post2val && post2val === post3val) {


                showWinner(post1val);
            }
        }
    }
}

newgamebtn.addEventListener("click", resetgame)
reset.addEventListener("click", resetgame)
