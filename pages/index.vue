<template>
  <div class="overflow-hidden bg-[#fdfcfc]">
    <div class="h-screen space-y-7 bg-[#fdfcfc]" style="background: url('/imgs/hero-bg-frame.png') no-repeat center center;background-size: cover;">
      <main class="main">
        <Wrapper class="pt-14 space-y-16">
          <Transition @enter="enter">
            <p v-if="visibleElement" data-direction="left" class="md:text-5xl xl:text-7xl lg:text-7xl font-pp-neue-machina-bold py-6 capitalize">Unlock the <br> transformative
              <span class="italic pr-2 font-pp-neue-machina-bold heading-gradient-text-clip bg-gradient-to-r from-[#99ef3a] via-100% via-[#2BE29C] to-[#2BE29C] text-transparent bg-clip-text">power</span><br> of collaboration
            </p>
          </Transition>
          <div class="flex justify-between">
            <Transition appear @enter="enterItems">
              <div v-show="visibleElement" data-direction="left" data-duration="0.8" data-delay="1" class="w-1/2 flex gap-5 items-center">
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
        <div class="pl-64 pt-[5vw]">
          <Transition @enter="enterHomeEvents">
            <div v-show="visibleElement" class="flex justify-between">
              <div class="w-[14vw] hidden xl:block lg:block relative">
                <div class="circle relative w-[220px] h-[220px] bg-[#e1f685] rounded-full flex justify-center items-center">
                  <div class="w-24 h-24 absolute top-1/2 left-1/2 -translate-y-1/2 rounded-full ring-2 ring-[#accf55] -translate-x-1/2 mx-auto">
                    <img src="/imgs/icons/arrow-bottom.png" class="w-full scale-50 h-full" alt="curve-text">
                  </div>
                  <div class="text w-full h-full absolute">
                    <p ref="circle-text">Tafa3ul hub Tafa3ul hub Tafa3ul hub Tafa3ul</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-6">
                <img src="/imgs/components/01.png" alt="curve-text" class="w-[14vw]"/>
                <img src="/imgs/components/02.png" alt="curve-text" class="w-[14vw]"/>
                <img src="/imgs/components/03.png" alt="curve-text" class="w-[14vw]"/>
              </div>
            </div>
          </Transition>
        </div>
      </main>
    </div>
    <AboutSection />
    <ExplorePodcast />
    <UpCommingEvent />
    <Achievement />
    <Testimonial />
    <LatestArticle />
    <PhotoGallery />
    <FrequentlyQuestion />
  </div>
</template>
<script setup>
import Wrapper from "~/components/Wrapper.vue";
import AboutSection from "~/components/AboutSection.vue";
import {useHomeSectionAnimation} from "~/hooks/useAnimation";
import Achievement from "~/components/Achievement.vue";
import PhotoGallery from "~/components/PhotoGallery.vue";
import {onMounted, useTemplateRef} from "vue";
const {enter, enterItems, enterCounter, enterLeftSideAnimation, enterHomeEvents} = useHomeSectionAnimation()
const visibleElement = ref(false);
const startCounting = ref(false);
const textTemplateRef = useTemplateRef("circle-text");
onMounted(()=> {
  setTimeout(()=> visibleElement.value = true, 1000)
  setTimeout(()=> startCounting.value = true, 1000)
  if (textTemplateRef.value) {
    textTemplateRef.value.innerHTML = textTemplateRef.value?.innerText?.split('').map((char, index) => (`<span style="transform: rotate(${index * 8.3}deg);">${char}</span>`)).join('')
  }
})
useHead({
  title: "Home | Web Design",
})


</script>
<style>
.circle .text {
  animation: textRotate 10s linear infinite;
}

@keyframes textRotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.circle .text span {
  position: absolute;
  left: 50%;
  font-size: 1.5em;
  transform-origin: 0 110px;
}
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

</style>