function enter(){ 
let email = document.getElementById(`email`).value;
let password = document.getElementById(`password`).value;

let user1 = JSON.parse(localStorage.getItem(`dani`));

if (user1.email != email){
    document.getElementById(`message`).innerHTML = '<div class="alert alert-danger col-6">Помилка входу. Неправильний email</div>';
    
} else if (user1.pass != password){
    document.getElementById(`message`).innerHTML = '<div class="alert alert-danger col-6">Помилка входу. Неправильний пароль</div>';
  
} else {
    document.getElementById(`message`).innerHTML = `<div class="alert alert-success col-6">Успішний вхід</div>`;
    user1.loged = true;
    localStorage.setItem(`dani`, JSON.stringify(user1))
}

}

