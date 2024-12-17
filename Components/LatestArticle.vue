<template>
  <section id="latest-article" class="py-24 space-y-28">
    <Wrapper>
      <div class="flex justify-between">
        <div class="space-y-4">
          <p class="font-pp-neue-machina italic text-red-500">Tafa3ul Hub Magazine</p>
          <p class="text-4xl text-red-500">Our Latest <span class="heading-underline italic bg-gradient-to-r from-[#FF665D] to-[#C85A53] text-transparent bg-clip-text font-pp-neue-machina-bold font-bold">Article</span>
          </p>
          <p class="font-cairo-regular text-gray-600">Readable local content that gives you a comprehensive view of the business world in Iraq and the southern region</p>
          <div>
            <p class="text-[#F04635] text-xl">Join a thriving hub where
              <button>
                <span class="ti ti-arrow-up-right px-2.5 py-2.5 ml-3 text-[#F04635] rounded-full ring-2 ring-[#F6A09C]"></span>
              </button>
            </p>
          </div>
        </div>
        <SliderNavigation @handleNavigation="handleNavigation"/>
      </div>
    </Wrapper>
    <div>
      <EachLatestArticle ref="EachLatestArticleRef" />
    </div>
  </section>
</template>

<script setup>
const EachLatestArticleRef = ref(null)
const handleNavigation = (actionType)=> EachLatestArticleRef.value?.handleNavigation(actionType)
</script>

<style>
#latest-article .heading-underline::after {
  background: linear-gradient(to top, #FF665D, #C85A53);
}

#latest-article .swiper-wrapper {
  align-items: baseline;
}
</style>