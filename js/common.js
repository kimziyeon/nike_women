
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
        barBtn = document.querySelector('.head_right_mob'),
        searchbar = document.querySelector('.search_back'),
        searchBtn = document.querySelector('.search'),
        searchBtnW = document.querySelector('.search_web');

    barBtn.onclick = function () {
        if (searchbar) {
            searchbar.classList.remove('active');
            menubar.classList.toggle('active');
            barBtn.classList.toggle('active');
        }
    }


    searchBtn.onclick = function () {
        if (menubar) {
            menubar.classList.remove('active');
            barBtn.classList.remove('active');

            searchbar.classList.toggle('active');
        }
    }

    searchBtnW.onclick = function () {
        searchbar.classList.toggle('active');
    }
}

