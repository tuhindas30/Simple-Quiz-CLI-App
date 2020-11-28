const readlineSync = require("readline-sync");
const chalk = require("chalk");
var userName = readlineSync.question("Hey, what's your name? ");
console.log("\n");
console.log(chalk.bgYellow("Hi! " + userName + ", Welcome to the Quiz"));
console.log("\n");
var quiz = [
    {
        question: "How many zeros are there in the number one trillion ? (In words) ",
        answer: "Twelve"
    },
    {
        question: "What is a young sheep called ? ",
        answer: "Lamb"
    },
    {
        question: "How many weeks are in a year ? (In words) ",
        answer: "Fifty Two"
    },
    {
        question: "In what country is the Great Barrier Reef ? ",
        answer: "Australia"
    },
    {
        question: "What does water turn into when it is frozen solid ? ",
        answer: "Ice"
    },
    {
        question: "Name the largest planet in our solar system ",
        answer: "Jupiter"
    },
    {
        question: "What is the biggest ocean on Earth ? ",
        answer: "Pacific"
    },
    {
        question: "Which one of these is a fish: A shark, a whale or a dolphin ? ",
        answer: "Shark"
    },
    {
        question: "What do we call someone who travels to space in a rocket ? ",
        answer: "Astronaut"
    },
    {
        question: "How many colours are there in the rainbow ? (In words) ",
        answer: "Seven"
    },
    {
        question: "What do caterpillars turn into ? ",
        answer: "Butterflies"
    },
    {
        question: "In what country are the pyramids ? ",
        answer: "Egypt"
    },
    {
        question: "What is the tallest animal in the world ? ",
        answer: "Giraffe"
    },
    {
        question: "Paris is the capital city of which country ? ",
        answer: "France"
    },
    {
        question: "Where is the tallest building located ? ",
        answer: "Dubai"
    }
];
var highScores =
{
    name: "Tuhin",
    score: "15"
};
var score = 0;
function playQuiz(question, answer) {
    currentAnswer = readlineSync.question(question);
    console.log("\n");
    if (currentAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.green("Yay!! You are right "));
        score++;
    } else {
        console.log(chalk.bgRed("Nope... You are wrong :( "));
    }
    console.log("Correct answer : " + answer);
    console.log(chalk.bgBlue("Your Current Score : " + score));
    if (score === 5) {
        console.log(chalk.yellowBright("Hurray!! You levelled up to 2"));
    }
    if (score === 10) {
        console.log(chalk.yellowBright("Hurray!! You levelled up to 3"));
    }

    console.log("-----------------");
}
for (var i = 0; i < quiz.length; i++) {
    playQuiz(quiz[i].question, quiz[i].answer);
    console.log("\n");
}
if (score === 15) {
    console.log(chalk.yellowBright("Hurray!! You scored highest"));
}
console.log(chalk.bgRed("Other high scorers : "));
console.log("Name : " + highScores.name);
console.log("Score : " + highScores.score);
console.log("-----------------");