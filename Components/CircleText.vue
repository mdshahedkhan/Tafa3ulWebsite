<template>
  <div class="hidden xl:block lg:block relative">
    <div class="circle relative w-[180px] h-[180px] bg-[#e1f685] rounded-full flex justify-center items-center">
      <div class="xl:w-24 lg:w-24 md:w-20 w-16 xl:h-24 lg:h-24 md:h-20 h-16 absolute top-1/2 left-1/2 -translate-y-1/2 rounded-full ring-2 ring-[#accf55] -translate-x-1/2 mx-auto">
        <img src="/imgs/icons/arrow-bottom.png" class="w-full p-6 h-full" alt="curve-text">
      </div>
      <div class="text w-full h-full absolute">
        <p ref="circle-text">Tafa3ul hub Tafa3ul hub Tafa3ul hub Tafa3ul</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useTemplateRef} from "vue";
const textTemplateRef = useTemplateRef("circle-text");
onMounted(() => {
  if (textTemplateRef.value) {
    console.log(textTemplateRef.value)
    textTemplateRef.value.innerHTML = textTemplateRef.value?.innerText?.split('').map((char, index) => (`<span style="transform: rotate(${index * 8.3}deg);">${char}</span>`)).join('')
  }
})
</script>

<style scoped>
.circle .text {
  animation: textRotate 10s linear infinite;
}

@keyframes textRotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.circle .text span {
  position: absolute;
  left: 50%;
  font-size: 1.3em;
  transform-origin: 0 90px;
}
</style>