const screen = document.querySelector(".pantalla");

/*************************************************** OPERADORES ******************************************************** */



/* SUMA */
const plusButton = document.querySelector(".suma");
plusButton.addEventListener("click", function(){
    firstNum = screen.textContent;
    screen.textContent = firstNum + "+";
    operatorMode = "plus";
});

/* RESTA */
const subtrackButton = document.querySelector(".resta");
subtrackButton.addEventListener("click", function(){
    firstNum = screen.textContent;
    screen.textContent = firstNum + "-";
    operatorMode = "subtrack";
});

/* MULTIPLICACION */
const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", function(){
    firstNum = screen.textContent;
    screen.textContent = firstNum + "x";
    operatorMode = "multiply";
});

/* DIVIDE */
const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", function(){
    firstNum = screen.textContent;
    screen.textContent = firstNum + "/";
    operatorMode = "divide";
});

/* IGUAL */
const equalButton = document.querySelector(".igual");
equalButton.addEventListener("click", function(){
    switch (operatorMode) {
        case "plus":
            secondNum = screen.textContent.replace(firstNum + "+", "");
            screen.textContent = Number(firstNum) + Number(secondNum);
            break;
        case "subtrack":
            secondNum = screen.textContent.replace(firstNum + "-", "");
            screen.textContent = Number(firstNum) - Number(secondNum);
            break;
        case "multiply":
            secondNum = screen.textContent.replace(firstNum + "x", "");
            screen.textContent = Number(firstNum) * Number(secondNum);
            break;
        case "divide":
            secondNum = screen.textContent.replace(firstNum + "/", "");
            if (secondNum === "0"){
                screen.textContent = "Syntax Error";
            } else {
                screen.textContent = Number(firstNum) / Number(secondNum);
                break;
            }
    }
});

/************************************************ NUMEROS Y RESET *************************************************** */

/* RESET */
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
    screen.textContent = "0"; //Da igual lo que tengamos, cada vez que clickemos ponemos 0
});

/* DOT */
const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", function() {
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent + "."; //Directamente a la derecha porque si lo comparamos con 0, borraria el 0.
});

/* 0 */
const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", function () {
    let currentScreenContent = screen.textContent; // Dejamos en una variable el estado actual de la pantalla
    screen.textContent = currentScreenContent === "0"? "0" : currentScreenContent + "0"; //Lo que plasmemos en la pantalla sera = 1 si el contador actual es 0, y si no, añadira un 1 mas a la derecha.
});

/* 1 */
const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", function () {
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0"? "1" : currentScreenContent + "1";
});

/* 2 */
const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", function() {
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "2" : currentScreenContent + "2";
});

/* 3 */
const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", function() {
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "3" : currentScreenContent + "3";
});

/* 4 */
const fourButton = document.querySelector(".four");
fourButton.addEventListener('click', function(){
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "4" : currentScreenContent + "4";
});

/* 5 */
const fiveButton = document.querySelector(".five");
fiveButton.addEventListener('click', function(){
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "5" : currentScreenContent + "5";
});

/* 6 */
const sixButton = document.querySelector(".six");
sixButton.addEventListener('click', function(){
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "6" : currentScreenContent + "6";
});

/* 7 */
const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener('click', function(){
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "7" : currentScreenContent + "7";
});

/* 8 */
const eightButton = document.querySelector(".eight");
eightButton.addEventListener('click', function(){
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "8" : currentScreenContent + "8";
});

/* 9 */
const nineButton = document.querySelector(".nine");
nineButton.addEventListener('click', function(){
    let currentScreenContent = screen.textContent;
    screen.textContent = currentScreenContent === "0" ? "9" : currentScreenContent + "9";
});