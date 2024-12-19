<script setup lang="ts">
import Calender from "~/components/Ul/Calender.vue";
import PrimaryButton from "~/components/Ul/PrimaryButton.vue";
useHead({
  title: "Program Details"
})
</script>

<template>
  <main>
    <section id="page-about-section" class="py-20 bg-no-repeat background-image">
      <div class="wrapper">
        <div class="contain-container">
          <div class="w-full space-y-10">
            <p class="xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-pp-neue-machina-bold text-white">Fundamentals <br>Of <span class="bg-gradient-to-r from-[#a7df77] to-[#67d380] text-transparent bg-clip-text pr-1 heading-underline italic font-pp-neue-machina-bold">Design</span> Thinking</p>
            <div class="xl:space-y-3 lg:space-y-3 space-y-1.5 md:space-y-2">
              <p class="xl:text-3xl lg:text-3xl md:text-2xl text-xl text-white font-pp-neue-machina">Instructor</p>
              <p class="font-pp-neue-machina-bold xl:text-3xl lg:text-3xl md:text-2xl text-xl text-white">Abdulrahman Ahmad</p>
              <p class="xl:text-2xl lg:text-2xl text-base text-white">The director of Bagdad Game Lab (BGL)</p>
            </div>
            <div class="flex gap-y-4 gap-x-8 items-center flex-wrap">
              <div class="inline-flex">
                <span class="ti ti-clock-hour-5 xl:text-2xl lg:text-2xl md:text-xl text-lg text-[#F04635]"></span>
                <span class="leading-8 pl-2 text-white">2:30 PM</span>
              </div>
              <div class="inline-flex">
                <span class="ti ti-map-2 xl:text-2xl lg:text-2xl md:text-xl text-lg text-[#F04635]"></span>
                <span class="leading-8 pl-2 text-white">Iran National Auditorium</span>
              </div>
              <div class="inline-flex">
                <span class="ti ti-calendar-month xl:text-2xl lg:text-2xl md:text-xl text-lg text-[#F04635]"></span>
                <span class="leading-8 pl-2 text-white">November, 06, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="page-details-section" style="background: url('/imgs/glows/01.png') no-repeat;" class="py-20">
      <div class="wrapper">
        <div class="contain-container space-y-20">
          <div class="flex xl:flex-row lg:flex-row flex-col gap-10">
            <div class="flex-1 xl:border-r-[1px] lg:border-r-[1px] xl:border-gray-300 lg:border-gray-300 xl:pr-16 lg:pr-16 space-y-16 pb-16">
              <div class="space-y-5">
                <p class="text-2xl font-pp-neue-machina italic">Program Details</p>
                <p class="text-gray-600 xl:text-base lg:text-base text-sm font-cairo-regular">A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business.</p>
                <PrimaryButton class="xl:w-auto lg:w-auto md:w-auto w-full">
                  <span class="font-pp-neue-machina xl:text-base lg:text-base text-sm text-[#FCFCFD]">Book Your Slot Now</span>
                </PrimaryButton>
              </div>
              <div class="space-y-5">
                <p class="font-pp-neue-machina text-2xl italic">About Instructor</p>
                <div class="flex xl:gap-6 lg:gap-6 gap-4">
                  <img src="/imgs/events/01.png" alt="avatar" class="w-14 h-14 rounded-full">
                  <div>
                    <p class="xl:text-xl lg:text-xl text-base m-0 xl:pb-2 lg:pb-2 pb-1 font-pp-neue-machina-bold">Abdulrahman Ahmad</p>
                    <p class="text-gray-600 text-sm">The director of Bagdad Game Lab (BGL)</p>
                  </div>
                </div>
                <p class="text-gray-500 font-cairo-regular xl:text-base lg:text-base text-sm">Plan guides you through each stage of starting and managing your business. A good business plan guides you through each stage of starting and managing your business.</p>
              </div>
            </div>
            <div class="xl:w-1/3 lg:w-1/3 w-full">
              <div class="xl:py-6 lg:py-6 py-0 space-y-4">
                <p class="text-2xl font-pp-neue-machina italic">Events Timeline</p>
                <Calender />
              </div>
            </div>
          </div>
          <div class="flex xl:flex-row lg:flex-row flex-col gap-16 justify-between w-full">
            <div class="xl:w-1/2 lg:w-1/2 w-full lg:pr-6 xl:pr-6 md:pr-3 pr-0 space-y-8">
              <p class="font-pp-neue-machina leading-tight xl:text-5xl lg:text-5xl md:text-4xl text-3xl bg-gradient-to-r to-[#ffc081] from-[#ff5a00] text-transparent bg-clip-text">Get the skills you need for a job that is in <span class="heading-underline bg-gradient-to-r  from-[#ffa058] to-[#ffc081] font-pp-neue-machina-bold text-transparent bg-clip-text italic">Demand.</span></p>
              <p class="text-gray-600 font-cairo-regular">Nurture And Develop Your Employees To Drive Organizational Success</p>
              <ul class="pt-8 space-y-5">
                <li>
                  <div class="flex items-center xl:gap-8 lg:gap-8 gap-5">
                    <img src="/imgs/icons/medal.png" alt="medal" class="xl:w-16 lg:w-16 md:w-14 w-12 xl:h-16 lg:h-16 md:h-14 h-12 px-4 py-4 ring-1 ring-[#ff5a00] rounded-full">
                    <div class="space-y-1">
                      <p class="xl:text-2xl lg:text-2xl text-xl">Leadership</p>
                      <p class="xl:text-base lg:text-base text-sm font-cairo-regular">Nurture And Develop Your Employees <br>To Drive Organizational Success</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center xl:gap-8 lg:gap-8 gap-5">
                    <img src="/imgs/icons/medal.png" alt="medal" class="xl:w-16 lg:w-16 md:w-14 w-12 xl:h-16 lg:h-16 md:h-14 h-12 px-4 py-4 ring-1 ring-[#ff5a00] rounded-full">
                    <div class="space-y-1">
                      <p class="xl:text-2xl lg:text-2xl text-xl">Responsibility</p>
                      <p class="xl:text-base lg:text-base text-sm font-cairo-regular">Nurture And Develop Your Employees <br>To Drive Organizational Success</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center xl:gap-8 lg:gap-8 gap-5">
                    <img src="/imgs/icons/medal.png" alt="medal" class="xl:w-16 lg:w-16 md:w-14 w-12 xl:h-16 lg:h-16 md:h-14 h-12 px-4 py-4 ring-1 ring-[#ff5a00] rounded-full">
                    <div class="space-y-1">
                      <p class="xl:text-2xl lg:text-2xl text-xl">Flexibility</p>
                      <p class="xl:text-base lg:text-base text-sm font-cairo-regular">Nurture And Develop Your Employees <br>To Drive Organizational Success</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src="/imgs/components/06.jpeg" alt="component" class="rounded-2xl w-full xl:h-85 lg:h-85 md:h-80 h-72 bg-contain object-cover">
            </div>
          </div>
        </div>
      </div>
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
  background: linear-gradient(to right, #000, transparent 100%), url('/imgs/components/details.jpeg') no-repeat center center;
}
</style>