<template>
<div class="headline-component" :style="measures">

</div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "#43436B"
    }
  },
  computed: {
    measures() {
      const bg = String(this.bg);
      return {
        width: `${bg}rem`,
        height: `${bg}rem`,
      }
    }
  }
}
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>
