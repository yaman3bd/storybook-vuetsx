import { defineComponent, h, PropType } from "vue";

export const props = {
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  variant: {
    type: String as PropType<"primary" | "secondary" | "tertiary">,
    default: "primary",
  },
  size: {
    type: String as PropType<"sm" | "" | "lg">,
    default: "",
  },
  as: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: "button",
  },
  disabled: Boolean,
  outline: Boolean,
  iconAlign: {
    type: String as PropType<"left" | "right">,
    default: "right",
  },
} as const;

const TSXButton = defineComponent({
  name: "WorkingTSXButton",
  props,

  render() {
    const { as: Component } = this;
    return h(
      Component,
      {
        ref: "selfElRef",
        class: {
          btn: true,
          [`btn-${this.variant}`]: !this.outline,
          [`btn-${this.size}`]: this.size,
          [`btn-outline-${this.variant}`]: this.outline,
          disabled: this.disabled,
        },
        type: this.type,
        disabled: this.disabled,
      },
      {
        default: () => this.$slots.default?.(),
      }
    );
  },
});
export default TSXButton;
