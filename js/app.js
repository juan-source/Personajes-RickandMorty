import API from './api.js'

const api = new API()
console.log(api.getCharacter(1))
document.addEventListener('click',function(){
    var valor = Math.floor((Math.random()*591)+1)
    console.log(valor)
    console.log(api.getCharacter(valor))
})
