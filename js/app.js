// MAIL

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// recupera l'elemento della mail 
// recupera l'elemento del bottone accedi 
const mailDOMElement = document.getElementById('input--mail');
const mailSumbitDOMElement = document.getElementById('mail--submit');

// assegna il contenuto della mail a una costante
mailSumbitDOMElement.addEventListener('click', function() {
    const userMail = mailDOMElement.value;
    
    // definisci un array di mail di chi puo accedere 
    // definisci l'elemento dell'Array
    const validUsersMailList = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"]

    let mailIsValid = false;
    
    // controlla se la mail e presente nell'array delle mail 
    for (i=0; i < validUsersMailList.length; i++) {
        // assegna ciascuna mail ad una variabile per poterle confrontare con la mail dell'user
        let validUsersMail = validUsersMailList[i]

        if (userMail === validUsersMail) {
            // mostra a schermo il messaggio per la mail valida 
            mailIsValid = true;
            const mailMessage = document.createElement('p');
            mailMessage.innerHTML = 'The mail is valid';
            const mailSectionDOMElement = document.querySelector('.mail');
            mailSectionDOMElement.append(mailMessage);
        } 
    } 

    if (mailIsValid == false) {
        const mailMessage = document.createElement('p');
        mailMessage.innerHTML = 'The mail is not valid';
        const mailSectionDOMElement = document.querySelector('.mail');
        mailSectionDOMElement.append(mailMessage);
    }
})


// GIOCO DEI DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// recupera l'elemento del sumbit tira il dado per aggiungerci l'event listener 
const diceRollerDOMElement = document.getElementById('dice--roller');

diceRollerDOMElement.addEventListener('click', function() {
    // recupera gli elementi del tiro dello user e dell'avversario 
    const userRollDOMElement = document.getElementById('user--roll')
    const computerrRollDOMElement = document.getElementById('computer--roll')

    // genera un numero da 1 a sei da assegnare al tiro dello user
    const userDiceRoll = Math.floor(Math.random() * 6) + 1; 
    // genera un numero da 1 a sei da assegnare al tiro del computer
    const computerDiceRoll = Math.floor(Math.random() * 6) + 1; 

    // mostra il tiro dello user a schermo
    userRollDOMElement.innerHTML = userDiceRoll

    // mostra il tiro dell'avversario a schermo
    computerrRollDOMElement.innerHTML = computerDiceRoll

    // recupera la section dei dadi per appendere il risultato 
    const dicesSectionDOMElement = document.querySelector('.dices')
    const result = document.createElement('p')
    dicesSectionDOMElement.append(result)

    if (userDiceRoll === computerDiceRoll) {
        result.innerHTML = "Pareggio"
    } else if (userDiceRoll > computerDiceRoll) {
        result.innerHTML = "Vittoria"
    } else {
        result.innerHTML = "Sconfitta"
    }


})
