<template lang="">
  <div class="px-60 py-15 bg-[#F6F8F8] w-full h-full">
    <div
      class="flex flex-col bg-white gap-5 shadow px-15 py-3 rounded-lg w-full h-full"
    >
      <div class="flex justify-between border-b border-gray-300 pt-4">
        <div
          v-for="(swip, index) in swips"
          :key="swip.id"
          @click="style(index)"
          :class="[
            activeTab === index
              ? 'border-b-3 font-semibold border-[#2bda53]'
              : '',
            'cursor-pointer text-[#013C61]',
          ]"
        >
          {{ swip.name }}
        </div>
      </div>

      <div
        v-if="activeTab === 0"
        class="w-full h-full px-10 py-5 flex justify-start items-start"
      >
        <div class="w-[20%]">
          <div
            class="relative overflow-hidden w-18 h-18 rounded-full  flex justify-center cursor-pointer items-center border-2 border-gray-100"
          >
          <img v-if="imagePreview"
            class="w-18 h-18 rounded-full inset-0"
            :src="imagePreview"
            alt="profile image viewer"/>

            <input type="file" accept="image/*" 
             class="cursor-pointer absolute inset-0 opacity-0  w-full h-full "
             @change="handleUpload" />
          </div>
        </div>

        <div class="flex flex-col gap-8 w-full">
          <span>
            <label class="text-sm" for="sFname">First Name</label>
            <input type="text" id="sFname" name="sFname" />
          </span>
          <span>
            <label class="text-sm" for="sLname">Last Name</label>
            <input type="text" id="sLname" name="sLname" />
          </span>
          <span>
            <label class="text-sm" for="sEmail">Email</label>
            <input type="text" id="sEmail" name="sEmail" />
          </span>

          <MyButton class="self-end"> Save Changes</MyButton>
        </div>
      </div>

      <div
        v-if="activeTab === 1"
        class="w-full h-full px-10 flex justify-start items-start"
      >
        <div class="flex flex-col px-15 py-10 gap-8 w-full">
          <input
            type="text"
            id="oPass"
            name="oPass"
            placeholder="Old Password"
          />

          <input
            type="text"
            id="nPass"
            name="nPass"
            placeholder="New Password"
          />

          <input
            type="text"
            id="cPass"
            name="cPass"
            placeholder="Confirm Password"
          />

          <MyButton class="self-end"> Save Changes</MyButton>
        </div>
      </div>

      <div
        v-if="activeTab === 2"
        class="w-full h-full px-10 flex justify-start items-start"
      >
        <div class="flex flex-col px-15 py-6 gap-8 w-full">
          <span>
            <label for="BName">Business Name </label>
            <input type="text" name="BName" placeholder="Business Name" />
          </span>
          <span>
            <label for="BAdd">Business Address </label>
            <input type="text" name="BAdd" placeholder="Business Address" />
          </span>
          <span>
            <label for="num">Phone Number </label>
            <input
              type="number"
              name="num"
              maxlength="11"
              placeholder="Phone Number"
            />
          </span>

          <MyButton class="self-end"> Save Changes</MyButton>
        </div>
      </div>

      <div
        v-if="activeTab === 3"
        class="w-full h-full text-[#013C61] font-light px-40 py-10 flex flex-col gap-4 justify-start items-start"
      >
        <p>Payment Method</p>

        <span class="flex flex-col items-start gap-4 w-full">
          <span class="flex justify-between items-center w-full font-semibold">
            <p>MASTERCARD</p>
            <p>****3745</p>
            <span
              class="flex justify-between text-nowrap gap-3 font-light items-center"
            >
              <label class="min-w-25" for="card">{{ label }} </label>
              <input
                @change="captureText('Make Primary')"
                type="radio"
                name="card"
                id="master"
                
              />
            </span>
          </span>

          <span class="flex justify-between w-full font-semibold">
            <p>VISACARD</p>
            <p>****3745</p>
            <span
              class="flex justify-between text-nowrap items-center font-light gap-3"
            >
              <label class="min-w-25" for="card">{{ label1 }} </label>
              <input
                @change="captureText1('Make Primary')"
                type="radio"
                name="card"
                id="visa"
              />
            </span>
          </span>
        </span>

        <span class="flex justify-between w-full my-10">
          <p>Reccuring Billing</p>
          <span class="flex justify-between gap-4">
            <span class="flex justify-between gap-2">
              <label for="billing">Enable </label>
              <input type="radio" name="billing" id="enable" />
            </span>
            <span class="flex justify-between gap-2">
              <label for="billing">Disable </label>
              <input type="radio" name="billing" id="disable" />
            </span>
          </span>
        </span>

        <MyButton class="self-end"> Save Changes</MyButton>
      </div>

       <div
        v-if="activeTab === 4"
        class="w-full h-full text-[#013C61] font-light px-30 py-10 flex flex-col gap-4 justify-start items-start"
      >
      <div class="self-end">
        <span class="flex justify-between items-center gap-3 text-sm font-light">
            <p class="border px-2">1</p>
            of 8
            <div
              class="rounded-full h-5 w-5 pb-0.5 flex items-center font-medium 
              justify-center bg-[#2bda53] text-white cursor-pointer"
            >
              <
            </div>
            <div
              class="rounded-full h-5 w-5 pb-0.5 flex items-center font-medium 
              justify-center bg-[#2bda53] text-white cursor-pointer"
            >
              >
            </div>
          </span>
      </div>

      <div v-for="(tbody, index) in tableBodys" :key="tbody.id" class=" text-sm w-full flex justify-between items-center">
        <p>{{tbody.num}}</p>
        <p>{{tbody.des}}</p>
        <p>{{tbody.date}}</p>
        <p>{{tbody.amount}}</p>
    </div>

    </div>

    </div>
  </div>
</template>
<script>
import MyButton from "../MyButton.vue";
export default {
  components: { MyButton },
  data() {
    return {
      swips: [
        { id: 1, name: "Profile" },
        { id: 2, name: "Password" },
        { id: 3, name: "Store Information" },
        { id: 4, name: "Billing Information" },
        { id: 5, name: "Invoice History" },
      ],
      tableBodys: [
        {
          num: 1,
          des: "Wallet top up",
          date: "25 May, 2019",
          amount: "NGN2000.00",
        },
        {
          num: 2,
          des: "Wallet top up",
          date: "07 Apr, 2019",
          amount: "NGN2000.00",
        },
        {
          num: 3,
          des: "Wallet top up",
          date: "Jul Aug, 2019",
          amount: "NGN2000.00",
        },
        {
          num: 4,
          des: "Wallet top up",
          date: "Jun Aug, 2019",
          amount: "NGN2000.00",
        },
        {
          num: 5,
          des: "Wallet top up",
          date: "11 Aug, 2019",
          amount: "NGN2000.00",
        },
        {
          num: 6,
          des: "Wallet top up",
          date: "28 Feb, 2019",
          amount: "NGN2000.00",
        },
        {
          num: 7,
          des: "Wallet top up",
          date: "19 Mar, 2019",
          amount: "NGN2000.00",
        },
      ],
      activeTab: 0,
      label: "Make Primary",
      label1: "",
      imagePreview:null,
    };
  },
  methods: {
    handleUpload(event){
      const file = event.target.files[0]

      if(file){
        if(!file.type.startsWith('image/')){
          this.imagePreview =null
          return;
        }

        const reader = new FileReader();

        reader.onload = (e)=>{
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file)
      }else{
        this.imagePreview =null
      }
    },

    style(index) {
      this.activeTab = index;
    },

    captureText(labelText) {
      this.label = labelText;
      this.label1 = "";
    },
    
    captureText1(labelText) {
      this.label1 = labelText;
      this.label = "";
    },
  },
};
</script>
<style lang=""></style>
