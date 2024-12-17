<template>
  <Wrapper>
    <div class="relative flex xl:flex-row lg:flex-row flex-col items-center gap-10 justify-between w-full py-4">
        <div class="h-16 xl:w-auto lg:w-auto w-full">
          <Transition @enter="enter">
            <div v-show="itemsVisible" class="flex items-center justify-between">
              <NuxtLink href="/" class="flex gap-4 text-[18px] items-center">
                <img src="/imgs/logo.png" alt="logo" class="w-16 h-16">
                <p class="font-inter">Tafa3ul Hub</p>
              </NuxtLink>
              <button id="menu-toggle" ref="menu-toggle" class="bg-gray-50 xl:hidden lg:hidden px-3 py-1.5 rounded-xl">
                <span class="ti ti-menu-2 text-gray-900 text-xl"></span>
              </button>
            </div>
          </Transition>
        </div>
      <Transition @enter="enter">
        <ul v-if="itemsVisible" ref="navbar-menu" class="hidden absolute top-full z-[999] bg-white left-0 xl:static lg:static lg:flex xl:flex lg:flex-row xl:flex-row lg:w-auto xl:w-auto w-full flex-col navbar">
          <li><NuxtLink class="text-sm lg:text-base xl:text-base" href="/">Home</NuxtLink></li>
          <li><NuxtLink class="text-sm lg:text-base xl:text-base" href="/programs">Programs</NuxtLink></li>
          <li><NuxtLink class="text-sm lg:text-base xl:text-base" href="/about-us">About Us</NuxtLink></li>
          <li><NuxtLink class="text-sm lg:text-base xl:text-base" href="/blogs">Blog</NuxtLink></li>
          <li><NuxtLink href="/contact-us" class="text-sm lg:text-base xl:text-base btn transition-all duration-200">Join</NuxtLink></li>
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
const {enter} = useHeaderAnimation()
const itemsVisible = ref(false)
const menuToggleBtn = useTemplateRef('menu-toggle')
const navbarMenu = useTemplateRef('navbar-menu')
onMounted(()=> {
  setTimeout(() => itemsVisible.value = true, 100)
  if (menuToggleBtn.value) {
    menuToggleBtn.value.addEventListener('click', e => {
      navbarMenu.value?.classList.toggle('hidden')
      menuToggleBtn.value?.classList.toggle('bg-red-100')
      const menuToggleSpan = menuToggleBtn.value?.querySelector('span')
      if (menuToggleSpan && menuToggleSpan.classList.contains('ti-menu-2')) {
        menuToggleSpan.classList.toggle('ti-x')
      }
    })
  }
})
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