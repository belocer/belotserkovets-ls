import sectioncontent from "./sectioncontent.vue";
import { withKnobs } from "@storybook/addon-knobs";

const methods = {
  onAddGroup: action("onAddGroup")
}

export default {
  title: "sectioncontent",
  components: { sectioncontent },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { sectioncontent },
  props: {

  },
  template: `
    <sectioncontent/>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
