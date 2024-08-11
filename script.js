const containerVideos = document.querySelector('.videos__container') // Seleciona o container de vídeos na tela

// fetch() busca em uma API informações e retorna uma objeto Promise - função assíncrona.

// Promessa de quando os dados vierem, algo será feito com base neles

// keyword async serve para escrever codigo assíncrono de forma mais síncrona. Nesse caso o async determina que essa função se irá funcionar se o await for resolvido
async function buscarEMostrarVideos() {

    // Tratamento de erros
    try { // Tenta fazer a requisição fetch para a API de vídeos e exibir os vídeos na tela 

        const busca = await fetch('http://localhost:3000/videos'); // Faz a requisição fetch para a API de vídeos 
        const videos = await busca.json() // Converte a resposta da API para JSON

        // Quando a promise retorna "fulfilled" será necessário fazer algo com o operador .then 'Então...'

        videos.forEach((video) => {  // Para cada vídeo retornado pela API, exibe o vídeo na tela.
            // Por exemplo, se for uma regra da sua aplicação que uma categoria nunca deve vir vazia, se a categoria for vazia, usaremos o throw new Error(). Entre os parênteses, exibiremos uma mensagem, que é "Vídeo sem categoria".

            if (video.categoria == "") {

                throw new Error("Vídeo não tem categoria")

            }

            containerVideos.innerHTML += `
            <li class="videos__item">
                    <iframe src="${video.url}" title"=${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </li>
            `; // Adiciona o vídeo na tela 
        }) // Fim do forEach
    } catch (error) { // Se der erro na requisição fetch, exibe o erro no console do navegador 
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`
    }
}

buscarEMostrarVideos();


const barraDePesquisa = document.querySelector('.pesquisar__input'); // Seleciona a barra de pesquisa na tela

barraDePesquisa.addEventListener('input', filtrarPesquisa); // Adiciona um evento de input na barra de pesquisa


function filtrarPesquisa() { // Função que filtra a pesquisa na barra de pesquisa
    const videos = document.querySelectorAll(".videos__item"); // Seleciona todos os vídeos exibidos na tela

    if (barraDePesquisa.value != "") { // Se o valor da barra de pesquisa não estiver vazio
        //debugger
        for (let video of videos) { // Para cada vídeo exibido na tela
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase(); // Pega o título do vídeo e converte para minúsculo
            let valorFiltro = barraDePesquisa.value.toLowerCase(); // Pega o valor digitado na barra de pesquisa e converte para minúsculo

            if (!titulo.includes(valorFiltro)) { // Se o título do vídeo não contém o valor digitado na barra de pesquisa
                video.style.display = "none"; // Esconde o vídeo da tela aplicando o display none na propriedade style do vídeo
            } else {
                video.style.display = "block"; // Se o título do vídeo contém o valor digitado na barra de pesquisa, exibe o vídeo na tela aplicando o display block na propriedade style do vídeo
            }
        }
    } else {
        video.style.display = "block"; // Se o valor da barra de pesquisa estiver vazio, exibe todos os vídeos na tela aplicando o display block na propriedade style dos vídeos
    }
}

const botaoCategoria = document.querySelectorAll('.superior__item') // Seleciona todos os botões de categoria na tela

botaoCategoria.forEach((botao) => { // Para cada botão de categoria na tela 
    let nomeCategoria = botao.getAttribute('name') // Pega o nome da categoria do botão 
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria)) // Adiciona um evento de clique no botão e chama a função filtrarPorCategoria passando o nome da categoria como parâmetro
})

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item') // Seleciona todos os vídeos exibidos na tela
    for (let video of videos) {

    }
}
