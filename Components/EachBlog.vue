<template>
  <NuxtLink :href="href" class="flex justify-between items-start gap-6 ring-1 ring-gray-200 rounded-2xl overflow-hidden">
    <img :src="`/imgs/blogs/${blog?.thumbnail}`" :class="`${imageWidth} rounded-2xl h-[280px] object-cover`" :alt="blog.title"/>
    <div class="flex-1 py-2 pr-3">
      <div class="flex items-center gap-14">
        <p class="text-primary text-lg font-inter">{{ blog?.category }}</p>
        <ul class="list-disc text-gray-400">
          <li class="text-gray-500 font-inter text-sm">{{ blog?.published_at }}</li>
        </ul>
      </div>
      <p class="text-3xl font-pp-neue-machina-bold">{{ blog?.title }}</p>
      <p class="py-4">{{ blog?.description }}</p>
      <div class="w-full flex items-center gap-4">
        <img :src="`/imgs/avatars/${blog?.authorAvatar}`" class="rounded-full h-[2.5vw]" :alt="blog?.authorName">
        <p class="font-pp-neue-machina">{{ blog?.authorName }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  blog: Object,
  id: Number,
  imageWidth: {
    type: String,
    default: 'w-[13vw]',
  }
})
const href = `/blogs/${props.id}`
</script>
