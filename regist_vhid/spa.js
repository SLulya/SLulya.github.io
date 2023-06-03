document.addEventListener('DOMContentLoaded', async function(){
    const article_id = new URL(window.location.href).searchParams.get("id");
    let notfound = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let products = await axios.get('templates/products.html');

    

    const data = {
        test: 'hi',
        currentPath: window.location.hash,
        content: []
    }

    

    const Products = {
        template: products.data,
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

    


    const routes = {
        '/home': Home,
        '/not-found': NotFound,
        '/products': Products,
        
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
    Vue.createApp(app).mount('#test_app')
})