<template>
  <div>
    <section class="flex flex-col w-fit text-[#013C61] px-10 gap-3">
      <h2 class="text-2xl font-semibold">Welcome</h2>
      <p>Don't have an account? <router-link :to="{name: 'signUp'}" class="text-[#2BDA53] cursor-pointer">Sign up</router-link> </p>
      <form class="shadow-2xl rounded-lg flex flex-col px-6 py-7 bg-white " @submit.prevent="login">
        <span class="flex flex-col justify-center gap-3">
          
          <span class="w-full flex flex-col">
            <label for="email">Email:</label>
            <span class="flex w-full">
              <input type="email" id="email" name="email" v-model="credentials.email" required />
              <img src="\src\assets\@.svg" alt="" />
            </span>
          </span>

          <span class="w-full flex flex-col">
            <label for="password">Password:</label>
            <span class="flex w-full">
              <input :type="passwordType" id="password" name="password" 
                 placeholder='*********' required v-model="credentials.password"  />
              <img src="\src\assets\eye.svg" alt="" class="cursor-pointer" @click="togglePassword" />
            </span>
          </span>

         
          <span class="w-full flex justify-between items-center gap-30 px-3">
            <router-link :to="{name: 'reset'}" class='text-sm text-[#2BDA53] cursor-pointer'>
                Forgot Password?
            </router-link>
            <MyButton @click="login" >Sign In</MyButton>
          </span>
        </span>
      </form>
    </section>
  </div>
</template>
<script>
import MyButton from '../MyButton.vue';
export default {
  components:{MyButton},
    data() {
        return {
            passwordType: 'password',
            defaultCredentials: [
                {email: 'vue@gmail.com', password: '12345', fName: 'Vue', lName: '2'},
                {email: 'frank@yahoo.com', password: '12345', fName: 'Frank', lName: 'Lin'},
                {email: 'real@gmail.com', password: '12345', fName: 'Real', lName: 'Gee'},
                {email: 'second@gmail.com', password: '12345', fName: 'Second', lName: 'Generation'},
                {email: 'first@gmail.com', password: '12345', fName: 'First', lName: 'Step'},
            ],
            credentials: {
                email: '',
                password: ''
            },
        }
    },

    created() {
      this.initializeUser();
    },

    methods: {
        togglePassword(){
            this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
        },

        initializeUser(){
          const storedData = localStorage.getItem('store');

          if (!storedData) {
            const stringify = JSON.stringify(this.defaultCredentials);
            localStorage.setItem('store', stringify);
          }
        },

        checkLogin(enterEmail, enterPassword){

          const storedData = localStorage.getItem('store');

          if (storedData) {
            const parsedData = JSON.parse(storedData);

            const user = parsedData.find(
              (user) => user.email === enterEmail && user.password === enterPassword
            );
            if(user){
              localStorage.setItem('isAuthenticated', 'true');

              return true;
            }

            return !!user; 
          }
          localStorage.removeItem('isAuthenticated');
          return false;
        },

        login() {
         
          const enterEmail  = this.credentials.email;
          const enterPassword = this.credentials.password;

          if(this.checkLogin(enterEmail, enterPassword)){
            this.$router.push({ name: 'menu' });
          } else {
            alert('Invalid email or password. Please try again.');
          }
          localStorage.setItem('currentUserEmail', this.credentials.email);
        },


       
    },
};
</script>
<style lang=""></style>
