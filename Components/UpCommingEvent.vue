<template>
  <section id="event" class="lg:py-16 xl:py-16 py-4 bg-[#faf9f9] bg-center object-center w-full lg:space-y-16 xl:space-y-16 space-y-4" style="background: url('/imgs/glows/01.png') no-repeat top left;">
    <Wrapper>
      <div class="flex justify-between py-8 items-center">
        <div class="space-y-3">
          <p class="heading-left-line font-pp-neue-machina italic text-primary inline-block pl-20px">Our Programs</p>
          <p class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-pp-neue-machina bg-gradient-to-r from-[#1e4360] to-[#122D40] pr-1 bg-clip-text text-transparent to-50% py-1">Upcoming <span class="font-pp-neue-machina-bold heading-underline bg-gradient-to-r from-[#1e4360] to-[#122D40] pr-1 bg-clip-text text-transparent to-50% italic">Events</span></p>
          <p class="text-gray-600 text-sm md:text-base lg:text-lg xl:text-lg">Aiming to explore emerging fields and <br> discussing their potential future.</p>
        </div>
        <SliderNavigation @handleNavigation="handleNavigation"/>
      </div>
    </Wrapper>
    <div class="lg:py-7 xl:py-7">
      <Swiper :breakpoints="breakpoints" :modules="modules" :autoplay="true" :loop="true" @slideChange="onSlideChange" @init="onInit" :slides-per-view="2" :slides-per-group="1" space-between="40">
        <SwiperSlide v-for="(slide, index) in slides" :key="`event-slide-${index}`">
          <EachEventCard :slide="slide" :index="index"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup >
import Wrapper from "~/components/Wrapper.vue";
import {SwiperSlide, Swiper} from "swiper/vue";
import {Autoplay} from "swiper/modules"
import {EventsDummySlides as slides} from "~/constraints/DataSource.ts";
import SliderNavigation from "~/components/SliderNavigation.vue";
import EachEventCard from "~/components/EachEventCard.vue";
const activeIndex = ref(0)
const swiperInstance = ref(null)
const onSlideChange = (swiper)=> activeIndex.value = swiper.realIndex;
const onInit = (swiper)=> swiperInstance.value = swiper;
const modules = [Autoplay]
const handleNavigation = (actionType)=> {
  if (actionType === "next" && activeIndex.value < slides.length) {
    activeIndex.value++
    swiperInstance.value && swiperInstance.value.slideTo(activeIndex.value)
  }
  if (actionType === "prev" && activeIndex.value > 0) {
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
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
}
</script>

<style scoped>
#event p .heading-underline::after {
  bottom: -3px;
  background: #122D40;
}
</style>