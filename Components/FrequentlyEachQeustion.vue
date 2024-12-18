<template>
  <div :class="`rounded-xl shadow-sm ${isExpend ? ringColor:'ring-gray-200'} ring-1`">
    <div class="w-full h-full py-6 px-6 space-y-4 bg-white overflow-hidden rounded-xl">
      <div class="flex items-center justify-between">
        <p :class="`lg:text-xl xl:text-xl md:text-base text-sm font-pp-neue-machina-bold`">{{ option?.title }}</p>
        <button :class="`${isExpend ? backgroundColor:'hover:bg-gray-100'} transition duration-300 px-2.5 py-1.5 rounded-full group`" @click="handleExpend">
          <span :class="`${isExpend ? activeColor + ' -rotate-180 ':color} ti ti-chevron-up group-active:-rotate-180 duration-300 transition inline-block`"></span>
        </button>
      </div>
      <Transition @enter="enter" @leave="leave">
        <div v-if="isExpend">
          <p class="text-[#161C28] font-cairo-regular lg:text-base xl:text-base md:text-base text-sm">{{ option?.body }}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap"
const isExpend = ref(false);
const handleExpend = ()=> isExpend.value = !isExpend.value
defineProps({
  option: {
    type: Object,
  },
  color: {
    type: String,
    default: "text-[#F04635]"
  },
  activeColor: {
    type: String,
    default: `text-white`
  },
  backgroundColor: {
    type: String,
    default: "bg-[#F04635]"
  },
  ringColor: {
    type: String,
    default: 'ring-[#F04635] px-[1.5px] py-[2px]'
  }
})
const enter = (element, done)=> {
  gsap.from(element, {
    opacity: 0,
    duration: 1,
    height: 0
  })
  done()
}
const leave = (element, done)=> {
  gsap.to(element, {
    opacity: 0,
    duration: 1,
    height: 0
  })
  done()
}
</script>