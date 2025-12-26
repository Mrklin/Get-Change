<template >
    <div class="w-full flex flex-col justify-start gap-10
    items-start font-semibold  text-[#013C61] bg-[#F6F8F8] h-full py-8 px-14">
        
        <div class="flex items-center justify-between w-full"> 
                <h2 class="text-2xl">Debit Cards</h2> 
                <MyButton @click="debitModal" class="w-[150px]">Add New</MyButton>
                <Popup :value="debit" @close="debit = $event" :key="debit">
                    <div class="flex flex-col items-start justify-between px-10 py-6 gap-10 text-[#013C61]">
                      <p class="text-2xl">Add New Card</p>
                      <div class="flex flex-col gap-4  w-full">

                            <CardInputs @update:card="handleCardInput" />

                            <MyButton @click="addNewCard" class="self-end">Add Card</MyButton>
                        
                    </div>
                </div>
            </Popup>
            </div>

                
            <div class="grid grid-cols-4 w-full gap-4 justify-start items-center">
                <Card />

                <Card v-if="newCard" v-for="(card, index) in cards" :key="index" 
                v-bind="card"/>
            <!-- <div v-if="newCard" v-for="(card, index) in cards" :key="index" class="flex flex-col justify-between items-center gap-18 p-4 rounded-lg bg-white">
                <div class="flex justify-center items-center gap-20">
                    <p>**** **** **** **** {{ card.cardNumber.slice(16,20) }}</p> 
                    <img class="cursor-pointer" src="\src\assets\trash-2.svg"/>
                </div>

                <div class="flex justify-between items-center w-full">
                    <span class="text-[#013C61] flex flex-col justify-between items-start">
                        <p class="text-base font-light">Card Holder</p>
                        <p class="text-base font-medium">{{ fName }}  {{ lName }}</p>
                    </span>

                    <span class="text-[#013C61] flex flex-col justify-between items-start">
                        <p class="text-base font-light">Ex.Date</p>
                        <p class="text-base font-medium">{{ card.expiryDate }}</p>
                    </span>
                    
                    <span>
                        <img src="\src\assets\Mastercard-logo.svg" alt="MasterCard" >
                    </span>

                </div>
            </div> -->
            </div>
           
    </div>
</template>
<script>
import MyButton from '../MyButton.vue';
import Popup from '../Popup.vue';
import CardInputs from '../CardInputs.vue';
import Card from '../Card.vue';
export default {
    components:{ MyButton, Popup, CardInputs, Card },

    data() {
        return {
            fName:"",
            lName:"",
            debit:false,
            newCard:false,
            newCardData:{
                cardNumber:"",
                expiryDate:"",
                cvv:""
            },
            cards:[
                
            ]
        }
    },
    methods: {
        debitModal(){
            this.debit = true;
        },

        loadUserName(){
           const storedData =  localStorage.getItem('store');

           const currentUserEmail = localStorage.getItem('currentUserEmail');

           if(storedData && currentUserEmail){
            const parsedData = JSON.parse(storedData);

                let loggedInUser = parsedData.find(user => user.email === currentUserEmail);

                if(loggedInUser){
                    this.fName = loggedInUser.fName;
                    this.lName = loggedInUser.lName;
                }
           } 
              
        },

        handleCardInput(cardData){
            this.newCardData = cardData 
        },

        addNewCard() {
            
            const cardInfo= this.newCardData
            if (cardInfo.cardNumber.length < 19 || cardInfo.expiryDate.length !== 5 || cardInfo.cvv.length !== 3) {
                alert("Please complete all card fields.");
                return;
            }

            const finalCard ={
                fName: this.fName,
                lName:this.lName,
                cardNumber: cardInfo.cardNumber,
                expiryDate: cardInfo.expiryDate
            }
            
            this.cards.push( finalCard); 

            this.newCardData ={cardNumber:"", expiryDate:"", cvv :""}
            
            this.newCard = true;
            this.debit = false;
        },
    },
    mounted() {
        this.loadUserName()
    },
    
}
</script>
<style lang="">
    
</style>