let count = 0;

const counterControl = document.querySelector(".counter-controls");
const resetControl = document.querySelector(".reset-control");
const mainDiv = document.querySelector(".main");
const footerdiv= document.querySelector(".footer-credits");

document.addEventListener("DOMContentLoaded", function () {
    const titolo = document.createElement("h1");
    titolo.textContent = "COUNTER";
    mainDiv.prepend(titolo);

    const reduceButton = document.createElement("button");
    reduceButton.textContent = "-";
    reduceButton.id = "reduce-btn";

    const counter = document.createElement("p");
    counter.id = "counter";
    counter.textContent = count;

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.id = "add-btn";

    const resetButton = document.createElement("button");
    resetButton.textContent = "RESET";
    resetButton.id = "reset-btn";

    counterControl.append(reduceButton, counter, addButton);
    resetControl.append(resetButton);

    function displayCounter() {
        counter.textContent = count;
    }

    function incrementCounter() {
        count += 1;
        displayCounter();
    }

    function decrementCounter() {
        count -= 1;
        displayCounter();
    }

    function resetCounter() {
        count = 0;
        displayCounter();
    }

    addButton.addEventListener("click", incrementCounter);
    reduceButton.addEventListener("click", decrementCounter);
    resetButton.addEventListener("click", resetCounter);

    const credit1=document.createElement("p");
    const credit2=document.createElement("p");
    credit1.textContent = "Made by Silvia Hu";
    credit2.textContent="All credit reserved";
    footerdiv.append(credit1,credit2)
});