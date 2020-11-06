import skill from "./skill";
import { action } from "@storybook/addon-actions";

const methods = {
  onApprove: action("onApprove"),
  onRemove: action("onRemove")
}

export default {
  title: "skill",
  components: { skill },
};

export const defaultView = () => ({
  components: { skill },
  data() {
    return {
      skill: {
        id: 0,
        title: "New skill",
        percent: 70
      }
    }
  },
  template: `
    <skill @approve="onApprove" @remove="onRemove" :skill="skill" />
  `,
  methods
});