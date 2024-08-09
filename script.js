const containerVideos = document.querySelector('.videos__container')

const api = fetch('http://localhost:3000/videos')
    .then(res => res.json())
    .then((videos) =>
        videos.forEach((video) => {
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
            `;
        })
    )
    .catch(error => {
        containerVideos.innerHTML = `<p style="color: red;">Houve um erro ao carregar os vídeos: ${error}. Por favor, tente novamente mais tarde.</p>`;
    });