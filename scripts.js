const convertButton = document.querySelector(".convert-button") // Mapeando o botão para conversão
const currencySelect = document.querySelector("#convert") // Mapeando o select para saber para qual moeda vai converter


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Mapeando o valor do input digitado pelo usuário
    const currencyToConvert = document.querySelector(".value-to-convert") // Valor a ser convertido
    const currencyConvertedValue = document.querySelector(".converted-value") // Valor já convertido

    const dolarToDay = 5.91 // Valor que será calculado ao input digitado
    const euroToDay = 6.2
    const libraToDay = 7.3
    const bitcoinToDay = 621000


    if (currencySelect.value == "dolar") {
        // Se o select estiver selecionado o valor de dolar entre aqui
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToDay) // Formatando o valor digitado em Dólar(moeda).
    }

    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor de euro entre aqui
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToDay) // Formatando o valor digitado em Euro(moeda)
    }

    if (currencySelect.value == "libra") {
        // Se o select estiver selecionado o valor de libra entre aqui
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "LBR"
        }).format(inputCurrencyValue / libraToDay) // Formatando o valor digitado em Libra(moeda)
    }
    
    if (currencySelect.value == "bitcoin") {
        // Se o select estiver selecionado o valor de bitcoin entre aqui
        currencyConvertedValue.innerHTML = new Intl.NumberFormat("es-SL", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToDay) // Formatando o valor digitado em Bitcoin(moeda)
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // Formatando o valor digitado em Real(moeda).

}

function changeImg() {
    const changeIamge = document.querySelector(".currency-image")
    const changeName = document.querySelector(".name-currency")

    if (currencySelect.value == "real") {
        changeIamge.src = "assets/real.png"  
        changeName.innerHTML = "Real"         
    }
    if (currencySelect.value == "dolar") {
        changeIamge.src = "assets/dolar.png"   
        changeName.innerHTML = "Dólar americano"     
    }
    if (currencySelect.value == "euro") {
        changeIamge.src = "assets/euro.png"  
        changeName.innerHTML = "Euro"         
    }
    if (currencySelect.value == "libra") {
        changeIamge.src = "assets/libra.png"  
        changeName.innerHTML = "Libra"         
    }
    if (currencySelect.value == "bitcoin") {
        changeIamge.src = "assets/bitcoin.png"  
        changeName.innerHTML = "Bitcoin"         
    }

    convertValues()
}

currencySelect.addEventListener("change", changeImg)
convertButton.addEventListener("click", convertValues)