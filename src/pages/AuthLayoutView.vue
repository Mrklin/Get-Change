<template>
    <div class="flex justify-between items-center h-screen w-full">

        <div class="w-[60%]">
             <Display />
        </div>
        
     
        <!-- <Forms /> -->
        <div class="flex flex-col justify-between items-center px-10 pt-15 pb-5 w-full h-full">
            <RouterView />
            
            <Footer />
        </div>
    
        
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Display from '@/components/Auth Component/Display.vue';
import Footer from '@/components/Auth Component/Footer.vue';
export default {
    name: 'AuthLayoutView',
    components: {
        Display,
        Footer
    },
}
</script>
<style lang="">
    
</style>