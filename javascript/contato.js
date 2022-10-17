var nameinput = document.getElementById('name')
var surnameinput = document.getElementById('surname')
var emailinput = document.getElementById('email')
var textarea = document.getElementById('message')
var btn = document.getElementById('button')

btn.addEventListener('click', function(e){
    e.preventDefault()

    var nameValue = nameinput.value;
    var surnameValue = surnameinput.value;
    var emailinputValue = emailinput.value;
    var textareaValue =  textarea.value;

    if(nameValue === "" ||  surnameValue === "" || emailinputValue.indexOf('@') ==-1 || textareaValue ==="" ){
        alert('Preencha todo o formulario.')

    } else {
      alert(`Muito Obrigado ${nameValue} ${surnameValue}`)
      return apagartxt()

    }
})

function apagartxt(){
    var nameinput = document.getElementById('name')
    nameinput.value = '';

    var surnameinput = document.getElementById('surname')
    surnameinput.value = '';

    var emailinput = document.getElementById('email')
    emailinput.value = '';
    
    var textarea = document.getElementById('message')
    textarea.value = '';
}