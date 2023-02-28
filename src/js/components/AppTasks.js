import AppTaskList from "./AppTaskList.js";
import AppForm from "./AppForm.js"

export default{
    components:{
        'app-task-list': AppTaskList,
        'app-form':AppForm
    },
    template:`
        
            <div class="columns is-multiline">
                <div class="column center is-full">
                    <app-task-list 
                    :tasks="filters.inProgress" 
                    title="In Progress" 
                    class="column is-one-third is-info has-background-dark has-text-primary-light br"
                    ></app-task-list>
                </div>
                    <div class="column center is-full">
                        <app-task-list 
                        :tasks="filters.completed" 
                        title="Completed"
                        class="column is-one-third is-info has-background-dark has-text-primary-light br"
                        ></app-task-list>
                    </div>
                
                <div class="column center is-full has-text-primary-light is-one-third br">
                    <app-form @addTask="addTask" ></app-form>
                </div>
            </div>
        
    `,
    data(){
        return{
            tasks:[
                {
                    name:'My task',
                    complete:false,
                    id:1,
                    tag:'task'
                }
            ],
        }
    },
    computed:{
        filters() {
            return {
                inProgress: this.tasks.filter(task => !task.complete),
                completed: this.tasks.filter(task => task.complete)
              }
        }
    },
    methods:{
        addTask(name){
            this.tasks.push({
                name:name,
                completed:false,
                id:this.tasks.length+1,
                tag:'all'
            });
        }
    }

}