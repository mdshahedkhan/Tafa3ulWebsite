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
    <Header/>
    <div id="hero-section" class="w-full bg-gradient-to-tr from-[#e6eb6e] to-[#ffffff] overflow-hidden">
      <div style="background: url('/imgs/backgrounds/03.png') no-repeat; background-size: contain" class="w-full h-[30vw] bg-no-repeat">
        <Wrapper>
          <div class="w-full flex justify-between items-center">
            <Transition @enter="enterLeftSide">
              <div v-if="visibleSlice" class="w-1/2 space-y-12">
                <div class="space-y-3">
                  <p class="uppercase text-8xl font-pp-neue-machina">programs</p>
                  <p class="hero-text bg-gradient-to-r from-[#FFC081] to-[#FF5A00] bg-clip-text text-transparent inline-block text-8xl uppercase font-pp-neue-machina-bold ml-48">hub</p>
                </div>
                <button
                    class="bg-gradient-to-r from-[#FFC081] to-[#FF5A00] flex gap-3 items-center px-6 py-3.5 rounded-xl">
                  <img src="/imgs/logo.png" alt="logo" class="w-9 object-fill bg-cover">
                  <span class="text-lg text-[#03133A]">Join our program hub every year</span>
                </button>
              </div>
            </Transition>
            <div class="w-1/2">
              <Transition @enter="enter">
                <div v-if="visibleSlice" class="w-5/6 ml-auto slices">
                  <div class="img-slice"></div>
                  <div class="img-slice"></div>
                  <div class="img-slice"></div>
                </div>
              </Transition>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
    <section id="about-section" class="py-24">
      <Wrapper>
        <div class="w-full flex gap-10 justify-between">
          <div class="w-[50vw]">
            <img src="/imgs/about-us.jpeg" alt="about-us" class="aspect-video object-cover rounded-2xl">
          </div>
          <div class="flex-1 px-6 space-y-8">
            <p class="text-primary font-pp-neue-machina italic">Our next workshop </p>
            <p class="font-pp-neue-machina-bold text-5xl">Skill Development Workshop </p>
            <p class="text-gray-500 font-pp-neue-machina">A good business plan guides you through each stage of starting and managing your business.</p>
            <div>
              <p class="text-xl"><span class="text-primary ti ti-clock-hour-5"></span><span class="pl-2 text-gray-600 font-medium">2:30 PM</span></p>
              <p class="text-xl"><span class="text-primary ti ti-calendar-month"></span><span class="pl-2 text-gray-600 font-medium">November, 06, 2024</span></p>
              <p class="text-xl"><span class="text-primary ti ti-map-2"></span><span class="pl-2 text-gray-600 font-medium">Iran National Auditorium, Iran</span></p>
            </div>
            <button class="bg-gradient-to-r from-[#FF665D] to-[#FD5437] px-8 py-2.5 rounded-full ">
              <span class="text-white text-xl">Apply Now</span>
              <span class="text-white font-pp-neue-machina pl-2 text-xl ti ti-arrow-up-right leading-[30px]"></span>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
    <section id="events-section" class="py-24" style="background: url('/imgs/glows/01.png') no-repeat center center/cover;">
      <Wrapper>
        <div class="w-1/2">
          <p class="heading-left-line inline-block text-sm text-primary italic">Hublive</p>
          <div class="space-y-8">
            <p class="text-4xl">Be part of <span class="heading-underline font-pp-neue-machina-bold capitalize text-transparent bg-gradient-to-r from-[#305c7f] to-50% to-[#122D40] bg-clip-text">the change</span></p>
            <p class="text-gray-500">Aiming to explore emerging fields and discussing their <br> potential future.</p>
          </div>
          <ul class="flex gap-4 mt-12">
            <li><button class="font-pp-neue-machina active">All</button></li>
            <li><button class="font-pp-neue-machina">Hakthon</button></li>
            <li><button class="font-pp-neue-machina">Workshop</button></li>
            <li><button class="font-pp-neue-machina">Hublive Session</button></li>
          </ul>
        </div>
        <div class="grid grid-cols-2 gap-x-6 mt-14">
          <EachEventCard v-for="(item, index) in events" width="w-[280px]" gap="gap-8" height="h-[400px]" :slide="item" :index="index" :key="`program-event-${index}`" />
        </div>
      </Wrapper>
    </section>
    <Footer />
  </div>
</template>
<style scoped>

#events-section .heading-underline::after{
  bottom: -5px !important;
  @apply bg-gradient-to-r;
  @apply from-[#305c7f];
  @apply to-40%;
  @apply to-[#122D40];
}
#events-section .heading-left-line{
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
  width: 10vw;
  background: linear-gradient(#FFC081, #FF5A00);
  height: 280px;
  z-index: 999;
  transform: translate(173px, 0px) skew(-23deg, 0deg);
}

#hero-section .img-slice:nth-child(2) {
  width: 15vw;
  background-image: url("/imgs/slides/04.jpeg");
  background-position: -20px;
  background-repeat: no-repeat;
  transform: translate(109px, 0px) skew(-23deg, 0deg);
}

#hero-section .img-slice:last-child {
  width: 100%;
  background-image: url("/imgs/slides/04.jpeg");
  background-position: -80px;
  clip-path: polygon(75% 0, 100% 0%, 100% 100%, 0% 100%);
}

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