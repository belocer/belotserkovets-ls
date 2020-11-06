<template>
<div class="btnadd__icon" :style="measures">
  <span class="btnadd__plus">+</span>
</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "24"
    }
  },
  components: {},
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}px`,
        height: `${size}px`,
      }
    }
  },
}
</script>

<style lang="postcss" scoped src="./btnplus.pcss"></style>
