import Vue from "vue";

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs",
  methods: {
    /*     showItem(id) {
          console.log(id);
        }, */
  },
};

const btns = {
  template: "#preview-btns",
};

const display = {
  props: ["currentWork", "works"],
  template: "#preview-display",
  components: {
    thumbs,
    btns
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      //return works.reverse();
      return works.slice(0, 4);
    }
  }
};

const tags = {
  props: ["tags"],
  template: "#preview-tags"
};

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {
    tags
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(", ")
    }
  },
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value);
    },
    
  },
  methods: {
    makeInfiniteLoopForIndex(index) {
      const worksNumber = this.works.length - 1;
      if (index < 0) this.currentIndex = worksNumber;
      if (index > worksNumber) this.currentIndex = 0;
    },
    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/${item.photo}`).default;
        item.photo = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const lastItem = this.works[this.works.length - 1];
      switch (direction) {
        case "next":
          this.works.push(this.works[0]);
          this.works.shift();
          break;
        case "prev":
          this.works.unshift(lastItem);
          this.works.pop();
          break;
      }
    },
    showitem(index) {
      let s = this.works[index];
      this.works.splice(index, 1);
      this.works.unshift(s);
    },
  },
  created() {
    const data = require("./../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
});