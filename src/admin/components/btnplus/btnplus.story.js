import btnplus from "./btnplus.vue";
import { text, action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
  onChange: action("onChange")
}

export default {
  title: "btnplus",
  components: { btnplus },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { btnplus },
  props: {
    size: {
      default: text("size", "3.1")
    }
  },
  template: `
  <btnplus :size="size" />
`,
});

defaultView.story = {
  name: "Стандартный вид",
};

