<template>
<button class="btnclose">{{title}}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Выйти"
    }
  }
};
</script>

<style lang="postcss" scoped src="./btnclose.pcss"></style>
