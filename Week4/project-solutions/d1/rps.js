const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let wins = 0;
let losses = 0;
let ties = 0;

const wins = {r: 's', p: 's', s: 'p'};
const validMoves = ['r', 'p', 's'];


function printHelp() {
    console.log("  Type 'r' for Rock");
    console.log("  Type 'p' for Paper");
    console.log("  Type 's' for Scissors");
    console.log("  Type 'q' to quit\n");
}

function processCommands(cmd, cpu) {
    if (cmd === cpu) return 0;  // tie
    else if (wins[cmd] === cpu) return 1;  // win
    else return 0;  // loss
}

function getCPUMove() {
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    return validMoves[randomIndex];
}


function processCommand() {

    console.log(`${wins} - ${losses} - ${ties}`);

    rl.question('> ', (cmd) => {
        cmd = cmd.toLowerCase();

        cpu = getCPUMove();

        console.log(`You pick ${cmd}, computer picks ${cpu}.`)

        if (cmd === 'h') {

            console.log("Help:\n");
            printHelp();

        } else if (cmd === 'q') {

            rl.close();
            return;

        } else if (validMoves.indexOf(cmd) > 0) {

            let result = processCommand(cmd, cpu);
            if (result === 0) {
                console.log("You tie.\n");
                ties++;
            } else if (result === 1) {
                console.log("You win!\n");
                wins++;
            } else {
                console.log("You lose...\n");
                losses++;
            }

        } else {
            console.log("Invalid command.\n");
            printHelp();
        }

        processCommand();
    });
}

console.log("Welcome to Rock/Paper/Scissors\n");

processCommand();

