table = document.getElementById(`table`)

let user = {
    name: "Петро" ,
    lastname: "Іванов" ,
    age: 14,
    email: "petro14@gmail.com",
    misto: "Khmelnitskyi"


}
function showUser(){ 
table.innerHTML = ` <tr>
<td>${user.name}</td>
<td>${user.lastname}</td>
<td>${user.age}</td>
<td>${user.email}</td>
<td>${user.misto}</td>
</tr>`;
}
function changeUserData(x, y, a, b, c){
    user.name = x;
    showUser();
    user.lastname = y;
    showUser();
    user.age = a;
    showUser()
    user.email = b;
    showUser()
    user.misto = c;
    showUser()
}

