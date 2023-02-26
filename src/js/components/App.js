import AppUser from "./AppUser.js";
import AppTasks from "./AppTasks.js";
/* import AppUser from"./AppUser.js"; */
export default{
    components:{
        AppTasks
       
    },
    template: `
    <div class="container is-full">
        <div class="hero 
        is-info 
        br 
        is-max-desktop
        ">
        <app-user class="title center">Todo list of {{user}} </app-user>
        </div>
        <section class="section center ">
            <app-tasks class="column center"></app-tasks>
        </section>
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
