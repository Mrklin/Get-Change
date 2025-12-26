<template lang="">
    <div class="flex flex-col gap-4 w-full">

        <input id="card" v-model="card.cardNumber" maxlength="20"
           @input="updateCardNumber($event.target.value)" 
           type="text" placeholder="Card Number" />
            
           <div :class="['flex justify-between gap-4 w-full', customClass ]"> 
            <input id="expDate" v-model="card.expiryDate" 
            @keypress="isNumeric" type="text" maxlength="5" placeholder="MM/YY" />

            <input id="cvv" v-model="card.cvv" 
            @input="updateCvv($event.target.value)"  
            type="text" maxlength="3"  placeholder="CVV"/>
          </div>
        
                        
    </div>
</template>
<script>
import MyButton from './MyButton.vue';
export default {
    name: 'CardInputs',
    components:{MyButton},
    props:{
        customClass:{
           type:String,
            default: 'flex-col',
        },
    },
    emits:['update:card'],
    data() {
        return {
          card:{
            cardNumber:"",
            expiryDate:"",
            cvv:"",
            }
        }
    },
    methods: {
        isNumeric(event) {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
            
            this.emitCardData()
        },

        updateCardNumber(value){
            this.card.cardNumber = value.replace(/[^0-9]/g,'')
            this.emitCardData()
        },

        updateCvv(value){
            this.card.cvv = value.replace(/[^0-9]/g,'')
            this.emitCardData()
        },

        emitCardData(){
            this.$emit('update:card', this.card)
        },
      
    },
     watch: {
        'card.expiryDate'(newVal) {
            
            let value = newVal.replace(/[^0-9]/g, '');
           if(value.length >= 2){
            let month = parseInt(value.substring(0, 2), 10);
            if (month > 12) {
                month = 12;
            }else if (month < 1) {
                month = 1;
            }
           }

           if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.card.expiryDate = value;
            this.emitCardData()
        }
    },
}
</script>
<style lang="">
    
</style>