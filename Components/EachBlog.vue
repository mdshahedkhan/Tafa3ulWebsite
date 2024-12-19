<template>
  <NuxtLink :href="href" class="flex lg:flex-row xl:flex-row md:flex-row flex-col justify-between items-start gap-6 ring-1 ring-gray-200 rounded-2xl">
    <img :src="`/imgs/blogs/${blog?.thumbnail}`" :class="`${imageWidth} rounded-2xl lg:h-[280px] xl:h-[280px] md:h-[280px] h-full lg:w-64 xl:w-64 md:w-64 w-full object-cover`" :alt="blog.title"/>
    <div class="flex-1 py-2 lg:pr-3 xl:pr-3 px-3 lg:px-0 xl:px-0">
      <div class="flex items-center gap-14">
        <p class="text-primary text-lg font-inter">{{ blog?.category }}</p>
        <ul class="list-disc text-gray-400">
          <li class="text-gray-500 font-inter text-sm">{{ blog?.published_at }}</li>
        </ul>
      </div>
      <p class="xl:text-2xl lg:text-2xl text-xl font-pp-neue-machina-bold">{{ blog?.title }}</p>
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
