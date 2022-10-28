const sliderElement = document.querySelector('#slider')
const buttonElement = document.querySelector('#button')
const sizePassword = document.querySelector('#valor')
const password = document.querySelector('#password')

const containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@'
let newPassword = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

buttonElement.addEventListener('click', ()=>{
    let pass = ''

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }
    containerPassword.style.display = 'flex'
    password.innerHTML = pass
    newPassword = pass
})

containerPassword.addEventListener('click', ()=>{
    navigator.clipboard.writeText(newPassword)
})
