const ALL_TABLE_ELEMENTS = document.querySelectorAll(".game_board th button");
const RED_BT = document.querySelector("#team_red_bt");
const BLUE_BT = document.querySelector("#team_blue_bt");
const NEUTRAL_BT = document.querySelector("#neutral_bt");
const DEATH_BT = document.querySelector("#death_bt");
const NEW_GAME_BT = document.querySelector("#new_game_bt");
const START_GAME_BT = document.querySelector("#start_game_bt");
const CLEAR_BT = document.querySelector("#clear_bt");
const GENERATE_BT = document.querySelector("#generate_bt");

var selected = null;

function initialSetUp() {
    disableBoard(true);
    document.querySelector("#game_title").innerHTML = "Code Names";
    START_GAME_BT.disabled = false;
    NEW_GAME_BT.disabled = false;
    RED_BT.disabled = true;
    BLUE_BT.disabled = true;
    NEUTRAL_BT.disabled = true;
    DEATH_BT.disabled = true;
}

// This function takes in a boolean whether to disable or enable
// all the buttons on the game board
function disableBoard(cond) {
    for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
        ALL_TABLE_ELEMENTS[i].disabled = cond;
    }
}

function generateBoad() {
    let chosen = [];
    for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
        let word = word_bank[Math.floor(Math.random() * word_bank.length)];
        while (chosen.includes(word)) {
            word = word_bank[Math.floor(Math.random() * word_bank.length)];
        }
        chosen.push(word);
        ALL_TABLE_ELEMENTS[i].innerHTML = word;
        ALL_TABLE_ELEMENTS[i].style.backgroundColor = "";
    }
}

function blue_trigger(e) {
    BLUE_BT.disabled = true;
    RED_BT.disabled = true;
    NEUTRAL_BT.disabled = true;
    DEATH_BT.disabled = true;
    disableBoard(false);
    selected.style = "background-color: blue";
}

function red_trigger(e) {
    BLUE_BT.disabled = true;
    RED_BT.disabled = true;
    NEUTRAL_BT.disabled = true;
    DEATH_BT.disabled = true;
    disableBoard(false);
    selected.style = "background-color: red";
}

function neutral_trigger(e) {
    BLUE_BT.disabled = true;
    RED_BT.disabled = true;
    NEUTRAL_BT.disabled = true;
    DEATH_BT.disabled = true;
    disableBoard(false);
    selected.style = "background-color: grey";
}

function death_trigger(e) {
    BLUE_BT.disabled = true;
    RED_BT.disabled = true;
    NEUTRAL_BT.disabled = true;
    DEATH_BT.disabled = true;
    disableBoard(true);
    selected.style = "background-color: black";
    document.querySelector("#game_title").innerHTML = "GAME OVER, WHAT A DISGRACE";
}

function word_selected(e) {
    selected = e.path[0];
    disableBoard(true);
    BLUE_BT.disabled = false;
    RED_BT.disabled = false;
    NEUTRAL_BT.disabled = false;
    DEATH_BT.disabled = false;
}

function new_game(e) {
    alert("The Game has now Started");
    initialSetUp();
    generateBoad();
    generateBoad();
    disableBoard(false);

}

function start_over(e) {
    alert("A New Game has now Started");
    initialSetUp();
    generateBoad();
    generateBoad();
    disableBoard(false);
}

function clear(e) {
    initialSetUp();
    for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
        ALL_TABLE_ELEMENTS[i].innerHTML = "";
    }
}

initialSetUp();

for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
    ALL_TABLE_ELEMENTS[i].addEventListener("click", word_selected, false);
}
BLUE_BT.addEventListener("click", blue_trigger, false);
RED_BT.addEventListener("click", red_trigger, false);
NEUTRAL_BT.addEventListener("click", neutral_trigger, false);
DEATH_BT.addEventListener("click", death_trigger, false);
START_GAME_BT.addEventListener("click", new_game, false);
NEW_GAME_BT.addEventListener("click", start_over, false);
CLEAR_BT.addEventListener("click", clear, false);
