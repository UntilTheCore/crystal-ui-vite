import { defineComponent, openBlock, createElementBlock, normalizeClass, withModifiers, pushScopeId, popScopeId, createElementVNode, computed, unref, createCommentVNode, renderSlot, ref, useSlots, watchPostEffect, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent, Teleport, createTextVNode, createVNode, withCtx, createApp, h } from "vue";
var Switch_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _withScopeId = (n) => (pushScopeId("data-v-4dab10b8"), n = n(), popScopeId(), n);
const _hoisted_1$4 = ["onClickCapture"];
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_3$2 = [
  _hoisted_2$2
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const toggle = () => {
      emits("update:modelValue", !props.modelValue);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["cs-switch", { "cs-checked": __props.modelValue }]),
        onClickCapture: withModifiers(toggle, ["stop"])
      }, _hoisted_3$2, 42, _hoisted_1$4);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4dab10b8"]]);
var Button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = {
  key: 0,
  class: "cs-loading-indicator"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "button" },
    size: { default: "normal" },
    level: { default: "normal" },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return {
        [`cs-button__theme-${props.theme}`]: props.theme,
        [`cs-button__size-${props.size}`]: props.size,
        [`cs-button__level-${props.level}`]: props.level
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["cs-button", unref(classes)])
      }, [
        __props.loading ? (openBlock(), createElementBlock("span", _hoisted_1$3)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0d10b76a"]]);
var Tab_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "cs-tab" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var Tab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-03b39b08"]]);
var Tabs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "cs-tabs" };
const _hoisted_2$1 = { class: "cs-tabs-nav" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "cs-tabs-content" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    selected: null
  },
  emits: ["update:selected"],
  setup(__props, { emit: emits }) {
    var _a, _b, _c;
    const navItem = ref();
    const slots = useSlots();
    const refIndicator = ref();
    const defaultSlots = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
    const titles = defaultSlots.map((slot) => {
      var _a2;
      return (_a2 = slot == null ? void 0 : slot.props) == null ? void 0 : _a2.title;
    });
    if ((_c = slots.default) == null ? void 0 : _c.call(slots)) {
      slots.default().forEach((item, index) => {
        if (item.type !== Tab) {
          throw Error(`[Crystal error]: The element ${index} type is not Tab`);
        }
      });
    } else {
      throw Error("[Crystal error]: Tabs missing content");
    }
    const select = (title) => {
      emits("update:selected", title);
    };
    watchPostEffect(() => {
      const _el = navItem.value;
      const { left: currentLeft } = _el.getBoundingClientRect();
      const { left: parentLeft } = refIndicator.value.parentElement.getBoundingClientRect();
      if (refIndicator && refIndicator.value) {
        refIndicator.value.style.width = _el.clientWidth + "px";
        refIndicator.value.style.left = currentLeft - parentLeft + "px";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(titles), (title, i) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["cs-tabs-nav-item", { selected: title === __props.selected }]),
              key: i + title,
              ref: (el) => {
                if (title === __props.selected && el)
                  navItem.value = el;
              },
              onClick: ($event) => select(title)
            }, toDisplayString(title), 11, _hoisted_3$1);
          }), 128)),
          createElementVNode("i", {
            class: "cs-tabs-nav-indicator",
            ref: (_value, _refs) => {
              _refs["refIndicator"] = _value;
              refIndicator.value = _value;
            }
          }, null, 512)
        ]),
        createElementVNode("div", _hoisted_4$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(defaultSlots), (tab, i) => {
            var _a2;
            return openBlock(), createElementBlock(Fragment, { key: i }, [
              ((_a2 = tab == null ? void 0 : tab.props) == null ? void 0 : _a2.title) === __props.selected ? (openBlock(), createBlock(resolveDynamicComponent(tab), { key: i })) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ])
      ]);
    };
  }
});
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8d2f9c76"]]);
var Dialog_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "cs-dialog-wrapper" };
const _hoisted_2 = { class: "cs-dialog" };
const _hoisted_3 = { class: "cs-dialog__header" };
const _hoisted_4 = { class: "cs-dialog__header-title" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode("title");
const _hoisted_6 = { class: "cs-dialog__main" };
const _hoisted_7 = { class: "cs-dialog__footer" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u786E\u5B9A");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u53D6\u6D88");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    closeOnClickOverlay: { type: Boolean, default: true },
    confirm: null,
    cancel: null,
    title: { default: "\u6807\u9898" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const onClose = () => {
      emits("update:modelValue", false);
    };
    const onClickOverlay = () => {
      props.closeOnClickOverlay && onClose();
    };
    const confirm = () => {
      var _a;
      props.confirm ? ((_a = props.confirm) == null ? void 0 : _a.call(props)) && onClose() : onClose();
    };
    const cancel = () => {
      var _a;
      props.cancel ? ((_a = props.cancel) == null ? void 0 : _a.call(props)) && onClose() : onClose();
    };
    return (_ctx, _cache) => {
      return __props.modelValue ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: "body"
      }, [
        createElementVNode("div", {
          class: "cs-dialog__overlay",
          onClick: onClickOverlay
        }),
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("section", _hoisted_3, [
              createElementVNode("p", _hoisted_4, [
                _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
                  _hoisted_5
                ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(__props.title), 1)
                ], 64))
              ]),
              createElementVNode("i", {
                class: "cs-dialog__header-close",
                onClick: onClose
              })
            ]),
            createElementVNode("section", _hoisted_6, [
              renderSlot(_ctx.$slots, "default")
            ]),
            createElementVNode("section", _hoisted_7, [
              createVNode(Button, {
                level: "main",
                onClick: confirm
              }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createVNode(Button, { onClick: cancel }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const dialog = (options) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const onClose = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(_sfc_main, {
        modelValue: true,
        "onUpdate:modelValue": (modelValue) => {
          !modelValue && onClose();
        },
        closeOnClickOverlay: options.closeOnClickOverlay,
        confirm: options.confirm,
        cancel: options.cancel
      }, {
        title: () => options.title,
        default: () => options.content
      });
    }
  });
  app.mount(div);
};
export { Button, _sfc_main as Dialog, Switch, Tab, Tabs, dialog };
