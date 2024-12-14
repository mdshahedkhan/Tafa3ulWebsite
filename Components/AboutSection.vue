<script setup lang="ts">
import Wrapper from "~/components/Wrapper.vue";
</script>

<template>
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
          <div class="flex gap-40 items-center justify-between">
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
                  Group</span> to  that fosters creativity, technology and brings together a community of imaginative individuals.</p>
                <p class="text-gray-600">Our goal is to inspire a new generation and empower individuals to express their unique ideas and passions in south region of Iraq.</p>
              </div>
              <div class="space-x-10 pt-8 flex items-center">
                <button class="py-2.5 px-6 flex items-center bg-red-500/80 hover:bg-red-500/90 transition duration-300 text-white rounded-full">
                  <span class="text-white font-pp-neue-machina">See more</span>
                  <span class="ti ti-arrow-up-right text-white"></span>
                </button>
                <button class="py-2.5 px-6 flex items-center bg-red-500/80 hover:bg-red-500/90 transition duration-300 text-white rounded-full shadow-red-400 button-drop-shadow shadow-xl">
                  <span class="text-white font-pp-neue-machina">See more</span>
                  <span class="ti ti-arrow-up-right text-white"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
</template>