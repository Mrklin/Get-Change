<template>
  <section class="relative h-screen flex">
    <transition name="fade" mode="out-in">
      <img :src="currentImg" :key="currentImg" alt="" class="h-full w-full inset-0" />
    </transition>

    <div
      class="flex pb-3 flex-col w-full gap-3 z-10 absolute self-end text-center text-white"
    >
      <h4 class="font-semibold">{{ currentSlide.text.header }}</h4>
      <p class="w-90 self-center">{{ currentSlide.text.para }}</p>

      <div class="flex justify-center items-center gap-3 p-4">
        <div :class="[currentSlide.nav1? 'p-1 rounded-full border border-[#2BDA53]':'']">
          <div :class="[currentSlide.nav1? 'bg-[#2BDA53]':'bg-white','h-2 w-2 rounded-full']" />
        </div>
        <div :class="[currentSlide.nav2? 'p-1 rounded-full border border-[#2BDA53]':'']">
          <div :class="[currentSlide.nav2? 'bg-[#2BDA53]':'bg-white','h-2 w-2 rounded-full']" />
        </div>
    </div>
    </div>
    
  </section>
</template>
<script>
// import image1 from "@/assets/Signup1.webp";
// import image2 from "@/assets/Signup2.webp";
export default {
  name: "Display",
  data() {
    return {
      imgSwap: [
        {
          img: new URL('@/assets/Signup1.webp', import.meta.url).href,
          text: {
            header: "No Hazzles",
            para: "Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod.",
          },
          nav1:true
        },
        {
          img: new URL('@/assets/Signup2.webp', import.meta.url).href,
          text: {
            header: "Secure Payments",
            para: "New lorem ipsum dolor sit amet, consectetur \n adipiscing elit, it changes.",
          },
          nav2:true
        },
      ],
      currentIndex: 0,
      intervalid: null,
      // nav1: true,
      // nav2:false
    };
  },
  mounted() {
    this.startSwap();
  },
  beforeDestroy() {
    this.stopSwap();
  },

  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.imgSwap.length;
      // this.nav1 ==!this.nav1
      // this.nav2 ==!this.nav2;
      
    },
    startSwap() {
      this.intervalid = setInterval(() => {
        this.next();
      }, 5000);
    },
    stopSwap() {
      if (this.intervalid) {
        clearInterval(this.intervalid);
        this.intervalid = null;
        
      }
    },
  },

  computed: {
    currentSlide() {
      return this.imgSwap[this.currentIndex];
    },
    currentImg() {
      return this.currentSlide.img;
    },
  },
};
</script>
<style>
.fade-enter-active,.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter,.fade-leave-to {
  opacity: 0;
}
</style>
