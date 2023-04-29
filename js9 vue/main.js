const test = {

    users: []
}

const testVue = {
    data(){
        return test
    },
    methods : {
    },
    mounted(){
        db.collection('user_test').get().then(res => {
            res.forEach(doc => {
                const user = doc.data();
                user.id = doc.id;
                this.users.push(user);
            })
        })
    }
}
Vue.createApp(testVue).mount('#app');