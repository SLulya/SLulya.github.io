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
