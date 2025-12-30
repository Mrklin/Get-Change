<template>
  <div><Toaster position="top-center" :reverseOrder="false"/></div>
  <div
    class="relative bg-[#F6F8F8] w-full h-full flex justify-center items-center text-5xl"
  >
    <div
      class="w-[75%] flex flex-col justify-between items-center font-semibold text-base text-[#013C61] bg-[#F6F8F8] h-full py-10 px-14"
    >
      <div
        class="flex flex-col gap-4 w-full justify-between items-between [&_button]:cursor-pointer"
      >
        <div
          class="flex items-center justify-between py-3 px-5 bg-white rounded-sm"
        >
          <p>Store Wallet</p>
          <span class="text-2xl mr-30"> <sup>₦</sup>2,500 </span>
          <MyButton @click="pop" class="w-[150px]"> Top up wallet </MyButton>
         <Popup :value="isPop" @close="isPop = $event" :key="isPop"> 
    
            <p class="w-full px-12 text-2xl">Top up your store wallet</p>
            <div class="flex flex-col items-start gap-5 px-12 py-6">

              <input name="amount" id="amount" type="number" placeholder="Enter Amount"/>

              <CardInputs customClass="flex-row gap-10" />

              <span class="flex justify-between w-full">
                <span class="w-full flex jutify-between items-center gap-2 text-sm"> 
                  <CheckBox :value="isClicked" @input="isClicked = $event"/> 
                  <p> Use saved debit card </p>
                </span>
                <MyButton class="w-[200px]">Credit Wallet</MyButton>
              </span>

            </div>
            
          </Popup>
        </div>
        
        <div
          class="flex items-center justify-between font-semibold text-base py-3 px-5 bg-white rounded-sm"
        >
          <p>Total Disbursed</p>
          <span class="text-2xl mr-30"> <sup>₦</sup>12,000 </span>
          <MyButton customClass="w-[150px] border border-[#013C61]"> View history </MyButton>
        </div>
      </div>

      <div
        class="w-full flex flex-col justify-between gap-2 items-center text-base"
      >
        <div class="flex justify-between items-center px-6 w-full">
          <p>Recent Activities</p>
          <span class="flex justify-between items-center gap-3 text-sm font-light">
            <p class="border px-2">{{currentRole.id}}</p>
            of {{tableBodys.length}}
            <div
              class="rounded-full h-5 w-5 pb-0.5 flex items-center font-medium 
              justify-center bg-[#2bda53] hover:opacity-60 text-white cursor-pointer" @click="previousRole"
            >
              <
            </div>
            <div
              class="rounded-full h-5 w-5 pb-0.5 flex items-center font-medium 
              justify-center bg-[#2bda53] hover:opacity-60 text-white cursor-pointer" @click="nextRole"
            >
              >
            </div>
          </span>
        </div>

        <div class="w-full">
          <table class="border-separate border-spacing-y-2 w-full px-2">
            <!-- Table Header -->
            <thead class="[&_th]:text-[#013C61] font-normal">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-4 text-left text-xs uppercase tracking-wider"
                >
                  {{ theads.num }}
                </th>
                <th
                  scope="col"
                  class="px-4 py-4 text-left text-xs uppercase tracking-wider"
                >
                  {{ theads.des }}
                </th>
                <th
                  scope="col"
                  class="px-4 py-4 text-left text-xs uppercase tracking-wider"
                >
                  {{ theads.date }}
                </th>
                <th
                  scope="col"
                  class="px-4 py-4 text-left text-xs uppercase tracking-wider"
                >
                  {{ theads.time }}
                </th>
                <th
                  scope="col"
                  class="px-4 py-4 text-right text-xs uppercase tracking-wider"
                >
                  {{ theads.amount }}
                </th>
              </tr>
            </thead>

            <!-- Table Body -->
            <tbody>
              <!-- Single Data Row -->
              <tr
                v-for="(role, index) in currentRole.roles"
                :key="index"
                class="hover:bg-indigo-50 [&_td]:text-gray-500 bg-white transition rounded-lg duration-150 my-4"
              >
                <td class="px-4 py-1.5 whitespace-nowrap text-sm rounded-l-sm">
                  {{ role.num }}
                </td>
                <td class="px-4 py-1.5 whitespace-nowrap text-sm">
                  {{ role.des }}
                </td>
                <td class="px-4 py-1.5 whitespace-nowrap text-sm">
                  {{ role.date }}
                </td>
                <td class="px-4 py-1.5 whitespace-nowrap text-sm">
                  {{ role.time }}
                </td>
                <td
                  class="px-4 py-1.5 whitespace-nowrap text-sm text-right rounded-r-sm"
                >
                  {{ role.amount }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="w-[25%] bg-white h-full text-sm">
      <div
        class="w-full rounded-sm p-6 bg-[#013C61] text-white flex flex-col gap-6"
      >
        <p class="">GETCHANGE WIDGET</p>
        <span class="flex items-center gap-4 text-sm font-light"> 
          <p>Amount </p>

          <input v-model="airtime"
          @input="airtime = $event.target.value.replace(/[^0-9]/g, '')"
          @focus="active('inputField1')"
          placeholder="Enter Amount"
          name="airtime" 
          type="text"
          ref="inputField1"/>

        </span>
        <span class="flex gap-3 justify-center items-center">
          <span class="flex gap-1">
            <label class="h-4.5 w-4.5 flex justify-center items-center rounded-full border-2 border-[#2bda53]"> 
            <input
              id="amount"
              name="amount"
              type="radio"
              checked
              class="iinput hidden cursor-pointer"
              value="amount"
              @change="handleRadio($event.target.value)"
            />
            <span class="checkmark opacity-0 transition-opacity duration-500 ease w-2.5 h-2.5 hidden rounded-full  bg-[#2bda53]"></span>
            </label>
            <label for="amount"> Amount </label>
          </span>

          <span
            class="flex justify-center items-center text-nowrap relative gap-1"
          >
          <label class="h-4.5 w-4.5 flex justify-center items-center rounded-full border-2 border-[#2bda53]"> 
            <input
              id="voucher"
              name="amount"
              type="radio"
              class="iinput hidden cursor-pointer"
              value="voucher"
              @change="handleRadio($event.target.value)"
            />
            <span class="checkmark opacity-0 transition-opacity duration-500 ease  w-2.5 h-2.5 rounded-full hidden bg-[#2bda53]"> </span>
            </label>
            <label for="voucher"> IOU Voucher </label>
          </span>
        </span>

        <input
          type="text"
          v-model="current"
          ref="inputField"
          @focus="active('inputField')"
          @input="current = $event.target.value.replace(/[^0-9]/g, '')"
          placeholder="Enter Phone Number"
          class="w-full p-3 h-8 text-black flex items-center bg-white"
        />
      </div>

      <div
        class="grid grid-cols-4 w-full [&_span]:p-3.5 [&_span]:justify-center select-none text-xl font-medium text-[#013C61] [&_span]:cursor-pointer [&_span]:hover:bg-gray-100"
      >
        <span @click="clearAll" class="flex items-center w-full bg-[#2BDA5333]">
          c
        </span>
        <span
          @mousedown.prevent="moveCursor(-1)"
          class="flex items-center w-full bg-[#2BDA5333]">
          &lt;
        </span>
        <span
          @mousedown.prevent="moveCursor(1)"
          class="flex items-center w-full bg-[#2BDA5333]">
          &gt;
        </span>
        <span @mousedown.prevent="clearOne" class="flex items-center w-full bg-[#2BDA5333]">
          <img src="\src\assets\delete.svg"  />
        </span>
        <span @click="append('1')" class="flex items-center w-full"> 1 </span>
        <span @click="append('2')" class="flex items-center w-full"> 2 </span>
        <span @click="append('3')" class="flex items-center w-full"> 3 </span>
        <span @click="append('*')" class="flex items-center w-full bg-[#2BDA5333]">
          *
        </span>
        <span @click="append('4')" class="flex items-center w-full"> 4 </span>
        <span @click="append('5')" class="flex items-center w-full"> 5 </span>
        <span @click="append('6')" class="flex items-center w-full"> 6 </span>
        <span @click="append('#')" class="flex items-center w-full bg-[#2BDA5333]">
          #
        </span>
        <span @click="append('7')" class="flex items-center w-full"> 7 </span>
        <span @click="append('8')" class="flex items-center w-full"> 8 </span>
        <span @click="append('9')" class="flex items-center w-full"> 9 </span>
        <span @click="append('0')" class="flex items-center w-full bg-[#2BDA5333]">
          0
        </span>
      </div>

      <div class="flex w-full px-10 py-5 flex-col font-medium gap-4">
        <MyButton @click="isQuery" customClass="w-full border border-[#013C61] text-[#013C61]"
          >Query</MyButton
        >

        <MyButton @click="handleGenerate" customClass="w-full bg-[#2BDA53] text-white" >Generate</MyButton>
         <Popup :value="recharge" @close="recharge = $event" :key="recharge"> 
            
            <div class=" w-full flex flex-col items-start text-[#013C61] gap-5 px-12 py-3">
              <p class="w-full text-center text-2xl">Recharge Successful</p>
              <p class="w-full text-center">The transfer of NGN{{airtime}} to <br> {{current}} was successful</p>
            </div>
            
          </Popup>
      </div>
    </div>
  </div>
  <div v-if="isQuery"> 
        <Popup :value="query" @close="query = $event" :key="query"> 
            <div class="flex flex-col gap-6 px-10 py-5 w-full">
               <div class=" cursor-pointer w-full flex justify-center items-center 
               shadow-2xl rounded-lg bg-[#2bda53] text-[#013C61] text-2xl px-20 py-6">
                
               <p>{{current}}</p>

              </div>

                <div class=" w-full flex flex-col items-center text-[#013C61] text-sm gap-3 py-3">
                  <span class="grid grid-cols-3 justify-start items-center w-full">
                    <p>{{queryH.des}}</p>
                    <p>{{queryH.date}}</p>
                    <p>{{queryH.status}}</p>
                  </span>

                  <span v-for="(queryB, index) in queryBodys" :key="index" class="grid grid-cols-3 justify-start items-center gap-3 w-full">
                    <p>{{queryB.des}}</p>
                    <p>{{queryB.date}}</p>
                    <select class="outline-0  px-2 border rounded-sm  ">
                      <option value="change" disabled selected>Change roles</option>
                      <option class="text-red-400 bg-red-200" value="airtime">Redeem as airtime</option>
                      <option class="text-red-400 bg-red-200" value="voucher">Redeem as voucher</option>
                  </select>
                  </span>
              </div>
            </div>
          </Popup>
          </div>

          <div v-if="pinInput"> 
          <Popup :value="pin" @close="pin = $event" :key="pin" > 
                
                <div class=" w-full flex flex-col justify-between items-start text-[#013C61] gap-5 px-8 py-10">
                    <button class="text-[#2bda53] flex gap-2 text-base cursor-pointer text-nowrap w-fit"
                    @click.prevent="goBack"> 
                      <img src="\src\assets\chevron-left.svg" /> 
                      Back 
                  </button>
                  <div class="w-full flex flex-col justify-center items-center text-[#013C61] gap-10 ">
                       <p class="w-full text-center font-semibold text-2xl">Kindly enter customers unique IOU 
                    <br> code to validate the voucher
                  </p>
                  <span class="flex justify-between gap-8 items-center w-[80%] [&_input]:rounded-lg [&_input]:border">

                    <input type ="text" maxlength="1" v-model="inputValue1"
                    @input="inputValue1 = $event.target.value.replace(/[^0-9]/g, '')"
                    autocomplete ="off" required
                    class=" border-gray-300  w-10 h-10 text-center"/>
                    
                    <input type ="text" maxlength="1" v-model="inputValue2"
                    @input="inputValue2 = $event.target.value.replace(/[^0-9]/g, '')"
                    autocomplete ="off" required
                    class=" border-gray-300  w-10 h-10 text-center"/>

                    <input type ="text" maxlength="1" v-model="inputValue3"
                    @input="inputValue3 = $event.target.value.replace(/[^0-9]/g, '')"
                    autocomplete ="off"  required
                    class=" border-gray-300  w-10 h-10 text-center"/>

                    <input type ="text" maxlength="1" v-model="inputValue4"
                    @input="inputValue4 = $event.target.value.replace(/[^0-9]/g, '')"
                    autocomplete ="off" required
                    class=" border-gray-300  w-10 h-10 text-center"/>

                    <input type ="text" maxlength="1" v-model="inputValue5"
                    @input="inputValue5 = $event.target.value.replace(/[^0-9]/g, '')"
                    autocomplete ="off" required
                    class="border-gray-300 w-10 h-10 text-center"/>
                  </span>
                  <div class="flex justify-between px-5 w-full">
                    <MyButton customClass=" border border-[#013C61]"> Resend</MyButton>
                    <MyButton @click="iouConfirm" > Confirm </MyButton>

                  </div>
                  </div>
                 
                </div>
             </Popup>
             </div>

             <div v-if="iouConfirm"> 
                <Popup :value="iou" @close="iou = $event" :key="iou" > 
                  <div class="w-full flex justify-center text-[#013C61] items-center flex-col gap-2">

                    <p class="w-full text-center font-semibold text-2xl">
                      IOU Voucher redeemed <br> successfully
                    </p>
                    <span>
                       <img src="\src\assets\Verify Icon.svg" />
                    </span>
                  </div>
                </Popup>
             </div>
</template>
<script>
import MyButton from "../MyButton.vue";
import Popup from "../Popup.vue";
import CheckBox from "./Icon Comp/CheckBox.vue";
import CardInputs from "../CardInputs.vue";
import toast, {Toaster} from "vue3-hot-toast";
export default {
  components: { MyButton, Popup, CheckBox, CardInputs, Toaster },
  data() {
    return {
      isPop:false,
      isClicked:false,
      recharge:false,
      query:false,
      pin:false,
      iou:false,
      selectedRadio: 'amount',
      roleMoves:0,

      theads: {
        num: "#",
        des: "Description",
        date: "Date",
        time: "Time",
        staff: "Staff",
        amount: "Amount",
      },
      tableBodys: [
        {
          id:1,
          roles:[
        { 
          num: 1,
          des: "Wallet top up",
          date: "06 Aug, 2019",
          time: "12:24PM",
          staff: "Admin",
          amount: "NGN2000.00",
        },
        {
          num: 2,
          des: "Top for 081359491**",
          date: "06 Aug, 2019",
          time: "10:44AM",
          staff: "Jane",
          amount: "NGN55.00",
        },
        {
          num: 3,
          des: "Top for 080234578**",
          date: "06 Aug, 2019",
          time: "09:14AM",
          staff: "Hannah",
          amount: "NGN400.00",
        },
        {
          num: 4,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "John",
          amount: "BRM***K",
        },
        {
          num: 5,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
        {
          num: 6,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
     ]
     },
      {
          id:2,
          roles:[
        { 
          num: 7,
          des: "Wallet top up",
          date: "06 Aug, 2019",
          time: "12:24PM",
          staff: "Admin",
          amount: "NGN2000.00",
        },
        {
          num: 8,
          des: "Top for 081359491**",
          date: "06 Aug, 2019",
          time: "10:44AM",
          staff: "Jane",
          amount: "NGN55.00",
        },
        {
          num: 9,
          des: "Top for 080234578**",
          date: "06 Aug, 2019",
          time: "09:14AM",
          staff: "Hannah",
          amount: "NGN400.00",
        },
        {
          num: 10,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "John",
          amount: "BRM***K",
        },
        {
          num: 11,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
        {
          num: 12,
          des: "IOU for 081478491**",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "Admin",
          amount: "BRM***K",
        },
     ]
     }, 
        // {num: 7, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 8, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 9, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 10, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 11, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 12, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 13, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 14, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 15, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 16, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 17, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 18, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 19, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 20, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 21, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 22, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" },
        // {num: 23, des: "IOU for 081478491**", date: "05 Aug, 2019", time:"01:30PM", staff: "Admin", amount: "BRM***K" }
      ],
      queryH:{
        des: 'Description',
        date: 'Date',
        status: 'Status',
      },
      queryBodys:[
        {
          des: 'NGN55 Airtime',
          date: '06 Aug, 2019',
          status: 'Successful',
        },
        {
          des: 'SAM**G(NGN500)',
          date: '06 Aug, 2019',
          status: 'Successful',
        },
        {
          des: 'BRK**K(NGN100)',
          date: '06 Aug, 2019',
          status: 'Successful',
        },
         {
          des: 'NGN155 Airtime',
          date: '06 Aug, 2019',
          status: 'Successful',
        },
        {
          des: 'BRK**K(NGN100)',
          date: '06 Aug, 2019',
          status: 'Successful',
        },

      ],

      current: "",
      airtime:"",
      activeField: 'inputField',
      inputValue1: "",
      inputValue2: "",
      inputValue3: "",
      inputValue4: "",
      inputValue5: "",
    };
  },
  methods: {

    handleRadio(selectRadio){
      this.selectedRadio = selectRadio
    },

    handleGenerate(){
      if(this.selectedRadio==="amount"){
        this.rechargeCard()
      }else if(this.selectedRadio==="voucher"){
        this.pinInput()
      }else{
        alert('Select amount or voucher radio button')
      }
    },

    nextRole(){
      if(this.roleMoves < this.tableBodys.length-1){
        this.roleMoves++
      }
    },
    previousRole(){
      if(this.roleMoves !== 0){
        this.roleMoves--
      }
    },
    goBack(){
      this.pin=false,
      this.query =true
    },

    iouConfirm(){
      this.iou =true,
      this.pin =false,
      this.query = false
    },

    pinInput(){
      this.pin = true,
      this.query = false

    },

    isQuery(){
      this.query = true,
      this.pin =false
    },

    rechargeCard(){
      this.recharge = true
    },

    pop(){
        this.isPop =true
    },

    active(refName) {
      this.activeField = refName;
      
      const inputF = this.$refs[refName];

      if (inputF){
        inputF.focus();
        const activeValue = this.activeField === 'inputField' ? 'current' : 'airtime';
        const valuekey = this[activeValue].length; 
        inputF.selectionStart = valuekey;
        inputF.selectionEnd = valuekey;
      }
      
    },

    moveCursor(direction) {
      const inputEl = this.$refs[this.activeField];

      if(!inputEl) return;

      inputEl.focus();

      let currPos = inputEl.selectionStart;

      const newPos = currPos + direction;

      const activeValue = this.activeField === 'inputField' ? 'current' : 'airtime';
      const valueLength = this[activeValue].length; 

      if (newPos >= 0 && newPos <= valueLength) {
        inputEl.selectionStart = newPos;
        inputEl.selectionEnd = newPos;
        inputEl.focus();
      }
    },

    clearOne() {
      const inputEl = this.$refs[this.activeField];

      if(!inputEl) return;

      inputEl.focus();

       const activeValue = this.activeField === 'inputField' ? 'current' : 'airtime';

       let value = this[activeValue];

       let currPos = inputEl.selectionStart;

       if(currPos === 0) return;

       const partBefore = value.slice(0, currPos - 1);
       const partAfter = value.slice(currPos);

        this[activeValue] = partBefore + partAfter;

        this.$nextTick(() => {
          const newPos = currPos - 1;
          inputEl.selectionStart = newPos;
          inputEl.selectionEnd = newPos;
          inputEl.focus();
        });

    
    },

    clearAll() {
       const activeValue = this.activeField === 'inputField' ? 'current' : 'airtime';
        this[activeValue] = '';
    },

    append(number) {
      const activeValue = this.activeField === 'inputField' ? 'current' : 'airtime';

      this[activeValue] += number;

      this.$nextTick(() => {
        const activeInput = this.$refs[this.activeField];
        if (activeInput) {
          activeInput.focus();
        }
      });
    },
  },
  computed: {
    currentRole(){
      return this.tableBodys[this.roleMoves]
    }
  },

  // created() {
  //   toast.success("Welcome back Admin!");
  // },
};
</script>
<style>

.iinput:checked + .checkmark{
  display: inline-block;
  opacity: 1;
}
</style>
