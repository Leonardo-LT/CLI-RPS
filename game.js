const options = ["ROCK", "PAPER", "SCISSORS"];

const buttons = document.querySelectorAll("button")
const container = document.getElementsByClassName("container")[0]
const PC = document.getElementById("pc")
const PLAYER = document.getElementById("player")
const TIE = document.getElementById("tie")

const getComputerChoice = () => {
    idx = Math.floor(Math.random() * 3);

    return options[idx];
};

const playRound = (playerSelection, computerChoice) => {
    playerSelection = playerSelection.toUpperCase()

    if (computerChoice == "ROCK") {
        if (playerSelection == "SCISSORS") {
            return false
        } else if(playerSelection == "PAPER") {
            return true
        }
    }

    if (computerChoice == "PAPER") {
        if (playerSelection == "SCISSORS") {
            return true
        } else if(playerSelection == "ROCK") {
            return false
        }
    }

    if (computerChoice == "SCISSORS") {
        if (playerSelection == "ROCK") {
            return true
        } else if(playerSelection == "PAPER") {
            return false
        }
    }
}

const createPopup = (text) => {
    const popupContainer = document.createElement("div")
    popupContainer.classList.toggle("popupContainer")
    popupContainer.textContent = text
    container.appendChild(popupContainer)
    
}

const game = () =>{
    let player = 0
    let pc = 0
    let i = 0
    let tie = 0
    let gameFinished = false

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => { 
            
            if (i < 5) {
                playerSelection = button.getAttribute("id")

                let result = playRound(playerSelection , getComputerChoice())

                if(result==true){
                    player++
                    PLAYER.textContent = `${player}`
                }else if(result== false){
                    pc++
                    PC.textContent = `${pc}`
                } else {
                    tie++
                    TIE.textContent = `${tie}`
                }

            } else {
                if(player>pc && !gameFinished){
                    createPopup(`You won!`)
                } else if(!gameFinished) {
                    createPopup(`You Lose!`)
                }
                gameFinished = true
            }
            i++
            
        })
    })
}

game()