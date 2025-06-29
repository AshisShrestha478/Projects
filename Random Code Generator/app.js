let wordList = "abcdefghijklmnopqrstuvwxyz";
let numberList = "0123456789";
let signList = "!@#$%^&*_";
let passwordDisplay = document.querySelector('#password-display');

function generatePass(lengthPass) {
    let passWord = "";
    let count = 0;
    for (let i = 0; i < lengthPass; i++) {
        if (count < lengthPass) {
            let word = Math.floor(Math.random() * wordList.length);
            passWord = wordList[word] + passWord;
            count++;
        }
        if (count < lengthPass) {
            let number = Math.floor(Math.random() * numberList.length);
            passWord = numberList[number] + passWord;
            count++;
        }
        if (count < lengthPass) {
            let sign = Math.floor(Math.random() * signList.length);
            passWord = signList[sign] + passWord;
            count++;
        }

    }
    passwordDisplay.textContent = passWord;
}

let lengthInput = document.querySelector('#password-generator');
let button = document.querySelector('#btn');

button.addEventListener('click', () => {
    if (lengthInput.value === "") {
        passwordDisplay.textContent = "Invalid Input";
    }
    else {
        generatePass(lengthInput.value);
    }
})

