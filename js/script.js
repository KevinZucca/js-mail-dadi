/* Creare degli input e pulsanti per l'interazione
   Creare un array con le email accettate
   Creare un evento scatenato dal click del pulsante
   Generare un ciclo in grado di controllare le email dell'array e confrontarle al valore inserito nell'input
   ?SE l'email corrisponde
     °allora visualizzare con un nuovo elemento nella pagina l ok
   :ALTRIMENTI 
    °visualizzare in pagina l'accesso negato
*/



// creo un array contenente le email valide
// carico l input e il pulsante per il controllo dal DOM

let emailsEl = ["ciccioGamer@89", "boolean@88", "nonRicordoLEmail@123", "BillGates@WXP"];
let userEmailEl = document.getElementById("user-email");
let checkButtonEl = document.getElementById("check-button");



//all'evento click del pulsante

checkButtonEl.addEventListener("click", function() {
    //creo una variabile che servirà a confermare l'avvenuta corrispondenza
    let emailCheckerEl = false;

    for (let i = 0; i < emailsEl.length; i++) {

    //l'emai corrisponde? allora esci dal ciclo col break
    if (userEmailEl.value === emailsEl[i]) {
        emailCheckerEl = true;
        break;
    }
    }
    
    // carica l'elemento che visualizzerà il messaggio di avvenuta corrispondenza o meno
    let resultTextEl = document.getElementById("result-text");    

    //verifica che il valore sia true o false e stampa il relativo messaggio
    if (emailCheckerEl === true) {
        resultTextEl.innerHTML = "Email corrispondente";
    } else {
        resultTextEl.innerHTML = "Email non corrispondente";
    }
});




//DICE GAME
/* creare un menù a tendina per permettere all'utente di scegliere il numero del dado
   creare un pulsante per dare l'ok alla partita 
   crearo un array dal quale il computer sceglierà in maniera random un numero
   creare un ciclo con il quale il computer percorrerà l'intero array e sceglierà un numero random
   ?SE l'utente ha scelto un numero più alto del computer 
     ° visualizza "hai vinto la scommessa"
   :ALTRIMENTI
     °visualizza "hai perso la scommessa"
*/


let botChoiceElements = [1, 2, 3, 4, 5, 6 ];
let userNumberEl = document.querySelectorAll(".user-number");
let playButtonEl = document.getElementById("dice-button");


playButtonEl.addEventListener("click", function() {

for (let i = 1; i < botChoiceElements.length; i++) {
    let botNumber = Math.floor (Math.random() * botChoiceElements[i] + 1);

    if (botNumber < parseInt(userNumberEl.innerText)) {
        console.log("Il computer ha scelto: " + botNumber + ". hai vinto la scommessa"); 
    } else if (botNumber > parseInt(userNumberEl.innerText)) {
        console.log("Il computer ha scelto: " + botNumber + ". hai perso la scommessa");
    } else if (botNumber === parseInt(userNumberEl.innerText)) {
        console.log("Il computer ha scelto: " + botNumber + ". è un pareggio");
    }
    }   
});
    