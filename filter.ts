
const array : string [] = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань","Нижний_Новгород","Челябинск","Омск","Самара",
    "Ростов-на-Дону","Уфа","Красноярск","Воронеж","Пермь","Волгоград","Краснодар","Саратов","Тюмень","Тольятти","Ижевск",];


function activeSearch() {
    document.querySelector('.content').classList.toggle('active');

    const arrUl: HTMLElement = document.querySelector('.dropdown-content') as HTMLElement;
    arrUl.innerHTML = '';
    for (let i = 0; i < array.length; i ++) {
        arrUl.innerHTML += `<li>${array[i]}</li>`;
    }
    
}

function filterSearch(event){
    console.log(event.target.value);
    const valbutton: string = document.getElementById('fval').value;  
    
    const arrUl: HTMLElement = document.querySelector('.dropdown-content') as HTMLElement;
    arrUl.innerHTML = '';
    for (let i = 0; i < array.length; i ++) {
        arrUl.innerHTML += `<li>${array[i]}</li>`;
    }
    let arr2 = array.filter(item => item.includes(valbutton.toLowerCase()) === true);
    console.log(arr2);
    arrUl.innerHTML = '';
    for (var i = 0; i < arr2.length; i++) {
     let arr1 = arrUl.innerHTML += "<li>" + arr2[i] + "</li>";
    }

    
    
}