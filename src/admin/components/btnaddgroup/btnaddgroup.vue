<template>
<button class="btnaddgroup" @click="$emit('addgroup', $event)">
  <btnplus :style="`width: ${whicon}px; height: ${whicon}px`"></btnplus>
  <span class="btnaddgroup__text">Добавить группу</span>
</button>
</template>

<script>
export default {
  props: {
    whicon: {
      type: String,
      default: "24"
    }
  },
  data() {
    return {}
  },
  components: {
    btnplus: () => import("components/btnplus"),
  },
  computed: {},
  methods: {}
}
</script>

<style lang="postcss" src="./btnaddgroup.pcss"></style>
