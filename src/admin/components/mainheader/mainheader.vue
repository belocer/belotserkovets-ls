<template>
<div class="mainheader">
  <h1 class="mainheader__header">Блок «Обо мне»</h1>
  <btnaddgroup @addgroup="csl($event)"></btnaddgroup>
  <!--
  <iconed-btn type="iconed" @click="onClick" title="Добавить группу" /> -->
</div>
</template>

<script>
import btnaddgroup from 'components/btnaddgroup'
//import btnaddgroup from 'components/btnaddgroup'

export default {
  props: {

  },
  data() {
    return {

    }
  },
  methods: {
    csl(e) {
      console.log(e);
      console.log(4554456456);
    }
  },
  computed: {},
  components: {
    //btnaddgroup: () => import("components/btnaddgroup")
    'iconed-btn': () => import("components/button"),
    btnaddgroup,
  }
}
</script>

<style lang="postcss" scoped src="./mainheader.pcss"></style>
