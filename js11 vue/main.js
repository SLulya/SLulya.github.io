const data = {
    test: 'hello',
    comments: [],
    newcom: {
        name: '',
        text: ''
    }
}

const CommentComponent = {
    props: ['comment'],
    template: `<div class="card mb-3">
    <div class="d-flex">
    <div class="userlogo_box">
    <div class="username">
                {{comment.name.slice(0,1)}}
          </div>
      </div>
      <div class="pl-3">
          <h5>{{comment.name}}</h5>
          <p>
           {{comment.text}}
          </p>
      </div>
    </div>
  </div>` 
}

const app = {
    data(){
        return data
    },
    methods:{
        getComments(){
            db.collection('comments').get().then(res => {
                this.comments = []
                res.forEach(doc => {
                    let comment = doc.data();
                    comment.id = doc.id;
                    this.comments.push(comment)
                })
            })
        },
        addNewComment(){
            db.collection('comments').add(this.newcom).then(res => {
                console.log('success')
                this.newcom.name = '';
                this.newcom.text = '';
                this.getComments()
                
            })
        }
    },
    components:{
        CommentComponent
    },
    mounted(){
        this.getComments()
    }
}

Vue.createApp(app).mount('#app');