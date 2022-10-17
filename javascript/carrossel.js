'use strict';

const images = [
    {'id': '1', 'url': './imagens/carrossel-index/img1.png'},
    {'id': '2', 'url': './imagens/carrossel-index/img2.png'},
    {'id': '3', 'url': './imagens/carrossel-index/img3.png'},
    {'id': '4', 'url': './imagens/carrossel-index/img4.png'},
    {'id': '5', 'url': './imagens/carrossel-index/img5.png'},
    {'id': '6', 'url': './imagens/carrossel-index/img6.png'},
]

const containerItems = document.querySelector('#container-itens')

const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class="item">
                <img src ='${image.url}'
            </div>
        `
    })
}

/**/ 
loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previsao').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)


