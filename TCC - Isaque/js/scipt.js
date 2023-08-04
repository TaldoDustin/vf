var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');
var activeIndex = localStorage.getItem('activeIndex');

function indicador(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

item.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        // Remove a classe 'active' de todas as tags 'a'
        item.forEach(link => {
            link.classList.remove('active');
        });
        // Adiciona a classe 'active' à tag 'a' selecionada
        e.target.classList.add('active');
        // Armazena o índice da tag 'a' selecionada em localStorage
        localStorage.setItem('activeIndex', index);
        // Anima o marcador
        indicador(e.target);
    });
});

// Adiciona a classe 'active' à tag 'a' correspondente ao índice armazenado em localStorage
if (activeIndex !== null) {
    item[activeIndex].classList.add('active');
}