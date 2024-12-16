<script setup lang="ts">
useHead({
  title: "Contact Us",
})
</script>

<template>
  <main>
    <section id="page-contact-us">
      <Wrapper>
        <div class="py-20 h-[25vw] background-image rounded-2xl flex flex-col justify-end px-16 relative">
          <div class="bg-gradient-to-b rounded-2xl from-transparent to-blue-900 absolute top-0 left-0 h-full w-full"></div>
          <p class="z-10 text-transparent stroke-white text-9xl w-full font-pp-neue-machina-bold text-stroke">Contact Us</p>
          <p class="z-10 text-white font-pp-neue-machina-bold text-6xl w-full">Contact Us</p>
        </div>
      </Wrapper>
      <div class="w-full" style="background-image: url('/imgs/glows/01.png'); background-repeat: no-repeat;">
        <Wrapper class="py-24 flex gap-16 justify-between">
          <div class="w-1/2 space-y-12">
            <div>
              <p class="heading-left-line inline-block pl-3 text-primary italic">Contact Us</p>
              <p class="text-6xl font-pp-neue-machina from-[#122D40] to-[#122D40] bg-gradient-to-r text-transparent bg-clip-text">Get In <span class="font-pp-neue-machina-bold italic from-[#4A84B5] to-[#122D40] bg-gradient-to-r text-transparent pr-1 bg-clip-text heading-underline">Touch</span></p>
              <p class="text-lg text-gray-500 mt-6">We’d love to hear from you. Please fill out this form.</p>
            </div>
            <div class="space-y-6">
              <div class="flex gap-8">
                <div class="w-1/2">
                  <p class="text-2xl font-pp-neue-machina">Contact</p>
                  <p>843 412 612 20</p>
                  <p>+(125) 356 861</p>
                </div>
                <div class="w-1/2">
                  <p class="text-2xl font-pp-neue-machina">Based in</p>
                  <p>New York,</p>
                  <p>California, Ohio</p>
                </div>
              </div>
              <div class="flex gap-8">
                <div class="w-1/2">
                  <p class="text-2xl font-pp-neue-machina">Email</p>
                  <p>843 412</p>
                </div>
                <div class="w-1/2">
                  <p class="text-2xl font-pp-neue-machina">Social Network</p>
                  <ul class="flex gap-4">
                    <li><span class="ti ti-brand-x"></span></li>
                    <li><span class="ti ti-brand-facebook"></span></li>
                    <li><span class="ti ti-brand-linkedin"></span></li>
                    <li><span class="ti ti-brand-youtube"></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-24">
            <div class="bg-[#ddf1e2] rounded-2xl py-14 ml-auto px-12 space-y-8">
              <p class="font-pp-neue-machina text-3xl">Get In <span class="italic heading-underline font-pp-neue-machina-bold">Touch</span></p>
              <div class="space-y-6">
                <div>
                  <label for="first_name" class="text-gray-700 font-pp-neue-machina block text-sm">First Name</label>
                  <input type="text" name="firs_name" id="first_name" class="bg-transparent border-b-[1.5px] w-full border-[#667085] font-pp-neue-machina text-gray-600 outline-none">
                </div>
                <div>
                  <label for="email" class="text-gray-700 font-pp-neue-machina text-sm block">Email</label>
                  <input type="email" name="email" id="email" class="bg-transparent border-b-[1.5px] w-full border-[#667085] font-pp-neue-machina text-gray-600 outline-none">
                </div>
                <div>
                  <label for="phone" class="text-gray-700 font-pp-neue-machina block text-sm ">Phone Number</label>
                  <input type="tel" name="phone" id="phone" class="bg-transparent border-b-[1.5px] w-full border-[#667085] font-pp-neue-machina text-gray-600 outline-none">
                </div>
                <div>
                  <label for="phone" class="text-gray-700 font-pp-neue-machina block text-sm ">Message</label>
                  <textarea name="message" id="phone" class="bg-transparent border-b-[1.5px] w-full border-[#667085] font-pp-neue-machina text-gray-600 outline-none" rows="4"></textarea>
                </div>
                <div class="w-full flex gap-4">
                  <input type="checkbox" name="agree_policy" id="agree_policy">
                  <p>You agree to our friendly <NuxtLink>privacy policy.</NuxtLink></p>
                </div>
                <div class="pt-5">
                  <button class="bg-slate-900 hover:bg-slate-800 transition duration-300 py-3.5 rounded-full text-white font-pp-neue-machina w-full">SEND A MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <Wrapper class="pb-24">
          <div class="relative">
            <div class="bg-white px-6 py-5 absolute top-2 left-2 rounded-xl w-[23vw] space-y-3">
              <div class="pr-6">
                <p class="font-pp-neue-machina-bold">Warsaw, Abbeyville (Tincup), 46582</p>
                <p class="font-pp-neue-machina text-sm">We'd love to hear from you. Please fill out this from.</p>
              </div>
              <div class="border-b-[1.5px] border-gray-300 pb-2">
                <span class="font-pp-neue-machina-bold">4.5</span>
                <span class="px-2">
                  <span v-for="index in Array.from({length: 5})" class="ti ti-star"></span>
                </span>
                <span>175,638 review</span>
              </div>
              <NuxtLink class="text-gray-500 cursor-pointer">view large map</NuxtLink>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" class="w-full h-[25vw] rounded-3xl" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </Wrapper>
      </div>
    </section>
  </main>
</template>
<style>
#page-contact-us .background-image {
  background-image: url('/imgs/contact-us-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -100px;
}

#page-contact-us .heading-underline::after {
  background: #122D40;
}

#page-contact-us .text-stroke {
  -webkit-text-stroke: 1px white;
  opacity: 0.4;
}

/*.responsive-map{
  overflow: hidden;
  position:relative;
  height:0;
}
.responsive-map iframe{
  left:0;
  top:0;
  height:70%;
  width:100%;
  position:absolute;
}*/

</style>