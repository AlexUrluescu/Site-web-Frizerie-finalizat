var menu_btn = document.getElementById('btn_menu');
menu_btn.addEventListener('click', miscare_menu);

var menu = document.querySelector('.menu');

var casuta = document.querySelector('.submenu_btn');
casuta.addEventListener('click', miscare_submenu);

var sageata = document.getElementById('sageata');


var fata = document.querySelector('.fata');
var fata2 = document.querySelector('.fata2');
var fata3 = document.querySelector('.fata3');

var spate = document.querySelector('.spate');
var spate2 = document.querySelector('.spate2');
var spate3 = document.querySelector('.spate3');

var butoane = document.querySelectorAll('.contenedor_continut_servicii input');

for(var i=0; i<butoane.length; i++){
    butoane[i].addEventListener('click', miscare);
}

function miscare(e){
    if(e.target == btn1){
        fata.classList.toggle('dispare_fata');
        spate.classList.toggle('apare_spate');
    }

    if(e.target == btn2){
        fata2.classList.toggle('dispare_fata');
        spate2.classList.toggle('apare_spate');
    }

    if(e.target == btn3){
        fata3.classList.toggle('dispare_fata');
        spate3.classList.toggle('apare_spate');
    }
}

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