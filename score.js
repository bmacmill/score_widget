//make a score area
let scoreOne = 0
let score1 = document.getElementById("score1")
// score area player 2
let scoreTwo = 0
let score2 = document.getElementById("score2")


function addOneScore1(){
    scoreOne ++
    score1.textContent = scoreOne
    console.log(scoreOne)
}

function addTwoScore1(){
    scoreOne += 2
    score1.textContent = scoreOne
    console.log(scoreOne)
}

function addThreeScore1(){
    scoreOne += 3
    score1.textContent = scoreOne
    console.log(scoreOne)
}

function addOneScore2(){
    scoreTwo ++
    score2.textContent = scoreTwo
    console.log(scoreTwo)
}

function addTwoScore2(){
    scoreTwo += 2
    score2.textContent = scoreTwo
    console.log(scoreTwo)
}

function addThreeScore2(){
    scoreTwo += 3
    score2.textContent = scoreTwo
    console.log(scoreTwo)
}

function resetScores(){
    score1.textContent = 0
    score2.textContent = 0
}