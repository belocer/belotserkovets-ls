<template>
<div class="mainheader">
  <h1 class="mainheader__header">Блок «Обо мне»</h1>
  <btnaddgroup></btnaddgroup>
</div>
</template>

<script>
export default {
  props: {},
  computed: {},
  components: {
    btnaddgroup: () => import("components/btnaddgroup")
  }
}
</script>

<style lang="postcss" scoped src="./mainheader.pcss"></style>
