<template lang="">
    
     <div class=" flex-col justify-between items-center gap-18 p-4  rounded-lg bg-white"
            :class="[deletes? 'hidden':'flex']">
                <div class="flex justify-center items-center gap-10">
                    <p>**** **** **** **** {{cardNumber.slice(16,20)}}</p> 
                    <img @click="deleteOne" class="cursor-pointer" src="/src/assets/trash-2.svg"/>
                </div>

                <div class="flex justify-between items-center w-full">
                    <span class="text-[#013C61] flex flex-col justify-between items-start">
                        <p class="text-base font-light">Card Holder</p>
                        <p class="text-base font-medium">{{ fName }}  {{ lName }}</p>
                    </span>

                    <span class="text-[#013C61] flex flex-col justify-between items-start">
                        <p class="text-base font-light">Ex.Date</p>
                        <p class="text-base font-medium">{{expiryDate}}</p>
                    </span>
                    
                    <span>
                        <img src="/src/assets/Mastercard-logo.svg" alt="MasterCard" >
                    </span>

                </div>
            </div>
            <Popup :value="deleteModal" @close="deleteModal = $event" :key="deleteModal">
                 <div class="flex flex-col items-center justify-between px-10 py-6 gap-4 text-[#013C61]">
                     <p class="text-2xl">Delete Card</p>
                     <p class="text-sm text-center ">Are you sure you want to delete <br></br> **** **** **** **** {{cardNumber.slice(16,20)}} ?</p>
                     <div class="flex gap-4 w-full justify-between">
                        <MyButton @click="deleteOne = false" customClass=" border border-[#013C61]">No,Cancel</MyButton>
                        <MyButton @click="isDeleted">Yes,Delete</MyButton>
                        </div>
                    </div>
            </Popup>

</template>
<script>
import Popup from './Popup.vue';
import MyButton from './MyButton.vue';
export default {
    components:{Popup, MyButton},
    name:'Card',
    props:{
        fName:{
            type:String,
            default: 'Vue'
        },
        lName:{
            type:String,
            default: 'Js'
        },
        cardNumber:{
            type:String,
            default:'23456890356356723754'
        },
        expiryDate:{
            type:String,
            default:'03/22'
        },
        
        
    },

    data() {
        return {
            deletes:false,
            deleteModal:false
        }
    },

    methods: {

        deleteOne(){
            this.deleteModal =true
        },
        isDeleted(){
            this.deletes = true
            this.deleteModal =false
        }
    },

    
}
</script>
<style lang="">
    
</style>