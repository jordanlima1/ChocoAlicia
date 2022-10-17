const button = document.getElementById("linha01")
const inst = document.getElementById("linha02")

inst.style.display = "none";
inst.style.display = "block";

button.addEventListener("click", (event)=>{
    if(inst.style.display == "block"){
        inst.style.display = "none"
    } else {
        inst.style.display = "block"
    }
})


const button1 = document.getElementById("linha03")
const inst1 = document.getElementById("linha04")

inst1.style.display = "none";

button1.addEventListener("click", (event)=>{
    if(inst1.style.display == "none"){
        inst1.style.display = "block"
    } else {
        inst1.style.display = "none"
    }
})


const button2 = document.getElementById("linha05")
const inst2 = document.getElementById("linha06")

inst2.style.display = "none";

button2.addEventListener("click", (event)=>{
    if(inst2.style.display == "none"){
        inst2.style.display = "block"
    } else {
        inst2.style.display = "none"
    }
})


const button3 = document.getElementById("linha07")
const inst3 = document.getElementById("linha08")

inst3.style.display = "none";

button3.addEventListener("click", (event)=>{
    if(inst3.style.display == "none"){
        inst3.style.display = "block"
    } else {
        inst3.style.display = "none"
    }
})


const button4 = document.getElementById("linha09")
const inst4 = document.getElementById("linha10")

inst4.style.display = "none";

button4.addEventListener("click", (event)=>{
    if(inst4.style.display == "none"){
        inst4.style.display = "block"
    } else{
        inst4.style.display = "none"
    }
})
