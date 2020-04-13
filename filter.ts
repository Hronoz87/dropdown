
const array : string [] = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань","Нижний_Новгород","Челябинск","Омск","Самара",
    "Ростов-на-Дону","Уфа","Красноярск","Воронеж","Пермь","Волгоград","Краснодар","Саратов","Тюмень","Тольятти","Ижевск",];


function activeSearch() {
    document.querySelector('.content').classList.toggle('active');

    const arrUl: HTMLElement = document.querySelector('.dropdown-content') as HTMLElement;
    arrUl.innerHTML = '';
    for (let i = 0; i < array.length; i ++) {
       const arr: string  = arrUl.innerHTML += `<li>${array[i]}</li>`;
    }
    
    content.onclick = function(event) {
        if (event.target.tagName == "LI" ) {
            document.getElementById('fval').value = event.target.innerText ;
        }
        arrUl.innerHTML = '';
    }
    
}

function filterSearch(event){
    console.log(event.target.value);
    const valbutton: string = document.getElementById('fval').value;  
    const arrUl: HTMLElement = document.querySelector('.dropdown-content') as HTMLElement;
    arrUl.innerHTML = '';
    
    let arr2: string [] = array.filter(item => item.toLowerCase().indexOf(valbutton) !== -1);
    console.log(arr2);
    arrUl.innerHTML = '';
    for (var i = 0; i < arr2.length; i++) {
     const arr1: string = arrUl.innerHTML += "<li>" + arr2[i] + "</li>";
    } return 
    
    
    
    
}