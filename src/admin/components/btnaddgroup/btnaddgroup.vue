<template>
<button class="btnaddgroup" @click="$emit('addgroup', true)" @mousedown="hideBTN" v-if="showBtnAddGroup">
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
    return {
      showBtnAddGroup: true
    }
  },
  components: {
    btnplus: () => import("components/btnplus"),
  },
  computed: {},
  methods: {
    hideBTN() {
      this.showBtnAddGroup = !this.showBtnAddGroup
    }
  }
}
</script>

<style lang="postcss" src="./btnaddgroup.pcss"></style>
