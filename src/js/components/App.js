import AppUser from "./AppUser.js";
import AppTasks from "./AppTasks.js";

export default{
    components:{
        AppTasks
       
    },
    template: `
    <app-user >Todo list of  </app-user> 
    <app-tasks></app-tasks>
        
    `,
  
}
