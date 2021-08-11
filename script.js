const btn = document.querySelector('.mostrar');
const more = document.querySelector('.more');
const less = document.querySelector('.less');

const maisC = document.querySelector('.mais');
const coment = document.querySelector('.cometarios');

function mostrar(){
    btn.style.display = 'block';
    more.style.display = 'none';
}
function menos(){
    btn.style.display = 'none';
    more.style.display = 'block';
}
function maisComent(){
    maisC.style.display = 'none';
   coment.style.display = 'block';
}
function menosComent(){
    maisC.style.display = 'block';
   coment.style.display = 'none';
}