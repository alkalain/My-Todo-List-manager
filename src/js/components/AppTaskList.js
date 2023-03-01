import AppTask from "./AppTask.js";

export default{
    components:{AppTask},

    template:`
    <section v-show="tasks.length" class="">
    <h2>{{title}}</h2>
    <div class="">
        <button
        @click="currentTag = tag"
        v-for="tag in tags"
        class="button is-size-7 has-background-grey-dark has-text-primary-light br"
       
        >{{tag}}</button>
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
        title: String
    },
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
        tags(){
            return  ['all', ...new Set(this.tasks.map(a=>a.tag))];
        }
    }
    /* Finir les tag en réglant le pb des tag et voir pour le bp suprr */
}