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
                    tag:'gm'
                },
                {
                    name:'My task 2',
                    complete:false,
                    id:2,
                    tag:'fr'
                },
                {
                    name:'My task 3',
                    complete:false,
                    id:3,
                    tag:'en'
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
                tag:'new'
            });
        },
       /* method removing the task element that is targeted  
        removeTask(index){
            this.tasks.splice(index,1)
        } */
    }

}