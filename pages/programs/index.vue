<script setup lang="ts">
import gsap from "gsap"
import {DummyEvents as events} from "~/constraints/DataSource";

const timeline = gsap.timeline()
useHead({
  title: "Programs"
})
const visibleSlice = ref(false)
onMounted(() => {
  setTimeout(() => visibleSlice.value = true, 100)
})
const enter = (element: Element): void => {
  const slices = element.querySelectorAll(".img-slice")
  timeline.from(slices, {
    x: 1000,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  })
}
const enterLeftSide = (element: Element): void => {
  timeline.from(element, {
    x: -50,
    duration: 0.5,
    opacity: 0,
  })
}
</script>

<template>
  <div>
    <div id="hero-section" class="w-full bg-gradient-to-tr from-[#e6eb6e] to-[#ffffff] overflow-hidden">
      <div style="background: url('/imgs/backgrounds/03.png') no-repeat; background-size: contain" class="w-full lg:h-[420px] xl:h-[420px] h-[420px] bg-no-repeat">
        <div class="wrapper h-full">
          <div class="contain-container flex justify-between h-full items-center">
            <Transition @enter="enterLeftSide">
              <div v-if="visibleSlice" class="lg:w-1/2 xl:w-1/2 w-full space-y-12">
                <div class="space-y-3">
                  <p class="uppercase lg:text-8xl xl:text-8xl md:text-6xl text-4xl font-pp-neue-machina">programs</p>
                  <!-- hero-text -->
                  <p class="lg:text-8xl xl:text-8xl md:text-6xl relative before:absolute before:h-[2px] before:bg-[#FF5A00] before:w-[100%] before:top-1/2 before:left-[-100%] text-6xl bg-gradient-to-r from-[#FFC081] to-[#FF5A00] bg-clip-text text-transparent inline-block uppercase font-pp-neue-machina-bold ml-[8.5rem] xl:ml-[13.8rem] lg:ml-[13.8rem]">hub</p>
                </div>
                <button class="xl:w-auto lg:w-auto md:w-auto w-full bg-gradient-to-r from-[#FFC081] to-[#FF5A00] flex gap-3 items-center justify-center px-6 py-3.5 rounded-xl">
                  <img src="/imgs/logo.png" alt="logo" class="lg:w-9 xl:w-9 w-6 object-fill bg-cover">
                  <span class="xl:text-lg lg:text-lg text-base text-[#03133A] capitalize">Join our program hub every year</span>
                </button>
              </div>
            </Transition>
            <div class="w-1/2 hidden lg:block xl:block">
              <Transition @enter="enter">
                <div v-if="visibleSlice" class="w-5/6 ml-auto slices">
                  <div class="img-slice"></div>
                  <div class="img-slice"></div>
                  <div class="img-slice"></div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="about-section" class="wrapper py-24">
      <div class="contain-container">
        <div class="w-full flex lg:flex-row xl:flex-row flex-col gap-10 justify-between">
          <div class="lg:w-2/3 xl:w-2/3 w-full">
            <img src="/imgs/about-us.jpeg" alt="about-us" class="lg:aspect-video xl:aspect-video object-cover rounded-2xl w-full lg:h-full xl:h-full md:h-[400px]">
          </div>
          <div class="flex-1 px-6 lg:space-y-8 xl:space-y-8 md:space-y-6 space-y-5">
            <p class="text-primary font-pp-neue-machina italic">Our next workshop </p>
            <p class="font-pp-neue-machina-bold lg:text-5xl xl:text-5xl text-4xl">Skill Development Workshop </p>
            <p class="text-gray-500 font-pp-neue-machina xl:text-base lg:text-base text-sm">A good business plan guides you through each stage of starting and managing your business.</p>
            <div class="space-y-2">
              <p class="xl:text-xl lg:text-xl md:text-lg text-base"><span class="text-primary ti ti-clock-hour-5"></span><span class="pl-2 text-gray-600 font-medium">2:30 PM</span></p>
              <p class="xl:text-xl lg:text-xl md:text-lg text-base"><span class="text-primary ti ti-calendar-month"></span><span class="pl-2 text-gray-600 font-medium">November, 06, 2024</span></p>
              <p class="xl:text-xl lg:text-xl md:text-lg text-base"><span class="text-primary ti ti-map-2"></span><span class="pl-2 text-gray-600 font-medium">Iran National Auditorium, Iran</span></p>
            </div>
            <button class="bg-gradient-to-r btn-box-shadow from-[#FF665D] to-[#FD5437] flex items-center justify-center px-8 xl:py-2.5 lg:py-2.5 md:py-2 py-1.5 xl:w-auto lg:w-auto md:w-auto w-full rounded-full">
              <span class="text-white xl:text-xl lg:text-xl md:text-lg text-lg">Apply Now</span>
              <span class="text-white font-pp-neue-machina pl-2 text-xl ti ti-arrow-up-right leading-[30px]"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="events-section" class="wrapper pb-24 pt-16" style="background: url('/imgs/glows/01.png') no-repeat top left;object-position: top; background-size: auto;">
      <div class="contain-container">
        <div class="xl:w-1/2 lg:w-1/2 w-full">
          <p class="heading-left-line inline-block text-sm text-primary italic">Hublive</p>
          <div class="space-y-8">
            <p class="text-4xl">Be part of <span class="heading-underline font-pp-neue-machina-bold capitalize text-transparent bg-gradient-to-r from-[#305c7f] to-50% to-[#122D40] bg-clip-text">the change</span></p>
            <p class="text-gray-500">Aiming to explore emerging fields and discussing their <br> potential future.</p>
          </div>
          <ul class="flex items-center lg:gap-4 xl:gap-4 gap-2 mt-12">
            <li>
              <button class="font-pp-neue-machina italic lg:text-sm xl:text-sm md:text-sm text-xs active">All</button>
            </li>
            <li>
              <button class="font-pp-neue-machina italic lg:text-sm xl:text-sm md:text-sm text-xs">Hakthon</button>
            </li>
            <li>
              <button class="font-pp-neue-machina italic lg:text-sm xl:text-sm md:text-sm text-xs">Workshop</button>
            </li>
            <li>
              <button class="font-pp-neue-machina italic lg:text-sm xl:text-sm md:text-sm text-xs">Hublive Session</button>
            </li>
          </ul>
        </div>
        <div class="grid lg:!grid-cols-2 xl:!grid-cols-2 !grid-cols-1 lg:!gap-6 xl:!gap-6 !gap-0">
          <EachEventCard v-for="(item, index) in events" width="xl:w-[280px] lg:w-[280px] w-full" gap="lg:gap-8 xl:gap-8 md:gap-6 gap-4" height="h-[400px]" :slide="item" :index="index" :key="`program-event-${index}`"/>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>

