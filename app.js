// import functions and grab DOM elements
/* dont think we need any of these 

const noun1 = document.getElementById('noun1');
const noun2 = document.getElementById('noun2');
const noun3 = document.getElementById('noun3');
const noun4 = document.getElementById('noun4');
const noun5 = document.getElementById('noun5');
const adjective1 = document.getElementById('adjective1');
const adjective2 = document.getElementById('adjective2');
const adjective3 = document.getElementById('adjective3');
const verb1 = document.getElementById('verb1');
const verb2 = document.getElementById('verb2');
const verb3 = document.getElementById('verb3');
*/

const madLipz = document.getElementById('MadLipz');
const inputOne = document.getElementById('nounInputOne');
const inputTwo = document.getElementById('nounInputTwo');
const inputThree = document.getElementById('adjectiveInputOne');
const inputFour = document.getElementById('adjectiveInputTwo');
const inputFive = document.getElementById('verbInputOne');
const inputSix = document.getElementById('adjectiveInputThree');
const inputSeven = document.getElementById('nounInputThree');
const inputEight = document.getElementById('nounInputFour');
const inputNine = document.getElementById('verbInputTwo');
const inputTen = document.getElementById('nounInputFive');
const inputEleven = document.getElementById('verbInputThree');
const poem = document.getElementById('poem');
const inputWrapper = document.getElementById('inputWrapper');
const poemLineTwo = document.getElementById('line2');
const poemLineThree = document.getElementById('line3');
const poemLineFour = document.getElementById('line4');
const poemLineFive = document.getElementById('line5');


// initialize state

// set event listeners to update state and DOM

madLipz.addEventListener('click', () => {

    const lineOne = 'Shall I compare thee ' + inputOne.value + ' to a ' + inputTwo.value + ' ?';
    const lineTwo = 'Thou art more ' + inputThree.value + ' and more ' + inputFour.value + '.';
    const lineThree = 'Rough winds do ' + inputFive.value + ' the ' + inputSix.value + ' ' + inputSeven.value + ' of May.';
    const lineFour = 'So long as ' + inputEight.value + ' can ' + inputNine.value + ', or eyes can see.';
    const lineFive = 'So long lives ' + inputTen.value + ', and this ' + inputEleven.value + ' life to thee.';

    inputWrapper.textContent = lineOne;
    poemLineTwo.textContent = lineTwo;
    poemLineThree.textContent = lineThree;
    poemLineFour.textContent = lineFour;
    poemLineFive.textContent = lineFive;



});

//('Shall I compare thee ' + inputOne.value + ' to a ' + inputTwo.value + ' ? ' + ' Thou art more ' + inputThree.value + ' and more ' + inputFour.value + '. ' + 'Rough winds do ' + inputFive.value + ' the ' + inputSix.value + ' ' + inputSeven.value + ' of May. ' + 'So long as ' + inputEight.value + ' can ' + inputNine.value + ', or eyes can see. ' + 'So long lives ' + inputTen.value + ', and this ' + inputEleven.value + ' life to thee.');
