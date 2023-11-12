const form = document.querySelector('.form');
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');

form.addEventListener('click', function (event) {
    event.preventDefault();
});

buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const clickedButton = event.target;
    const buttonText = clickedButton.textContent;
    console.log(clickedButton);

    if (buttonText === 'AC') {
        inputBox.value = '';
    } else if (buttonText === 'DEL') {
        inputBox.value = inputBox.value.slice(0, -1);
    } else if (buttonText === '=') {
        try {
            inputBox.value = eval(inputBox.value);
        } catch (error) {
            inputBox.value = 'Error';
        }
    } else {
        inputBox.value += buttonText;
    }
}
