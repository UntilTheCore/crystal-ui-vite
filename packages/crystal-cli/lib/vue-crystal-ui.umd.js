(function(a,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(a=typeof globalThis!="undefined"?globalThis:a||self,e(a["vue-crystal-ui"]={},a.Vue))})(this,function(a,e){"use strict";var G="",p=(t,c)=>{for(const[n,o]of c)t[n]=o;return t};const V=t=>(e.pushScopeId("data-v-4dab10b8"),t=t(),e.popScopeId(),t),E=["onClickCapture"],b=[V(()=>e.createElementVNode("span",null,null,-1))];var $=p(e.defineComponent({props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:c}){const n=t,o=()=>{c("update:modelValue",!n.modelValue)};return(s,f)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["cs-switch",{"cs-checked":t.modelValue}]),onClickCapture:e.withModifiers(o,["stop"])},b,42,E))}}),[["__scopeId","data-v-4dab10b8"]]),K="";const N={key:0,class:"cs-loading-indicator"};var u=p(e.defineComponent({props:{theme:{default:"button"},size:{default:"normal"},level:{default:"normal"},loading:{type:Boolean,default:!1}},setup(t){const c=t,n=e.computed(()=>({[`cs-button__theme-${c.theme}`]:c.theme,[`cs-button__size-${c.size}`]:c.size,[`cs-button__level-${c.level}`]:c.level}));return(o,s)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["cs-button",e.unref(n)])},[t.loading?(e.openBlock(),e.createElementBlock("span",N)):e.createCommentVNode("",!0),e.renderSlot(o.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-0d10b76a"]]),X="";const T={},S={class:"cs-tab"};function w(t,c){return e.openBlock(),e.createElementBlock("div",S,[e.renderSlot(t.$slots,"default",{},void 0,!0)])}var y=p(T,[["render",w],["__scopeId","data-v-03b39b08"]]),Y="";const x={class:"cs-tabs"},I={class:"cs-tabs-nav"},O=["onClick"],z={class:"cs-tabs-content"};var D=p(e.defineComponent({props:{selected:null},emits:["update:selected"],setup(t,{emit:c}){var k,g,B;const n=e.ref(),o=e.useSlots(),s=e.ref(),f=(g=(k=o.default)==null?void 0:k.call(o))!=null?g:[],h=f.map(r=>{var i;return(i=r==null?void 0:r.props)==null?void 0:i.title});if((B=o.default)==null?void 0:B.call(o))o.default().forEach((r,i)=>{if(r.type!==y)throw Error(`[Crystal error]: The element ${i} type is not Tab`)});else throw Error("[Crystal error]: Tabs missing content");const d=r=>{c("update:selected",r)};return e.watchPostEffect(()=>{const r=n.value,{left:i}=r.getBoundingClientRect(),{left:l}=s.value.parentElement.getBoundingClientRect();s&&s.value&&(s.value.style.width=r.clientWidth+"px",s.value.style.left=i-l+"px")}),(r,i)=>(e.openBlock(),e.createElementBlock("div",x,[e.createElementVNode("div",I,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(h),(l,_)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["cs-tabs-nav-item",{selected:l===t.selected}]),key:_+l,ref:m=>{l===t.selected&&m&&(n.value=m)},onClick:m=>d(l)},e.toDisplayString(l),11,O))),128)),e.createElementVNode("i",{class:"cs-tabs-nav-indicator",ref:(l,_)=>{_.refIndicator=l,s.value=l}},null,512)]),e.createElementVNode("div",z,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f),(l,_)=>{var m;return e.openBlock(),e.createElementBlock(e.Fragment,{key:_},[((m=l==null?void 0:l.props)==null?void 0:m.title)===t.selected?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l),{key:_})):e.createCommentVNode("",!0)],64)}),128))])]))}}),[["__scopeId","data-v-8d2f9c76"]]),v="";const F={class:"cs-dialog-wrapper"},L={class:"cs-dialog"},M={class:"cs-dialog__header"},j={class:"cs-dialog__header-title"},A=e.createTextVNode("title"),P={class:"cs-dialog__main"},R={class:"cs-dialog__footer"},q=e.createTextVNode("\u786E\u5B9A"),U=e.createTextVNode("\u53D6\u6D88"),C=e.defineComponent({props:{modelValue:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},confirm:null,cancel:null,title:{default:"\u6807\u9898"}},emits:["update:modelValue"],setup(t,{emit:c}){const n=t,o=()=>{c("update:modelValue",!1)},s=()=>{n.closeOnClickOverlay&&o()},f=()=>{var d;n.confirm?((d=n.confirm)==null?void 0:d.call(n))&&o():o()},h=()=>{var d;n.cancel?((d=n.cancel)==null?void 0:d.call(n))&&o():o()};return(d,k)=>t.modelValue?(e.openBlock(),e.createBlock(e.Teleport,{key:0,to:"body"},[e.createElementVNode("div",{class:"cs-dialog__overlay",onClick:s}),e.createElementVNode("div",F,[e.createElementVNode("div",L,[e.createElementVNode("section",M,[e.createElementVNode("p",j,[d.$slots.title?e.renderSlot(d.$slots,"title",{key:0},()=>[A]):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(t.title),1)],64))]),e.createElementVNode("i",{class:"cs-dialog__header-close",onClick:o})]),e.createElementVNode("section",P,[e.renderSlot(d.$slots,"default")]),e.createElementVNode("section",R,[e.createVNode(u,{level:"main",onClick:f},{default:e.withCtx(()=>[q]),_:1}),e.createVNode(u,{onClick:h},{default:e.withCtx(()=>[U]),_:1})])])])])):e.createCommentVNode("",!0)}}),W=t=>{const c=document.createElement("div");document.body.appendChild(c);const n=()=>{o.unmount(),c.remove()},o=e.createApp({render(){return e.h(C,{modelValue:!0,"onUpdate:modelValue":s=>{!s&&n()},closeOnClickOverlay:t.closeOnClickOverlay,confirm:t.confirm,cancel:t.cancel},{title:()=>t.title,default:()=>t.content})}});o.mount(c)};a.Button=u,a.Dialog=C,a.Switch=$,a.Tab=y,a.Tabs=D,a.dialog=W,Object.defineProperty(a,"__esModule",{value:!0}),a[Symbol.toStringTag]="Module"});
