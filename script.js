const containerVideos = document.querySelector('.videos__container') // Seleciona o container de vídeos na tela 

async function buscarEMostrarVideos() {
    try { // Tenta fazer a requisição fetch para a API de vídeos e exibir os vídeos na tela 
        const busca = await fetch('http://localhost:3000/videos'); // Faz a requisição fetch para a API de vídeos 
        const videos = await busca.json() // Converte a resposta da API para JSON

        videos.forEach((video) => {  // Para cada vídeo retornado pela API, exibe o vídeo na tela.
            // Por exemplo, se for uma regra da sua aplicação que uma categoria nunca deve vir vazia, se a categoria for vazia, usaremos o throw new Error(). Entre os parênteses, exibiremos uma mensagem, que é "Vídeo sem categoria".
            if (video.categoria == "") {
                throw new Error("Vídeo não tem categoria")
            }
            containerVideos.innerHTML += ` 
                        <li class="videos__item">
                            <iframe width="100%" height="62%" src="${video.url}"
                            title="${video.titulo}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}" alt="Logo do canal'></img>
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                        </div>
                    </li>
                    `; // Adiciona o vídeo na tela 
        }) // Fim do forEach
    } catch (error) { // Se der erro na requisição fetch, exibe o erro no console do navegador 
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`
    }
    // finally { // Seja qual for o resultado da requisição fetch, exibe a mensagem de carregamento dos vídeos na tela 
    //     //alert('Carregando vídeos...')
    //     containerVideos.innerHTML += `<p> Carregando vídeos... </p>`
    // } // Fim do try...catch...finally
}

buscarEMostrarVideos()

const barraDePesquisa = document.querySelector(".pesquisar__input") // Seleciona a barra de pesquisa na tela

barraDePesquisa.addEventListener("input", filtraPesquisa) // Adiciona um evento de input na barra de pesquisa

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item") // Seleciona todos os vídeos exibidos na tela
    if (barraDePesquisa.value != "")
}


// barraDePesquisa.addEventListener('input', async (evento) => { // Adiciona um evento de input na barra de pesquisa
//     const termoDeBusca = evento.target.value // Pega o valor digitado na barra de pesquisa
//     containerVideos.innerHTML = '' // Limpa o container de vídeos na tela
//     await buscarEMostrarVideos() // Busca e exibe os vídeos na tela
//     const videos = document.querySelectorAll('.videos__item') // Seleciona todos os vídeos exibidos na tela
//     videos.forEach((video) => { // Para cada vídeo exibido na tela
//         const tituloDoVideo = video.querySelector('.titulo-video').textContent // Pega o título do vídeo
//         const descricaoDoVideo = video.querySelector('.titulo-canal').textContent // Pega a descrição do vídeo
//         if (!tituloDoVideo.includes(termoDeBusca) && !descricaoDoVideo.includes(termoDeBusca)) { // Se o termo de busca não estiver no título e na descrição do vídeo
//             video.style.display = 'none' // Esconde o vídeo da tela
//         } // Fim do if
//     }) // Fim do forEach

// })