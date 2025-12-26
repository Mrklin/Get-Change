<template lang="">
    <div>
        <div class="flex flex-col gap-10 justify-start pt-15 border-t border-gray-400">

            <router-link  v-for="icon in icons" :key="icon.path" :to="icon.path"
            :class="[$route.path === icon.path ? 'border-[#2bda53] ': 'border-transparent']"
            class="p-4 border-l-4 flex items-center justify-center cursor-pointer transition-all duration-200"
             > 

                <component :is="icon.icon" :class="[$route.path === icon.path ? 'text-[#2bda53]': 'text-[#013C61]','hover:text-[#2bda53]']"  />
            

            </router-link>
        </div>
    </div>
</template>
<script>
import PeoplesIcon from './Icon Comp/PeoplesIcon.vue';
import CardIcon from './Icon Comp/CardIcon.vue';
import HomeIcon from './Icon Comp/HomeIcon.vue';
export default {
    components: {
        PeoplesIcon,
        CardIcon,
        HomeIcon
    },
    data() {
        return {
            icons:[
                {path: '/menu', name: 'One', icon: 'HomeIcon'},
                {path: '/profile', name: 'Two', icon: 'CardIcon'},
                {path: '/about', name: 'Three', icon: 'PeoplesIcon'},
            ],
            // activeState: 0,
        }
    },
   
}
</script>
<style >

</style>