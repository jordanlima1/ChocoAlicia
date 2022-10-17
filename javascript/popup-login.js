document.querySelector("#abrePopup").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

document.querySelector('.popup .close-btn').addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
})

/* popup */

var emailinput = document.getElementById('email-popup')
var password = document.getElementById('password1')

var btn = document.getElementById('btn-popup')

btn.addEventListener('click', function(e){
    e.preventDefault()

    var passwordValue = password.value;
    var emailinputValue = emailinput.value;

    if (passwordValue === "" ||  emailinputValue === ""  ){
        alert('Preencha todo o formulario.')
        
    } else {
        document.querySelector(".popup").classList.remove("active");

    }
    return apagartxt()

})


function apagartxt(){
    var emailinput = document.getElementById('email-popup')
    emailinput.value = ""

    var password = document.getElementById('password1')
    password.value = ""
}