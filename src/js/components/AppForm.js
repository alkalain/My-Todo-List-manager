export default{
    template:`
         <form @submit.prevent="submit">
            <label for="newTask">New task:</label>
            <input v-model="newTask" type="text" placeholder="Enter new task">
            <button type="submit">Add</button>
         </form>
    `,
    data(){
        return{
            newTask:''
        }
    },
    methods:{
        submit(){
            this.$emit('addTask',this.newTask);
            this.newTask='';
        }
    }
}