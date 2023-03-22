import AppTaskList from "./AppTaskList.js";
import AppForm from "./AppForm.js"

export default{
    components:{
        'app-task-list': AppTaskList,
        'app-form':AppForm
    },
    template:`
        
            <div class="columns is-multiline is-info has-background-darck has-text-primary-light is-one-third is-align-items-flex-start">
                <div class="column center is-full">
                    <app-task-list 
                        class="column br has-background-gray-light"
                        :tasks="filters.inProgress" 
                        title="In Progress" 
                    ></app-task-list>
                </div>
                <div class="column center is-full">
                    <app-task-list 
                        class="column br"
                        v-if="show"
                        :tasks="filters.completed" 
                        title="Completed"
                        can-toggle
                        @toggle="show=!show"
                    ></app-task-list>
                </div>
                
                <div class="column center is-full  br">
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
                    complete:true,
                    id:3,
                    tag:'en'
                }
            ],
            show:true,
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