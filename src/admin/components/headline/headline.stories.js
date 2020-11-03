import headline from "./headline.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "headline",
  components: { headline },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { headline },
  props: {
    size: {
      default: text("size", "3.1")
    }
  },
  template: `
    <headline :size="size" src="https://picsum.photos/300/300" />
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
