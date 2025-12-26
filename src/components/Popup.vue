<template lang="">
        <div v-if="isVisible" class="fixed z-10 inset-0 bg-white/40 flex justify-center items-center">
        <div class="relative w-2/5 min-w-[250px] min-h-32 rounded-lg bg-white p-6 shadow-2xl"> 

            <span class="flex w-full justify-end"> <img src="\src\assets\close.svg" @click="close" class="cursor-pointer"/> </span>
            <slot> </slot>
        </div>

        </div>

</template>
<script>
export default {
    name:"Popup",
    props:{
        value:{
            type:Boolean,
            default: false,
        },
        
    },
    computed: {
            isVisible:{
                get(){
                    return this.value 
                },

                set(newVal){
                    return this.$emit("close", newVal)
                }
            }
        },

        methods: {
            close(){
                this.isVisible = false;
            }
        }

    
}
</script>
<style lang="">
    
</style>