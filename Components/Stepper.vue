<template>
  <div class="relative after:bg-gradient-to-b after:from-[#F7645C] after:w-0.5 after:h-full after:inline-block after:absolute after:top-0 after:mt-3 after:left-4 lg:after:left-[5px] pb-16">
    <ol class="overflow-hidden space-y-5">
      <li v-for="(item, index) in items" :key="`stepper-item-${index}`" @click="()=> handleActiveStepper(index)" :class="`flex-1 ${index !== items.length-1 ? 'after:w-0.5 after:h-[60px]':''} after:content-[''] `">
        <div class="flex cursor-pointer items-center font-medium w-full">
          <span :class="`w-2 h-2 ${activeIndex === index ? 'bg-primary':'bg-transparent'} border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-3 lg:h-3`"></span>
          <div class="block">
            <h4 :class="`text-lg ${activeIndex === index ? 'font-pp-neue-machina-bold text-primary':'text-gray-500 font-pp-neue-machina'} italic font-base hover:text-primary transition duration-300`">{{ item }}</h4>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import {ref} from "vue";
defineProps(['items'])
const emit = defineEmits(['onChange'])
const activeIndex = ref(0)
const handleActiveStepper = (index) =>{
  emit("onChange", index)
  activeIndex.value = index
}
</script>
