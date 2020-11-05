<template>
<section class="sectioncontent">
  <div class="container">
    <mainheader></mainheader>
    <card></card>
  </div>
</section>
</template>

<script>
export default {
  props: {},
  computed: {},
  components: {
    mainheader: () => import("components/mainheader"),
    card: () => import("components/card"),
  }
}
</script>

<style lang="postcss" src="./sectioncontent.pcss"></style>
