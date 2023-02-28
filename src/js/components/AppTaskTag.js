export default{
    template:`
    <div>
        <button
        @click="currentTag=tag"
        v-for="tag in tags"
        class="button"
        :class="{
            'button is-info':tag===currentTag
        }"
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