document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    
    const counterControl = document.querySelector(".counter-controls");
    const resetControl = document.querySelector(".reset-control");
    const mainDiv = document.querySelector(".main");
    const footerDiv= document.querySelector(".footer-credits");

    const titlecounter = document.createElement("h1");
    titlecounter.textContent = "COUNTER";
    mainDiv.prepend(titlecounter);

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
    credit2.textContent="All rights reserved";
    footerDiv.append(credit1);
    footerDiv.append(credit2);
});