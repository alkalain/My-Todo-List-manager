export default{
    template:`
    <h1>
    </spot>
    {{user}}
    </h1>
    `,
    props:{
        user:String,
        
    },
    created(){
        this.user=prompt("Enter your name");
    }
}