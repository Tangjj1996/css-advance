<template>
  <p class="landIn">This little flute of a reed thou hast carried over hills and dales, and hast breathed through it melodies eternally new.</p>
</template>

<script>
export default {
  mounted() {
    this.initialEle()
  },
  methods: {
    initialEle() {
      const landInTexts = document.querySelectorAll(".landIn");
      landInTexts.forEach(landInText => {
        let letters = landInText.textContent.split("");
        landInText.textContent = "";
        letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        landInText.append(span);
        });
      })
    }
  }
}
</script>

<style>

</style>