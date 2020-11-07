import sectioncontent from "./sectioncontent.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const methods = {
  onAddGroup: action("onAddgroup")
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
  methods,
  template: `
    <sectioncontent>
      <btnaddgroup></btnaddgroup>
    </sectioncontent>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
