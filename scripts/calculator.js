const calculationField = document.getElementById('calculation-field');
const listButtons = document.querySelector('.list-buttons');

calculationField.value = '';

listButtons.addEventListener('click', (event) => {
    btn = event.target.dataset.id
    
    if (!btn) return;
    !isNaN(Number(btn))

    if (btn === "=") {
        try {
            calculationField.value = eval(calculationField.value)
        } catch {
            calculationField.value = 'Ошибка'
        }
    } else if (btn === "C") {
        calculationField.value = '';
    } else {
        calculationField.value += btn
    }
});