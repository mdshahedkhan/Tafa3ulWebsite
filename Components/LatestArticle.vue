<template>
  <section id="latest-article" class="py-24 space-y-28">
    <Wrapper>
      <div class="flex justify-between">
        <div class="space-y-4">
          <p class="font-pp-neue-machina italic text-red-500">Tafa3ul Hub Magazine</p>
          <p class="text-4xl text-red-500">Our Latest <span class="heading-underline italic bg-gradient-to-r from-[#FF665D] to-[#C85A53] text-transparent bg-clip-text font-pp-neue-machina-bold font-bold">Article</span>
          </p>
          <p class="font-cairo-regular text-gray-600">Readable local content that gives you a comprehensive view of the business world in Iraq and the southern region</p>
          <div>
            <p class="text-[#F04635] text-xl">Join a thriving hub where
              <button>
                <span class="ti ti-arrow-up-right px-2.5 py-2.5 ml-3 text-[#F04635] rounded-full ring-2 ring-[#F6A09C]"></span>
              </button>
            </p>
          </div>
        </div>
        <SliderNavigation @handleNavigation="handleNavigation"/>
      </div>
    </Wrapper>
    <div>
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
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap"
import {Swiper, SwiperSlide} from "swiper/vue"
import {Autoplay} from "swiper/modules"
import {DummyArticles} from "~/constraints/DataSource";

const modules = [Autoplay]
const swiperInstance = ref(null)
const activeSlide = ref(0)
const initiateInstance = (swiper) => swiperInstance.value = swiper
const onChangeSlide = (swiper) => activeSlide.value = swiper.realIndex

const enter = (element) => {
  gsap.from(element, {
    opacity: 0,
    duration: 2,
  })
}

const handleNavigation = (actionType) => {
  if (actionType === "next" && activeSlide.value < DummyArticles.length) {
    console.log("NEXT")
    activeSlide.value++
    swiperInstance.value && swiperInstance.value?.slideTo(activeSlide.value)
  }
  if (actionType === "prev" && activeSlide.value > 0) {
    activeSlide.value--
    swiperInstance.value && swiperInstance.value?.slideTo(activeSlide.value)
  }
}
</script>

<style>
#latest-article .heading-underline::after {
  background: linear-gradient(to top, #FF665D, #C85A53);
}

#latest-article .swiper-wrapper {
  align-items: baseline;
}
</style>