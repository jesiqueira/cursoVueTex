export default {
    data() {
        return {
            m1: 'Bem vindo ao Vue JS!',
            nome: '',
            inputUser_nome: '',
        }
    },
    methods:{
        inputUser_click(e){
            e.preventDefault()
            // console.log(this.inputUser_nome);
            this.nome = this.inputUser_nome
        }
    }
}
