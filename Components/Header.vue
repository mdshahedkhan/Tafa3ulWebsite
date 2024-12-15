<template>
  <Wrapper>
    <div class="flex items-center justify-between w-full py-4">
        <div class="h-16">
          <Transition @enter="enter">
            <div v-if="itemsVisible" class="flex gap-4 text-[18px] items-center">
              <img src="/imgs/logo.png" alt="logo" class="w-16 h-16">
              <p class="font-inter">Tafa3ul Hub</p>
            </div>
          </Transition>
        </div>
      <Transition @enter="enter">
        <ul v-if="itemsVisible" class="flex navbar">
          <li><NuxtLink href="/">Home</NuxtLink></li>
          <li><NuxtLink href="/programs">Programs</NuxtLink></li>
          <li><NuxtLink href="/about-us">About Us</NuxtLink></li>
          <li><NuxtLink href="/blogs">Blog</NuxtLink></li>
          <li><NuxtLink href="/blogs" class="btn transition-all duration-200">Join</NuxtLink></li>
          <li>
            <a href="#">
            <span class="text-lg text-blue-950 flex items-center gap-1">
              <span class="ti ti-world"></span>
              <span>EN</span>
              <span class="ti ti-chevron-down"></span>
            </span>
            </a>
          </li>
        </ul>
      </Transition>
    </div>
  </Wrapper>
</template>
<script lang="ts" setup>
import {useHeaderAnimation} from "~/hooks/useAnimation";
const {enter, beforeEnter} = useHeaderAnimation()
const itemsVisible = ref(false)
onMounted(()=> setTimeout(() => itemsVisible.value = true, 100))
</script>

<style>
.navbar li a {
  @apply px-5;
  @apply py-1.5;
  @apply inline-block;
}

a.btn {
  @apply bg-gradient-to-r;
  @apply from-[#FF665D];
  @apply to-[#FD5437];
  @apply rounded-full;
  @apply text-white;
  @apply text-lg;
  @apply !px-10;
  @apply ml-4;
  box-shadow: 0 0 5px 1px rgba(253, 84, 55, 0.47);
}

a.btn:hover {
  @apply from-rose-400;
  @apply to-rose-500;
  box-shadow: 0 0 7px 1px rgba(253, 84, 55, 0.51);
}
</style>