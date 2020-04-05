var array = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний_Новгород", "Челябинск", "Омск", "Самара",
    "Ростов-на-Дону", "Уфа", "Красноярск", "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",];
function activeSearch() {
    document.querySelector('.content').classList.toggle('active');
    var arrUl = document.querySelector('.dropdown-content');
    arrUl.innerHTML = '';
    for (var i = 0; i < array.length; i++) {
        arrUl.innerHTML += "<li>" + array[i] + "</li>";
    }
}
function filterSearch(event) {
    console.log(event.target.value);
    var valbutton = document.getElementById('fval').value;
    var arrUl = document.querySelector('.dropdown-content');
    arrUl.innerHTML = '';
    for (var i = 0; i < array.length; i++) {
        arrUl.innerHTML += "<li>" + array[i] + "</li>";
        var temp = array.indexOf(valbutton);
        if (temp === -1) {
            arrUl.innerHTML -= "<li>" + array[i] + "</li>";
        }
    }
}
