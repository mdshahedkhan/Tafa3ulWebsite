<script setup lang="ts">
import Wrapper from "~/components/Wrapper.vue";
</script>

<template>
  <section id="partners" class="pt-24 lg:pt-52 xl:pt-52 pb-24 bg-[#fdfcfc]">
    <Wrapper>
      <div class="space-y-16">
        <div class="space-y-4">
          <p class="text-4xl capitalize text-center">Our <span class="font-pp-neue-machina-bold italic text-red-500 partner-text">partners</span></p>
          <p class="text-sm lg:text-base xl:text-base text-center text-gray-500 font-cairo-regular">Explore potential partnership opportunities with us.</p>
        </div>
        <div class="grid lg:!grid-cols-3 xl:!grid-cols-3 !grid-cols-1 gap-4">
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
        <div class="pt-8 lg:pt-20 xl:pt-20">
          <div class="flex xl:flex-row lg:flex-row flex-col lg:gap-40 xlgap-40 gap-16 items-center justify-between">
            <div class="flex gap-6">
              <div>
                <img src="/imgs/components/04.png" alt="about-us" class="rounded-2xl">
              </div>
              <div class="relative lg:mt-16 xl:mt-16 mt-8">
                <div class="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl w-[35vw] md:w-[22vw] lg:w-56 xl:w-56 px-3 py-2.5">
                  <div class="w-full flex justify-between">
                    <p class="font-pp-neue-machina-bold text-base lg:text-2xl xl:text-2xl text-red-500">120k+</p>
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
                <p class="text-gray-600 lg:text-base xl:text-base text-sm ">Tafa3ul Hub <span class="text-red-600">is a dynamic and innovative hub powered by Tafa3ul Group and in partner with Fusteka Group</span> to  that fosters creativity, technology and brings together a community of imaginative individuals.</p>
                <p class="text-gray-600">Our goal is to inspire a new generation and empower individuals to express their unique ideas and passions in south region of Iraq.</p>
              </div>
              <div class="lg:space-x-10 xl:space-x-10 space-x-6 pt-8 flex items-center">
                <button class="py-2.5 px-6 flex items-center xl:w-auto lg:w-auto w-full bg-[#FF665D] transition duration-300 text-white rounded-full btn-box-shadow">
                  <span class="text-white font-pp-neue-machina">See more</span>
                  <span class="ti ti-arrow-up-right text-white"></span>
                </button>
                <button class="py-2.5 px-6 flex items-center xl:w-auto lg:w-auto w-full bg-[#FF665D] transition duration-300 text-white rounded-full btn-box-shadow shadow-xl">
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