var inputPhone = document.querySelector(`input[type=tel]`)
var keyboard = document.querySelectorAll(`input[type=button]`)

for(index = 0; index < keyboard.length; index++){
    const key = keyboard[index]
    key.onclick = () =>{
        inputPhone.value += key.value
    }
    key.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            key.classList.add('ativa')
        }
        key.onkeyup = ()=>{
            key.classList.remove('ativa')
        }
    }
}