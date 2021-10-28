import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";

type DialogOptions = {
  /** 提供给 title slot的内容 */
  title?: string;
  /** 提供给 content slot的内容 */
  content?: string;
  /** 点击遮罩关闭 dialog，默认为 true */
  closeOnClickOverlay?: boolean;
  /** 点击确认并在关闭 dialog 前触发，可用于阻止dialog关闭 */
  confirm?: () => boolean;
  /** 点击取消并在关闭 dialog 前触发, 可用于阻止dialog关闭 */
  cancel?: () => boolean;
};
export const dialog = (options: DialogOptions) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const onClose = () => {
    app.unmount();
    div.remove();
  };

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          modelValue: true,
          "onUpdate:modelValue": (modelValue: boolean) => {
            !modelValue && onClose();
          },
          closeOnClickOverlay: options.closeOnClickOverlay,
          confirm: options.confirm,
          cancel: options.cancel,
        },
        // 参3通过对象来传递插槽，但需为函数：https://v3.cn.vuejs.org/guide/render-function.html#%E6%8F%92%E6%A7%BD
        {
          title: () => options.title,
          default: () => options.content,
        }
      );
    },
  });

  app.mount(div);
};
