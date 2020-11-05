<template>
<section class="sectioncontent">
  <div class="container">
    <mainheader></mainheader>
  </div>
</section>
</template>

<script>
export default {
  props: {},
  computed: {},
  components: {
    mainheader: () => import("components/mainheader"),
  }
}
</script>

<style lang="postcss" src="./sectioncontent.pcss"></style>
