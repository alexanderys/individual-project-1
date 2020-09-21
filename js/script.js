

/* For 1st game - To remove each div element when clicked */

const divArray1 = [];

function removeFirst(eachDiv) {
    const element = document.getElementById(eachDiv);
    element.style.display = 'none';
    divArray1.push(element);
    console.log(divArray1);
    if(divArray1.length === 4) {
        const message = document.getElementById('game-1');
        message.innerHTML = 'DU VANN! <br> Uppdatera sidan för att spela igen!';
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