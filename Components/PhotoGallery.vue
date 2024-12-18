<script setup lang="ts">
import {DummyGallery} from "~/constraints/DataSource";
const images = computed(()=> {
  const groups = 3
  const items = Array.from({length: groups}, () => [])
  // @ts-ignore
  DummyGallery.forEach((item, i) => items[i % groups].push(item))
  return items
})
</script>

<template>
  <section id="photo-gallery" class="wrapper">
    <div class="contain-container lg:py-24 xl:py-24 md:py-20 py-10">
      <div class="lg:space-y-24 xl:space-y-24 space-y-12">
        <div class="text-[#03133A] text-center space-y-6">
          <p class="lg:text-4xl xl:text-4xl text-3xl font-pp-neue-machina">Photo <span class="heading-underline italic text-[#FF6357] font-pp-neue-machina-bold font-bold">Gallery</span></p>
          <p class="text-center lg:text-base xl:text-base text-sm">Explore our visual collection of inspiring moments, projects, and events.</p>
        </div>
        <div class="grid lg:!grid-cols-3 xl:!grid-cols-3 !grid-cols-2 gap-4">
          <div v-for="(image, imageIndex) in DummyGallery" :key="`image-${imageIndex}`">
            <img :src="`/imgs/gallery/${image}`" class="w-full object-fill rounded-lg" :alt="image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#photo-gallery .heading-underline::after{
  bottom: -5px;
  background: linear-gradient(#FF665D, #C85A53);
}
</style>