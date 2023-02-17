import AppTaskList from "./AppTaskList.js";
import AppForm from "./AppForm.js"

export default{
    components:{
        'app-task-list': AppTaskList,
        'app-form':AppForm
    },
    template:`
        <section>
        <app-task-list :tasks="filters.inProgress" title="In Progress"></app-task-list>
        <app-task-list :tasks="filters.completed" title="Completed"></app-task-list>
        
        <app-form @addTask="addTask"></app-form>
        </section>
    `,
    data(){
        return{
            tasks:[
                {
                    name:'My task',
                    complete:false,
                    id:1
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
                id:this.tasks.length+1
            });
        }
    }

}