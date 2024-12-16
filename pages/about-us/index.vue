<script setup lang="ts">
import PrimaryButton from "~/components/Ul/PrimaryButton.vue";
import {DummyFrequentlyAboutPageQuestions as questions, DummyTeamMembers as teamMembers} from "~/constraints/DataSource"
useHead({
  title: "About Us",
})
</script>

<template>
  <main>
    <section id="page-about-us">
      <Wrapper>
        <div class="py-20 h-[25vw] background-image rounded-2xl flex flex-col justify-end px-16 relative">
          <div class="bg-gradient-to-b rounded-2xl from-transparent to-red-500/50 absolute top-0 left-0 h-full w-full"></div>
          <p class="z-10 text-transparent stroke-white text-9xl w-full font-pp-neue-machina-bold text-stroke">About Tafa3ul</p>
          <p class="z-10 text-white font-pp-neue-machina-bold text-6xl w-full">About Tafa3ul</p>
        </div>
        <div class="py-24 flex">
          <div class="w-1/2 flex justify-between flex-col">
            <p class="text-6xl font-pp-neue-machina">About <span class="heading-underline italic font-pp-neue-machina-bold">Tafa3ul Hub</span></p>
            <div>
              <PrimaryButton class="flex items-center gap-3">
                <span class="font-pp-neue-machina text-white">Join Us</span>
                <span class="ti ti-arrow-up-right text-xl text-white"></span>
              </PrimaryButton>
            </div>
          </div>
          <div class="w-1/2">
            <p class="leading-7 text-[#12141D] opacity-70">Our annual Closing Ceremony is a momentous occasion at our
              center, marking a year of remarkable achievements and tangible impact. It serves as both a celebration of
              our participants' growth and success and a declaration to the local community that our region is primed
              with high potential in the realms of entrepreneurship and a sustainable economy. Through this event, we
              recognize the transformative journeys of our participants and underscore our commitment to fostering a
              vibrant and thriving entrepreneurial eco- system in our region. It is a testament to the power of
              education, innovation, and dedication in shaping a .brighter future for our community and beyond</p>
          </div>
        </div>
      </Wrapper>
      <section style="background-image: url('/imgs/backgrounds/04.png'); background-repeat: no-repeat; background-size: contain" class="py-24">
        <Wrapper>
          <div class="grid !grid-cols-3 !gap-0">
            <div class="py-8">
              <div class="w-full px-8 border-r-[1px] border-gray-700">
                <img src="/imgs/gallery/06.png" alt="event" class="w-[90%] rounded-2xl mb-8">
              </div>
            </div>
            <div class="py-8 pr-4">
              <div class=" text-center h-full px-8 space-y-8">
                <p class="font-pp-neue-machina-bold text-3xl">Our Mission</p>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur. Dignissim id urna volutpat eu. Sit dignissim molestie mauris feugiat at pharetra. Nulla erat semper dictum neque a eu.</p>
              </div>
            </div>
            <div class="py-8 pr-8">
              <div class="border-l-[1px] border-gray-700 px-8 h-full flex justify-end">
                <img src="/imgs/gallery/06.png" alt="event" class="w-[90%] rounded-2xl mb-8">
              </div>
            </div>
            <div class="py-8 border-top-dashed pl-4">
              <div class="border-r-[1px] mt-8 border-gray-700 text-center h-full px-12 space-y-8">
                <p class="font-pp-neue-machina-bold text-3xl">Our Vision</p>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur. Dignissim id urna volutpat eu. Sit dignissim molestie mauris feugiat at pharetra. Nulla erat semper dictum neque a eu.</p>
              </div>
            </div>
            <div class="py-8 border-top-dashed">
              <div class="w-full mt-8 flex justify-center px-8">
                <img src="/imgs/gallery/06.png" alt="event" class="w-[90%] rounded-2xl mb-8">
              </div>
            </div>
            <div class="py-8 border-top-dashed pr-8">
              <div class="border-l-[1px] mt-8 border-gray-700  text-center h-full px-8 space-y-8">
                <p class="font-pp-neue-machina-bold text-3xl">Our Goal</p>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur. Dignissim id urna volutpat eu. Sit dignissim molestie mauris feugiat at pharetra. Nulla erat semper dictum neque a eu.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section id="page-frequently-question" style="background-image: url('/imgs/glows/06.png'); background-repeat: no-repeat; background-size: contain" class="py-24 w-full">
        <Wrapper>
          <div class="w-full flex">
            <div class="w-1/2">
              <p class="heading-left-line inline-block text-blue-900 font-pp-neue-machina italic">Know more</p>
              <p class="text-6xl bg-clip-text text-transparent bg-gradient-to-br from-[#2bdc9b] to-[#306088]">Our <span class="heading-underline italic font-pp-neue-machina-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2bdc9b] to-[#306088]">Strategy</span></p>
              <p class="mt-8 w-2/3 font-cairo-regular text-gray-500">A good business plan guides you through each stage of starting and managing your business.</p>
            </div>
            <div class="flex-1 space-y-8">
              <template v-for="(question, index) in questions">
                <FrequentlyEachQeustion :option="{title: `0${index+1}. ${question.title}`, body: question.body}" color="text-gray-500" active-color="text-gray-800"  ring-color="bg-gradient-to-br from-[#D7EF3A] to-[#2BE29C] px-[2px] py-[2px]" background-color="bg-gradient-to-br from-[#D7EF3A] to-[#2BE29C]" />
              </template>
            </div>
          </div>
        </Wrapper>
      </section>
      <section id="page-team-section" style="background-image: url('/imgs/glows/01.png'); background-repeat: no-repeat; background-size: contain" class="py-24 w-full">
        <Wrapper>
          <div class="grid !grid-cols-4 !gap-y-20 !gap-x-10">
            <div>
              <p class="heading-left-line inline-block pl-3 italic text-red-500">Our Team</p>
              <p class="font-pp-neue-machina text-5xl text-primary leading-[65px] py-3 capitalize">The <span class="text-primary heading-underline font-pp-neue-machina-bold">Driving</span> <span class="text-primary heading-underline font-pp-neue-machina-bold">Driving</span> for change</p>
              <p class="text-gray-500 text-lg font-cairo-regular">A specialized team who working to achieve the goals & future visions of the platform</p>
            </div>
            <TeamMember v-for="(member, index) in teamMembers" :key="`team-member-${index}`" :member="member" />
          </div>
        </Wrapper>
      </section>
    </section>
  </main>
</template>
<style>
#page-about-us .background-image {
  background-image: url('/imgs/components/about-us.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -100px;
}
#page-frequently-question .heading-left-line {
  padding-left: 10px;
}
#page-frequently-question .heading-left-line::before {
  background: #0048ff;
}
#page-team-section .heading-underline::after {
  @apply !bg-red-400;
  bottom: -3px;
}

#page-frequently-question .heading-underline::after {
  background: linear-gradient(to right, #2bdc9b, #306088) !important;
  bottom: -5px;
}

.border-top-dashed {
  border-top: 1px dashed #333;
}

#page-about-us .heading-underline::after {
  background: #03133A;
}

#page-about-us .text-stroke {
  -webkit-text-stroke: 1px white;
  opacity: 0.4;
}

#page-about-us .text-stroke::selection {
  color: transparent;
}
</style>