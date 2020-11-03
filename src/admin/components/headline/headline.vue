<template>
<div class="headline-component" :style="measures">
  <div class="container">
    <username></username>
    <btnclose></btnclose>
  </div>
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
      return {}
    }
  },
  components: {
    username: () => import("components/username"),
    btnclose: () => import("components/btnclose"),
  }
}
</script>

<style lang="postcss" src="./headline.pcss"></style>
