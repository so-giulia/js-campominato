//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.

//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.

//Se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti si continua chiedendo all’utente un altro numero.

//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito

//BONUS:
//all’inizio il software richiede anche una difficoltà all’utente
//che cambia il range di numeri casuali:
//difficoltà 0 => tra 1 e 100
//difficoltà 1 => tra 1 e 80
//difficoltà 2 => tra 1 e 50

//———————————
//SVOLGIMENTO
//———————————


var intMin = 1;
var intMax = 100;
var userMax = 100;
var subtract = 16;

//Bonus
var chooseLevel = false;

while(!chooseLevel){
    chooseLevel = prompt("Scegli la difficoltà tra 0, 1 e 2");

    if(chooseLevel == "0" || chooseLevel == "difficoltà 0"){
        intMax = 100;
        console.log("Difficoltà 0, numero massimo: " + intMax);
    }else if(chooseLevel == "1" || chooseLevel == "difficoltà 1"){
        intMax = 80;
        console.log("Difficoltà 1, numero massimo: " + intMax);
    }else if(chooseLevel == "2" || chooseLevel == "difficoltà 2"){
        intMax = 50;
        console.log("Difficoltà 2, numero massimo: " + intMax);
    }else{
        chooseLevel = false;
    }
}


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
var wrongNum = false;
var msg = "";
var msgBomb = "";

//chiedo all'utente un numero
for(var i = 0; i < (userMax - subtract) && !check; i++){
    //chiedo numero
    var requestNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
    
    //l'utente non può inserire un numero non compreso tra 1 e 100
    if(requestNum < intMin || requestNum > userMax){
        alert("Attenzione! Il numero deve essere compreso tra 1 e 100!");
        wrongNum = true;
    }else if(isNaN(requestNum) || requestNum == "null" || requestNum == "undefined"){
        alert("Attezione! Devi inserire un numero!");
        wrongNum = true;
    }

    //l'utente non può inserire il numero due volte sennò finisce tutto
    if(!isInArray(userArray, requestNum) && !check){
        userArray.push(requestNum);
    }else if(isInArray(userArray, requestNum) && !check){
        alert("Attenzione! Non puoi inserire un numero due volte!");
        wrongNum = true;
    }

    //condizione di perdita partita
    if(isInArray(programArray, requestNum) && !check){
        check = true;
        alert("Hai perso!");
        //comunico quante volte ho inserito i numeri giusti
        msg = userArray.length-1;
        msgBomb = requestNum;
    }
}

document.getElementById("result").innerHTML = msg;
document.getElementById("bombArray").innerHTML = (programArray.join(" "));
document.getElementById("bomb").innerHTML = msgBomb;

//controlli console
console.log(programArray);
console.log(userArray);

