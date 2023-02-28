export default{
    template:`
         <div class="">
             <form @submit.prevent="submit" class="field is-medium is-one-third is-centered ">
                <label for="newTask">New task:</label>
                <input v-model="newTask" type="text" placeholder="Enter new task" class="input is info">
                <button type="submit" class="button is-info">Add</button>
             </form>
         </div>
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