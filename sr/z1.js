function register() { 
let name = document.getElementById(`name`).value;
let email = document.getElementById(`email`).value;
let pass = document.getElementById(`password`).value;

let user = {
    name: name,
    email: email,
    pass: pass,
    loged: false
}

localStorage.setItem(`dani`, JSON.stringify(user))

if(name.length < 3 || email.length < 3 || pass.length < 5){
    document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`;
} else {
    document.getElementById(`message`).innerHTML = `<div class="alert alert-success col-6">Успіх</div>`;
}
console.log(user);
}
