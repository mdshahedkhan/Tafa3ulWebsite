<!--
<template>
  <div class="h-screen space-y-7 bg-[#fdfcfc]" style="background: url('/imgs/hero-bg-frame.png') no-repeat center center;background-size: cover;">
    <main class="main">
      <Wrapper class="pt-8 lg:pt-14 xl:pt-14 space-y-8 lg:space-y-16 xl:space-y-16">
        <Transition @enter="enter">
          <p v-if="visibleElement" data-direction="left" class="text-4xl md:text-5xl xl:text-7xl lg:text-7xl font-pp-neue-machina-bold py-6 capitalize">Unlock the <br> transformative
            <span class="italic pr-2 font-pp-neue-machina-bold heading-gradient-text-clip bg-gradient-to-r from-[#99ef3a] via-100% via-[#2BE29C] to-[#2BE29C] text-transparent bg-clip-text">power</span><br> of collaboration
          </p>
        </Transition>
        <div class="flex xl:flex-row lg:flex-row flex-col items-start justify-between">
          <Transition appear @enter="enterItems">
            <div v-show="visibleElement" data-direction="left" data-duration="0.8" data-delay="1" class="w-full lg:w-1/2 xl:w-1/2 flex gap-5 items-center">
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
            <div v-show="visibleElement" class="self-end place-items-end">
              <div class="w-full lg:w-2/3 xl:w-2/3 space-y-8">
                <p>Join a thriving hub where like-minded individuals and organizations come together to create positive impact, share resources, and drive growth.</p>
                <div class="space-x-6 flex items-center">
                  <button type="button" class="button w-full lg:w-auto xl:w-auto flex items-center justify-center group">
                    <span class="text-white text-xs sm:text-sm lg:text-base xl:text-base font-pp-neue-machina">All Program</span>
                    <span class="ti ti-arrow-up-right text-sm lg:text-xl xl:text-xl xl:pl-2 lg:pl-2 pl-0.5 inline-block text-white"></span>
                  </button>
                  <button type="button" class="button w-full lg:w-auto xl:w-auto flex items-center justify-center group btn-box-shadow">
                    <span class="text-white text-xs sm:text-sm lg:text-base xl:text-base font-pp-neue-machina">All Program</span>
                    <span class="ti ti-arrow-up-right text-sm lg:text-xl xl:text-xl xl:pl-2 lg:pl-2 pl-0.5 inline-block text-white"></span>
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Wrapper>
      <div class="xl:block lg:block lg:pl-64 xl:pl-64 lg:pt-16 xl:pt-16">
        <Transition @enter="enterHomeEvents">
          <div v-show="visibleElement" class="flex justify-between">
            <CircleText />
            <div class="flex lg:px-0 xl:px-0 px-8">
              <div class="grid grid-cols-3 gap-6">
                <img src="/imgs/components/01.png" alt="curve-text" class="w-full  lg:w-80  rounded-2xl"/>
                <img src="/imgs/components/02.png" alt="curve-text" class="w-full  lg:w-80  rounded-2xl"/>
                <img src="/imgs/components/03.png" alt="curve-text" class="w-full  lg:w-80  rounded-2xl"/>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </main>
  </div>
</template>

<script setup>
import Wrapper from "~/components/Wrapper.vue";
import {useHomeSectionAnimation} from "~/hooks/useAnimation";
import {onMounted} from "vue";
const {enter, enterItems, enterCounter, enterLeftSideAnimation, enterHomeEvents} = useHomeSectionAnimation()
const visibleElement = ref(false);
const startCounting = ref(false);

onMounted(()=> {
  setTimeout(()=> visibleElement.value = true, 1000)
  setTimeout(()=> startCounting.value = true, 1000)
})
</script>
-->

<!--
<div>
<div class="space-y-7 bg-[#fdfcfc]" style="background: url('/imgs/hero-bg-frame.png') no-repeat center center;background-size: cover;">
  <Wrapper class="flex pt-8 lg:pt-14 xl:pt-14 space-y-8 lg:space-y-16 xl:space-y-16">
    <div class="w-1/2">
      <Transition @enter="enter">
        <p v-if="visibleElement" data-direction="left" class="text-4xl md:text-[64px] leading-[65px] xl:text-6xl lg:text-[64px] font-pp-neue-machina-bold capitalize">Unlock the <br> transformative
          <span class="italic font-pp-neue-machina-bold bg-gradient-to-r from-[#99ef3a] via-100% via-[#2BE29C] to-[#2BE29C] text-transparent bg-clip-text">power</span><br> of collaboration
        </p>
      </Transition>
      <Transition appear @enter="enterItems">
        <div v-show="visibleElement" data-direction="left" data-duration="0.8" data-delay="1" class="w-full mt-[40px] lg:w-1/2 xl:w-1/2 flex items-center">
          <div class="flex -space-x-7 rtl:space-x-reverse">
            <img class="w-[60px] h-[60px] rounded-full" src="/imgs/avatars/avatar-1.png" alt="avatar">
            <img class="w-[60px] h-[60px] rounded-full" src="/imgs/avatars/avatar-2.png" alt="avatar">
            <img class="w-[60px] h-[60px] rounded-full" src="/imgs/avatars/avatar-3.png" alt="avatar">
            <img class="w-[60px] h-[60px] rounded-full" src="/imgs/avatars/avatar-1.png" alt="avatar">
          </div>
          <div class="flex-1 pl-3">
            <Transition @enter="enterCounter">
              <p v-if="startCounting" class="text-red-500 text-lg font-black py-0 m-0"><span class="counter text-red-500 font-black">125</span>K+</p>
            </Transition>
            <p class="text-md text-gray-800">People joined</p>
          </div>
        </div>
      </Transition>
    </div>
  </Wrapper>
  <div class="ml-auto">
    <Transition @enter="enterHomeEvents">
      <div v-show="visibleElement" class="ml-auto flex justify-between">
        <div class="flex-1 w-full hidden xl:block lg:block">
          <div class="mx-auto circle relative w-[180px] h-[180px] bg-[#e1f685] rounded-full flex justify-center items-center">
            <div class="xl:w-24 lg:w-24 md:w-20 w-16 xl:h-24 lg:h-24 md:h-20 h-16 absolute top-1/2 left-1/2 -translate-y-1/2 rounded-full ring-2 ring-[#accf55] -translate-x-1/2 mx-auto">
              <img src="/imgs/icons/arrow-bottom.png" class="w-full p-6 h-full" alt="curve-text">
            </div>
            <div class="text w-full h-full absolute">
              <p ref="circle-text">Tafa3ul hub Tafa3ul hub Tafa3ul hub Tafa3ul</p>
            </div>
          </div>
        </div>
        <div class="lg:w-2/3 xl:w-2/3 w-full flex justify-end lg:px-0 xl:px-0">
          <div class="flex-1 w-full overflow-hidden lg:place-content-end xl:place-content-end place-content-center flex gap-5">
            <img src="/imgs/components/01.png" alt="curve-text" class="xl:!w-72 lg:!w-72 !w-full rounded-2xl"/>
            <img src="/imgs/components/02.png" alt="curve-text" class="xl:!w-72 lg:!w-72 !w-full rounded-2xl"/>
            <img src="/imgs/components/03.png" alt="curve-text" class="xl:!w-72 lg:!w-72 !w-full rounded-2xl"/>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</div>
</div>
<script setup lang="ts">
import Wrapper from "~/components/Wrapper.vue";
</script>-->
