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
  name: "TSXButton",
  props,
  render() {
    const { as: Component } = this;
    return (
      <Component
        ref="selfElRef"
        class={[
          "btn",
          !this.outline ? `btn-${this.variant}` : null,
          this.size ? `btn-${this.size}` : null,
          this.outline ? `btn-outline-${this.variant}` : null,
          this.disabled ? "disabled" : null,
        ]}
        type={this.type}
        disabled={this.disabled}
      >
        {this.iconAlign === "right" && this.$slots.default?.()}
        {this.$slots.icon?.()}
        {this.iconAlign === "left" && this.$slots.default?.()}
      </Component>
    );
  },
});
export default TSXButton;
