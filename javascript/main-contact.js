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