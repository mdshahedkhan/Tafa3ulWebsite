<template>
  <section id="explore-podcast" class="bg-no-repeat py-28 w-full bg-cover space-y-10" style="background-image: url('/imgs/backgrounds/01.jpg')">
    <div class="wrapper">
      <div class="contain-container">
        <p class="lg:text-4xl xl:text-4xl md:text-3xl text-2xl text-white font-pp-neue-machina">Explore Our <span class="px-1 heading-underline font-pp-neue-machina bg-gradient-to-r from-[#a7df77] to-[#67d380] bg-clip-text text-transparent font-pp-neue-machina-bold italic">Podcast</span></p>
        <div class="flex justify-between items-center">
          <div class="py-4">
            <p class="lg:text-base xl:text-base text-sm text-white font-cairo-regular leading-[24px]">Tafa3ul Hub Workshops are carefully crafted to provide participants with the  necessary tools,
              <br> guidance and inspiration to explore their interests.</p>
          </div>
          <div class="lg:space-x-4 xl:space-x-4 hidden lg:block xl:block">
            <button class="bg-transparent transition duration-150 group active:bg-[#58A534] ring-2 group hover:ring-green-400 ring-[#58A534] active:ring-[#58A534] rounded-full lg:px-4 xl:px-4 px-1.5 py-0.5 lg:py-3 xl:py-3 inline-block disabled:ring-gray-300" @click="()=> handleNavigation('prev')">
              <span class="ti ti-chevron-left text-3xl group-active:text-gray-300 text-[#797B7D] group-hover:text-green-400"></span>
            </button>
            <button class="bg-transparent transition duration-150 group active:bg-[#58A534] ring-2 group hover:ring-green-400 ring-[#58A534] active:ring-[#58A534] rounded-full lg:px-4 xl:px-4 px-1.5 py-0.5 lg:py-3 xl:py-3 inline-block disabled:ring-gray-300" @click="()=> handleNavigation('next')">
              <span class="ti ti-chevron-right text-3xl group-active:text-gray-300 text-[#797B7D] group-hover:text-green-400"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="slide-container ml-auto lg:px-0 xl:px-0">
        <Swiper @slideChange="onSlideChange" @init="onInit" :autoplay="true" :modules="modules" :slides-per-view="3" :breakpoints="breakpoints" :slides-per-group="1" loop :space-between="5">
          <SwiperSlide v-for="slide in slides" :key="`slide-${slide}`">
            <div class="py-2 lg:px-8 xl:px-8 space-y-6 cursor-pointer lg:mx-0 xl:mx-0 mx-6">
              <div class="rounded-2xl relative ring-2 ring-[#FF665D]">
                <img :src="`/imgs/slides/${slide.image}`" alt="slide" class="w-full lg:h-80 xl:h-80 md:h-96 h-52 bg-cover rounded-2xl object-cover">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-2 rounded-full bg-transparent hover:bg-[#FF665D90] group transition duration-300 ring-[#FF665D] px-2 py-2 flex items-center">
                  <span class="bg-red-500 group-hover:bg-[#FF665D90] duration-300 transition inline-block px-3 py-2.5 rounded-full">
                    <IconPlayerPlayFilled class="text-4xl text-white" color="#fff"/>
                  </span>
                </div>
              </div>
              <div class="pr-8">
                <p class="text-white lg:text-2xl xl:text-2xl text-xl pb-2 font-pp-neue-machina-bold">{{ slide.title }}</p>
                <p class="text-gray-300 text-base lg:text-lg xl:text-lg font-cairo-regular">{{ slide.body }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="flex justify-center items-center w-full gap-1 pt-14">
          <span v-for="(_slide, index) in slides" :key="`slide-dot-${index}`" @click="()=> goSlide(index)" :class="[index === activeIndex ? 'w-[32px] bg-[#2BE29C]':'w-[14px] bg-[#424A6F]','h-[8px]  rounded-full inline-block']"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
const breakpoints = {
  // when window width is >= 640px
  340: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
}
</script>