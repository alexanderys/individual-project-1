





/* For 2nd game - To remove each div element when clicked */

const divArray2 = [];

function removeSecond(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray2.push(element);
    console.log(divArray2);
    if(divArray2.length === 4) {
        const message = document.getElementById('game-2');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    }
}


/* For 3rd game - To remove each div element when clicked */


const divArray3 = [];

function removeThird(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray3.push(element);
    /* console.log(divArray3); */
    if(divArray3.length === 4) {
        const message = document.getElementById('game-3');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    }
}


/* For 4th game - To remove each div element when clicked*/


const divArray4 = [];

function removeFourth(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray4.push(element);
    /* console.log(divArray4); */
    if(divArray4.length === 3) {
        const message = document.getElementById('game-4');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    }
}

function looseFourth(eachDiv) {
    const message = document.getElementById('game-4');
    message.innerHTML = 'DU FÖRLORA! <br> Uppdatera sidan för att spela igen!';
}


/* For 5th game */

/* 
Explanation for style.width versus clientWidth (style.width return undefined)
https://stackoverflow.com/questions/8133146/difference-between-style-width-and-offsetwidth-in-html
 */

function overlapFifth(div) {
    const element = document.getElementById(div);
    if(element.clientWidth >= 300 && element.clientWidth <= 350) {
        const message = document.getElementById('game-5');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
    } else {
        const message = document.getElementById('game-5');
        message.innerHTML = 'DU FÖRLORA! <br> Uppdatera sidan för att spela igen!';
    }
}