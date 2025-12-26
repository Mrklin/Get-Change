<template>
  <div >
    <section class="flex flex-col w-fit text-[#013C61] px-10 gap-3">
      <h2 class=" text-2xl font-semibold">Create your free account</h2>
      <p>Already registered? <router-link :to="{name: 'signIn'}" class="text-[#2BDA53] cursor-pointer">Sign In</router-link></p>
      <form class="shadow-2xl rounded-lg flex flex-col px-6 py-7 bg-white">
         <span class="flex flex-col justify-center gap-3">

            <span :class="[step1? 'flex': 'hidden', 'w-full flex gap-3 flex-col']">

            <span class="flex -full gap-3" >
               <span class="flex flex-col">
              <label class="w-full" for="name">First Name:</label>
              <span class="flex">
                <input type="text" placeholder="Joshua" id="name" name="name" 
                v-model="form.fName" required  />
                <img src="\src\assets\user.svg" alt="" />
              </span>
            </span>
            <span class="flex flex-col">
              <label for="name">Last Name:</label>
              <span class="flex">
                <input type="text" placeholder="Bakare" id="name" 
                v-model="form.lName" name="name" required  />
                <img src="\src\assets\user.svg" alt="" />
              </span>
            </span>
          </span>

          <span class="flex w-full flex-col">
            <label for="email">Email:</label>
            <span class="flex w-full">
              <input type="email" id="email" name="email" required v-model="form.email" />
              <img src="\src\assets\@.svg" alt="" />
            </span>
          </span>

          <span class="w-full flex flex-col">
            <label for="password">Password:</label>
            <span class="flex w-full">
              <input :type="passwordType" id="password" name="password" 
                v-model="form.password" placeholder='*********' required  />
              <img src="\src\assets\eye.svg" alt="" class="cursor-pointer" @click="togglePassword" />
            </span>
          </span>

          <span class="w-full flex flex-col">
            <label for="confirm-password">Confirm Password:</label>
            <span class="flex w-full">
              <input
                :type="passwordType"
                id="confirm-password"
                name="confirm-password"
                placeholder='*********'
                v-model="form.confirmPassword"
                required 
              />
              <img src="\src\assets\eye.svg" alt="" class="cursor-pointer" @click="togglePassword"/>
            </span>
          </span>
          </span> 

          <span :class="[ step2? 'flex':'hidden',  'flex-col justify-center gap-3 min-w-[350px]']">

          <span class="w-full flex flex-col">
            <label for="name">Business Name</label>
            <span class="flex w-full">
              <input type="text" id="text" v-model="form.businessName" name="name" required />
              <img src="\src\assets\office.svg" alt="" />
            </span>
          </span>

          <span class="w-full flex flex-col">
            <label for="address">Business Address</label>
            <span class="flex w-full">
              <input type="text" id="text" name="address" v-model="form.businessAddress" required />
              <img src="\src\assets\map-pin.svg" alt="" />
            </span>
          </span>

          <span class="w-full flex flex-col">
            <label for="email">Phone Number</label>
            <span class="flex w-full">
              <input type="tel" id="tel" name="tel" v-model="form.phoneNumber" required />
              <img src="\src\assets\phone.svg" alt="" />
            </span>
          </span>


        </span>

        <span :class="[completed? 'hidden':'flex', 'w-full flex justify-end px-3']">
            <button :class="[isFormValid? 'bg-gray-500  cursor-not-allowed': 'bg-[#2BDA53] cursor-pointer',' text-white rounded-sm py-1 px-6 ']"
             @click.prevent="isStep1" :disabled="isFormValid" >{{step1? 'Continue':'Finish'}}</button>
          </span>

        <span :class="[completed? 'flex':'hidden', 'flex-col justify-center items-center p-5 gap-3 text-center']">
          <h1 class="text-2xl font-semibold">Great to have you onboard</h1>
          <p>We just mailed you a confirmation link to <br> {{ form.email }} complete registration <br></br> by following the link</p>

          <router-link :to="{name: 'signIn'}" class="flex gap-2 bg-[#2BDA53] text-white rounded-sm py-1 px-6 cursor-pointer" @click="handleSubmit">
            Dashboard <img src="\src\assets\arrow-right.svg" alt="">
          </router-link>
        </span>
          

     </span>
   
      </form>
    </section>

  </div>
</template>
<script>
import MyButton from '../MyButton.vue';

export default {
  name: "SignUp",
  components:{MyButton},

  data() {
    return {
      email:"",
      step1:true,
      step2: false,
      completed:false,
      passwordType: 'password',
      form: {
                fName:'',
                lName:'',
                email: '',
                password: '',
                confirmPassword:'',
                businessName:'',
                businessAddress:'',
                phoneNumber:''
            }
    }
    
  },

  methods: {
      isStep1(){
        if(this.step1){
          this.step1 =false
          this.step2 = true
          this.completed =false
        }else if(this.step2){
          this.step1 =false
          this.step2 = false
          this.completed =true
        }else{
          this.step1 =true
          this.step2 = false
          this.completed =false
        }
      },
      togglePassword(){
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      },
      handleSubmit(){
        const storedData = localStorage.getItem('store');
        let formArray = storedData ? JSON.parse(storedData) : [];

        const newUser = {
          email: this.form.email,
          password: this.form.password,
          fName: this.form.fName,
          lName: this.form.lName,
        };

        const emailExist = formArray.some(user => user.email === newUser.email);
        if(emailExist){
          alert('Email already exists. Please use a different email.');
          return;
        }

        formArray.push(newUser);

        localStorage.setItem('store', JSON.stringify(formArray));
      }
    
    },
    computed:{
      isFormValid() {
            if(this.step1){
              return(
                this.form.fName.trim() === '' ||
                this.form.lName.trim() === '' ||
                this.form.email.trim() === '' || 
                this.form.password.trim() === '' ||
                this.form.confirmPassword.trim() === '' ||
                this.form.password !== this.form.confirmPassword
              );
            } else if(this.step2){
              return(
                this.form.businessName.trim() === '' ||
                this.form.businessAddress.trim() === '' ||
                this.form.phoneNumber.trim() === ''
              );
            }
            return true;
        }
    }
  
};
</script>
<style>
input {
  border-bottom: 1px solid #E6E7EB;
  outline: none;
  width: 100%;
  padding: 4px;
  font-size: 1rem;
}
label{
    color: #6A7E8A;
    font-size: .875rem;
}

</style>