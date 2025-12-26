<template lang="">
    <div class="w-full flex justify-between items-center px-2">
        
        <img src="\src\assets\Bitmap.svg" />
        <span class="flex gap-2 items-center pr-5"> <div class='rounded-full bg-gray-400 w-6 h-6' /> Hi, {{fName}} 
            <div class="relative z-10 [&_li]:cursor-pointer [&_li]:hover:bg-gray-300">
                <img src="\src\assets\arrow-down.svg" class="cursor-pointer" @click="toggleDropDown"/>
                <ul :class="[dropdown ? 'flex': 'hidden']"
                class=" rounded-lg  flex-col justify-start items-start gap-2 [&_li]:px-5 [&_li]:py-2 absolute bg-white top-6 -left-30">
                    <li><router-link :to="{name:'wallet'}"  @click="clicked" class="flex justify-between items-center gap-2 rounded-t-lg">
                        <img src="\src\assets\clock.svg"/>
                        WhishLIst
                    </router-link> </li>
                    <li class="px-0 w-full">
                        <router-link :to="{name:'settings'}" @click="clicked" class="flex justify-between items-center gap-2 w-full">
                            <img src="\src\assets\settings copy.svg"/>
                            Settings
                        </router-link>
                    </li>
                    <li @click="logout" class="flex justify-between items-center gap-2 w-full rounded-b-lg">
                        <img src="\src\assets\log-out.svg"/>
                        Logout
                    </li>
                </ul>
            </div>
            <!-- <button class="text-white cursor-pointer px-4 py-1 bg-green-300" @click="logout"> Logout </button>  -->
        </span>
        
    </div>
</template>
<script>
export default {
    name: 'Header',
    data(){
        return{
            fName: 'Guest',
            dropdown:false,
        }
        
    },

    created() {
        this.loadUserName();
    },

    methods: {

        toggleDropDown(){
            this.dropdown = !
            this.dropdown;
        },

        clicked(){
        this.dropdown =false
        },


        logout(){
            localStorage.removeItem('isAuthenticated');
            this.$router.push({name: 'signIn'});
        },

        loadUserName(){
           const storedData =  localStorage.getItem('store');

           const currentUserEmail = localStorage.getItem('currentUserEmail');

           if(storedData && currentUserEmail){
            const parsedData = JSON.parse(storedData);

                let loggedInUser = parsedData.find(user => user.email === currentUserEmail);

                if(loggedInUser){
                    this.fName = loggedInUser.fName;
                }else{
                    this.fName = 'User';
                }
           } else{
            this.fName = 'Guest';
           }
              
        }




        // handleLogout(){

        //     this.$store.dispatch('logout')
        // }
    },
}
</script>
<style lang="">
    
</style>