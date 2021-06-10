// JavaScript source code

var numberArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var posEmpty = new Array(16);
var numOfAdj = 0;
var numEmptyPos = 0;
var allClear = 0;
var twoFourNum = 0;
var ranPos = 0;
var end = false;
var numAddR, numAddL, numAddU, numAddD;
var toggleNums = true;
var width = 165;
var height = 165;
var score = 0;

function togglePics() {
    if (toggleNums == false) {
        toggleNums = true;
    }
    else {
        toggleNums = false;
    }
    outputArray();
}

function genRanPos(min, max) {
    var ranNum;
    min = Math.ceil(min);
    max = Math.floor(max);
    ranNumGen = Math.random();
    ranNum = Math.floor(ranNumGen * (max - min + 1)) + min;
    ranPos = ranNum;
}

function genRanNum() {
    var ranNum;
    ranNum = Math.random();
    if (ranNum <= 0.9) {
        ranNum = 2;
    }
    else {
        ranNum = 4;
    }
    twoFourNum = ranNum;
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            //alert('Left key pressed');
            shiftLeft();
            break;
        case 38:
            //alert('Up key pressed');
            shiftUp();
            break;
        case 39:
            //alert('Right key pressed');
            shiftRight();
            break;
        case 40:
            //alert('Down key pressed');
            shiftDown();
            break;
    }
}

function startup() {
    
    for(var i=0;i<16;i++){
        numberArray[i] = 0;
    }
    genRanNum();
    genRanPos(0,15);
    numberArray[ranPos] = twoFourNum;
    outputArray();
    
}

function addTile() {
    
    genRanNum();
    genRanPos(0, 15);
    outputArray();
    checkLoss();
    checkWin();

    while(allClear != 1){
        for(var k=0;k<numEmptyPos;k++){
            if(ranPos == posEmpty[k]){
                numberArray[ranPos] = twoFourNum;
                allClear = 1;
                break;
            }
            else{
                allClear = 0;
            }
        }
        if(allClear == 0){
            genRanPos(0,15);
        }
    }
    outputArray();
    checkLoss();
    
}

function shiftRight() {
    
    var numShiftR;
    var numShiftFirstR = 0;

    do {
        numShiftR = 0;
        for (var i = 0; i < 15; i++) {
            if ((i != 3) && (i != 7) && (i != 11) && (numberArray[i + 1] == 0) && (numberArray[i] != 0)) {
                numberArray[i + 1] = numberArray[i];
                numberArray[i] = 0;
                numShiftR++;
                numShiftFirstR++;
            }
        }
        outputArray();
    } while (numShiftR != 0);

    addRight();
    outputArray();
    shiftRightAgain();
    outputArray();
    if (numShiftFirstR != 0 || numAddR != 0) {
        addTile();
    }
    
}

function shiftRightAgain() {
    
    var numShiftR;

    do {
        numShiftR = 0;
        for (var i = 0; i < 15; i++) {
            if ((i != 3) && (i != 7) && (i != 11) && (numberArray[i + 1] == 0) && (numberArray[i] != 0)) {
                numberArray[i + 1] = numberArray[i];
                numberArray[i] = 0;
                numShiftR++;
            }
        }
        outputArray();
    } while (numShiftR != 0);
    
}


function shiftLeft() {
    
    var numShiftL;
    var numShiftFirstL = 0;

    do {
        numShiftL = 0;
        for (var i = 0; i < 15; i++) {
            if ((i != 3) && (i != 7) && (i != 11) && (numberArray[i] == 0) && (numberArray[i + 1] != 0)) {
                numberArray[i] = numberArray[i + 1];
                numberArray[i + 1] = 0;
                numShiftL++;
                numShiftFirstL++;
            }
        }
        outputArray();
    } while (numShiftL != 0);

    addLeft();
    outputArray();
    shiftLeftAgain();
    outputArray();
    if (numShiftFirstL != 0 || numAddL != 0) {
        addTile();
    }
    
}

function shiftLeftAgain() {
    
    var numShiftL;

    do {
        numShiftL = 0;
        for (var i = 0; i < 15; i++) {
            if ((i != 3) && (i != 7) && (i != 11) && (numberArray[i] == 0) && (numberArray[i + 1] != 0)) {
                numberArray[i] = numberArray[i + 1];
                numberArray[i + 1] = 0;
                numShiftL++;
            }
        }
        outputArray();
    } while (numShiftL != 0);
    
}

function shiftUp() {
    
    var numShiftU;
    var numShiftFirstU = 0;

    do {
        numShiftU = 0;
        for (var i = 0; i < 15; i++) {
            if ((numberArray[i + 4] != 0) && (numberArray[i] == 0) && (i < 12)) {
                numberArray[i] = numberArray[i + 4];
                numberArray[i + 4] = 0;
                numShiftU++;
                numShiftFirstU++;
            }
        }
        outputArray();
    } while (numShiftU != 0);
    
    addUp();
    outputArray();
    shiftUpAgain();
    outputArray();
    if (numShiftFirstU != 0 || numAddU != 0) {
        addTile();
    }
    
}

