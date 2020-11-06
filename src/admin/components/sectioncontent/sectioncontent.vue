<template>
<section class="sectioncontent">
  <div class="container">
    <mainheader @addgroup="showgroup($event)"></mainheader>
    <ul class="skills">
      <li class="item" v-if="emptyCatIsShow === true">
        <category empty></category>
      </li>
      <li class="item" v-for="category in categories" :key="category.id">
        <category :title="category.category" :skills="category.skills"></category>
      </li>
      <!-- <li>
        <category :title="category.category" :skills="category.skills"></category>
      </li> -->
    </ul>
  </div>
</section>
</template>

<script>
export default {
  props: {},
  computed: {},
  components: {
    mainheader: () => import("components/mainheader"),
    category: () => import("components/category"),
  },
  data() {
    return {
      categories: [],
      emptyCatIsShow: false
    }
  },
  methods: {
    showgroup(e) {
      console.log(e)
    }
  },
  created() {
    this.categories = require("../data/categories.json");
  }
}
</script>

<style lang="postcss" src="./sectioncontent.pcss"></style>
