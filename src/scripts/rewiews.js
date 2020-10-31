import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: '#rewiews_block',
  template: '#reviews_temp',
  components: {
    Flickity
  },
  data() {
    return {
      reviews: [],
      width_screen: document.documentElement.clientWidth,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: 2
      },

    }
  },
  watch: {
    width_screen(val) {
      // this.flickityOptions.groupCells = (val > 1200) ? 2 : true
    }
  },
  methods: {
    fixImagePath() {
      this.reviews = this.reviews.map(item => {
        item.photo = require(`./../images/content/${item.photo}`).default;
        return item;
      });
    },
    next() {
      this.$refs.flickity.next();
    },
    prev() {
      this.$refs.flickity.previous();
    }
  },
  mounted() {
    this.fixImagePath();

    let ref = this.$refs;
    this.$refs.flickity.on('settle', function (pos) {
      if (pos === this.slides.length - 1) {
        ref.nextButton.style.opacity = .5;
        ref.nextButton.style.cursor = 'initial';
      } else {
        ref.nextButton.style.opacity = 1;
        ref.nextButton.style.cursor = 'pointer';
      }

      if (pos === 0) {
        ref.prevButton.style.opacity = 0.5;
        ref.nextButton.style.cursor = 'initial';
      } else {
        ref.prevButton.style.opacity = 1;
        ref.nextButton.style.cursor = 'pointer';
      }

    });
  },
  created() {
    this.reviews = require("../data/reviews.json");
  }
});