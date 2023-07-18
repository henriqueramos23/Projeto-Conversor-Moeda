//Criar arquivo .js e linkar no html
//
const convertButton = document.querySelector(".convert-button")//1° passo criar variável constante p/ mapear o botão.
const currencySelect = document.querySelector(".currency-select")//12° passo criar variável constante p/ mapear o select.

function convertValues() {//3° passo criar função para ser chamada ao clicar o botão.
    const inputCurrencyValue = document.querySelector(".input-currency").value//4° passo criar variável p/ pegar/armazenar o valor(value) do input.

    console.log(currencySelect.value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//8° passo mapear o valor a ser convertido.

    const currencyValueConverted = document.querySelector(".currency-value")//9° passo mapear o valor das moedas já convertidas.

    const dolarToday = 5.06//5° passo criar variável com o valor do dolar
    const euroToday = 5.4//Criar variável com o valor do dolar
    const libraToday = 6.28//Criar variável com o valor do dolar
    const bitcoinToday = 135.184//Criar variável com o valor do dolar

    //const convertedValue = inputCurrencyValue / dolarToday //6° passo criar variável para calcular o real digitado no input/dolar.

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) //11° mostrar valor convertido de real convertido pra dolar
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday) //11° mostrar valor convertido de real convertido pra euro
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday) //11° mostrar valor convertido de real convertido pra libra
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday) //11° mostrar valor convertido de real convertido pra bitcoin
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BLR"
    }).format(inputCurrencyValue)//10° atribuir ao .currency-value-to-convert o mesmo valor do input.



    console.log(convertedValue)//7° passo mostrar o resultado do calculo da variável anterior.
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)//2° passo criar ouvinte evento para "ouvir" click do botão.
