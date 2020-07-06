const url = 'https://rickandmortyapi.com/api/character/'
const numero = 591
const direct = url+numero
export default class API{
    getCharacter(numero){
        fetch(url+numero)
        .then((response) => response.json())
        .then((data) => {

            // introducir los textos de los personajes
            let textos = document.getElementById('text-personaje')
            textos.innerHTML = `<p>${data.name}</p><p>${data.species}</p>
            <p>Sexo:  ${data.gender}</p><p>Origen:  ${data.origin.name}</p>
            `
            // introducir imagen del personaje
            let var_imagen = document.getElementById('image-personaje')
            var_imagen.innerHTML = `<img src="${data.image}"></img>
            `
        })
    }
}