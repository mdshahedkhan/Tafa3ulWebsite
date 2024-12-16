<script setup lang="ts">

import PrimaryButton from "~/components/Ul/PrimaryButton.vue";
</script>

<template>
  <main>
    <section id="page-about-section" class="py-20 bg-no-repeat background-image">
      <Wrapper>
        <div class="w-1/2 space-y-10">
          <p class="text-6xl font-pp-neue-machina-bold text-white">Fundamentals <br>Of <span class="bg-gradient-to-r from-[#a7df77] to-[#67d380] text-transparent bg-clip-text pr-1 heading-underline italic font-pp-neue-machina-bold">Design</span> Thinking</p>
          <div class="space-y-3">
            <p class="text-3xl text-white font-pp-neue-machina">Instructor</p>
            <p class="font-pp-neue-machina-bold text-3xl text-white">Abdulrahman Ahmad</p>
            <p class="text-2xl text-white">The director of Bagdad Game Lab (BGL)</p>
          </div>
          <div class="flex gap-8">
            <div class="inline-flex">
              <span class="ti ti-clock-hour-5 text-2xl text-[#F04635]"></span>
              <span class="leading-8 pl-2 text-white">2:30 PM</span>
            </div>
            <div class="inline-flex">
              <span class="ti ti-map-2 text-2xl text-[#F04635]"></span>
              <span class="leading-8 pl-2 text-white">Iran National Auditorium</span>
            </div>
            <div class="inline-flex">
              <span class="ti ti-calendar-month text-2xl text-[#F04635]"></span>
              <span class="leading-8 pl-2 text-white">November, 06, 2024</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
    <section id="page-details-section" style="background: url('/imgs/glows/01.png') no-repeat;" class="py-20">
      <Wrapper class="space-y-20">
        <div class="flex gap-10">
          <div class="flex-1 pr-16 space-y-16">
            <div class="space-y-5">
              <p class="text-2xl font-pp-neue-machina italic">Program Details</p>
              <p class="text-gray-600 font-cairo-regular">A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business.</p>
              <PrimaryButton>
                <span class="font-pp-neue-machina text-[#FCFCFD]">Book Your Slot Now</span>
              </PrimaryButton>
            </div>
            <div class="space-y-5">
              <p class="font-pp-neue-machina text-2xl italic">About Instructor</p>
              <div class="flex gap-6">
                <img src="/imgs/events/01.png" alt="avatar" class="w-14 h-14 rounded-full">
                <div>
                  <p class="text-xl m-0 pb-2 font-pp-neue-machina-bold">Abdulrahman Ahmad</p>
                  <p class="text-gray-600 text-sm">The director of Bagdad Game Lab (BGL)</p>
                </div>
              </div>
              <p class="text-gray-500 font-cairo-regular">Plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business.</p>
            </div>
          </div>
          <div class="w-1/3"></div>
        </div>
        <div class="flex gap-16 items-center justify-between w-full">
          <div class="pr-6 space-y-8">
            <p class="font-pp-neue-machina leading-tight text-5xl bg-gradient-to-r to-[#ffc081] from-[#ff5a00] text-transparent bg-clip-text">Get the skills you need for a job that is in <span class="heading-underline bg-gradient-to-r  from-[#ffa058] to-[#ffc081] font-pp-neue-machina-bold text-transparent bg-clip-text italic">Demand.</span></p>
            <p class="text-gray-600 font-cairo-regular">Nurture And Develop Your Employees To Drive Organizational Success</p>
            <ul class="pt-8 space-y-5">
              <li>
                <div class="flex items-center gap-8">
                  <img src="/imgs/icons/medal.png" alt="medal" class="w-16 h-16 px-4 py-4 ring-1 ring-[#ff5a00] rounded-full">
                  <div class="space-y-1">
                    <p class="text-2xl">Leadership</p>
                    <p class="font-cairo-regular">Nurture And Develop Your Employees <br>To Drive Organizational Success</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-8">
                  <img src="/imgs/icons/medal.png" alt="medal" class="w-16 h-16 px-4 py-4 ring-1 ring-[#ff5a00] rounded-full">
                  <div class="space-y-1">
                    <p class="text-2xl">Responsibility</p>
                    <p class="font-cairo-regular">Nurture And Develop Your Employees <br>To Drive Organizational Success</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-8">
                  <img src="/imgs/icons/medal.png" alt="medal" class="w-16 h-16 px-4 py-4 ring-1 ring-[#ff5a00] rounded-full">
                  <div class="space-y-1">
                    <p class="text-2xl">Flexibility</p>
                    <p class="font-cairo-regular">Nurture And Develop Your Employees <br>To Drive Organizational Success</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src="/imgs/components/06.jpeg" alt="component" class="rounded-2xl w-full bg-contain">
          </div>
        </div>
      </Wrapper>
    </section>
  </main>
</template>
<style>
#page-details-section .heading-underline::after {
  background: linear-gradient(to right, #ffc081, #ffa058);
}
#page-about-section .heading-underline::after {
  bottom: -5px;
}
.background-image {
  background-size: cover;
  background: linear-gradient(to right, #000, transparent 100%), url('/imgs/components/about-us.jpeg');
  background-size: cover;
}
</style>