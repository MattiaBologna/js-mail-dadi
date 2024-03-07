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
    
    // controlla se la mail e presente nell'array delle mail 
    for (i=0; i < validUsersMailList.length; i++) {
        // assegna ciascuna mail ad una variabile per poterle confrontare con la mail dell'user
        let validUsersMail = validUsersMailList[i]

        if (userMail === validUsersMail) {
            // mostra a schermo il messaggio per la mail valida 
            const mailMessage = document.createElement('p')
            mailMessage.innerHTML = 'The mail is valid'
            const mailSectionDOMElement = document.querySelector('.mail')
            mailSectionDOMElement.append(mailMessage)
        } 
    } 
    
    
})
