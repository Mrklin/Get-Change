<template>
    
        <div
        class="w-full flex flex-col justify-start gap-3 items-center font-semibold  text-[#013C61] bg-[#F6F8F8] h-full py-8 px-14">
            <div class="flex items-center justify-between w-full"> 
                <h2 class="text-2xl">Employee</h2> 
                <MyButton @click="added" class="w-[150px]">Add New</MyButton>
            </div>
            <div class="px-4 py-5 bg-white flex justify-between items-center w-full rounded-sm">  
                <h1 class="text-3xl">Josh Bakery Ventures</h1>
                <p class="text-"> 62, Bode Thomas, Surulere, Lagos</p>
            </div>

            <div class="flex justify-between items-center w-full">
          <span class="flex gap-4 items-center">

            <select v-model="newRoleSelection"
             class="outline-0 px-4 border rounded-sm  ">
                <option  value="change" disabled selected>Change roles</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
            </select>
            <MyButton @click="updateRoles" 
            :disabled="selectedRows.length===0"
            >Change</MyButton>

            <span class="flex border border-[#013C61] rounded-sm bg-white">  
                <input v-model="searchQuery"
                placeholder ="Enter Staff Name"
                type="search" 
                class="w-6" />
            </span>
           
          </span>

          <span class="flex justify-between items-center gap-3 font-light">
            <p class="border px-2">{{ currentRole.id }}</p>
            of {{ tableBodys.length }}
            <div
              class="rounded-full h-5 w-5 pb-0.5 flex hover:opacity-60 items-center 
              cursor-pointer font-medium justify-center bg-[#2bda53] text-white"
              @click="previousRole"
            >
              <
            </div>
            <div
              class="rounded-full h-5 w-5 pb-0.5 flex hover:opacity-60 items-center 
              cursor-pointer font-medium justify-center bg-[#2bda53] text-white"
              @click="nextRole"
            >
              >
            </div>
          </span>
        </div>
         
           <div class="w-full ">
            <div class="grid grid-cols-[5rem_2fr_2fr_2fr_2fr_1fr_1fr] justify-start  items-center px-4 py-2 w-full">
                
                <label class="flex justify-center items-center cursor-pointer w-3.5 h-3.5 rounded-sm border border-[#2bda53]"> 
                  <input 
                  type="CheckBox"
                  class="iinput cursor-pointer hidden"/>
                  <span class="checked w-2.5 h-2.5 rounded-sm hidden bg-[#2bda53]"></span>
                </label>

                <div>
                    {{ theads.fName }}
                </div>
                <div >
                    {{ theads.lName }}
                </div>
                <div >
                    {{ theads.email }}
                </div>
                <div >
                    {{ theads.tel }}
                </div>
                <div >
                    {{ theads.role }}
                </div>
                
            </div>
            
            <div class="w-full flex flex-col gap-2">
                <div v-for="(role, index) in filteredQuery" :key="role.id" 
                class="grid grid-cols-[5rem_2fr_2fr_2fr_2fr_1fr_1fr] justify-start  items-center  px-4 py-2 w-full bg-white">

                    <div >
                      <label class="flex justify-center items-center cursor-pointer w-3.5 h-3.5 rounded-sm border border-[#2bda53]"> 
                        <input 
                        v-model="selectedRows"
                        :value="role.id"  
                        type="checkbox"
                        class="iinput cursor-pointer hidden"/>
                        <span class="checked w-2.5 h-2.5 rounded-sm hidden bg-[#2bda53]"></span>
                      </label>
                        
                    </div>
                   
                    <div>
                        {{ role.fName }}
                    </div>
                    <div >
                        {{ role.lName }}
                    </div>
                    <div >
                        {{ role.email }}
                    </div>
                    <div  >
                        {{ role.tel }}
                    </div>
                    <div >
                        {{ role.role }}
                    </div>
                    <div class=" flex justify-center ">
                        <img @click="confirmDelete(index, role)" src="/src/assets/trash-2.svg" class="cursor-pointer" />

                    </div>
                </div>
            </div>
                
        </div>
            
        </div>

        <Popup :value="deleteOne" @close="deleteOne = $event" :key="deleteOne" >
            <div class="flex flex-col items-center justify-between px-10 py-6 gap-4 text-[#013C61]">
              <p class="text-2xl">Delete Employee</p>
              <p class="text-sm text-center ">Are you sure you want to delete <br></br> {{itemDeleted.fName}} {{ itemDeleted.lName }} ?</p>
              <div class="flex gap-4 w-full justify-between">
              <MyButton @click="deleteOne = false" customClass=" border border-[#013C61]">No,Cancel</MyButton>
              <MyButton @click="deleteItem">Yes,Delete</MyButton>  
             </div>
             </div>
        </Popup>

          <Popup :value="add" @close="add = $event" :key="add" >
            <div class="flex flex-col items-start justify-between px-10 py-6 gap-10 text-[#013C61]">
              <p class="text-2xl">Add a new memeber to your team</p>
              <input type="email" name="email" id="addEmail" placeholder="email">
              <input type="tel" name="tel" id="addTel" maxlength="11" placeholder="Phone Number">
              <select class="w-full outline-0">
                <option value="change" disabled selected>Assign role</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
              <MyButton class="self-end">Send invite </MyButton>
            </div>
          </Popup>


</template>
<script>
import MyButton from '../MyButton.vue';
import CheckBox from './Icon Comp/CheckBox.vue';
import Popup from '../Popup.vue';
export default {
    components:{MyButton, CheckBox, Popup},
    data() {
        return {
        isclicked: false,
        add:false,
        deleteOne:false,
        deleteIndex:null,
        itemDeleted:null,
        roleMoves:0,
        selectedRows:[],
        newRoleSelection: 'change',
        searchQuery:'',

        theads: {
        id: 0,
        fName: "FIRST NAME",
        lName: "LAST NAME",
        email: "EMAIL",
        tel: "PHONE",
        role: "ROLE",
        isclicked:false
      },
      tableBodys: [
      {
        id:1,
        roles:[
             {
          id: 1,
          fName: "Joshua",
          lName: "Bakare",
          email: "joshua.bakare@gmail.com",
          tel: "+2349045762907",
          role: "Admin",
          isclicked:false
        },
        {
          id: 2,
          fName: "Jane",
          lName: "Clement",
          email: "clem.jane@gmail.com",
          tel: "+2349035762907",
          role: "Staff",
          isclicked:false
        },
        {
          id: 3,
          fName: "Hannah",
          lName: "Johnson",
          email: "han.johnson@gmail.com",
          tel: "+2349045762547",
          role: "Admin",
          isclicked:false
        },
        {
          id: 4,
          fName: "John",
          lName: "Ngoka",
          email: "john.ngoka@gmail.com",
          tel: "+2349045762954",
          role: "Staff",
          isclicked:false
        },
        {
          id: 5,
          fName: "Omotola",
          lName: "Adeleke",
          email: "tola.adeleke@gmail.com",
          tel: "+2349045492907",
          role: "Staff",
          isclicked:false
        },
        {
          id: 6,
          fName: "Gloria",
          lName: "Amadi",
          email: "gloria.amadi@gmail.com",
          tel: "+2349345762907",
          role: "Staff",
          isclicked:false
        }
        ]
      },
      {
        id:2,
        roles:[
             {
          id:7,
          fName: "James",
          lName: "Ola",
          email: "james.Ola@gmail.com",
          tel: "+2349045762907",
          role: "Admin",
          isclicked:false
        },
        {
          id: 8,
          fName: "John",
          lName: "Clement",
          email: "clem.john@gmail.com",
          tel: "+2349035762907",
          role: "Admin",
          isclicked:false
        },
        {
          id: 9,
          fName: "Jonah",
          lName: "Johnson",
          email: "jo.johnson@gmail.com",
          tel: "+2349045762547",
          role: "Staff",
          isclicked:false
        },
        {
          id: 10,
          fName: "Juliet",
          lName: "Ngoka",
          email: "jully.ngoka@gmail.com",
          tel: "+2349045762954",
          role: "Staff",
          isclicked:false
        },
        {
          id: 11,
          fName: "Jumoke",
          lName: "Adeleke",
          email: "jummy.adeleke@gmail.com",
          tel: "+2349045492907",
          role: "Amin",
          isclicked:false
        },
        {
          id: 12,
          fName: "Gloria",
          lName: "Amadi",
          email: "gloria.amadi@gmail.com",
          tel: "+2349345762907",
          role: "Staff",
          isclicked:false
        }
        ]
      },

       ]
        }
    },
    methods: {

      updateRoles(){
        if(this.selectedRows.length===0){
          alert('Please select at least one role to update')
         return;
        }

        if(this.newRoleSelection==='change' || !this.newRoleSelection){
          alert('Please select a valid role from the dropDown')
         return;
        }

        const newRole = this.newRoleSelection

        this.currentRole.roles.forEach(employee =>{
          if(this.selectedRows.includes(employee.id)){
            employee.role = newRole
          }
        })

        this.selectedRows = [];
        
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
        deleteItem(){
          if(this.itemDeleted){
            const realIndex = this.currentRole.roles.findIndex(r => r.id === this.itemDeleted.id)

            if(realIndex !==-1){
              this.currentRole.roles.splice(realIndex,1)
            }
            this.deleteOne = false
            this.deleteIndex =null
            this.itemDeleted = null

            this.selectedRows = this.selectedRows.filter(id => id !== this.itemDeleted.id)
          }
            
        },
        added(){
          this.add = true
        },
        confirmDelete(index,role){
          this.deleteOne = true
          this.deleteIndex =index;
          this.itemDeleted =role
        },
    },

    computed: {
        currentRole(){
        return this.tableBodys[this.roleMoves]
      },

      filteredQuery(){
        const allRoles = this.currentRole.roles

        if(!allRoles){
          return allRoles
        }

        const query = this.searchQuery.toLowerCase()

        return allRoles.filter(employee=>{
          return employee.fName.toLocaleLowerCase().includes(query) || 
            employee.lName.toLocaleLowerCase().includes(query)
        })


      }
    },

}
</script>
<style>
    .iinput:checked + .checked{
      display: inline-block;
    }
</style>