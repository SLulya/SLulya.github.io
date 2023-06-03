document.addEventListener('DOMContentLoaded', async function(){
    let notfound = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let books = await axios.get('templates/books.html');
    let phones = await axios.get('templates/phones.html');
    let signup = await axios.get('templates/signup.html');

    const data = {
        test: 'hi',
        currentPath: window.location.hash,
        content: []
    }

    const Phones = {
        template: phones.data,
        methods: {
            getProducts(){
                db.collection('phones').get().then(res => {
                    this.$root.content = [];
                    res.forEach(doc => {
                        let prod = doc.data();
                        prod.id = doc.id;
                        this.$root.content.push(prod);
                    })
                })
            }
        },
        mounted(){
            this.getProducts();
        }
    }

    const Books = {
        template: books.data,
        methods: {
            getProducts(){
                db.collection('products').get().then(res => {
                    this.$root.content = [];
                    res.forEach(doc => {
                        let prod = doc.data();
                        prod.id = doc.id;
                        this.$root.content.push(prod);
                    })
                })
            }
        },
        mounted(){
            this.getProducts();
        }
    }

    const Home = {
        template: home.data
    }

    const NotFound = {
        template: notfound.data
    }

    const SignUp = {
        template: signup.data,
        methods: {
            googleAuth(){
                firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
         var user = result.user;
         new_user = {
            name: user.displayName,
            email: user.email,
            login: "Hello"
         }
            db.collection('testReg').doc(user.uid).add(new_user).then(res => {
                console.log('Success')
            })

            console.log(result)
        }).catch((error) => {

        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
    
        var credential = error.credential;
    
  });
            }
        }
    }


    const routes = {
        '/': Home,
        '/not-found': NotFound,
        '/books': Books,
        '/phones': Phones,
        '/sign-up': SignUp
    }


    const app = {
        data(){
            return data
        },
        methods: {},
        components:{

        },
        computed: {
            currentView(){
                return routes[this.currentPath.slice(1) || '/' || NotFound]
            }
        },
        mounted(){
            window.addEventListener ('hashchange', () => {
                this.currentPath = window.location.hash
                console.log('hash change')
            });
            
            
        }
    }
    Vue.createApp(app).mount('#app')
})