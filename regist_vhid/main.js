var provider = new firebase.auth.GoogleAuthProvider();
function googleVhid(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    console.log(result);
    console.log(user)
    createUser(user.uid, '', '', '')
    localStorage.setItem('login', user.uid)
    setTimeout(function(){
      window.location.href = `spa.html?id=${user.uid}`
    },3000)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
  });
}

function emailVhid(){

    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(userCredential)
    console.log(user)
    createUser(user.uid, namee.value, lastname.value, age.value)
    localStorage.setItem('login', user.uid)
    setTimeout(function(){
      window.location.href = `spa.html?id=${user.uid}`
    },3000)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
}

function createUser(id, nam, lastn, vik){
    let user = {
        name: nam,
        lastname: lastn,
        age: vik
    }
    db.collection('reg_test').doc(id).set(user).then(res => {
        console.log('success')
    })
}

function checkUser(){
  let chek = localStorage.getItem('login')
  if(chek != null){
    window.location.href = `spa.html?id=${chek}`
  }
}
checkUser()

let status = 'поля реєстрації'
function changeForm(){
  if(status == 'поля реєстрації'){ 
  form.innerHTML = `
  <label>Пошта</label><br>
  <input type="text" id="email_vhid"><br><br>
  <label>Пароль</label><br>
  <input type="text" id="pass_vhid"><br><br>
  <button onclick="real_vhid_email_pass()">Увійти</button><br><br>
  <button onclick="googleVhid()">Вхід за допомогою Гугл</button><br><br>
  <button onclick="changeForm()">У мене ще немає акаунт</button>
  `
  status = 'поля входу';
  }else{
    form.innerHTML = `
    <div id="form">
    <label>Ім'я</label><br>
    <input type="text" id="namee"><br><br>
    <label>Прізвище</label><br>
    <input type="text" id="lastname"><br><br>
    <label>Ваш вік</label><br>
    <input type="text" id="age"><br><br>
    <label>Пошта</label><br>
    <input type="text" id="email"><br><br>
    <label>Пароль</label><br>
    <input type="text" id="pass"><br><br>
    <button onclick="emailVhid()">Зареєструватися</button><br><br>
    <button onclick="googleVhid()">Вхід за допомогою Гугл</button><br><br>
    <button onclick="changeForm()">У мене вже є акаунт</button>
        </div>
    `
    status = 'поля реєстрації';
}
}

function real_vhid_email_pass(){
  let email_vhid = document.getElementById(`email_vhid`)
  firebase.auth().signInWithEmailAndPassword(email_vhid.value, pass_vhid.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('login', user.uid)
    setTimeout(function(){
      window.location.href = `spa.html?id=${user.uid}`
    },3000)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
}