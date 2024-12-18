<script setup lang="ts">
import EachTestimonial from "~/components/EachTestimonial.vue";
import {DummyTestimonials as Testimonials} from "~/constraints/DataSource";
</script>

<template>
  <section id="testimonial" class="wrapper pb-16 pt-32">
    <div class="contain-container grid xl:!grid-cols-2 lg:!grid-cols-2 !grid-cols-1 lg:!gap-16 xl:!gap-16 !gap-10">
      <div class="flex flex-col gap-2">
        <div>
          <p class="heading-left-line text-sm !ml-14 inline-block italic text-[#FD5437]">Testimonial</p>
        </div>
        <p class="lg:text-4xl xl:text-4xl text-3xl font-pp-neue-machina capitalize bg-gradient-to-r from-[#FFC081] to-[#FF5A00] bg-clip-text text-transparent inline-block">what our</p>
        <div>
          <p class="lg:text-4xl xl:text-4xl text-3xl font-pp-neue-machina-bold italic capitalize bg-gradient-to-r from-[#FFC081] to-[#FF5A00] bg-clip-text text-transparent inline-block heading-underline px-1">Participants say</p>
        </div>
        <p class="text-gray-600 lg:pr-40 xl:pr-40 pr-0 lg:text-lg xl:text-lg text-base lg:pt-0 xl:pt-0 pt-6">Read what our clients and partners have to say about their experiences with us.</p>
        <div class="space-y-9 mt-5 relative">
          <div class="hidden lg:block xl:block absolute top-0 left-0 bg-gradient-to-b from-transparent from-30%  to-white/80 to-90% w-full h-full"></div>
          <EachTestimonial v-for="(testimonial, index) in Testimonials[0]" :key="`testimonial-item-${index}-left-side`" :activeIndex="0" :index="index" :testimonial="testimonial" />
        </div>
      </div>
      <div class="space-y-9">
        <EachTestimonial v-for="(testimonial, index) in Testimonials[1]" :key="`testimonial-item-${index}-right-side`" :testimonial="testimonial" :activeIndex="false" :index="index"/>
      </div>
    </div>
  </section>
</template>
<style scoped>
#testimonial .heading-left-line::before {
  left: -70%;
  background: linear-gradient(to right, #FF665D, #FD5437);
}

#testimonial .heading-underline::after {
  bottom: -10px;
  background: linear-gradient(to right, #FF665D, #FD5437);
}
.testimonial-item {
  box-shadow: 0 5px 48px 0 #00000014;
}
</style>