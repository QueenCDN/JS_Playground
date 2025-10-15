const randomNumberBtn = document.querySelector("#random-number-btn"); // Старт-кнопка для нового загадочного числа
const userNumberInput = document.querySelector("#user-number-input"); // поле, в котором юзер вводит число
const resultField = document.querySelector("#guess-result"); // результат - угадывает число пользователь или нет

let newNumber = null;

randomNumberBtn.addEventListener("click", () => {
    newNumber = Math.floor(Math.random() * 20) + 1;
    resultField.style.color = 'chocolate';
});

userNumberInput.addEventListener("input", (event) => {
    const userGuess = Number(event.target.value);
    
    if (newNumber === null) {
        resultField.textContent = `First, click the "Pick a number" button!`;
        return;
    }

    if (isNaN(userGuess)) {
        resultField.textContent = "Enter the correct number!";
        return;
    }
    if (userGuess > newNumber) {
        resultField.innerHTML = `The hidden number is less!`;
    } else if (userGuess < newNumber) { 
        resultField.innerHTML = `The hidden number is bigger!`;
    } else if (userGuess == newNumber) {
        resultField.innerHTML = `Congratulations! You guessed the number! It was ${newNumber}`;   
        resultField.style.color = 'green';
    }   
});