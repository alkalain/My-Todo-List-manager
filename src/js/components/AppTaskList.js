import AppTask from "./AppTask.js";
export default{
    components:{'app-task':AppTask},

    template:`
    <section v-show="tasks.length">
    <h2>{{title}}</h2>
    <ul>
        <app-task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
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