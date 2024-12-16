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
  <section id="photo-gallery" class="py-24">
    <Wrapper class="space-y-24">
      <div class="text-[#03133A] text-center space-y-6">
        <p class="text-4xl font-pp-neue-machina">Photo <span class="heading-underline italic text-[#FF6357] font-pp-neue-machina-bold font-bold">Gallery</span></p>
        <p class="text-center">Explore our visual collection of inspiring moments, projects, and events.</p>
      </div>
      <div class="grid !grid-cols-3 gap-2">
        <div v-for="(items, index) in images" class="space-y-2" :key="`image-group-${index}`">
          <div v-for="(image, imageIndex) in items" :key="`image-${imageIndex}`">
            <img :src="`/imgs/gallery/${image}`" class="w-full object-fill rounded-lg" :alt="image">
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
</template>
<style scoped>
#photo-gallery .heading-underline::after{
  bottom: -5px;
  background: linear-gradient(#FF665D, #C85A53);
}
</style>