function shiftUpAgain() {
    
    var numShiftU;

    do {
        numShiftU = 0;
        for (var i = 0; i < 15; i++) {
            if ((numberArray[i + 4] != 0) && (numberArray[i] == 0) && (i < 12)) {
                numberArray[i] = numberArray[i + 4];
                numberArray[i + 4] = 0;
                numShiftU++;
            }
        }
        outputArray();
    } while (numShiftU != 0);
    
}

function shiftDown() {
    
    var numShiftD;
    var numShiftFirstD = 0;

    do {
        numShiftD = 0;
        for (var i = 0; i < 15; i++) {
            if ((numberArray[i + 4] == 0) && (numberArray[i] != 0) && (i < 12)) {
                numberArray[i + 4] = numberArray[i];
                numberArray[i] = 0;
                numShiftD++;
                numShiftFirstD++;
            }
        }
        outputArray();
    } while (numShiftD != 0);
    
    addDown();
    outputArray();
    shiftDownAgain();
    outputArray();
    if (numShiftFirstD != 0 || numAddD != 0) {
        addTile();
    }
    
}

function shiftDownAgain() {
    
    var numShiftD;

    do {
        numShiftD = 0;
        for (var i = 0; i < 15; i++) {
            if ((numberArray[i + 4] == 0) && (numberArray[i] != 0) && (i < 12)) {
                numberArray[i + 4] = numberArray[i];
                numberArray[i] = 0;
                numShiftD++;
            }
        }
        outputArray();
    } while (numShiftD != 0);
    
}

//Replace function built into add
function addRight() {
    
    numAddR = 0;
    for(var i=15;i>=0;i--){ //Be careful of wrapping around the corners
        if((numberArray[i] == numberArray[i+1]) && ((numberArray[i] + numberArray[i+1]) != 0) && (i != 3) && (i != 7) && (i != 11)){
            numberArray[i + 1] *= 2;
            score += numberArray[i+1];
            numberArray[i] = 0;
            numAddR++;
        }
    }
    
}

function addLeft() {
    
    numAddL = 0;
    for(var i=0;i<15;i++){ //Be careful of wrapping around the corners
        if((numberArray[i] == numberArray[i+1]) && ((numberArray[i] + numberArray[i+1]) != 0) && (i != 3) && (i != 7) && (i != 11)){
            numberArray[i] *= 2;
            score += numberArray[i];
            numberArray[i + 1] = 0;
            numAddL++;
        }
    }
    
}

function addUp() {
    
    numAddU = 0;
    for(var i=0;i<15;i++){ 
        if((numberArray[i] == numberArray[i+4]) && ((numberArray[i] + numberArray[i+4]) != 0) && (i<12)){
            numberArray[i] *= 2;
            score += numberArray[i];
            numberArray[i + 4] = 0;
            numAddU++;
        }
    }
    
}

function addDown() {
    
    numAddD = 0;
    for(var i=15;i>=0;i--){ 
        if((numberArray[i] == numberArray[i+4]) && ((numberArray[i] + numberArray[i+4]) != 0) && (i<12)){
            numberArray[i + 4] *= 2;
            score += numberArray[i + 4];
            numberArray[i] = 0;
            numAddD++;
        }
    }
    
}

function checkWin() {
    
    for(var i=0;i<16;i++){
        if(numberArray[i] == 2048){
            //You Won Code Here
            allClear = 1;
            alert("YOU WON!");
            break;
        }
        else{
            allClear = 0;
        }
    }
    
}

function checkLoss() {
    
    checkAdjacency();
    whereEmpty();
    outputArray();
    if(numOfAdj == 0 && numEmptyPos == 0){
        //You Lost Code Here
        allClear = 1;
        alert("Click Refresh to start over!");
    }
    else{
        allClear = 0;
    }
    
}

function checkAdjacency() {
    
    numOfAdj = 0;
    for(var i=0;i<15;i++){ //Be careful of wrapping around the corners
        if((numberArray[i] == numberArray[i+1]) && ((numberArray[i] + numberArray[i+1]) != 0) && (i != 3) && (i != 7) && (i != 11)){
            numOfAdj++;
        }
        if((numberArray[i] == numberArray[i+4]) && ((numberArray[i] + numberArray[i+4]) != 0) && (i<12)){
            numOfAdj++;
        }
    }
    
}

function whereEmpty() {
    
    var j = 0;
    for(var i=0;i<16;i++){
        if(numberArray[i] == 0){
            posEmpty[j] = i;
            j++;
        }
    }
    numEmptyPos = j;
    
}