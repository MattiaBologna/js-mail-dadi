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
    console.log(userMail)
})

// Definisci un array di mail di chi puo accedere 
const usersMailList = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"]

