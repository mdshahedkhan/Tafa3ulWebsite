<template>
  <div class="overflow-hidden bg-[#fdfcfc]">
    <Header/>
    <div class="h-screen space-y-7 bg-no-repeat object-center bg-[#fdfcfc] bg-cover " style="background: url('/imgs/hero-bg-frame.png'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
      <main class="main">
        <Wrapper class="py-14 space-y-16">
          <Transition @enter="enter">
            <p v-if="visibleElement" data-direction="left" class="text-7xl font-pp-neue-machina-bold py-6 capitalize">Unlock the <br> transformative
              <span class="italic pr-2 font-pp-neue-machina-bold heading-gradient-text-clip bg-gradient-to-r from-[#99ef3a] via-100% via-[#2BE29C] to-[#2BE29C] text-transparent bg-clip-text">power</span><br> of collaboration
            </p>
            <p v-else class="h-60"></p>
          </Transition>
          <div class="flex justify-between">
            <Transition appear @enter="enterItems">
              <div v-if="visibleElement" data-direction="left" data-duration="0.8" data-delay="1" class="w-1/2 flex gap-5 items-center">
                <div class="flex -space-x-4 rtl:space-x-reverse">
                  <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-1.png" alt="avatar">
                  <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-2.png" alt="avatar">
                  <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-3.png" alt="avatar">
                  <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-1.png" alt="avatar">
                </div>
                <div>
                  <Transition @enter="enterCounter">
                    <p v-if="startCounting" class="text-red-500 text-lg font-black py-0 m-0"><span class="counter text-red-500 font-black">125</span>K+</p>
                  </Transition>
                  <p class="text-md text-gray-800">People joined</p>
                </div>
              </div>
            </Transition>
            <Transition @enter="enterLeftSideAnimation">
              <div v-if="visibleElement" class="self-end place-items-end">
                <div class="w-2/3 space-y-8">
                  <p>Join a thriving hub where like-minded individuals and organizations come together to create positive impact, share resources, and drive growth.</p>
                  <div class="space-x-6 flex items-center">
                    <button type="button" class="button flex items-center group">
                      <span class="text-white font-pp-neue-machina">All Program</span>
                      <span class="ti ti-arrow-up-right text-xl pl-2 inline-block text-white"></span>
                    </button>
                    <button type="button" class="button flex items-center group btn-box-shadow">
                      <span class="text-white font-pp-neue-machina">All Program</span>
                      <span class="ti ti-arrow-up-right text-xl pl-2 inline-block text-white"></span>
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </Wrapper>
        <div class="pl-12">
          <Transition @enter="enterHomeEvents">
            <div v-if="visibleElement" class="flex justify-between">
              <div class="w-96">
                <img src="/imgs/curve-text.png" alt="curve-text" class="w-40 mx-auto">
              </div>
              <div class="flex gap-6">
                <img src="/imgs/components/01.png" alt="curve-text" class="w-80"/>
                <img src="/imgs/components/02.png" alt="curve-text" class="w-80"/>
                <img src="/imgs/components/03.png" alt="curve-text" class="w-80"/>
              </div>
            </div>
          </Transition>
        </div>
      </main>
    </div>
    <AboutSection />
    <ExplorePodcast />
    <UpCommingEvent />
  </div>
</template>
<script setup>
// @ts-ignore
import Header from "~/components/Header.vue";
import Wrapper from "~/components/Wrapper.vue";
import AboutSection from "~/components/AboutSection.vue";
import {useHomeSectionAnimation} from "~/hooks/useAnimation";
const {enter, enterItems, enterCounter, enterLeftSideAnimation, enterHomeEvents} = useHomeSectionAnimation()
const visibleElement = ref(false);
const startCounting = ref(false);
onMounted(()=> {
  setTimeout(()=> visibleElement.value = true, 1000)
  setTimeout(()=> startCounting.value = true, 1000)
})
useHead({
  title: "Home | Web Design",
})


</script>
<style>
.heading-gradient-text-clip {
  position: relative;
}

.heading-gradient-text-clip:after {
  position: absolute;
  content: "";
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #99ef3a, #2BE29C);
}

.partner-text {
  position: relative;
}

.partner-text:after {
  position: absolute;
  content: "";
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 2px;
  @apply bg-red-500;
}

.we-are {
  position: relative;
}

.we-are::after {
  position: absolute;
  content: "";
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 3px;
  @apply bg-indigo-500;
}

.about-us-text {
  position: relative;
}

.about-us-text::before {
  position: absolute;
  content: "";
  top: 50%;
  left: -60%;
  width: 50%;
  height: 2px;
  @apply bg-red-400;
}

.button-drop-shadow {
  box-shadow: 0 0 30px coral;
}
.swiper-wrapper .swiper-slide.swiper-slide-active {
  @apply ml-24;
}
</style>