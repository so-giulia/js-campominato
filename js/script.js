//**OK**Il computer deve generare 16 numeri casuali tra 1 e 100.
//**OK**I numeri non possono essere duplicati.
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina,
//altrimenti si continua chiedendo all’utente un altro numero.

//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

//Al termine della partita il software deve comunicare il punteggio,
//cioè il numero di volte che l’utente ha inserito un numero consentito



//———————————
//SVOLGIMENTO
//———————————

//creo una funzione che mi genera i numeri random
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//genero 16 numeri univoci per il computer
var programArray = [];

while(programArray.length < 16){

    var random = generateRandom(1,100);

    if(!programArray.includes(random)){
        programArray.push(random);
    }
}

//li guardo
console.log(programArray);
