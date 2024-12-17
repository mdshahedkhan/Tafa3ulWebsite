<template>
  <div class="space-x-5 self-end hidden lg:block xl:block">
    <button @click="()=> emits('handleNavigation', 'prev')" class="py-3 px-4 group bg-transparent rounded-full ring-2 ring-[#E0E0E0] hover:ring-red-500 hover:shadow-2xl shadow-red-500 transition duration-300">
      <span class="ti ti-chevron-left text-3xl text-gray-500 group-hover:text-red-500 transition duration-300"></span>
    </button>
    <button @click="()=> emits('handleNavigation', 'next')" class="py-3 px-4 group bg-transparent rounded-full ring-2 ring-[#E0E0E0] hover:ring-red-500 hover:shadow-2xl shadow-red-500 transition duration-300">
      <span class="ti ti-chevron-right text-3xl text-gray-500 group-hover:text-red-500 transition duration-300"></span>
    </button>
  </div>
</template>

<script setup>
const emits = defineEmits(['handleNavigation'])
</script>
