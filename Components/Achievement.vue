<script setup lang="ts">
const stepperItems = [
  'Workshops ',
  'Business Meetup',
  'The Journey',
  'Collaboration',
]
const handleChanged = (value: number)=> {
  console.log(value)
}
</script>

<template>
  <section id="achievement" class="pt-16 bg-[#faf9f9] bg-center object-center w-full space-y-16" style="background: url('/imgs/glows/02.png') no-repeat top left; object-fit: contain">
    <Wrapper>
      <div class="space-y-20">
        <div class="flex justify-between items-end gap-16">
          <div class="w-1/3">
            <p class="heading-left-line text-sm inline-block text-red-600">2023 Achievement</p>
            <p class="text-5xl text-primary-gradient font-pp-neue-machina">What <span class="heading-underline font-pp-neue-machina-bold capitalize italic text-primary-gradient pr-2">we did</span>
            </p>
          </div>
          <div class="flex-1">
            <div class="w-full bg-gradient-to-r from-[#FF665D] to-[#FD5437] h-[2px] inline-block"></div>
          </div>
        </div>
        <div class="flex gap-16">
          <div class="w-1/3">
            <Stepper :items="stepperItems" @onChange="handleChanged"/>
          </div>
          <div class="flex-1 space-y-10">
            <p class="text-gray-600 font-cairo-regular leading-[24px] capitalize">The workshops provided participants with the necessary tools,
              guidance, and inspiration to explore their interests, identify their true callings, and embark on fulfilling
              journeys in their chosen fields and industries.</p>
            <div class="flex gap-5">
              <div class="w-96 h-full">
                <img src="/imgs/achievements/02.png" alt="achievements" class="w-full object-contain">
              </div>
              <div class="w-96 h-full">
                <img src="/imgs/achievements/04.png" alt="achievements" class="w-full object-contain">
              </div>
              <div class="space-y-5 w-1/2">
                <img src="/imgs/achievements/01.png" alt="achievements" class="object-contain">
                <div>
                  <img src="/imgs/achievements/03.png" alt="achievements" class="w-full">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
</template>
<style scoped>
#achievement .heading-underline::after {
  bottom: 3px;
  background: linear-gradient(to right, #FF665D, #FD5437);
}

#achievement .heading-left-line {
  margin-left: 45px;
}

#achievement .heading-left-line::before {
  left: -45px;
}
</style>
