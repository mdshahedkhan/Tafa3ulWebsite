<script setup lang="ts">
import {DummyFrequentlyQuestions} from "~/constraints/DataSource";
</script>

<template>
  <div id="frequently-question" class="w-full" style="background: url('/imgs/glows/01.png') no-repeat; background-size: contain;">
    <div class="wrapper">
      <div class="contain-container flex xl:flex-row lg:flex-row flex-col gap-16 pt-16 pb-20">
        <div class="w-full lg:w-1/2 x:w-1/2 lg:pr-16 xl:pr-16 space-y-4">
          <div class="pl-3">
            <p class="heading-left-line inline-block italic text-[#003AE6]">Asked Question</p>
          </div>
          <div>
            <p class="lg:text-3xl xl:text-3xl text-2xl font-pp-neue-machina bg-gradient-to-r from-[#AF2C25] to-[#F04635] bg-clip-text text-transparent">Frequently <span class="heading-underline pr-1 font-pp-neue-machina-bold bg-gradient-to-r italic from-[#AF2C25] to-[#F04635] bg-clip-text text-transparent">Asked</span></p>
            <p class="lg:text-3xl xl:text-3xl text-2xl font-pp-neue-machina-bold bg-gradient-to-r italic from-[#AF2C25] to-[#F04635] bg-clip-text text-transparent heading-underline inline-block section-title pr-1">Question (FAQ)</p>
          </div>
          <p class="xl:text-base lg:text-base text-sm">Our FAQ page provides quick solutions and helpful insights to make your experience smoother and more informed.</p>
        </div>
        <div class="lg:w-1/2 xl:w-1/2 w-full space-y-5">
          <FrequentlyEachQeustion v-for="(question, index) in DummyFrequentlyQuestions" ring-color="ring-gray-500" :option="question" :key="`frequently-each-question-${index}`" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#frequently-question .heading-left-line::before {
  background: #003AE6;
}
#frequently-question .heading-underline::after{
  background: #F04635;
}
#frequently-question .section-title::after{
  bottom: -4px !important;
  background: #F04635;
}
</style>