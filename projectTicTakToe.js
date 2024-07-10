// chapter number - 9
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let mssgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    mssgContainer.classList.add("hide")

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Hello World")
        // box.innerText = "hello"
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});



const disabledButton = () =>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congralulation , Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disabledButton()
};


const checkWinner = () =>{
    for (const pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" & pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)