export default{
    template:`
    <div class="column flex justify-center justify-between has-background-darck has-text-primary-light is-one-third is-align-items-flex-start br">
        <h2 class="has-text-weight-bold has-text-wihte">
        {{heading}}
        </h2>
    </div>


    `,
    props:{
        heading:String
    }
    
}