import Vue from "vue";

const skillsItem = {
  props: [
    "skill"
  ],
  template: "#skills-item",
  methods: {
    drawPercentageCircle() {
      const circle = this.$refs["colored-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skill.percent);
      circle.style.strokeDashoffset = percent;
    },
  },
  mounted() {
    this.drawPercentageCircle();
  }
};

const skillsRow = {
  props: [
    "category"
  ],
  template: "#skills-row",
  components: {
    skillsItem,
  }
};

new Vue({
  el: "#skills-component", // Элемент на странице
  template: "#skills-list", // Передаём в этот элемент шаблон
  components: {
    skillsRow,
  },
  data() {
    return {
      skills: []
    }
  },
  // Этап формирования компонента, перед выводм в дом
  created() {
    this.skills = require("./../data/skills.json");
  }
});