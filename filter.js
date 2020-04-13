var array = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний_Новгород", "Челябинск", "Омск", "Самара",
    "Ростов-на-Дону", "Уфа", "Красноярск", "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",];
function activeSearch() {
    document.querySelector('.content').classList.toggle('active');
    var arrUl = document.querySelector('.dropdown-content');
    arrUl.innerHTML = '';
    for (var i = 0; i < array.length; i++) {
        var arr = arrUl.innerHTML += "<li>" + array[i] + "</li>";
    }
    content.onclick = function (event) {
        if (event.target.tagName == "LI") {
            document.getElementById('fval').value = event.target.innerText;
        }
        arrUl.innerHTML = '';
    };
}
function filterSearch(event) {
    console.log(event.target.value);
    var valbutton = document.getElementById('fval').value;
    var arrUl = document.querySelector('.dropdown-content');
    arrUl.innerHTML = '';
    var arr2 = array.filter(function (item) { return item.toLowerCase().indexOf(valbutton) !== -1; });
    console.log(arr2);
    arrUl.innerHTML = '';
    for (var i = 0; i < arr2.length; i++) {
        var arr1 = arrUl.innerHTML += "<li>" + arr2[i] + "</li>";
    }
    return;
}
