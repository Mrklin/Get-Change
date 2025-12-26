<template lang="">
    <div>
    <section class="flex flex-col w-fit text-[#013C61] px-10 gap-3">
      <h2 class="text-2xl font-semibold">Reset Password</h2>
      <p>Don't have an account? <router-link :to="{name: 'signUp'}" class="text-[#2BDA53] cursor-pointer">Sign up</router-link></p>
      <form class="shadow-2xl rounded-lg flex flex-col px-6 py-7 bg-white">
        <span class="flex flex-col justify-center gap-10">
          
          <span class="w-full flex flex-col ">
            <label for="email">Email:</label>
            <span class="flex w-full">
              <input type="email" id="email" name="email" required />
              <img src="\src\assets\@.svg" alt="" />
            </span>
          </span>

         
          <span class="w-full flex justify-between gap-30 items-center px-3">

            <router-link :to="{name: 'signIn'}" class="text-sm text-[#2BDA53] cursor-pointer">Back to login</router-link>
            <button
              class="bg-[#2BDA53] text-white rounded-sm py-1 px-4 cursor-pointer"
              type="submit"
            >
              Recover
            </button>
          </span>
        </span>
      </form>
    </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>