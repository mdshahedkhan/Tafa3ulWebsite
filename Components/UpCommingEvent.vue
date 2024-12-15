<template>
  <section id="event" class="py-16 bg-[#faf9f9] bg-center object-center w-full space-y-16" style="background: url('/imgs/glows/01.png'); background-repeat: no-repeat; background-position: top left">
    <Wrapper>
      <div class="flex justify-between py-8 items-center">
        <div class="space-y-3">
          <p class="heading-left-line font-pp-neue-machina italic text-primary inline-block pl-20px">Our Programs</p>
          <p class="text-5xl font-pp-neue-machina bg-gradient-to-r from-[#1e4360] to-[#122D40] pr-1 bg-clip-text text-transparent to-50% py-1">Upcoming <span class="font-pp-neue-machina-bold heading-underline bg-gradient-to-r from-[#1e4360] to-[#122D40] pr-1 bg-clip-text text-transparent to-50% italic">Events</span></p>
          <p class="text-gray-600 text-lg">Aiming to explore emerging fields and <br> discussing their potential future.</p>
        </div>
        <SliderNavigation @handleNavigation="handleNavigation"/>
      </div>
    </Wrapper>
    <div class="py-7">
      <Swiper :modules="modules" :autoplay="true" :loop="true" @slideChange="onSlideChange" @init="onInit" :slides-per-view="2" :slides-per-group="1" space-between="40">
        <SwiperSlide v-for="(slide, index) in slides" :key="`event-slide-${index}`">
          <EachEventCard :slide="slide"/>
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

</script>

<style scoped>
#event p .heading-underline::after {
  bottom: 4px;
  background: #122D40;
}
</style>