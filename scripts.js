const convertButton =  document.querySelector(".convert-button")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const dolarToDay = 5.91
    const convertedValue = inputCurrencyValue / dolarToDay
    
    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)