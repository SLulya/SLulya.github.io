const firebaseConfig = {
    apiKey: "AIzaSyCEc4PZrHQ-2j-w2k00D4JCj6Gejw_R7Ls",
    authDomain: "studylink-920fd.firebaseapp.com",
    projectId: "studylink-920fd",
    storageBucket: "studylink-920fd.appspot.com",
    messagingSenderId: "507495128808",
    appId: "1:507495128808:web:ec3e65462a463a30faf35d"
  };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

let spiner = document.getElementById('spiner');
let list = document.getElementById('list');

let articles = [];
db.collection("articles").get().then( res => {               
    spiner.style.display = 'none';
    res.forEach( doc => {
        const article = doc.data();
        articles.push(article);
        drawArticle(article);
    });
    console.log(articles);
});

function drawArticle(data){
    const article = document.createElement('article');  // Створюємо новий html елемент article

    const title = document.createElement('h2');         // Створюємо новий html елемент h2 (заголовок для article) 
    const text = document.createElement('div');         // Створюємо новий html елемент div (контейнер для тексту у article) 
    const author = document.createElement('a');         // Створюємо новий html елемент а (посилання на ресурс у article)

    title.innerHTML  = data.title;                      // Додаємо відповідні тести у потрібні блоки статті. 
    text.innerHTML   = data.article;                    // Використовуютсья .innerHTML для того, щоб враховуватии htьl теги збержені у базі данних
    author.innerHTML = "Оригінал";
    author.href      = data.author;

    article.appendChild(title);                         // Вставляємо заголовок у елемент article
    article.appendChild(text);                          // Вставляємо текст у елемент article
    article.appendChild(author);                        // Вставляємо посилання у елемент article

    list.appendChild(article);                          // Вставляємо article у елемент на нашій стоорінці
}
