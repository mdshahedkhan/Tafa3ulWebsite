<script setup>
import "swiper/css"
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/vue"
import DoubleArrowLeftIcon from "~/components/svg/DoubleArrowLeftIcon.vue";
import {DummyBlogs} from "~/constraints/DataSource";
const modules = [Autoplay]
const blogs = [...DummyBlogs]
useHead({
  title: "Blog Details",
})

onMounted(() => {
  const listMenu = document.querySelector("#list-menu")
  const listMenuItems = listMenu.querySelectorAll("li")
  listMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      listMenuItems.forEach(li => li.classList.remove("active"))
      item.classList.toggle("active")
    })
  })
})

</script>

<template>
  <main>
    <section id="page-blog-details-section" class="pb-24 space-y-24">
      <Wrapper>
        <div class="py-20 h-[25vw] background-image rounded-2xl flex flex-col justify-end px-16 relative">
          <div class="bg-gradient-to-b rounded-2xl from-transparent to-red-500/30 absolute top-0 left-0 h-full w-full"></div>
          <p class="z-10 text-transparent stroke-white text-9xl w-full font-pp-neue-machina-bold text-stroke">BLOG DETAILS</p>
          <p class="z-10 text-white font-pp-neue-machina-bold text-6xl w-full">BLOG DETAILS</p>
        </div>
      </Wrapper>
      <Wrapper>
        <div class="flex gap-16 justify-between border-b-2 border-gray-300 pb-24">
          <div class="w-1/3 space-y-20">
            <div>
              <ul id="list-menu" class="space-y-6 border-l-[1px] border-gray-300 pl-3">
                <li class="active text-gray-600 cursor-pointer inline-block ">What is physical accessibility?</li>
                <li class=" text-gray-600 cursor-pointer">Does physical accessibility only work offline?</li>
                <li class="text-gray-600 cursor-pointer">Search is king?</li>
                <li class="text-gray-600 cursor-pointer">What's next?</li>
              </ul>
            </div>
            <div>
              <p class="text-2xl text-gray-800">Share this post:</p>
              <ul class="social-icons space-x-3 my-8">
                <li class="px-3 py-2 rounded-full group transition duration-300 cursor-pointer hover:bg-[#f04635] bg-primary/30 inline-block"><span class="transition-all duration-300 group-hover:rotate-[360deg] group-hover:text-white inline-block text-primary ti ti-brand-facebook text-2xl"></span></li>
                <li class="px-3 py-2 rounded-full group transition duration-300 cursor-pointer hover:bg-[#f04635] bg-primary/30 inline-block"><span class="transition-all duration-300 group-hover:rotate-[360deg] group-hover:text-white inline-block text-primary ti ti-brand-instagram text-2xl"></span></li>
                <li class="px-3 py-2 rounded-full group transition duration-300 cursor-pointer hover:bg-[#f04635] bg-primary/30 inline-block"><span class="transition-all duration-300 group-hover:rotate-[360deg] group-hover:text-white inline-block text-primary ti ti-brand-x text-2xl"></span></li>
              </ul>
              <button class="px-6 group hover:bg-red-50 transition duration-300 py-2 flex items-center gap-2 ring-1 ring-gray-400 rounded-full">
                <span class="ti ti-copy group-hover:text-[#f04635] text-gray-600"></span>
                <span class="text-sm group-hover:text-[#f04635] text-gray-600 font-pp-neue-machina">Copy link</span>
              </button>
            </div>
          </div>
          <div class="flex-1 space-y-12 pl-8">
            <div class="flex gap-4">
              <img src="/imgs/avatars/avatar-10.jpeg" class="w-[2.5vw] h-[2.5vw] rounded-full" alt="avatar">
              <div class="flex items-center gap-6">
                <p class="text-gray-700 font-cairo-regular">PP Neuw Machina</p>
                <span class="px-3 py-1.5 font-cairo-regular bg-red-100 text-sm rounded-full text-red-600">November 18, 2024</span>
              </div>
            </div>
            <div class="space-y-3">
              <p class="font-pp-neue-machina-bold text-2xl">Web Design Inspiration in 2024 to Inspire Yours</p>
              <p class="font-cairo-regular">Does the physical accessibility known from Byron Sharp's books apply to the world of online marketing? Is presence in the Google search engine as important as presence on the store shelf? In our opinion, yes. <span class="text-primary underline">Physical accessibility</span> is something that every marketer who cares about the success of an online campaign should take care of. But what is it? And how can you use it in your activities? Be sure to check it out!</p>
            </div>
            <div class="space-y-8 bg-gradient-to-r from-red-100 to-white px-10 py-7 border-l-[2px] border-[#f04635]">
              <p class="text-slate-900 text-lg font-cairo-regular pr-20">“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
              <p class="text-gray-600 text-sm">— Olivia Rhye, Product Designer</p>
            </div>
            <div class="space-y-3">
              <p class="font-pp-neue-machina-bold text-2xl">Does physical accessibility only work offline?</p>
              <p class="font-cairo-regular leading-relaxed">If we read Sharp's book without much thought, we might assume that the principle of physical availability only applies to <span class="text-red-500 underline">brands and products</span> available in the offline world.
                Nothing could be further from the truth!
                After all, physical accessibility is primarily about how to make it easier for the consumer to find, understand and buy our product or service . And is there currently a place where it is easier to do these three things than the Internet? That is why the principle of physical accessibility also works in the online world.
                The role of points of sale and store shelves has simply been taken over by the online space . Depending on the category of products and services available for sale online, <span class="text-red-500 underline">different places</span> will have different weight in the context of physical accessibility.
                For example, in the case of banking services, all kinds of rankings and comparison sites for personal accounts or mortgage loans can play a huge role, allowing you to quickly compare products and make a decision regarding the purchase of a specific product.
                In the case of electronics, a very important role will be played by all kinds of review blogs, product and price comparison sites, where users can compare product features and prices. The presence of a given brand and products on the most popular marketplaces and e-commerce stores will also be extremely important.
                And even the place in the search results in search / and in <span class="text-red-500 underline">the future also by AI</span>. In my opinion, this is where the virtual issue of physical accessibility begins. If you are not in search - you do not exist. This is why Amazon is the biggest competitor to Google</p>
            </div>
            <img src="/imgs/blogs/04.jpeg" class="rounded-3xl w-full" alt="blog-details">
            <div class="space-y-4">
              <p class="text-2xl font-pp-neue-machina-bold">What's next?</p>
              <p class="font-cairo-regular text-gray-700">Regardless of the market environment and <span class="text-red-600">new technologies</span>, every marketer who wants to ensure the physical availability of their own brand and products in the online world should focus on the consumer. In this case, the consumer on the Internet. The key questions are:</p>
              <ul class="space-y-4 py-2">
                <li class="flex gap-2">
                  <DoubleArrowLeftIcon />
                  <span class="font-cairo-regular">What sites is he viewing?</span>
                </li>
                <li class="flex gap-2">
                  <DoubleArrowLeftIcon />
                  <span class="font-cairo-regular">Where does he do his research?</span>
                </li>
                <li class="flex gap-2">
                  <DoubleArrowLeftIcon />
                  <span class="font-cairo-regular">What might influence his purchasing decision?</span>
                </li>
              </ul>
              <p>To achieve success, it is necessary to take actions that build physical accessibility on the one hand, and mental accessibility on the other. At Sales & More, we call such actions Full <span class="text-primary underline">Funnel campaigns</span>.</p>
            </div>
            <div class="space-y-8 bg-gradient-to-r from-[#2BE29C1A] to-white px-10 py-7 border-l-[2px] border-[#2BE29C]">
              <p class="text-slate-900 text-lg font-cairo-regular pr-20">“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
              <p class="text-gray-600 text-sm">— Olivia Rhye, Product Designer</p>
            </div>
          </div>
        </div>
        <div>
          <div class="w-full flex justify-between items-center">
            <p class="text-4xl text-gray-700 font-pp-neue-machina capitalize py-16">See More blog</p>
            <button class="outline-none px-3.5 ml-4 inline-block py-2.5 rounded-full ring-1 ring-primary"><span class="ti text-primary ti-arrow-up-right"></span></button>
          </div>
          <div class="w-full">
            <Swiper :modules="modules" :space-between="30" :slides-per-view="2" :loop="true" :autoplay="false">
              <SwiperSlide v-for="(item, index) in blogs" :key="index" class="py-2 px-1">
                <EachBlog :blog="item" :id="index" image-width="w-[13vw]"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </section>
  </main>
</template>
<style>
#page-blog-details-section .background-image {
  background-image: url('/imgs/backgrounds/blog-details.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}

#page-blog-details-section .text-stroke {
  -webkit-text-stroke: 1px white;
  opacity: 0.4;
}

#page-blog-details-section #list-menu li.active {
  position: relative;
  color: #FF665D;
  text-decoration: underline;
  font-family: "PPNeueMachina", "Cairo Bold", sans-serif;
  transition: 0.5s;
}

#page-blog-details-section #list-menu li.active::before {
  position: absolute;
  content: '';
  top: 10%;
  left: -14.5px;
  width: 4px;
  height: 30px;
  background: #FD5437;
  border-radius: 10px;
}
#page-blog-details-section .swiper .swiper-slide.swiper-slide-active{
  margin-left: 0 !important;
}

#page-blog-details-section .text-stroke::selection {
  color: transparent;
}
</style>