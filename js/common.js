
const header = document.createElement('header')
const footer = document.createElement('footer')
document.body.prepend(header)
document.body.append(footer)

fetch('./header.html')
    .then(res => res.text())
    .then(res => {
        document.querySelector('header').innerHTML = res;
        headerFetch();
    })

fetch('./footer.html')
    .then(res => res.text())
    .then(res => {
        document.querySelector('footer').innerHTML = res;
    })


function headerFetch() {

    const menubar = document.querySelector('.menu_back'),
        barBtn = document.querySelector('.head_right_mob');

    barBtn.onclick = function () {
        menubar.classList.toggle('active');
        barBtn.classList.toggle('active');
    }


    const searchbar = document.querySelector('.search_view'),
        shBtn = document.querySelector('.search'),
        closeXsh = document.querySelector('.search_X');

    shBtn.onclick = function () {
        searchbar.classList.add('active');
    }

    closeXsh.onclick = function () {
        searchbar.classList.remove('active');
    }
}

