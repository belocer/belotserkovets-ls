import btnaddgroup from "./btnaddgroup.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange")
}

export default {
  title: "btnaddgroup",
  components: { btnaddgroup },
};

export const defaultView = () => ({
  components: { btnaddgroup },
});

defaultView.story = {
  name: "Стандартный вид",
};

