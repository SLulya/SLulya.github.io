
document.addEventListener('DOMContentLoaded', async function(){
let card_template = await axios.get("templates/card.html");

const data = {
    message: 'hi',
    products: []
};

const CardCom = {
    props: ['product'],
    template: card_template.data,
    methods: {
        countTotalPrice(){
            let preOrderPrice = 0;
            let fastDeliveryPrice = 0;
            let productsPrice = this.product.price * this.product.count;
            if(this.product.preOrder){
                preOrderPrice = productsPrice * 0.05;
            }
            if(this.product.fast){
                fastDeliveryPrice = productsPrice * 0.1;
            }
            this.product.totalPrice = productsPrice - preOrderPrice + fastDeliveryPrice;
            console.log(productsPrice)
        }
    }
}

const drawProducts = {
    data(){
        return data;
    },
    methods: {
        getProducts(categ){
            this.products = [];
            db.collection(categ).get().then(res => {
                res.forEach(doc => {
                    let product = doc.data();
                    product.id = doc.id;
                    this.products.push(product)
                })
            })
        }
    },
    components:{
        "card": CardCom
    },
    mounted(){
        this.getProducts('phones')
    }
}

Vue.createApp(drawProducts).mount('#tovari')

})