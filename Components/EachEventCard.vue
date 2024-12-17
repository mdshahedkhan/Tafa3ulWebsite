<script setup lang="ts">
const props = defineProps(['index', 'slide', 'width', 'height', 'gap'])
const route = `/programs/${props.index}`;
</script>

<template>
  <NuxtLink :href="route" :class="`${gap ? gap:'lg:gap-12 xl:gap-12 gap-2'}  bg-no-repeat shadow-lg rounded-3xl my-6 flex lg:flex-row xl:flex-row flex-col justify-between`" :style="{background: `url('/imgs/backgrounds/02.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
    <img :src="`imgs/events/${slide.image}`" :class="`lg:aspect-auto xl:aspect-auto ${width || 'w-full h-96'} ${height} rounded-3xl object-fill bg-no-repeat`" :alt="slide.title">
    <div class="w-full lg:space-y-0 xl:space-y-0 space-y-6 lg:py-7 xl:py-7 py-4 xl:pl-0 lg:pl-0 pl-4 flex flex-col justify-between">
      <div class="lg:space-y-2 xl:space-y-2 space-y-0">
        <p class="lg:text-3xl xl:text-3xl text-xl text-[#306088] font-pp-neue-machina-bold">{{ slide.title }} <span v-if="index % 2 === 1" class="italic text-red-500">{{ slide.subTitle }}</span></p>
        <p v-if="index % 2 === 0" class="font-pp-neue-machina lg:text-2xl xl:text-2xl md:text-lg italic text-red-500">{{ slide.subTitle }}</p>
      </div>
      <div class="xl:space-y-2 lg:space-y-2 space-y-0">
        <button v-if="slide.role" class="bg-transparent hidden lg:block xl:block ring-2 ring-[#FF665D] text-[#FF665D] hover:bg-[#FF665D] transition duration-300 hover:text-white active:bg-[#FD5437] px-5 py-1.5 rounded-full text-sm font-pp-neue-machina italic xl:mb-6 lg:mb-6 mb-2">Mentors</button>
        <p class="font-pp-neue-machina-bold bg-gradient-to-r from-[#FF665D] to-[#FD5437] text-transparent bg-clip-text lg:text-2xl xl:text-2xl md:text-lg text-sm">{{ slide.author }}</p>
        <p class="pr-16 inline-block font-cairo-regular  lg:text-base xl:text-base text-sm text-gray-600" v-html="slide.authorDescribe" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>