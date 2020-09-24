
/* / For games / */ 

/* For 1st game - To remove each div element when clicked */

const divArray1 = [];

function removeFirst(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray1.push(element);
    if(divArray1.length === 4) {
        const message = document.getElementById('game-1');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
        
/*         let button = document.createElement('button');
        let text = document.createTextNode('Click to restart game!');
        button.appendChild(text)
        button.setAttribute('onclick', 'restore(divArray1)');
        message.appendChild(button); */
    }
}

function restore(divs) {
    const message2 = document.getElementById('game-1');
    console.log(message2)
    message2.innerHTML = "";
     
/*     for(let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'block';
        console.log(divs[i]);
        message2.appendChild(divs[i]);
        console.log(message2);
    } */
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

function looseThird(eachDiv) {
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
 
/* The whole form - used when submitting form */
const form = document.getElementsByTagName('form')[0];

/* First Name */
const fname = document.getElementById('fname');
const fnameError = document.querySelector('.fname-error');

function showFnameError() {
    if(fname.validity.valueMissing) {
        fnameError.textContent = 'Vänligen fyll i förnamn.';
    }
}

/* Last Name */

const lname = document.getElementById('lname');
const lnameError = document.querySelector('.lname-error');

function showLnameError() {
    if(lname.validity.valueMissing) {
        lnameError.textContent = 'Vänligen fyll i efternamn.';
    }
}

/* Email */

const email = document.getElementById('email');
const emailError = document.querySelector('.email-error');

email.addEventListener('input', function (event) {
  
    if (email.validity.valid) {
      emailError.innerHTML = '';
      //emailError.className = 'error';
    } else {
      showEmailError();
    }
});

function showEmailError() {
    if(email.validity.valueMissing) {
        emailError.textContent = 'Vänligen fyll i din eamil.';
      } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Vänligen fyll i giltig email.';
      } else if(email.validity.tooShort) {
        emailError.textContent = `Din email behöver vara minst ${ email.minLength } tecken; du skrev in ${ email.value.length }.`;
      }
}

/* Phone Number */

const phone = document.getElementById('phone');
const phoneError = document.querySelector('.phone-error');

phone.addEventListener('input', function (event) {
  
    if (!phone.value === "") {
        showPhoneError();
    } else {
        phoneError.innerHTML = '';
    }
});

function showPhoneError() {
    phoneError.textContent = "Vänligen använd enbart siffror.";
}

/* Message */

const message = document.getElementById('message');
const messageError = document.querySelector('.message-error');

message.addEventListener('input', function (event) {
  
    if (message.validity.valid) {
      messageError.innerHTML = '';
      //messageError.className = 'error';
    } else {
      showMessageError();
    }
});

function showMessageError() {
    messageError.textContent = `Du får använda max 500 tecken; du har skrivit in ${message.value.length}.`;
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    if(!fname.validity.valid) {
        showFnameError();
    }

    if(!lname.validity.valid) {
        showLnameError();
    }

    if(!email.validity.valid) {
        showEmailError();
    }

    if(!message.validity.valid) {
        showMessageError();
    }
});  
