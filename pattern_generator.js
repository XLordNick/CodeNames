const ALL_TABLE_ELEMENTS = document.querySelectorAll(".game_board th button");
const RED_FIRST_BT = document.querySelector("#red_bt");
const BLUE_FIRST_BT = document.querySelector("#blue_bt");
const REDO_BT = document.querySelector("#redo_bt");
const LEFT_BT = document.querySelector("#left_bt");
const RIGHT_BT = document.querySelector("#right_bt");

var blue_selected = false;
var red_selected = false;

function clear_board() {
    for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
        ALL_TABLE_ELEMENTS[i].style.backgroundColor = "";
    }
}

function red_generate() {
    generate_helper(8, 9);
}

function blue_generate() {
    generate_helper(9, 8);
}

function generate_helper(blue_spot, red_spot) {
    if (blue_spot == 9) {
        blue_selected = true;
        red_selected = false;
    } else {
        blue_selected = false;
        red_selected = true;
    }

    let black_generated = false;
    clear_board();
    while (blue_spot > 0 || red_spot > 0) {
        for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
            let temp = ALL_TABLE_ELEMENTS[i].style.backgroundColor;
            if (temp == "blue" || temp == "red" || temp == "black") {
                continue;
            }
            // Larger range for rand provided so that the pieces are more
            // likely to be spread out than clumped together
            let rand = Math.ceil(Math.random() * 20);
            if (red_spot > 0 && rand == 1) {
                ALL_TABLE_ELEMENTS[i].style.backgroundColor = "red";
                red_spot--;
            } else if (blue_spot > 0 && rand == 2) {
                ALL_TABLE_ELEMENTS[i].style.backgroundColor = "blue";
                blue_spot--;
            } else if (!black_generated && rand == 4) {
                ALL_TABLE_ELEMENTS[i].style.backgroundColor = "black";
                black_generated = true;
            } else {
                ALL_TABLE_ELEMENTS[i].style.backgroundColor = "grey";
            }
        }
    }
}

function regenerate() {
    if (blue_selected) {
        blue_generate();
    } else if (red_selected) {
        red_generate();
    }
}

function left_rotate() {
    let side = Math.floor(Math.sqrt(ALL_TABLE_ELEMENTS.length));
    let left = new Array();

    for (let i = 0; i < side; i++) {
        let temp = side - i - 1;
        for (let j = 0; j < side; j++) {
            left.push(ALL_TABLE_ELEMENTS[temp + j * side].style.backgroundColor);
        }
    }
    update_board(left);
}

function right_rotate() {
    let side = Math.floor(Math.sqrt(ALL_TABLE_ELEMENTS.length));
    let right = new Array();

    for (let i = 0; i < side; i++) {
        let temp = i + ALL_TABLE_ELEMENTS.length - side;
        for (let j = 0; j < side; j++) {
            right.push(ALL_TABLE_ELEMENTS[temp - j * side].style.backgroundColor);
        }
    }
    update_board(right);
}

function update_board(new_board) {
    for (let i = 0; i < ALL_TABLE_ELEMENTS.length; i++) {
        ALL_TABLE_ELEMENTS[i].style.backgroundColor = new_board[i];
    }
}

RED_FIRST_BT.addEventListener("click", red_generate, false);
BLUE_FIRST_BT.addEventListener("click", blue_generate, false);
REDO_BT.addEventListener("click", regenerate, false);
LEFT_BT.addEventListener("click", left_rotate, false);
RIGHT_BT.addEventListener("click", right_rotate, false);