#events-section .heading-underline::after {
  bottom: -5px !important;
  @apply bg-gradient-to-r;
  @apply from-[#305c7f];
  @apply to-40%;
  @apply to-[#122D40];
}

#events-section .heading-left-line {
  margin-left: 48px;
}

#events-section ul li button {
  @apply px-5;
  @apply py-1.5;
  @apply rounded-full;
  @apply ring-1;
  @apply ring-primary;
  @apply text-primary;
  @apply transition;
  @apply duration-300;
}

#events-section ul li button.active {
  @apply bg-primary;
  @apply text-[#FCFCFD];
}

#events-section ul li button:hover {
  @apply bg-primary;
  @apply text-[#FCFCFD];
}

#events-section .heading-left-line::before {
  left: -100%;
  @apply bg-[#FF665E];
}

#hero-section .hero-text {
  position: relative;
}

#hero-section .slices {
  position: relative;
  display: flex;
}

#hero-section .img-slice {
  height: 30vw;
  background-size: cover;
}

#hero-section .img-slice:first-child {
  width: 180px;
  background: linear-gradient(#FFC081, #FF5A00);
  height: 18rem;
  z-index: 999;
  transform: translate(113px, 0px) skew(-23deg, 0deg);
}

#hero-section .img-slice:nth-child(2) {
  width: 220px;
  height: 420px;
  background-image: url("/imgs/slides/04.jpeg");
  background-position: -20px;
  background-repeat: no-repeat;
  transform: translate(65px, 0px) skew(-19.7999deg, 0deg);
}


#hero-section .img-slice:last-child {
  width: 100%;
  height: 420px;
  background-image: url("/imgs/slides/04.jpeg");
  background-position: -80px;
  clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
}


/*@media (max-width: 1371px) {
  #hero-section .img-slice:nth-child(2) {
   transform: translate(33px, 0px) skew(-12.7999deg, 0deg);
  }
}
@media (max-width: 1880px) {
  #hero-section .img-slice:nth-child(2) {
   transform: translate(59px, 0px) skew(-18.7998deg, 0deg);
  }
}
@media (max-width: 1760px) {
  #hero-section .img-slice:nth-child(2) {
   transform: translate(55px, 0px) skew(-17.7996deg, 0deg);
  }
}*/

/*
@media (max-width: 1629px) {
  #hero-section .img-slice:last-child(2) {
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
    transform: translate(46px, 0px) skew(-15.7999deg, 0deg);

  }

  #hero-section .img-slice:last-child {
    transform: translate(72px, 0px) skew(-21.7999deg, 0deg);
  }

  #hero-section .img-slice:first-child {
    transform: translate(100px, 0px) skew(-21.9998deg, 0deg);
  }
}

@media (max-width: 1550px) {
  #hero-section .img-slice:nth-child(2) {
    transform: translate(59px, 0px) skew(-17.9deg, 0deg);
  }
}

@media (max-width: 1416px) {
  #hero-section .img-slice:nth-child(2) {
    transform: translate(50px, 0px) skew(-17.9deg, 0deg);
  }
}


@media (max-width: 1176px) {
  #hero-section .img-slice:nth-child(2) {
    transform: translate(48px, 0px) skew(-15.7999deg, 0deg);
  }

  #hero-section .img-slice:first-child {
    transform: translate(82px, 0px) skew(-18.9998deg, 0deg);
    height: 15rem;
  }
}*/

#hero-section .hero-text::after {
  position: absolute;
  content: "";
  top: 50%;
  transform: translateY(5px);
  left: -90%;
  width: 80%;
  height: 2px;
  background: #B42318;
}
</style>