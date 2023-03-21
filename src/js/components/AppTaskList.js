import AppTask from "./AppTask.js";
import AppTaskTag from "./AppTaskTag.js";

export default{
    components:{AppTask,AppTaskTag},

    template:`
    <section v-show="tasks.length" class="">
    <div class="flex justify-between">
        <h2>
        {{title}}
        
        <span>({{tasks.length}})</span>
        </h2>
        
        <button v-show="canToggle" @click="$emit('toggle')" 
        class="button is-darck">
            
            <i class="fas fa-regular fa-circle-xmark"></i>
            
        </button>

        <app-task-tag
        :initialTags="tasks.map(a=>a.tag)"
        @change="currentTag=$event"
        />
        
    </div>
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
        title: String,
        canToggle: {type:Boolean, default: false}
    },

    //tag Functions
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