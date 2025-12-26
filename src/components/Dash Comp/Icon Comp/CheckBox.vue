<template lang="">
    <div @click="toggle" class="w-3 h-3 border border-[#013C61] cursor-pointer rounded-sm">
        <div :class="[checked?  'bg-[#2bda53]':'bg-white','h-full w-full' ]"></div>
     </div>
</template>
<script>
export default {
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    computed: {
       checked:{
        get(){
            return this.value
        },
        set(){
            this.$emit('input', !this.value)
        }
       }
    },
    methods: {
        toggle(){
            this.checked = !this.checked
        }
    },
}
</script>
<style lang="">
    
</style>