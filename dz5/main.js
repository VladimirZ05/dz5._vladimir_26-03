const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (currency, targetInput, isTrue) => {
    currency.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "change.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                targetInput.value = (currency.value / response.usd).toFixed(2)
            } else {
                targetInput.value = (currency.value * response.usd).toFixed(2)
            }
            currency.value === '' && (targetInput.value = '')
            // currency.value === '' ? targetInput.value = '' : null
        }
    }
}
convert(som, usd, true)
convert(usd, som, false)

const convertEuro = (currency, targetInput, isTrue) => {
    currency.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "change.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                targetInput.value = (currency.value / response.euro).toFixed(2)
            } else {
                targetInput.value = (currency.value * response.euro).toFixed(2)
            }
            currency.value === '' && (targetInput.value = '')
            // currency.value === '' ? targetInput.value = '' : null
        }
    }
}
convertEuro(som, euro, true)
convertEuro(euro, som, false)
// som.addEventListener('input', () => {
//   const request = new XMLHttpRequest()
//   request.open("GET", "change.json")
//   request.setRequestHeader("Content-type", "application/json")
//   request.send()
//
//   request.onload = () => {
//     const response = JSON.parse(request.response)
//     usd.value = (som.value / response.usd).toFixed(2)
//   }
// })


