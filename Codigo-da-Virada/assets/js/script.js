const txtTweetArea = document.querySelector('textarea');
const botao = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__listaTweet')

function tweetar(event) {
    event.preventDefault();
    const txtTweet = txtTweetArea.value;
    criarTweet(txtTweet);
    txtTweetArea.value = '';

}

botao.addEventListener('click', tweetar);

function criarTweet(tweetTexto) {

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Mário ",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@supermario",
        texto: tweetTexto,
        data: `${hora}:${minutos}`
    }

    listarTweet(tweet);

}

function listarTweet(tweet) {
    const { nome, foto, usuario, texto, data } = tweet;

    let li = document.createElement('li');
    li.classList.add('conteudoPrincipal__tweet')
    let img = document.createElement('img');
    img.src = foto;
    img.classList.add('tweet__imagem')
    let div = document.createElement('div');
    div.classList.add('tweet__conteudo');
    let h2 = document.createElement('h2');
    h2.innerText = nome;
    let span = document.createElement('span');
    span.innerText = `${usuario} · ${data}`
    let p = document.createElement('p');
    p.innerText = texto;

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
}