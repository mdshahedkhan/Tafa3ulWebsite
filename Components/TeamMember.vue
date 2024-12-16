<script setup>
defineProps(['member'])
</script>

<template>
  <div class="space-y-6">
    <img :src="`/imgs/team/${member.image}`" :alt="`${member.name}`" class="rounded-xl">
    <div class="space-y-2">
      <p class="text-2xl">{{ member.name }}</p>
      <p class="text-gray-500">{{ member.position }}</p>
    </div>
  </div>
</template>
