const buscarGatinhos = (e) => {

    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const figure = document.createElement('figure')
                    const img = document.createElement('img')
                    img.src = cat.url
                    img.id = cat.id 
                    img.width = cat ['width'] 
                    img.height = cat ['height'] 
                    figure.appendChild(img)
                   
                    const caption = document.createElement('figcaption')
                    caption.textContent = `id: ${cat.id}, width: ${cat.width}, height: ${cat.height}`
                    figure.appendChild(caption)
                    document.querySelector("#gatinhos").appendChild(figure)
                });
            }else{
                alert('erro na requisição')
            }
        }

    }
xhr.send()
}
const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)

const getMarcas = () => {

    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')


    tarefas
        .then(resposta => resposta.json())
        .then( marcas =>{

            const ul = document.createElement('ul')
            marcas.forEach(marca => {
                const li = document.createElement('li')
                const nome = document.createElement('p')
                const logo = document.createElement('img')
                logo.src = marca.image?.optimized
                nome.textContent = `Nome: ${marca.name}`
                li.appendChild(nome)
                li.appendChild(logo)
                ul.appendChild(li)
                console.log(marca)

            })
            document.body.appendChild(ul)
        })
        .catch(erro => console.log(erro))

        }
const btnMarcas = document.querySelector("#marcas")
btnMarcas.addEventListener("click", getMarcas)

