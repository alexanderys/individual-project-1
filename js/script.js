
/* / For games / */ 

/* When each game is finished, this function is 
called to create a button that enables game restart */

function createButton(game) {
    const message = document.getElementById(game);
    let button = document.createElement('button');
    let text = document.createTextNode('Klicka för att starta om spelet!');
    button.appendChild(text)
    message.appendChild(button);
    button.setAttribute('onclick', 'restore(divArray1, "game-1")');
    button.setAttribute('class', 'button')
}

// NOTE - proper parameters for above and below function to make general (e.g. remove divarray1 etcetc)

/*  */

function restore(divs, game) {
    const message2 = document.getElementById(game);
    console.log(message2); //
    message2.innerHTML = "";
        for(let i = 0; i < divs.length; i++) {
            divs[i].style.display = 'block';
            console.log(divs[i]); //
            message2.appendChild(divs[i]);
            console.log(message2); //
        }
        divArray1 = [];
}

/* For 1st game - To remove each div element when clicked */

let divArray1 = [];

function removeFirst(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray1.push(element);
    if(divArray1.length === 4) {
        const message = document.getElementById('game-1');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
        
        createButton('game-1');
    }
}


/* For 2nd game - To remove each div element when clicked */


const divArray2 = [];

function removeSecond(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray2.push(element);
    if(divArray2.length === 4) {
        const message = document.getElementById('game-2');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    }
}


/* For 3rd game - To remove each div element when clicked*/


const divArray3 = [];

function removeThird(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray3.push(element);
    if(divArray3.length === 3) {
        const message = document.getElementById('game-3');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    }
}

function looseThird() {
    const message = document.getElementById('game-3');
    message.innerHTML = 'DU FÖRLORA! <br> Uppdatera sidan för att spela igen!';
}


/* For 4th game */

/* 
Explanation for style.width versus clientWidth (style.width return undefined)
https://stackoverflow.com/questions/8133146/difference-between-style-width-and-offsetwidth-in-html
 */

function overlapFourth(div) {
    const element = document.getElementById(div);
    if(element.clientWidth >= 300 && element.clientWidth <= 350) {
        const message = document.getElementById('game-4');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    } else {
        const message = document.getElementById('game-4');
        message.innerHTML = 'DU FÖRLORA! <br> Uppdatera sidan för att spela igen!';
    }
}




/* / For form validation / */ 

const button = document.getElementById('button');
button.disabled = true;

const fname = document.getElementById('fname');
const fnameError = document.querySelector('.fname-error');

const lname = document.getElementById('lname');
const lnameError = document.querySelector('.lname-error');

const email = document.getElementById('email');
const emailError = document.querySelector('.email-error');

const message = document.getElementById('message');
const messageError = document.querySelector('.message-error');

fname.addEventListener('input', function() {
    if(fname.validity.valid) {
        fnameError.className = 'fname-error';
        fnameError.innerHTML = '';
        submit();
    } else {
        fnameError.className = 'fname-error error-active';
        fnameError.innerHTML = 'Vänligen fyll i förnamn.';
        submit();
    }
})

lname.addEventListener('input', function() {
    if(lname.validity.valid) {
        lnameError.className = 'lname-error';
        lnameError.innerHTML = '';
        submit();
    } else {
        lnameError.className = 'lname-error error-active';
        lnameError.innerHTML = 'Vänligen fyll i efternamn.';
        submit();
    }
})

email.addEventListener('input', function() {
    if(email.validity.valid) {
        emailError.className = 'email-error';
        emailError.innerHTML = '';
        submit();
    } else {
        emailError.className = 'email-error error-active';
        if(email.validity.valueMissing) {
            emailError.textContent = "Vänligen fyll i email.";
        } else if(email.validity.typeMismatch) {
            emailError.textContent = "Vänligen fyll i giltig email.";
        } else if(email.validity.tooShort) {
            emailError.textContent = `Din email behöver vara minst ${email.minLength} tecken; du har fyllt i ${email.value.length}.`;
        }
        submit();
    }
})

message.addEventListener('input', function() {
    if(message.validity.valid) {
        messageError.className = 'message-error';
        messageError.innerHTML = '';
        submit();
    } else {
        messageError.className = 'message-error error-active';
        messageError.innerHTML = 'Vänligen fyll i ditt meddelande.';
        submit();
    }
})


function submit() {
    if(fname.validity.valid && lname.validity.valid && email.validity.valid && message.validity.valid) {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#b9ffb3';
        button.style.color = '#000';
        button.style.border = '2px solid #5dd452';
        button.style.boxShadow = '0 0 5px #5dd452, 0 0 10px #5dd452';
    } else {
        button.disabled = true;
        button.style.cursor = 'unset';
        button.style.backgroundColor = '#fff';
        button.style.color = 'aaa';
        button.style.border = '2px solid #aaa';
        button.style.boxShadow = 'none';
    }
}
