<script setup lang="ts">

</script>

<template>
  <footer class="pt-16" style="background-image: url('/imgs/backgrounds/footer.png'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
    <Wrapper class="space-y-12">
      <div class="w-full bg-white py-10 px-8 rounded-lg space-y-10">
        <div class="grid !grid-cols-6 gap-8">
          <div class="col-span-2">
            <div class="flex gap-4 text-[18px] items-center">
              <img src="/imgs/logo.png" alt="logo" class="w-16 h-16">
              <p class="font-inter">Tafa3ul Hub</p>
            </div>
          </div>
          <div class="space-y-8">
            <p class="uppercase text-gray-500 text-xs">Information</p>
            <ul>
              <li class="font-cairo-regular">Privacy</li>
              <li class="font-cairo-regular">FAQ</li>
              <li class="font-cairo-regular">Shipping and payment</li>
              <li class="font-cairo-regular">Partners</li>
              <li class="font-cairo-regular">Blog</li>
              <li class="font-cairo-regular">Contacts</li>
            </ul>
          </div>
          <div class="space-y-8">
            <p class="uppercase text-gray-500 text-xs">MENU</p>
            <ul>
              <li class="font-cairo-regular"><NuxtLink href="/programs">Program</NuxtLink></li>
              <li class="font-cairo-regular"><NuxtLink href="#">Workshop</NuxtLink></li>
              <li class="font-cairo-regular"><NuxtLink href="/#">Portfolio</NuxtLink></li>
            </ul>
          </div>
          <div class="col-span-2 text-end space-y-3">
            <button class="bg-slate-900 hover:bg-slate-800 transition duration-300 px-4 py-2 rounded-full text-white font-cairo-regular">Request a call</button>
            <p class="font-cairo-regular text-end text-gray-800 text-sm">Hub@tafa3ul.group</p>
          </div>
        </div>
        <div class="flex justify-between items-end">
          <div class="space-x-3">
            <NuxtLink class="inline-block px-3 py-2 rounded-full bg-slate-900 hover:bg-slate-800 cursor-pointer transition duration-300 group">
              <span class="ti ti-brand-telegram text-2xl text-white inline-block group-hover:rotate-[380deg] transition duration-300"></span>
            </NuxtLink>
            <NuxtLink class="inline-block px-3 py-2 rounded-full bg-slate-900 hover:bg-slate-800 cursor-pointer transition duration-300 group">
              <span class="ti ti-brand-whatsapp text-2xl text-white inline-block group-hover:rotate-[380deg] transition duration-300"></span>
            </NuxtLink>
          </div>
          <div>
            <p class="font-cairo-regular text-sm">1901 Thornridge Cir. Shiloh,</p>
            <p class="font-cairo-regular text-sm">Hawaii 81063</p>
          </div>
        </div>
      </div>
      <div class="w-full flex gap-10 justify-between items-center">
        <div class="w-1/2">
          <p class="text-3xl text-white font-pp-neue-machina-bold">If you didn't find the event you are interested in or have questions about it,</p>
        </div>
        <div class="w-1/2 space-y-3">
          <p class="font-cairo-regular text-sm text-white">Just send us your contact email and we will contact you.</p>
          <button class="bg-transparent w-full flex justify-between items-center px-4 py-2 ring-2 ring-white rounded-2xl">
            <span class="flex flex-col">
              <span class="text-sm text-white text-left">Your email</span>
              <span class="text-white text-left">e.g</span>
            </span>
            <span class="ti ti-arrow-right text-white text-lg"></span>
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center pb-8">
        <p class="text-white text-xs">© 2025 — Copyright</p>
        <NuxtLink href="#" class="text-white text-xs">Privacy</NuxtLink>
      </div>
    </Wrapper>
  </footer>
</template>
<style scoped>
footer ul li {
  @apply text-[#1B1819];
}
</style>
