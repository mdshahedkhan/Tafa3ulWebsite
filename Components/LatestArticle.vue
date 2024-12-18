<template>
  <section id="latest-article" class="wrapper lg:py-24 xl:py-24 py-14 lg:space-y-28 xl:space-y-28 md:space-y-14 space-y-10">
    <div class="contain-container flex justify-between">
      <div class="space-y-4">
        <p class="font-pp-neue-machina italic text-red-500">Tafa3ul Hub Magazine</p>
        <p class="lg:text-4xl xl:text-4xl md:text-3xl text-2xl text-red-500">Our Latest <span class="heading-underline italic bg-gradient-to-r from-[#FF665D] to-[#C85A53] text-transparent bg-clip-text font-pp-neue-machina-bold font-bold">Article</span>
        </p>
        <p class="lg:text-base xl:text-base md:text-base text-sm font-cairo-regular text-gray-600">Readable local content that gives you a comprehensive view of the business world in Iraq and the southern region</p>
        <div>
          <p class="text-[#F04635] text-xl">Join a thriving hub where
            <button>
              <span class="ti ti-arrow-up-right lg:px-2.5 xl:px-2.5 md:px-2 px-1.5 lg:py-2.5 xl:py-2.5 md:py-2 py-1.5 ml-3 text-[#F04635] rounded-full ring-2 ring-[#F6A09C]"></span>
            </button>
          </p>
        </div>
      </div>
      <SliderNavigation @handleNavigation="handleNavigation"/>
    </div>
    <div class="contain-container">
      <EachLatestArticle ref="EachLatestArticleRef"/>
    </div>
  </section>
</template>

<script setup>
const EachLatestArticleRef = ref(null)
const handleNavigation = (actionType) => EachLatestArticleRef.value?.handleNavigation(actionType)
</script>

<style>
#latest-article .heading-underline::after {
  background: linear-gradient(to top, #FF665D, #C85A53);
}

#latest-article .swiper-wrapper {
  align-items: baseline;
}
</style>