import btnclose from "../../btnclose.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange")
}

export default {
  title: "btnclose/default",
  components: { btnclose },
};

export const defaultView = () => ({
  components: { btnclose },
  template: `
    <btnclose title="out" @click="onClick" />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};

