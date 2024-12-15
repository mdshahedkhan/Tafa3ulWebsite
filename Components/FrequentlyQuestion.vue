<script setup lang="ts">

import {DummyFrequentlyQuestions} from "~/constraints/DataSource";
</script>

<template>
  <div id="frequently-question" class="w-full" style="background: url('/imgs/glows/01.png') no-repeat; background-size: contain;">
    <Wrapper>
      <div class="flex gap-16 pt-16 pb-20">
        <div class="w-1/2 pr-16 space-y-4">
          <div class="pl-3">
            <p class="heading-left-line inline-block italic text-[#003AE6]">Asked Question</p>
          </div>
          <div>
            <p class="text-3xl font-pp-neue-machina bg-gradient-to-r from-[#AF2C25] to-[#F04635] bg-clip-text text-transparent">Frequently <span class="heading-underline pr-1 font-pp-neue-machina-bold bg-gradient-to-r italic from-[#AF2C25] to-[#F04635] bg-clip-text text-transparent">Asked</span></p>
            <p class="text-3xl font-pp-neue-machina-bold bg-gradient-to-r italic from-[#AF2C25] to-[#F04635] bg-clip-text text-transparent heading-underline inline-block section-title pr-1">Question (FAQ)</p>
          </div>
          <p>Our FAQ page provides quick solutions and helpful insights to make your experience smoother and more informed.</p>
        </div>
        <div class="w-1/2 space-y-5">
          <FrequentlyEachQeustion v-for="(question, index) in DummyFrequentlyQuestions" :option="question" :key="`frequently-each-question-${index}`" />
        </div>
      </div>
    </Wrapper>
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