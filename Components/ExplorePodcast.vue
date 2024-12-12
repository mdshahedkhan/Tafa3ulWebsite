<template>
  <section class="bg-no-repeat py-28 w-full bg-cover space-y-10" style="background-image: url('/imgs/backgrounds/01.jpg')">
    <Wrapper>
      <div>
        <p class="text-4xl text-white font-pp-neue-machina">Explore Our <span class="px-1 heading-underline font-pp-neue-machina bg-gradient-to-r from-[#a7df77] to-[#67d380] bg-clip-text text-transparent font-pp-neue-machina-bold italic">Podcast</span></p>
        <div class="flex justify-between items-center">
          <div class="py-4">
            <p class="text-white font-cairo-regular leading-[24px]">Tafa3ul Hub Workshops are carefully crafted to provide participants with the  necessary tools,
              <br> guidance and inspiration to explore their interests.</p>
          </div>
          <div class="space-x-4">
            <button class="bg-transparent transition duration-150 group active:bg-[#58A534] ring-2 ring-[#58A534] rounded-full px-4 inline-block py-3 disabled:ring-green-700" @click="()=> handleNavigation('prev')">
              <span class="ti ti-chevron-left text-3xl group-active:text-gray-300 text-[#797B7D] "></span>
            </button>
            <button class="bg-transparent transition duration-150 group active:bg-[#58A534] ring-2 ring-[#58A534] rounded-full px-4 inline-block py-3 disabled:ring-green-700" @click="()=> handleNavigation('next')">
              <span class="ti ti-chevron-right text-3xl group-active:text-gray-300 text-[#797B7D] "></span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
    <div class="space-y-10 pt-12">
      <Swiper @slideChange="onSlideChange" @init="onInit" :modules="modules" :autoplay="{duration: 5}" :slides-per-view="3" :slides-per-group="1" loop :space-between="30">
        <SwiperSlide v-for="slide in slides" :key="`slide-${slide}`">
          <div class="py-2 px-2 space-y-6 cursor-pointer">
            <div class="rounded-2xl relative ring-2 ring-[#FF665D] overflow-hidden">
              <img :src="`/imgs/slides/${slide.image}`" alt="slide" class="w-full h-80 bg-cover object-cover">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-2 rounded-full ring-[#FF665D] px-2 py-2 flex items-center">
                  <span class="bg-primary inline-block px-3 py-2.5 rounded-full">
                    <IconPlayerPlayFilled class="text-4xl text-white" color="#fff"/>
                  </span>
              </div>
            </div>
            <div class="pr-8">
              <p class="text-white text-2xl pb-2 font-pp-neue-machina-bold">{{ slide.title }}</p>
              <p class="text-gray-300 text-lg font-cairo-regular">{{ slide.body }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="flex justify-center items-center w-full gap-1">
        <span v-for="(slide, index) in slides" :key="`slide-dot-${index}`" @click="()=> goSlide(index)" :class="[index === activeIndex ? 'w-[32px] bg-[#2BE29C]':'w-[14px] bg-[#424A6F]','h-[8px]  rounded-full inline-block']"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Wrapper from "~/components/Wrapper.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {IconPlayerPlayFilled} from "@tabler/icons-vue";
import {Pagination, Navigation, Autoplay} from "swiper/modules"
const modules = [Pagination, Navigation, Autoplay]
import {exploreDummySlides as slides} from "~/constraints/DataSource.ts";
const activeIndex = ref(0)
const onSlideChange = (swiper)=> activeIndex.value = swiper.realIndex;
const swiperInstance = ref(null)
const onInit = (swiper)=> swiperInstance.value = swiper;
const goSlide = (index)=> swiperInstance.value && swiperInstance.value.slideTo(index)
const handleNavigation = (actionType)=> {
  if (actionType === "next"){
    activeIndex.value++
    swiperInstance.value && swiperInstance.value.slideTo(activeIndex.value)
  }
  if (actionType === "prev"){
    activeIndex.value--
    swiperInstance.value && swiperInstance.value.slideTo(activeIndex.value)
  }
}
</script>

<style lang="scss" scoped>

</style>