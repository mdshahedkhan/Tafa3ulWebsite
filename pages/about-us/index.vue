<script setup lang="ts">

</script>

<template>
  <main>
    <section class="py-20">
      <Wrapper>

      </Wrapper>
    </section>
  </main>
</template>
<style>
#page-details-section .heading-underline::after {
  background: linear-gradient(to right, #ffc081, #ffa058);
}
#page-about-section .heading-underline::after {
  bottom: -5px;
}
.background-image {
  background-size: cover;
  background: linear-gradient(to right, #000, transparent 100%), url('/imgs/components/about-us.jpeg');
  background-size: cover;
}
</style>