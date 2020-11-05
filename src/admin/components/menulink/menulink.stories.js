import menulink from "./menulink.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange")
}

export default {
  title: "menulink",
  components: { menulink },
};

export const defaultView = () => ({
  components: { menulink },
  template: `
    <menulink title="menu" @click="onClick" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

