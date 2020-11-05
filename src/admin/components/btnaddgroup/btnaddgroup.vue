<template>
<div class="btnaddgroup">
  <btnplus :style="`width: ${whicon}px; height: ${whicon}px`"></btnplus>
  <span class="btnaddgroup__text">Добавить группу</span>
</div>
</template>

<script>
export default {
  props: {
    whicon: {
      type: String,
      default: "24"
    }
  },
  components: {
    btnplus: () => import("components/btnplus"),
  },
  computed: {},
}
</script>

<style lang="postcss" src="./btnaddgroup.pcss"></style>
