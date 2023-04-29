let data = {
    name: 'Mike',
    socials:[
        {
        name: 'Google' ,
        img: 'https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg'
    },
    {
        name: 'Instagram',
        img: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png'
    },
    {
        name: 'Twitter',
        img: 'https://cdn-icons-png.flaticon.com/512/124/124021.png'
    },
    {
        name: 'Facebook',
        img: 'https://www.vectorico.com/download/social_media/Facebook-Logo.jpg'
    }
    ],
    tovari:[]
}

const SocialsComponent = {
    props: ['social'],
    template: `
    <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
        <h2 class="text-center">{{social.name}}</h2>
        <img v-bind:src="social.img" style='width:100px; height: 100px; margin:0 auto;'>
    </div>
    `
}

const TovarComponent = {
    props: ['tovar'],
    template: `
    <div class="tovar">
            <div class="imag"><img v-bind:src="tovar.img" alt='пномбмпбромрб'></div>
            <div class="name">{{tovar.name}}</div>
            <div class="developer">Developer: {{tovar.developer}}</div>
            <div class="price">Price: {{tovar.price}}</div>
            <div class="reviews">Reviews: {{tovar.reviews}}</div>
            <div class="do"><div class="add">Add</div>
            <div class="buy">Buy</div></div>
        </div>
    `
}

const app = {
    data(){
        return data
    },
    methods:{

    },
    components:{
        SocialsComponent, TovarComponent
    },
    mounted(){
        db.collection('products').get().then(res => {
            res.forEach(tov => {
                let product = tov.data();
                product.id = tov.id;
                this.tovari.push(product)
            })
        })
    }
}

Vue.createApp(app).mount(`#test`)