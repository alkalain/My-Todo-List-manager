export default{
    template:`
    <div class="">
        <button
        @click="currentTag = tag"
        v-for="tag in tags"
        class="button is-size-7 has-background-grey-dark has-text-primary-light br"
       
        >{{tag}}</button>
    </div>
    `,
    props:{
        initialTags:Array
    },
    computed:{
        tags(){
            return['all', ...new Set(this.initialTags)];
        }
    }
}