import AppUser from "./AppUser.js";
import AppTasks from "./AppTasks.js";
import Panel from "./Panel.js";
/* import AppUser from"./AppUser.js"; */
export default{
    components:{
        AppTasks,
        Panel
       
    },
    template: `
    <div class="container is-full">
        <div class="hero is-info br is-max-desktop">

        <app-user class="title center">Todo list of {{user}} </app-user>
        
        </div>
        <section class="section center columns">
            <app-tasks class="column center"></app-tasks>
        </section>
            <panel heading="Hello World"/>
    </div>
        
    `,
    data(){
        return{
            user:String,
        }
    },
    created(){
        this.user=prompt("Enter your name");
    }
  
}
