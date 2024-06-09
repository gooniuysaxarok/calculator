const result = document.getElementById("result")
const firstnum = document.getElementById("input2")
const secondnum = document.getElementById("input1")
const plusbtn = document.getElementById("plusbotton")
const minusbtn = document.getElementById("minusbotton")
const sqbtn = document.getElementById("sqbtn")
const umbtn = document.getElementById("umbtn")
const delbtn = document.getElementById("delbtn")


plusbtn.onclick = function(){
    action = "+"
}
minusbtn.onclick = function(){
    action = "-"
}
umbtn.onclick = function(){
    action = "*"
}
delbtn.onclick = function(){
    action = "/"
}
sqbtn.onclick = function(){
    action = "**"
}
resultbotton.onclick = function(){
if (action == "+"){
    const sum = Number(input1.value) + Number(input2.value) 
    if (sum > 0){
        result.style.color = "green"
    }
    else if (sum < 0){
        result.style.color = "red"
    } 
    result.textContent = sum
}
else if (action == "-"){
    const sum = Number(input1.value) - Number(input2.value)
    if (sum < 0){
        result.style.color = "red"
    }
    else if (sum > 0){
        result.style.color = "green"
    } 
    result.textContent = sum
    
}
else if (action == "**"){
    const sum = Number(input1.value) * Number(input1.value)
    if (sum < 0){
        result.style.color = "red"
    }
    else if (sum > 0){
        result.style.color = "green"
    } 
    result.textContent = sum
}
else if (action == "*"){
    const sum = Number(input1.value) * Number(input2.value)
    if (sum < 0){
        result.style.color = "red"
    }
    else if (sum > 0){
        result.style.color = "green"
    } 
    result.textContent = sum
    
}
else if (action == "/"){
    let sum = Number(input1.value) / Number(input2.value)
    if(Number(input2.value) == 0){
        sum = "Ты что ебанат на 0 делить? Очко себе подели математик хуев, ваще долбаеб что-ли?"
        result.style.color = "purple"
    }
        else if (sum < 0){
        result.style.color = "red"
    }
    else if (sum > 0){
        result.style.color = "green"
    } 
    result.textContent = sum
}
}
