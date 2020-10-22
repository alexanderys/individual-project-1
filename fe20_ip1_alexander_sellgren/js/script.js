
/* For 1st game - To remove each div element when clicked */

let boxes1 = 0;
const game1 = document.querySelectorAll('#game-1 div');

game1.forEach(eachBox => {
    eachBox.addEventListener('click', removeFirst)
})

function removeFirst() {
    this.classList.remove('visible');
    this.classList.add('invisible');
    boxes1++;
    if(boxes1 === 4) {
        finished1()
    }
}

function finished1() {
    const message = document.getElementById('game-1');
    message.innerHTML = 'DU VANN! <br>';

    const button = document.createElement('button');
    const text = document.createTextNode('Spela igen');
    button.appendChild(text);
    button.setAttribute('class', 'button');
    message.appendChild(button);

    button.addEventListener('click', function() {
        message.innerHTML = "";
        game1.forEach(eachBox => { //
            message.appendChild(eachBox);
            eachBox.classList.remove('invisible');
            eachBox.classList.add("visible");
        })
        boxes1 = 0; //
    })
}



/* For 2nd game - To remove each div element when clicked */

let boxes2 = 0;
const game2 = document.querySelectorAll('#game-2 div');

game2.forEach(eachBox => {
    eachBox.addEventListener('click', removeSecond)
})

function removeSecond() {
    this.classList.remove('visible');
    this.classList.add('invisible');
    boxes2++;
    if(boxes2 === 4) {
        finished2()
    }
}

function finished2() {
    const message = document.getElementById('game-2');
    message.innerHTML = 'DU VANN! <br>';

    const button = document.createElement('button');
    const text = document.createTextNode('Spela igen');
    button.appendChild(text);
    button.setAttribute('class', 'button');
    message.appendChild(button);

    button.addEventListener('click', function() {
        message.innerHTML = "";
        game2.forEach(eachBox => { //
            message.appendChild(eachBox);
            eachBox.classList.remove('invisible');
            eachBox.classList.add("visible");
        })
        boxes2 = 0; //
    })
}


/* For 3rd game - To remove each div element when clicked*/

let boxes3 = 0;
const game3 = document.querySelectorAll('#game-3 div');

game3.forEach(eachBox => {
    eachBox.addEventListener('click', removeThird)
})

function removeThird() {
    if(this.classList.contains('loose')) {
        finished3(true)
    }

    this.classList.remove('visible');
    this.classList.add('invisible');
    boxes3++;
    if(boxes3 === 3) {
        finished3(false)
    }
}   


function finished3(loose) {
    const message = document.getElementById('game-3');

    if(loose) {
        message.innerHTML = 'DU FÖRLORA! <br>';
    } else {
        message.innerHTML = 'DU VANN! <br>';
    }

    const button = document.createElement('button');
    const text = document.createTextNode('Spela igen');
    button.appendChild(text);
    button.setAttribute('class', 'button');
    message.appendChild(button);

    button.addEventListener('click', function() {
        message.innerHTML = "";
        game3.forEach(eachBox => { //
            message.appendChild(eachBox);
            eachBox.classList.remove('invisible');
            eachBox.classList.add("visible");
        })
        boxes3 = 0; //
    })
}


/* For 4th game */

const game4 = document.querySelectorAll('#game-4 div');

game4.forEach(eachBox => {
    eachBox.addEventListener('click', overlap);
})

function overlap(e) {
    if(!e.target.classList.contains('match')) {
        return;
    }

    const element = document.getElementById('box-4-3');
    if(element.clientWidth >= 300 && element.clientWidth <= 350) {
        finished4(false);
    } else {
        finished4(true);
    }
}

function finished4(loose) {
    const message = document.getElementById('game-4');

    if(loose) {
        message.innerHTML = 'DU FÖRLORA! <br>';
    } else {
        message.innerHTML = 'DU VANN! <br>';
    }

    const button = document.createElement('button');
    const text = document.createTextNode('Spela igen');
    button.appendChild(text);
    button.setAttribute('class', 'button');
    message.appendChild(button);

    button.addEventListener('click', function() {
        message.innerHTML = "";
        game4.forEach(eachBox => { //
            message.appendChild(eachBox);
            eachBox.classList.remove('invisible');
            eachBox.classList.add("visible");
        })
    })
}




/* / For form validation / */ 

const submitButton = document.getElementById('button');
submitButton.disabled = true;
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
})

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
        submitButton.disabled = false;
        submitButton.style.cursor = 'pointer';
        submitButton.style.backgroundColor = '#b9ffb3';
        submitButton.style.color = '#000';
        submitButton.style.border = '2px solid #5dd452';
        submitButton.style.boxShadow = '0 0 5px #5dd452, 0 0 10px #5dd452';
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = 'unset';
        submitButton.style.backgroundColor = '#fff';
        submitButton.style.color = 'aaa';
        submitButton.style.border = '2px solid #aaa';
        submitButton.style.boxShadow = 'none';
    }
}
