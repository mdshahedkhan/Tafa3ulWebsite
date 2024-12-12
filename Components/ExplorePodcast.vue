<template>
  <section class="bg-no-repeat py-28 w-full bg-cover space-y-10" style="background-image: url('/imgs/backgrounds/01.jpg')">
    <Wrapper>
      <div>
        <p class="text-4xl text-white font-pp-neue-machina">Explore Our <span class="px-1 heading-underline font-pp-neue-machina bg-gradient-to-r from-[#a7df77] to-[#67d380] bg-clip-text text-transparent font-pp-neue-machina-bold italic">Podcast</span></p>
        <div class="py-4">
          <p class="text-white font-cairo-regular leading-[24px]">Tafa3ul Hub Workshops are carefully crafted to provide participants with the  necessary tools,
            <br> guidance and inspiration to explore their interests.</p>
        </div>
      </div>
    </Wrapper>
    <div class="space-y-10 pt-12">
      <Swiper @slideChange="onSlideChange" :modules="modules" :autoplay="{duration: 5}" :slides-per-view="3" :space-between="30">
        <SwiperSlide v-for="slide in slides" :key="`slide-${slide}`">
          <div class="py-2 px-2 space-y-6 cursor-pointer">
            <div class="rounded-2xl relative ring-2 ring-gray-200 overflow-hidden">
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
        <span v-for="(slide, index) in slides" :key="`slide-dot-${index}`" :class="[index === activeIndex ? 'w-[32px] bg-[#2BE29C]':'w-[14px] bg-[#424A6F]','h-[8px]  rounded-full inline-block']"></span>
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
</script>

<style lang="scss" scoped>

</style>