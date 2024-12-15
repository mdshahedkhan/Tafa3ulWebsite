<template>
  <div :class="`px-[1.5px] py-[2px] rounded-xl shadow-sm ring-2 ${isExpend ? 'ring-[#F04635]':'ring-gray-200'}`">
    <div class="w-full h-full py-6 px-6 space-y-4 bg-white overflow-hidden rounded-xl">
      <div class="flex items-center justify-between">
        <p :class="`text-xl ${isExpend ? 'font-pp-neue-machina-bold':'font-pp-neue-machina'} `">{{ option.title }}</p>
        <button :class="`${isExpend ? 'bg-[#F04635]':'hover:bg-gray-100'} transition duration-300 px-2.5 py-1.5 rounded-full group`" @click="handleExpend">
          <span :class="`${isExpend ? '-rotate-180 text-white':'text-[#F04635]'} ti ti-chevron-up group-active:-rotate-180 duration-300 transition inline-block`"></span>
        </button>
      </div>
      <Transition @enter="enter" @leave="leave">
        <div v-if="isExpend">
          <p class="text-[#161C28] font-cairo-regular">{{ option.body }}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap"
const isExpend = ref(false);
const handleExpend = ()=> isExpend.value = !isExpend.value
defineProps(['option'])
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

<style lang="scss" scoped>

</style>