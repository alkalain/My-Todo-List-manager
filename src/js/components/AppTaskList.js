import AppTask from "./AppTask.js";
import AppTaskTag from "./AppTaskTag.js";

export default{
    components:{AppTask,AppTaskTag},

    template:`
    <section v-show="tasks.length" class="">
    <h2>{{title}}</h2>
    
    <app-task-tag 
    :initialTags="tasks.map(a=>a.tag)"
    @change="currentTag=$event"
    />
    
    <ul>
        <app-task
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        class="center"
        >
        </app-task>
    </ul>
</section>
    `,
    props:{
        tasks: Array,
        title: String
    },

    //tagF
    data(){
        return{
            currentTag:'all'
        };
    },
    computed:{
        filteredTasks(){
            if(this.currentTag==='all'){
                return this.tasks;
            }
            return this.tasks.filter(a => a.tag === this.currentTag);
        },
       
      
        
    }
    /* Finir les tag en réglant le pb des tag et voir pour le bp suprr */
}