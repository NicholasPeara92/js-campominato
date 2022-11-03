// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// FUNZIONI
function createCells (number) {
    numMax = number * number;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function createBombList(bombNumber) {
    const array = [];
    const minesNum = 16;
    let i = 1;
    while( i <= minesNum ) {
        array.push(bombNumber);
        
        i++
    }
    return array;
}
// seleziono il contenitore
const btnGenerator = document.querySelector(".btn-generator");

btnGenerator.addEventListener('click', function() {
    let diff = document.getElementById("diff").value;
    const boardContainer = document.querySelector(".board");
    
    createCells(diff);
    boardContainer.innerHTML = "";
    for (let i = 1; i <= numMax; i++) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        if (numMax === 100){
            boardCell.classList.add("board-cell-easy");
        } else if (numMax === 81) {
            boardCell.classList.add("board-cell-medium");
            
        } else {
            boardCell.classList.add("board-cell-hard");
            
        }
        //evento click
        boardCell.addEventListener("click", function(){
            console.log(this.innerHTML);
            this.classList.add("clicked");
        });
        boardContainer.append(boardCell);
    }
    
    const bombs = getRndInteger( 1 , numMax);
    const minesList = createBombList(bombs);
    console.log(bombs);
    console.log(minesList);
});


