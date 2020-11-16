<template>
    <div class="container about-page-component">
        <div class="wrap_mainheader">
            <mainheader />
            <btnaddgroup @addgroup="hideBtn($event)" v-if="emptyCatIsShow === false" />
        </div>
        <ul class="skills" v-if="categories.length">
            <li class="skills__item" v-if="emptyCatIsShow === true">
                <category
                    @remove="emptyCatIsShow = false"
                    empty
                    @approve="createCategory"
                ></category>
            </li>
            <li class="skills__item" v-for="category in categories" :key="category.id">
                <category
                        :title="category.category"
                        :skills="category.skills"
                        @approve="validInp($event)"
                        class="fdf4"
                ></category>
            </li>
        </ul>
        <h1 v-else>Loading ... </h1>
    </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    props: {},
    components: {
      mainheader: () => import("components/mainheader"),
      category: () => import("components/category"),
      btnaddgroup: () => import("components/btnaddgroup"),
    },
    data() {
      return {
        emptyCatIsShow: false
      }
    },
    computed: {
      ...mapState("categories", {
        categories: state => state.data
      })
    },
    methods: {
      ...mapActions({
        createCategoryAction: "categories/create",
        fetchCategoryAction: "categories/fetch",
      }),
      async createCategory(categoryTitle){
        try {
          await this.createCategoryAction(categoryTitle);
          this.emptyCatIsShown = false;
        } catch (error) {
          console.log(error.message);
        }
      },
      showgroup(e) {
        this.emptyCatIsShow = true
        //console.log('sectioncontent', e)
      },
      hideBtn(e) {
        this.emptyCatIsShow = true
        //console.log('mainheader - ', e)
        e.currentTarget.style.display = 'none'
      },
      validInp(e) {
        console.log(5242345);
      }
    },
    created() {
      this.fetchCategoryAction();
      //this.categories = require("../../data/categories.json");
    }
  }
</script>

<style lang="postcss" src="./about.pcss"></style>