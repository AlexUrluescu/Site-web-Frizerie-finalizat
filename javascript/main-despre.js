
// ------------ MENU ------------------------

var menu_btn = document.getElementById('btn_menu');
menu_btn.addEventListener('click', miscare_menu);

var menu = document.querySelector('.menu');

var casuta = document.querySelector('.submenu_btn');
casuta.addEventListener('click', miscare_submenu);

var sageata = document.getElementById('sageata');

function miscare_menu(){
    menu.classList.toggle('menu_move');
}

function miscare_submenu(){
    sageata.classList.toggle('sageata_move');

    var height = 0;
    var casuta_submenu = casuta.nextElementSibling;

    if(casuta_submenu.clientHeight == '0'){
        height = casuta_submenu.scrollHeight;
    }

    casuta_submenu.style.height = height + 'px';
}


// --------------------------------

// --------- CONTINUT ----------------------

var avatar1 = document.getElementById('avatar1');
var avatar2 = document.getElementById('avatar2');
var avatar3 = document.getElementById('avatar3');

var barber1 = document.getElementById('barber1');
var barber2 = document.getElementById('barber2');
var barber3 = document.getElementById('barber3');

var foarfeca1 = document.getElementById('foarfeca1');
var foarfeca2 = document.getElementById('foarfeca2');
var foarfeca3 = document.getElementById('foarfeca3');


var nume = document.querySelectorAll('.contenedor-nume ul li h3');
for(var i=0; i<nume.length; i++){
    nume[i].addEventListener('click', miscare);
}

foarfeca1.style.color = 'gold';


function miscare(e){
    if(e.target == nume1){
        avatar1.style.opacity = '1';
        avatar2.style.opacity = '0';
        avatar3.style.opacity = '0';

        barber1.style.opacity = '1';
        barber2.style.opacity = '0';
        barber3.style.opacity = '0';

        foarfeca1.style.color = 'gold';
        foarfeca2.style.color = 'black';
        foarfeca3.style.color = 'black';
    }

    if(e.target == nume2){
        avatar1.style.opacity = '0';
        avatar2.style.opacity = '1';
        avatar3.style.opacity = '0';

        barber1.style.opacity = '0';
        barber2.style.opacity = '1';
        barber3.style.opacity = '0';

        foarfeca1.style.color = 'black';
        foarfeca2.style.color = 'gold';
        foarfeca3.style.color = 'black';
    }

    if(e.target == nume3){
        avatar1.style.opacity = '0';
        avatar2.style.opacity = '0';
        avatar3.style.opacity = '1';

        barber1.style.opacity = '0';
        barber2.style.opacity = '0';
        barber3.style.opacity = '1';

        foarfeca1.style.color = 'black';
        foarfeca2.style.color = 'black';
        foarfeca3.style.color = 'gold';
    }
}