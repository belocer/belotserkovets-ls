import username from "./username.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "user name",
  components: { username },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { username },
  props: {
    size: {
      default: text("size", "3.1")
    }
  },
  template: `
    user name
  `,
});

defaultView.story = {
  name: "Вид по умполчанию"
}
