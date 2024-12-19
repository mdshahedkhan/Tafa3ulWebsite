<template>
  <div class=" bg-[#fdfcfc]">
    <div class="space-y-7 lg:h-[800px] xl:h-[800px] md:h-[700px] h-[700px] bg-[#fdfcfc]" style="background: url('/imgs/hero-bg-frame.png') no-repeat center center;background-size: cover;">
      <main class="wrapper">
        <div class="contain-container">
          <div class="flex lg:flex-row xl:flex-row flex-col pt-8 lg:pt-14 xl:pt-14 space-y-8 lg:space-y-16 xl:space-y-16">
            <div class="w-full lg:w-2/3 xl:lg:w-2/3">
              <Transition @enter="enter">
                <p class="xl:text-7xl lg:text-7xl md:text-5xl text-4xl font-pp-neue-machina-bold capitalize">Unlock the transformative power of collaboration</p>
              </Transition>
              <Transition appear @enter="enterItems">
                <div v-show="visibleElement" data-direction="left" data-duration="0.8" data-delay="1" class="w-full mt-[40px] flex items-center">
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
            <div class="flex-1 box-border flex xl:flex-row lg:flex-row flex-col justify-between xl:gap-8 lg:gap-8 gap-4">
              <Transition @enter="enterLeftSideAnimation">
                <div v-show="visibleElement" class="w-full self-end place-items-end">
                  <div class="space-y-8">
                    <p>Join a thriving hub where like-minded individuals and organizations come together to create positive impact, share resources, and drive growth.</p>
                    <div class="flex items-center">
                      <button type="button" class="button w-full lg:w-auto xl:w-auto flex items-center justify-center group btn-box-shadow transition duration-300">
                        <span class="text-white text-xs sm:text-sm lg:text-sm xl:text-sm font-pp-neue-machina">All Program</span>
                        <span class="ti ti-arrow-up-right text-sm lg:text-xl xl:text-xl xl:pl-2 lg:pl-2 pl-0.5 inline-block text-white"></span>
                      </button>
                      <button type="button" class="button ml-2 w-full lg:w-auto xl:w-auto flex items-center justify-center group btn-box-shadow transition duration-300">
                        <span class="text-white text-xs sm:text-sm lg:text-sm xl:text-sm font-pp-neue-machina">All Program</span>
                        <span class="ti ti-arrow-up-right text-sm lg:text-xl xl:text-xl xl:pl-2 lg:pl-2 pl-0.5 inline-block text-white"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
        <div class="wrapper relative lg:mt-16 xl:mt-16 md:mt-12 mt-8">
          <div  class="contain-container flex justify-between">
            <div class="w-48 hidden xl:block lg:block relative">
              <div class="circle relative w-[157px] h-[157px] bg-[#e1f685] rounded-full flex justify-center items-center">
                <div class="w-20 h-20 absolute top-1/2 left-1/2 -translate-y-1/2 rounded-full ring-2 ring-[#accf55] -translate-x-1/2 mx-auto">
                  <img src="/imgs/icons/arrow-bottom.png" class="w-full scale-[0.5] h-full" alt="curve-text">
                </div>
                <div class="text w-full h-full absolute">
                  <p ref="circle-text">Tafa3ul hub Tafa3ul hub Tafa3ul hub Tafa3ul</p>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-0 right-0 overflow-x-auto xl:gap-6 lg:gap-6 md:gap-4 gap-3 w-full flex justify-end">
            <img  src="/imgs/components/02.png" class="hero-slide-image rounded-xl" alt="component"/>
            <img  src="/imgs/components/01.png" class="hero-slide-image rounded-xl" alt="component"/>
            <img  src="/imgs/components/03.png" class="hero-slide-image rounded-xl" alt="component"/>
          </div>
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
import AboutSection from "~/components/AboutSection.vue";
import {useHomeSectionAnimation} from "~/hooks/useAnimation";
import Achievement from "~/components/Achievement.vue";
import PhotoGallery from "~/components/PhotoGallery.vue";
import {onMounted, useTemplateRef} from "vue";
const {enter, enterItems, enterCounter, enterLeftSideAnimation} = useHomeSectionAnimation()
const visibleElement = ref(false);
const startCounting = ref(false);
const textTemplateRef = useTemplateRef("circle-text");
onMounted(()=> {
  setTimeout(()=> visibleElement.value = true, 1000)
  setTimeout(()=> startCounting.value = true, 1000)
  if (textTemplateRef?.value) {
    textTemplateRef.value.innerHTML = textTemplateRef.value?.innerText?.split('').map((char, index) => (`<span style="transform: rotate(${index * 8.3}deg);">${char}</span>`)).join('')
  }
})
useHead({
  title: "Home | Web Design",
})

const breakpoints = {
  // when window width is >= 640px
  340: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
}


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
  font-size: 1.1em;
  transform-origin: 0 80px;
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