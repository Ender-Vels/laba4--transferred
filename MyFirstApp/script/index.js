let vm={
    data(){
        return{
            description:'My basic App',
            userText:''
        }

    },
    methods:{
    setText(event){
        this.userText=event.target.value;

    }

    }
};

Vue.createApp(vm).mount('#app');