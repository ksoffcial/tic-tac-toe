const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector("#resetBtn")
const newGame = document.querySelector("#newGame")
const winText = document.querySelector("#winner")
const mainCont = document.querySelector("#main")
const winCont = document.querySelector("#winCont")

let paler_x = true;

let winNmbr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


let palyCount = 0;
// To acess all indivisual box and display the text in the box 
boxes.forEach((box, idx) => {
    box.addEventListener('click', () => {
        if (paler_x) {
            box.innerText = "X";
            box.style.color = "red"
            paler_x = false;
        } else {
            box.innerText = "0";
            box.style.color = "blue"
            paler_x = true;
        }
        palyCount++;
        console.log(palyCount)
        let getwinner = getWinner();

        // to check the draw condition 
        if (palyCount === 9 && !getwinner) {
            drawGame();
        }
    })

})

// to start the new game
newGame.addEventListener("click", () => {
    mainCont.style.display = "flex"
    winCont.style.display = "none"
    for (let box of boxes) {
        box.innerText = ""
    }
})


// to display the draw condition 
const drawGame = () => {
    winText.innerText = `Game has draw 😷`;
    mainCont.style.display = "none"
    winCont.style.display = "flex"
    palyCount = 0;
}

// To display the winner 
const showWinnner = (winner) => {
    winText.innerText = `congratulations ${winner} is a winner!🎉`;
    mainCont.style.display = "none"
    winCont.style.display = "flex"
    palyCount = 0;
}


// checking the condition of the winner 
const getWinner = () => {
    for (let nmbr of winNmbr) {
        let play1 = boxes[nmbr[0]].innerText;
        let play2 = boxes[nmbr[1]].innerText;
        let play3 = boxes[nmbr[2]].innerText;

        if (play1 != "" && play2 != "" && play3 != "") {
            if (play1 === play2 && play2 === play3) {
                showWinnner(play1)
                return true;
            }
        }
    }
}

resetBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""
    }
    palyCount = 0;
})


