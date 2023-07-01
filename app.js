const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices= document.querySelectorAll('button')
let userChoice
let computerChoice
let finalResult
possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=>{
    userChoice= e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    getresult()
}))
function generateComputerChoice() {
  const randomNumber= Math.floor(Math.random() *3)+1

  if (randomNumber===1) {
    computerChoice= 'rock'
  }
  if (randomNumber===2) {
    computerChoice= 'paper'
  }
  if (randomNumber===3) {
    computerChoice= 'scissors'
  }
  computerChoiceDisplay.innerHTML= computerChoice

}
   function getresult()
   {
    if (computerChoice===userChoice ) {
finalResult= "It is a tie"
    }
    if (userChoice==='rock' && computerChoice==='paper' ) {
      finalResult= "you lose."
          }
          if (computerChoice === 'rock' && userChoice === "paper") {
            finalResult = 'you win!'
          }

          if (computerChoice === 'rock' && userChoice === "scissors") {
            finalResult = 'you lost!'
          }
          if (computerChoice === 'paper' && userChoice === "scissors") {
            finalResult = 'you win!'
          }
          if (computerChoice === 'paper' && userChoice === "rock") {
            finalResult = 'you lose!'
          }
          if (computerChoice === 'scissors' && userChoice === "rock") {
            finalResult = 'you win!'
          }
          if (computerChoice === 'scissors' && userChoice === "paper") {
            finalResult = 'you lose!'
          }
    resultDisplay.innerHTML= finalResult
   }