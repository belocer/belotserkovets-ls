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
    bg: {
      default: text("bg", "#43436B")
    }
  },
  template: `
    <headline :bg="bg"/>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
