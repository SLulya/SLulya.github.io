document.addEventListener('DOMContentLoaded', async function(){
    let notfound = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    const data = {
        test: 'hi',
        currentPath: window.location.hash
    }

    const Home = {
        template: home.data
    }

    const NotFound = {
        template: notfound.data
    }

    const routes = {
        '/': Home,
        '/not-found': NotFound 
    }


    const app = {
        data(){
            return data
        },
        methods: {
            getProducts(){
                db.collection('products').get().then(res => {
                    res.forEach(doc => {
                        let prod = doc.data();
                        prod.id = doc.id;
                        console.log(prod)
                    })
                })
            }
        },
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
            this.getProducts()
            
        }
    }
    Vue.createApp(app).mount('#app')
})