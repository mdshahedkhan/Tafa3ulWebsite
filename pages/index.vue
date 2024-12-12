<template>
  <div class="overflow-hidden">
    <Header/>
    <div class="h-screen space-y-7 bg-no-repeat object-center bg-[#fdfcfc] bg-cover "
         style="background: url('/imgs/hero-bg-frame.png'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
      <main class="main">
        <Wrapper class="py-14 space-y-16">
          <p class="text-7xl font-pp-neue-machina-bold py-6 capitalize">Unlock the <br> transformative
            <span
                class="italic pr-2 font-pp-neue-machina-bold heading-gradient-text-clip bg-gradient-to-r from-[#99ef3a] via-100% via-[#2BE29C] to-[#2BE29C] text-transparent bg-clip-text">power</span><br>
            of collaboration</p>
          <div class="flex justify-between">
            <div class="w-1/2 flex gap-5 items-center">
              <div class="flex -space-x-4 rtl:space-x-reverse">
                <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-1.png" alt="avatar">
                <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-2.png" alt="avatar">
                <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-3.png" alt="avatar">
                <img class="w-10 h-10 rounded-full" src="/imgs/avatars/avatar-1.png" alt="avatar">
              </div>
              <div>
                <p class="text-red-500 text-lg font-black py-0 m-0">125K+</p>
                <p class="text-md text-gray-800">People joined</p>
              </div>
            </div>
            <div class="self-end place-items-end">
              <div class="w-2/3 space-y-8">
                <p>Join a thriving hub where like-minded individuals and organizations come together to create positive
                  impact, share resources, and drive growth.</p>
                <div class="space-x-6">
                  <button type="button" class="button group">
                    <span class="text-white font-pp-neue-machina">All Program</span>
                    <span
                        class="ti ti-arrow-up rotate-[30deg] group-hover:rotate-[0deg] transition duration-300 text-xl pl-2 inline-block text-white"></span>
                  </button>
                  <button type="button" class="button group btn-box-shadow">
                    <span class="text-white font-pp-neue-machina">All Program</span>
                    <span
                        class="ti ti-arrow-up rotate-[30deg] group-hover:rotate-[0deg] transition duration-300 text-xl pl-2 inline-block text-white"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div class="pl-12">
          <div class="flex justify-between">
            <div class="w-96">
              <img src="/imgs/curve-text.png" alt="curve-text" class="w-40 mx-auto">
            </div>
            <div class="flex gap-6">
              <img src="/imgs/components/01.png" alt="curve-text" class="w-80"/>
              <img src="/imgs/components/02.png" alt="curve-text" class="w-80"/>
              <img src="/imgs/components/03.png" alt="curve-text" class="w-80"/>
            </div>
          </div>
        </div>
      </main>
    </div>
    <section id="partners" class="pt-52 pb-24 bg-[#fdfcfc]">
      <Wrapper>
        <div class="space-y-16">
          <div class="space-y-4">
            <p class="text-4xl capitalize text-center">Our <span class="font-pp-neue-machina-bold italic text-red-500 partner-text">partners</span></p>
            <p class="text-center text-gray-500 font-cairo-regular">Explore potential partnership opportunities with
              us.</p>
          </div>
          <div class="grid grid-cols-3 gap-4 ">
            <div class="flex h-48 justify-between items-center flex-col py-6">
              <p class="text-gray-500">Strategic Partner are Asiacell and Asas</p>
              <img src="/imgs/brands/03.png" alt="brand" class="w-48">
            </div>
            <div class="flex h-48 justify-between items-center flex-col py-6">
              <p class="text-gray-500">Partner Fusteka Group</p>
              <img src="/imgs/brands/01.png" alt="brand" class="w-48">
            </div>
            <div class="flex h-48 justify-between items-center flex-col py-6">
              <p class="text-gray-500">Sponsor Basra MAs</p>
              <img src="/imgs/brands/02.png" alt="brand" class="w-16">
            </div>
          </div>
          <div class="pt-20">
            <div class="flex gap-96 items-center justify-between">
              <div class="flex gap-6">
                <div>
                  <img src="/imgs/components/04.png" alt="about-us" class="rounded-2xl">
                </div>
                <div class="relative mt-16">
                  <div class="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl w-56 px-3 py-2.5">
                    <div class="w-full flex justify-between">
                      <p class="font-pp-neue-machina-bold text-2xl text-red-500">120k+</p>
                      <img src="/imgs/icons/report-up.png" alt="report-up" class="w-7">
                    </div>
                    <p class="italic text-gray-600" style="line-height: 20px">Join our program <br>every year</p>
                  </div>
                  <img src="/imgs/components/05.png" alt="about-us" class="rounded-xl">
                </div>
              </div>
              <div class="flex-1 space-y-6">
                <p class="about-us-text text-red-500 italic inline ml-10">About Us</p>
                <div class="space-y-6">
                  <p class="capitalize text-blue-950 text-5xl font-pp-neue-machina">Who <span class="text-indigo-600 font-pp-neue-machina-bold italic we-are">we are</span></p>
                  <p class="text-gray-600">Tafa3ul Hub <span class="text-red-600">is a dynamic and innovative hub powered by Tafa3ul Group and in partner with Fusteka
                  Group</span> to  that fosters creativity, technology and brings together a community of imaginative
                    individuals.</p>
                  <p class="text-gray-600">Our goal is to inspire a new generation and empower individuals to express their unique
                    ideas and passions in south region of Iraq.</p>
                </div>
                <div class="space-x-10 pt-8">
                  <button class="py-2.5 px-6 bg-red-500/80 hover:bg-red-500/90 transition duration-300 text-white rounded-full">
                    <span class="text-white font-pp-neue-machina text-sm">See more</span>
                    <span class="ti ti-arrow-up-right text-white"></span>
                  </button>
                  <button class="py-2.5 px-6 bg-red-500/80 hover:bg-red-500/90 transition duration-300 text-white rounded-full shadow-red-400 button-drop-shadow shadow-xl">
                    <span class="text-white font-pp-neue-machina text-sm">See more</span>
                    <span class="ti ti-arrow-up-right text-white"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
    <ExplorePodcast />
    <UpCommingEvent />
  </div>
</template>
<script setup>
// @ts-ignore
import Header from "~/components/Header.vue";
import Wrapper from "~/components/Wrapper.vue";

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
.swiper-wrapper .swiper-slide:first-child {
  /*background: #FD5437;*/
  @apply ml-24;
}
</style>