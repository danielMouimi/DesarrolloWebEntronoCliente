
const app = Vue.createApp ({
    data() {
        return {
            lista: this.loadFromLocalStorage(),
            content: ""
        }
    },

    methods: {
        add() {
            this.lista.push(this.content);
            this.saveToLocalStorage();
            this.content = "";
        },
        remove() {
            this.lista = [];
            this.saveToLocalStorage();
        },

        saveToLocalStorage() {
            localStorage.setItem('groceryList', JSON.stringify(this.lista));
        },
        loadFromLocalStorage() {
            const storedList = localStorage.getItem('groceryList');
            return storedList ? JSON.parse(storedList) : [];
        }
    },

    mounted() {
        lista = loadFromLocalStorage();
    }

})
app.mount('#contenedor');
