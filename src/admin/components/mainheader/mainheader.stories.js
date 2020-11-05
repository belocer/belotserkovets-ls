import mainheader from "./mainheader.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "mainheader",
  components: { mainheader },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { mainheader },
  props: {
  },
  template: `
    <mainheader/>
  `,
});

defaultView.story = {
  name: "Вид по умполчанию"
}
