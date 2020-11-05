import menucontainer from "./menucontainer.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "menucontainer",
  components: { menucontainer },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { menucontainer },
  template: `
    <menucontainer title="menucontainer" />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

