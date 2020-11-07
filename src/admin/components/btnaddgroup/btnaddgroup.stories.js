import btnaddgroup from "./btnaddgroup.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
}

export default {
  title: "btnaddgroup",
  components: { btnaddgroup },
};

export const defaultView = () => ({
  components: { btnaddgroup },
  template: "<btnaddgroup />",
  methods,
});

defaultView.story = {
  name: "Стандартный вид",
};

