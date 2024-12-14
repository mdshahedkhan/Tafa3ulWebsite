<template>
  <div :class="`testimonial-item bg-gradient-to-r ${index === activeIndex ? 'from-[#D7EF3A] to-[#2BE29C]':'shadow-sm'} rounded-2xl p-[2px] py-[2px]`">
    <div class="w-full bg-white rounded-2xl py-10 px-12 space-y-6">
      <p class="text-[#514F6E] font-cairo-regular">{{ testimonial.body }}</p>
      <div class="w-full gap-4 flex">
        <img :src="`/imgs/avatars/${testimonial.image}`" alt="avatar" class="w-14 h-14 rounded-full object-cover"/>
        <div class="flex-1">
          <p class="font-pp-neue-machina-bold text-blue-950">Sophie Moore</p>
          <p class="font-cairo-regular text-[#6F6C90]">Product Developer at Webflow</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['testimonial', 'index', 'activeIndex'])
</script>
