// ISTANZIARE VUE:
var app = new Vue (
    {
        el: '#root',
        data: {
            emailList: [] // array vuoto in cui pusherò ogni risposta
        },
        created(){
            
            for (i=0; i<10; i++) { // chiamo l'API di Boolean per 10 volte
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response) => {
                    requestedEmail = response.data.response
                    this.emailList.push(requestedEmail); // pusho nell'array ogni risposta
                });
            }
        },

        methods: {
        }
    }
)