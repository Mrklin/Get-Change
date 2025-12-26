<template lang="">
    <div class='grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full h-screen'>

        <div class='w-full col-span-2'> <Header /> </div>
        
        <aside class="col-start-1 row-start-2 w-fit"> <SideBar /> </aside>

        <main class="col-start-2 row-start-2"> <RouterView /> </main>
        
    </div>
</template>
<script>
import Header from '@/components/Dash Comp/Header.vue';
import SideBar from '@/components/Dash Comp/SideBar.vue';

export default {

    components:{
        Header,
        SideBar
    }
}
</script>
<style lang="">
    
</style>