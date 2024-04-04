

const menubar = document.querySelector('article'),
    barBtn = document.querySelector('.head_right_480'),
    closeX = document.querySelector('.menu_X');

    barBtn.onclick = function(){
        menubar.classList.add('active');
    }

    closeX.onclick = function(){
        menubar.classList.remove('active')
    }

const searchbar = document.querySelector('.search_view'),
    shBtn = document.querySelector('.search'),
    closeXsh = document.querySelector('.search_X');

    shBtn.onclick = function(){
        searchbar.classList.add('active');
    }

    closeXsh.onclick = function(){
        searchbar.classList.remove('active');
    }

