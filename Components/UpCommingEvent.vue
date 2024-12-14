<template>
  <section id="event" class="py-16 bg-[#faf9f9] bg-center object-center w-full space-y-16" style="background: url('/imgs/glows/01.png'); background-repeat: no-repeat; background-position: top left">
    <Wrapper>
      <div class="flex justify-between py-8 items-center">
        <div class="space-y-3">
          <p class="heading-left-line font-pp-neue-machina italic text-primary inline-block pl-20px">Our Programs</p>
          <p class="text-5xl font-pp-neue-machina bg-gradient-to-r from-[#1e4360] to-[#122D40] pr-1 bg-clip-text text-transparent to-50% py-1">Upcoming <span class="font-pp-neue-machina-bold heading-underline bg-gradient-to-r from-[#1e4360] to-[#122D40] pr-1 bg-clip-text text-transparent to-50% italic">Events</span></p>
          <p class="text-gray-600 text-lg">Aiming to explore emerging fields and <br> discussing their potential future.</p>
        </div>
        <div class="space-x-5 self-end">
          <button @click="()=> handleNavigation('prev')" class="py-3 px-4 group bg-transparent rounded-full ring-2 ring-[#E0E0E0] hover:ring-red-500 hover:shadow-2xl shadow-red-500 transition duration-300">
            <span class="ti ti-chevron-left text-3xl text-gray-500 group-hover:text-red-500 transition duration-300"></span>
          </button>
          <button @click="()=> handleNavigation('next')" class="py-3 px-4 group bg-transparent rounded-full ring-2 ring-[#E0E0E0] hover:ring-red-500 hover:shadow-2xl shadow-red-500 transition duration-300">
            <span class="ti ti-chevron-right text-3xl text-gray-500 group-hover:text-red-500 transition duration-300"></span>
          </button>
        </div>
      </div>
    </Wrapper>
    <div class="py-7">
      <Swiper :modules="modules" :autoplay="true" :loop="true" @slideChange="onSlideChange" @init="onInit" :slides-per-view="2" :slides-per-group="1" space-between="40">
        <SwiperSlide v-for="(slide, index) in slides" :key="`event-slide-${index}`">
          <div class="bg-no-repeat shadow-lg rounded-3xl my-5 flex justify-between gap-12" :style="{background: `url('/imgs/backgrounds/02.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
            <img :src="`imgs/events/${slide.image}`" class="aspect-auto rounded-3xl object-fill bg-no-repeat" :alt="slide.title">
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