<template>
<section class="sectioncontent">
  <div class="container">
    <div class="wrap_mainheader">
      <mainheader />
      <btnaddgroup @addgroup="hideBtn($event)" v-if="emptyCatIsShow === false" />
    </div>
    <ul class="skills">
      <li class="item" v-if="emptyCatIsShow === true">
        <category @remove="emptyCatIsShow = false" empty></category>
      </li>
      <li class="item" v-for="category in categories" :key="category.id">
        <category 
                :title="category.category" 
                :skills="category.skills"
                @aprove="validInp"
        ></category>
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
    btnaddgroup: () => import("components/btnaddgroup"),
  },
  data() {
    return {
      categories: [],
      emptyCatIsShow: false
    }
  },
  methods: {
    showgroup(e) {
      this.emptyCatIsShow = true
      console.log('sectioncontent', e)
    },
    hideBtn(e) {
      this.emptyCatIsShow = true
      //console.log('mainheader - ', e)
      e.currentTarget.style.display = 'none'
    },
    validInp(e) {
      console.log(e);
    }
  },
  created() {
    this.categories = require("../data/categories.json");
  }
}
</script>

<style lang="postcss" src="./sectioncontent.pcss"></style>
