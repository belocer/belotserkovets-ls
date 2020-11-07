<template>
<div class="mainheader">
  <h1 class="mainheader__header">{{ title }}</h1>
</div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      title: 'Блок «Обо мне»'
    }
  },
  methods: {
    hideBtn(e) {
      console.log('mainheader - ', e);
      this.$emit('addgroup', e)
      e.currentTarget.style.display = 'none'
    }
  },
  computed: {},
  components: {},
}
</script>

<style lang="postcss" scoped src="./mainheader.pcss"></style>
