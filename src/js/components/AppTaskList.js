import AppTask from "./AppTask.js";
export default{
    components:{'app-task':AppTask},

    template:`
    <section v-show="tasks.length" class="">
    <h2>{{title}}</h2>
    <ul>
        <app-task
        v-for="task in tasks"
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
    }

}