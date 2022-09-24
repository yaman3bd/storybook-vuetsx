import { Story } from "@storybook/vue3";
import WorkingTSXButton from "./WorkingTSXButton";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Working TSX Button",
  component: WorkingTSXButton,
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
    disabled: { control: { type: "boolean" } },
    outline: { control: { type: "boolean" } },
    iconAlign: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { WorkingTSXButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<WorkingTSXButton v-bind="args" >TSXButton example</WorkingTSXButton>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: "primary",
};
