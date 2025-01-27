console.log("the game is for 5 matches who wins more will win")
const user1 = prompt("enter name of 1st person").toUpperCase();
const user2 = prompt("enter name of 2nd person").toUpperCase();
let point1 = 0;
let point2 = 0;
const match = () => {
    console.log(" Stone, Paper , Scissor")
    const FirstChoice = prompt("enter the Person1 choice").toLowerCase();
    const SecondChoice = prompt("enter the Person2 choice").toLowerCase();

    if (FirstChoice == "stone")
        if (SecondChoice == "paper") return console.log(`user 2 won and point are :${point2++}`)
        else if (SecondChoice == "scissor") return console.log(`user 1 won and point are :${point1++}`)
    else return console.log(`The game is tie and point for person1 ${point1} and for person2 is${point2}`)

    if (FirstChoice == "paper")
        if (SecondChoice == "scissor") return console.log(`user 2 won and point are :${point2++}`)
        else if (SecondChoice == "stone") return console.log(`user 1 won and point are :${point1++}`)
    else return console.log(`The game is tie and point for person1 ${point1} and for person2 is${point2}`)

    if (FirstChoice == "scissor")
        if (SecondChoice == "stone") return console.log(`user 2 won and point are :${point2++}`)
        else if (SecondChoice == "paper") return console.log(`user 1 won and point are :${point1++}`)
    else return console.log(`The game is tie and point for person1 ${point1} and for person2 is${point2}`)
}

let gamePlay = 0;
while (true) {
    gamePlay++;
    match();
    if (gamePlay === 5) {
        console.log(point1 > point2 ? `${user1} wins!` : `${user2} wins!`);
        const PlayAgain = prompt("do you want to play again. yes/no").toLowerCase();
        if (PlayAgain === "yes") {
            point1 = 0;
            point2 = 0;
            gamePlay = 0;
        } else {
            console.log("Thanks for playing!");
            break;
        }
    }
}