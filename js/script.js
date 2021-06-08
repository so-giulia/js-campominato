//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.

//Se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti si continua chiedendo all’utente un altro numero.

//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito



//———————————
//SVOLGIMENTO
//———————————

var intMin = 1;
var intMax = 100;
var subtract = 16;

//!F:genera i numeri random
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//!F:ritorna la presenza di un elemento in un array
function isInArray(array, el){
    return array.includes(el);
}

//genero 16 numeri univoci per il computer
var programArray = [];

while(programArray.length < 16){
    var random = generateRandom(intMin,intMax);

    if(!isInArray(programArray, random)){
        programArray.push(random);
    }
}

var userArray = [];

var check = false;
var messaggio = "";

//chiedo all'utente un numero
for(var i = 0; i < (intMax - subtract) && !check; i++){
    //chiedo numero
    var requestNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
    
    //non posso inserire un numero non compreso tra 1 e 100
    if(requestNum < intMin || requestNum > intMax){
        messaggio = "Il numero deve essere compreso tra 1 e 100, rigioca la partita!"
        check = true;
    }

    //l'utente non può inserire il numero due volte sennò finisce tutto
    if(!isInArray(userArray, requestNum) && !check){
        userArray.push(requestNum);
    }else if(isInArray(userArray, requestNum) && !check){
        check = true;
        messaggio = "Non puoi inserire un numero due volte, rigioca la partita!"
    }

    //condizione di perdita partita
    if(isInArray(programArray, requestNum) && !check){
        check = true;
        alert("Hai perso!");
        //comunico quante volte ho inserito i numeri giusti
        messaggio = "Hai totalizzato: " + (userArray.length-1) + " punti";
    }
}

document.getElementById("risultati").innerHTML = messaggio;

//controlli console
console.log(programArray);
console.log(userArray);

