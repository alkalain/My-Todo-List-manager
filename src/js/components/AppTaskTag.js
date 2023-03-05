export default{
    template:`
    <div class="">
        <button
            @click=$emit('change',tag)
            v-for="tag in tags"
            :class="{
                'button is-size-7 has-background-grey-dark has-text-primary-light' : true,
                'blue-br':this.activTemp,
                'br':this.inactivTemp 
            }"
            
   
        >{{tag}}</button>
    </div>
    `,
    props:{
        initialTags:Array,
        /*in the case were you need to checkout the current tag add the next line*/ 
        currentTag:String
        
    },
    data() {
        return {
            isActive:false,
            activTemp:false,
            inactivTemp:false
       
        }
    },
    
    computed:{
        tags(){
            return  ['all', ...new Set(this.initialTags)];
        },
        buttonClass(){
            if(this.currentTag==='all'){
                return this.isActive=true
            }
            if(this.isActive===true){
                return this.activTemp=true
            }
            else{
                return this.inactivTemp=true
            }
            return{
                'button is-size-7 has-background-grey-dark has-text-primary-light' : true,
               /*  'blue-br':this.activTemp,
                'br':this.inactivTemp */
            }
        }
    }
}