const delayB = document.querySelector('#delayB')
const powerB = document.querySelector('#powerB')
const autodelayB = document.querySelector('#autodelayB')
const autopowerB = document.querySelector('#autopowerB')
const amog = document.querySelector('#amog')
const delay = document.querySelector('#delay')
const power = document.querySelector('#power')
const autodelay = document.querySelector('#autodelay')
const autopower = document.querySelector('#autopower')
const clicker = document.querySelector('#clicker')

clicker.setAttribute('draggable', false)

let amogVal = 10
let delayVal = 1
let powerVal = 1
let autodelayVal = 99999999
let autopowerVal = 0
let delayCost = 10
let powerCost = 500
let autodelayCost = 1000
let autopowerCost = 500


clicker.onclick = function(){
    amogVal += powerVal
    amog.textContent = amogVal
    clicker.style = "display: none;"
    setTimeout(function(){clicker.style = "display: inline;"}, delayVal * 1000)
}

delayB.onclick = function(){
    if(amogVal > delayCost){
        removeAmog(delayCost)
        delayVal /= 1.1
        delayCost *= 1.5
        delayCost = Math.round(delayCost)
        delayB.innerHTML = "Zwieksz czestotliwosc [ඞ"+delayCost+"]"
        delay.innerHTML = Math.round(delayVal) 
    }
}

function removeAmog(amm){
    amogVal -= amm
    amog.textContent = amogVal
}