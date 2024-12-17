<script setup lang="ts">
import {DummyBlogs as blogs} from "~/constraints/DataSource";
import PrimaryButton from "~/components/Ul/PrimaryButton.vue";

useHead({
  title: "Blogs"
})
</script>

<template>
<section id="page-blog" style="background-image: url('/imgs/glows/01.png'); background-repeat: no-repeat;">
  <Wrapper class="py-24 flex gap-16 justify-between items-center">
    <div class="w-1/2">
      <p class="heading-left-line italic text-red-500 inline-block">Tafa3ul Hub Magazine</p>
      <p class="text-6xl text-[#FF665D]">Our Latest <span class="heading-underline italic font-pp-neue-machina-bold text-[#FF665D] pr-1">Article</span></p>
    </div>
    <div class="w-1/2">
      <p>Readable local content that gives you a comprehensive view of the business world in Iraq and the southern region</p>
      <p class="text-lg text-primary">Join a thriving hub where <button class="outline-none px-3.5 ml-4 inline-block py-2 rounded-full ring-1 ring-primary"><span class="ti text-primary ti-arrow-up-right"></span></button></p>
    </div>
  </Wrapper>
  <div>
    <EachLatestArticle />
  </div>
  <div class="w-full" style="background: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/imgs/backgrounds/blog-soft-bg.png') no-repeat center top; background-size: cover;">
    <Wrapper class="pt-24 pb-28 w-full flex justify-between items-start">
      <div class="space-y-5 w-1/2">
        <p class="text-2xl text-primary">Our Blog</p>
        <p class="text-4xl font-pp-neue-machina-bold pl-16">Tafa3ul Blogs</p>
      </div>
      <div class="w-1/2 space-y-6">
        <p class="font-cairo-regular">Lorem ipsum hub where like-minded individuals and organizations come together to create positive impact, share resources, and drive growth. Join a thriving hub where like-minded individuals and organizations come together to create positive impact, share resources, and drive growth.</p>
        <p class="text-lg text-primary">Join a thriving hub where <button class="outline-none px-3.5 ml-4 inline-block py-2 rounded-full ring-1 ring-primary"><span class="ti text-primary ti-arrow-up-right"></span></button></p>
      </div>
    </Wrapper>
  </div>
  <div id="page-article-section" class="w-full py-24" style="background-image: url('/imgs/glows/05.png'); background-repeat: no-repeat;">
    <Wrapper class="space-y-10">
      <div class="flex flex-col">
        <div>
          <p class="heading-left-line bg-gradient-to-r from-[#2BE29C] to-[#7325D1] bg-clip-text text-transparent inline-block text-2xl">2023 Achievement</p>
        </div>
        <p class="inline-block text-6xl"><span class="bg-gradient-to-br font-pp-neue-machina from-[#2BE29C] to-[#7325D1] from-50% bg-clip-text text-transparent">All</span> <span class="heading-underline font-pp-neue-machina-bold bg-gradient-to-br from-[#2BE29C] to-[#7325D1] bg-clip-text text-transparent">Article</span></p>
      </div>
      <div class="flex justify-between">
        <div class="inline-block">
          <ul class="border-b-[1px] flex gap-6">
            <li class="py-2 px-2.5 font-pp-neue-machina text-gray-600 cursor-pointer active">All views</li>
            <li class="py-2 px-2.5 font-pp-neue-machina text-gray-600 cursor-pointer">Service</li>
            <li class="py-2 px-2.5 font-pp-neue-machina text-gray-600 cursor-pointer">Design</li>
            <li class="py-2 px-2.5 font-pp-neue-machina text-gray-600 cursor-pointer">Tutorial</li>
            <li class="py-2 px-2.5 font-pp-neue-machina text-gray-600 cursor-pointer">Video</li>
            <li class="py-2 px-2.5 font-pp-neue-machina text-gray-600 cursor-pointer">Billing</li>
          </ul>
        </div>
        <div>
          <select name="filter" id="filter" class="py-1.5 outline-none px-8 rounded-full bg-gray-50 ring-1 ring-gray-200">
            <option value="recent">Most Recent</option>
            <option value="recent">Most Recent</option>
            <option value="recent">Most Recent</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>
      </div>
      <div class="grid !grid-cols-2 !gap-10">
        <EachBlog v-for="(blog, index) in blogs" :key="`blog-${index}`" :id="index" :blog="blog" />
      </div>
      <div class="flex justify-center py-8">
        <nav class="mx-auto" aria-label="navigation">
          <ul class="flex items-center spacex-x-2 h-10 text-base">
            <li>
              <a href="#" class="flex items-center justify-center rounded-xl px-4 h-10 ms-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">
                <span class="sr-only">Previous</span>
                <span class="ti ti-arrow-left"></span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-xl px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">1</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-xl px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" class="z-10 flex items-center justify-center rounded-xl px-4 h-10 leading-tight bg-primary text-white">3</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-xl px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">4</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-xl px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">5</a>
            </li>
            <li>
              <a href="#" class="flex items-center justify-center rounded-xl px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">
                <span class="sr-only">Next</span>
                <span class="ti ti-arrow-right"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="py-14 rounded-2xl text-center space-y-8" style="background-image: url('/imgs/backgrounds/blog-banner.png'); background-repeat: no-repeat; background-size: cover; background-position: 0 -200px; object-fit: cover">
        <p class="text-2xl text-transparent bg-gradient-to-r from-[#ffb674] to-[#ff5d04] bg-clip-text inline-block ">Our next workshop</p>
        <p class="text-5xl text-white font-pp-neue-machina-bold">Skill Development Workshop </p>
        <ul class="w-1/2 mx-auto flex items-center gap-6 justify-center">
          <li class="flex items-center gap-3 px-4 py-1.5 rounded-full ring-1 ring-gray-100">
            <span class="ti ti-clock-hour-5 text-transparent bg-gradient-to-r from-[#ffb674] to-[#ff5d04] bg-clip-text text-xl"></span>
            <span class="text-white text-sm font-pp-neue-machina italic">2:30 PM</span>
          </li>
          <li class="flex items-center gap-3 px-4 py-1.5 rounded-full ring-1 ring-gray-100">
            <span class="ti ti-map-2 text-transparent bg-gradient-to-r from-[#ffb674] to-[#ff5d04] bg-clip-text text-xl"></span>
            <span class="text-white text-sm font-pp-neue-machina italic">Iran National Auditorium</span>
          </li>
          <li class="flex items-center gap-3 px-4 py-1.5 rounded-full ring-1 ring-gray-100">
            <span class="ti ti-calendar-month text-transparent bg-gradient-to-r from-[#ffb674] to-[#ff5d04] bg-clip-text text-xl"></span>
            <span class="text-white text-sm font-pp-neue-machina italic">November, 06, 2024</span>
          </li>
        </ul>
        <PrimaryButton>
          <span class="text-center text-white font-pp-neue-machina">Join Now</span>
        </PrimaryButton>
      </div>
    </Wrapper>
  </div>
</section>
</template>
<style>
#page-blog .heading-left-line{
  margin-left: 55px;
}
#page-blog .heading-left-line::before {
  left: -35%;
}

#page-article-section .heading-left-line::before {
  background: #2BE29C;
  left: -50px;
}

#page-blog .heading-underline::after {
  background: #FF665D;
}
#page-article-section .heading-underline::after {
  background: linear-gradient(to right, #2BE29C, #7325D1) !important;
}

#page-article-section ul li.active {
  background: linear-gradient(to bottom right, #2BE29C, #7325D1);
  @apply text-transparent;
  @apply bg-clip-text;
  border-bottom: 2px solid #7325D1;
}

#page-blog .swiper-wrapper {
  align-items: baseline;
}
</style>
