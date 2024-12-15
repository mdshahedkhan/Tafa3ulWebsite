<script setup lang="ts">
defineProps(['index', 'slide', 'width', 'height', 'gap'])
</script>

<template>
  <div :class="`${gap ? gap:'gap-12'} bg-no-repeat shadow-lg rounded-3xl my-6 flex justify-between`" :style="{background: `url('/imgs/backgrounds/02.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
    <img :src="`imgs/events/${slide.image}`" :class="`aspect-auto ${width} ${height} rounded-3xl object-fill bg-no-repeat`" :alt="slide.title">
    <div class="w-full py-7 flex flex-col justify-between">
      <div class="space-y-2">
        <p class="text-3xl text-[#306088] font-pp-neue-machina-bold">{{ slide.title }} <span v-if="index % 2 === 1" class="italic text-red-500">{{ slide.subTitle }}</span></p>
        <p v-if="index % 2 === 0" class="font-pp-neue-machina text-2xl italic text-red-500">{{ slide.subTitle }}</p>
      </div>
      <div class="space-y-2">
        <button v-if="slide.role" class="bg-transparent ring-2 ring-[#FF665D] text-[#FF665D] hover:bg-[#FF665D] transition duration-300 hover:text-white active:bg-[#FD5437] px-5 py-1.5 rounded-full text-sm font-pp-neue-machina italic mb-6">Mentors</button>
        <p class="font-pp-neue-machina-bold bg-gradient-to-r from-[#FF665D] to-[#FD5437] text-transparent bg-clip-text text-2xl">{{ slide.author }}</p>
        <p class="pr-16 inline-block font-cairo-regular text-gray-600" v-html="slide.authorDescribe" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>