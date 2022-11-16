var inputPhone = document.querySelector(`input[type=tel]`)
var keyboard = document.querySelectorAll(`input[type=button]`)

for(index = 0; index < keyboard.length; index++){
    const key = keyboard[index]
    key.onclick = () =>{
        inputPhone.value = inputPhone.value + key.value
    }
}