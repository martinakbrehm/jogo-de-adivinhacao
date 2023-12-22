const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`

    }

    inputNumber.value = ''
    xAttempts++
}

//Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', function(){
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    xAttempts = 1
})
