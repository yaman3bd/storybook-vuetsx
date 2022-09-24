import { Story } from "@storybook/vue3";
import TSXButton from "./TSXButton";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/TSX Button",
  component: TSXButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "", "lg"],
    },
    disabled: { control: { type: "Boolean" } },
    outline: { control: { type: "Boolean" } },
    iconAlign: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TSXButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TSXButton v-bind="args" >TSXButton example</TSXButton>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: "primary",
};
