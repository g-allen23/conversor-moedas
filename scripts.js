const convertButton = document.querySelector(".convert-button") // Mapeando o botão para conversão
const currencySelect = document.querySelector("#convert") // Mapeando o select para saber para qual moeda vai converter


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Mapeando o valor do input digitado pelo usuário
    const currencyToConvert = document.querySelector(".value-to-convert") // Valor a ser convertido
    const currencyConvertedValue = document.querySelector(".converted-value") // Valor já convertido

    const dolarToDay = 5.91 // Valor que será calculado ao input digitado
    const euroToDay = 6.20

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

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // Formatando o valor digitado em Real(moeda).

}

convertButton.addEventListener("click", convertValues)