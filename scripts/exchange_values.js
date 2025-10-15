const inputNumber = document.getElementById('input-number');
const convertBtn = document.getElementById('convert');
const baseCurrency = document.getElementById('from-currency');
const targetCurrency = document.getElementById('to-currency');
const result = document.getElementById('result');
const symbol = document.getElementById('symbol');

const dataCurrency = {
  'usd': {
    'try': 41.30,
    'rub': 83.30,
    'eur': 1 / 1.17,    
    'usd': 1
  },
  'eur': {
    'try': 41.30 * 1.17, 
    'rub': 83.30 * 1.17, 
    'eur': 1,
    'usd': 1.17
  },
  'rub': {
    'try': 0.505,     
    'rub': 1,
    'eur': 1 / (83.30 * 1.17), 
    'usd': 1 / 83.30
  },
  'try': {
    'try': 1,        
    'rub': 1 / 0.505,  
    'eur': 1 / (48.32), 
    'usd': 1 / 41.30
  }
};
   
convertBtn.addEventListener('click', () => {
    if (inputNumber.value.trim() === '' || isNaN(inputNumber.value)) return; 
    result.textContent = convertation(baseCurrency.value, targetCurrency.value, inputNumber.value).toFixed(2);
    symbol.textContent = showSymbol(targetCurrency.value);
});

function convertation(baseCurrencyArg, targetCurrencyArg, howMuchArg) {
    return dataCurrency[baseCurrencyArg][targetCurrencyArg] * Number(howMuchArg); 
}

function showSymbol(toCurrencyValue) {
    const symbols = {
        usd: '$',
        eur: '€',
        rub: '₽',
        try: '₺'
    };
    return symbols[toCurrencyValue] || '';
}