<template lang="">
    <button
      :class="['rounded-sm  py-3 md:py-1 px-6 text-nowrap cursor-pointer hover:opacity-60',customClass]">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'MyButton',
     props:{
            customClass:{
               type:String,
                default: 'bg-[#2BDA53] text-white',
            },
          }
}
</script>
<style lang="">
    
</style>