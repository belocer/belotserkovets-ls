<template>
<div class="menucontainer-component">
  <div class="container">
    <menulink></menulink>
  </div>
</div>
</template>

<script>
export default {
  components: {
    menulink: () => import("components/menulink"),
  }
}
</script>

<style lang="postcss" scoped src="./menucontainer.pcss"></style>
