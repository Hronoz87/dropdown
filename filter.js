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
    for (var i_1 = 0; i_1 < array.length; i_1++) {
        arrUl.innerHTML += "<li>" + array[i_1] + "</li>";
    }
    var arr2 = array.filter(function (item) { return item.includes(valbutton.toLowerCase()) === true; });
    console.log(arr2);
    arrUl.innerHTML = '';
    for (var i = 0; i < arr2.length; i++) {
        var arr1 = arrUl.innerHTML += "<li>" + arr2[i] + "</li>";
    }
}
