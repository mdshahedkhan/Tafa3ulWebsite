<template>
  <Swiper @init="initiateInstance" @slideChange="onChangeSlide" :modules="modules" :loop="true" :autoplay="true" :slides-per-view="4" space-between="30">
    <SwiperSlide v-for="(article, index) in DummyArticles" :key="`article-${index}`">
      <div class="bg-gray-400 rounded-2xl overflow-hidden">
        <Transition @enter="enter">
          <div v-if="index === activeSlide" class="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-2xl to-[#2BE29C] from-[#00000000] mix-blend-multiply"></div>
        </Transition>
        <Transition @enter="enter">
          <div v-if="index === activeSlide" class="absolute flex flex-col justify-between px-7 py-7 top-0 left-0 w-full h-full">
            <div class="text-end">
              <button class="py-2.5 px-4 rounded-full bg-[#F04635]">
                <span class="ti text-lg text-white ti-arrow-up-right"></span>
              </button>
            </div>
            <div class="items-end space-y-3">
              <p class="text-start text-2xl font-pp-neue-machina-bold text-white">{{ article.title }}</p>
              <p class="text-start leading-[24px] font-pp-neue-machina text-white">{{ article.description }}</p>
            </div>
          </div>
        </Transition>
        <img :src="`/imgs/articles/${article.image}`" :data-active="activeSlide === index" :alt="article.title" :class="`${activeSlide === index ? 'h-[25vw]':'h-[20vw]'} w-full object-cover`"/>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import {DummyArticles} from "~/constraints/DataSource";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay} from "swiper/modules";
import gsap from "gsap";
const initiateInstance = (swiper) => swiperInstance.value = swiper
const onChangeSlide = (swiper) => activeSlide.value = swiper.realIndex
const modules = [Autoplay]
const swiperInstance = ref(null)
const activeSlide = ref(0)
const enter = (element) => {
  gsap.from(element, {
    opacity: 0,
    duration: 2,
  })
}
const handleNavigation = (actionType) => {
  if (actionType === "next" && activeSlide.value < DummyArticles.length) {
    activeSlide.value++
    swiperInstance.value && swiperInstance.value?.slideTo(activeSlide.value)
  }
  if (actionType === "prev" && activeSlide.value > 0) {
    activeSlide.value--
    swiperInstance.value && swiperInstance.value?.slideTo(activeSlide.value)
  }
}
defineExpose({handleNavigation})
</script>
