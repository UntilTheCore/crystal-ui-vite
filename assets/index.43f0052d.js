import{d as p,o as r,c as a,a as l,n as ye,r as g,b as A,e as u,w as i,F as B,f as D,p as R,g as j,h as c,t as E,i as S,j as q,u as w,k as Ee,l as Ce,m as xe,q as Fe,T as G,s as b,v as T,x as z,y as L,z as K,A as I,P as J,B as we,C as Q,D as X,E as Ae,G as De,H as Te,I as Ve,J as P,K as Ie}from"./vendor.71c8ad93.js";const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}};Oe();var $=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const Se=["xlink:href"],ze=p({props:{name:null,width:{default:"1em"},height:{default:"1em"}},setup(e){return(t,o)=>(r(),a("svg",{class:"icon","aria-hidden":"true",style:ye({width:e.width,height:e.height})},[l("use",{"xlink:href":`#icon-${e.name}`},null,8,Se)],4))}});var O=$(ze,[["__scopeId","data-v-0fdc0d06"]]);const W=e=>(R("data-v-6a8cbc03"),e=e(),j(),e),Le={class:"home-wrapper"},Pe={class:"banner"},We=W(()=>l("h1",null,"\u8F71\u8F98UI",-1)),He=W(()=>l("h2",null,"\u4E00\u4E2A\u5389\u5BB3\u7684 UI \u6846\u67B6",-1)),Ue={class:"actions"},Me=W(()=>l("a",{href:"https://github.com/UntilTheCore/crystal-ui-vite",target:"_blank"},"GitHub",-1)),Ne=c("\u5F00\u59CB"),Re={class:"box"},je={class:"title"},qe={class:"content"},Ge=p({setup(e){const t=g([{icon:"vite",title:"Vite",content:"\u91C7\u7528Vite\u521B\u5EFA\u9879\u76EE\uFF0C\u5C31\u662F\u5FEB"},{icon:"vue",title:"\u57FA\u4E8E Vue3",content:"\u4F7F\u7528Vue3 Composition API"},{icon:"ts",title:"\u57FA\u4E8E TypeScript",content:"\u6E90\u4EE3\u7801\u4F7F\u7528 TypeScript \u7F16\u5199"},{icon:"light",title:"\u4EE3\u7801\u6613\u8BFB",content:"\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u7B80\u6D01\u6613\u8BFB"}]);return(o,n)=>{const s=A("router-link");return r(),a(B,null,[l("div",Le,[u(O,{name:"crystal-white",width:"1.5em",height:"1.5em"}),l("div",Pe,[We,He,l("p",Ue,[Me,u(s,{to:"/doc"},{default:i(()=>[Ne]),_:1})])])]),l("footer",null,[(r(!0),a(B,null,D(t.value,(d,m)=>(r(),a("section",{key:m},[u(O,{name:d.icon,width:"4em",height:"4em"},null,8,["name"]),l("div",Re,[l("p",je,E(d.title),1),l("p",qe,E(d.content),1)])]))),128))])],64)}}});var Ke=$(Ge,[["__scopeId","data-v-6a8cbc03"]]);const Je={class:"topnav"},Qe=c("\u6587\u6863"),Xe=p({setup(e){const t=S("toggleAsideVisible");return(o,n)=>{const s=A("router-link");return r(),a("div",Je,[u(O,{name:"crumb",class:"toggle-btn",width:"1.5em",height:"1.5em",onClick:q(w(t),["stop"])},null,8,["onClick"]),u(s,{to:"/",class:"logo"},{default:i(()=>[u(O,{name:"crystal",width:"1.5em",height:"1.5em"})]),_:1}),u(s,{to:"/doc/intro"},{default:i(()=>[Qe]),_:1})])}}});var Ye=$(Xe,[["__scopeId","data-v-0a5b227d"]]);const Ze=p({setup(e){const t=g([{title:"\u6587\u6863",links:[{name:"\u4ECB\u7ECD",link:"/doc/intro"},{name:"\u5B89\u88C5",link:"/doc/install"},{name:"\u5F00\u59CB\u4F7F\u7528",link:"/doc/get-start"}]},{title:"\u7EC4\u4EF6",links:[{name:"Switch \u5F00\u5173",link:"/doc/switch"},{name:"Button \u6309\u94AE",link:"/doc/button"},{name:"Dialog \u5BF9\u8BDD\u6846",link:"/doc/dialog"},{name:"Tabs \u6807\u7B7E\u9875",link:"/doc/tabs"}]}]);return(o,n)=>{const s=A("router-link");return r(),a("aside",null,[(r(!0),a(B,null,D(t.value,(d,m)=>(r(),a(B,{key:m},[l("h2",null,E(d.title),1),l("ol",null,[(r(!0),a(B,null,D(d.links,(f,y)=>(r(),a("li",{key:y},[u(s,{to:f.link},{default:i(()=>[c(E(f.name),1)]),_:2},1032,["to"])]))),128))])],64))),128))])}}});var et=$(Ze,[["__scopeId","data-v-ff7d1790"]]);const tt={class:"layout"},nt={class:"content"},ot=p({setup(e){const t=S("asideVisible"),o=S("setAsideVisible"),n=Ee({clientWidth:document.documentElement.clientWidth}),s=()=>{n.clientWidth=document.documentElement.clientWidth},d=()=>{document.documentElement.clientWidth<500&&(t==null?void 0:t.value)&&o&&o(!1)};return window.addEventListener("resize",s),Ce(()=>n.clientWidth,m=>{o&&o(m>500)}),xe(()=>{document.body.addEventListener("click",d)}),Fe(()=>{window.removeEventListener("resize",s),document.body.removeEventListener("click",s)}),(m,f)=>{const y=A("router-view");return r(),a("div",tt,[u(Ye,{class:"nav"}),l("div",nt,[u(G,{name:"slide-fade"},{default:i(()=>[w(t)?(r(),b(et,{key:0})):T("",!0)]),_:1}),l("main",null,[u(y,null,{default:i(({Component:V})=>[u(G,{name:"mode-fade",mode:"out-in"},{default:i(()=>[(r(),b(z(V)))]),_:2},1024)]),_:1})])])])}}});var st=$(ot,[["__scopeId","data-v-0818da3c"]]);const ut=e=>(R("data-v-4dab10b8"),e=e(),j(),e),lt=["onClickCapture"],rt=ut(()=>l("span",null,null,-1)),it=[rt],ct=p({props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,n=()=>{t("update:modelValue",!o.modelValue)};return(s,d)=>(r(),a("button",{class:L(["cs-switch",{"cs-checked":e.modelValue}]),onClickCapture:q(n,["stop"])},it,42,lt))}});var Y=$(ct,[["__scopeId","data-v-4dab10b8"]]),Z=e=>{e.__sourceTitle="\u57FA\u7840\u793A\u4F8B",e.__sourceCode=`<template>\r
  <Switch v-model="bool"></Switch>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
import Switch from "@/lib/Switch.vue";\r
\r
const bool = ref(false)\r
<\/script>`};const ee=p({setup(e){const t=g(!1);return(o,n)=>(r(),b(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s)},null,8,["modelValue"]))}});typeof Z=="function"&&Z(ee);var te=e=>{e.__sourceTitle="\u652F\u6301 disable",e.__sourceCode=`<template>\r
  <Switch v-model="bool" disabled></Switch>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import Switch from '@/lib/Switch.vue';\r
\r
const bool = ref(false)\r
<\/script>`};const ne=p({setup(e){const t=g(!1);return(o,n)=>(r(),b(Y,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),disabled:""},null,8,["modelValue"]))}});typeof te=="function"&&te(ne);const at={key:0,class:"cs-loading-indicator"},dt=p({props:{theme:{default:"button"},size:{default:"normal"},level:{default:"normal"},loading:{type:Boolean,default:!1}},setup(e){const t=e,o=K(()=>({[`cs-button__theme-${t.theme}`]:t.theme,[`cs-button__size-${t.size}`]:t.size,[`cs-button__level-${t.level}`]:t.level}));return(n,s)=>(r(),a("button",{class:L(["cs-button",w(o)])},[e.loading?(r(),a("span",at)):T("",!0),I(n.$slots,"default",{},void 0,!0)],2))}});var _=$(dt,[["__scopeId","data-v-0d10b76a"]]);const _t={class:"demo"},mt={class:"demo-component"},pt={class:"demo-actions"},ft={key:0,class:"demo-code"},ht=["innerHTML"],vt=p({props:{component:null},setup(e){const t=e,o=K(()=>J.highlight(t.component.__sourceCode,J.languages.html,"html")),n=g(!1),s=()=>n.value=!n.value;return(d,m)=>(r(),a("div",_t,[l("h2",null,E(e.component.__sourceTitle),1),l("div",mt,[(r(),b(z(e.component)))]),l("div",pt,[u(_,{onClick:s},{default:i(()=>[c(E(n.value?"\u9690\u85CF\u4EE3\u7801":"\u67E5\u770B\u4EE3\u7801"),1)]),_:1})]),n.value?(r(),a("div",ft,[l("pre",{class:"language-html",innerHTML:w(o)},null,8,ht)])):T("",!0)]))}});var k=$(vt,[["__scopeId","data-v-a8b0aa58"]]);const gt=l("h2",null,"Switch \u5F00\u5173",-1),Bt=l("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),bt=p({setup(e){return(t,o)=>(r(),a("div",null,[gt,Bt,u(k,{component:ee}),u(k,{component:ne})]))}});var oe=e=>{e.__sourceTitle=`\r
\u5E38\u89C4\u4F7F\u7528\r
`,e.__sourceCode=`<template>\r
  <div>\r
    <Button>button</Button>\r
    <Button theme="link">link</Button>\r
    <Button theme="text">text</Button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import Button from "@/lib/Button.vue";\r
<\/script>`};const $t=c("button"),kt=c("link"),yt=c("text"),se=p({setup(e){return(t,o)=>(r(),a("div",null,[u(_,null,{default:i(()=>[$t]),_:1}),u(_,{theme:"link"},{default:i(()=>[kt]),_:1}),u(_,{theme:"text"},{default:i(()=>[yt]),_:1})]))}});typeof oe=="function"&&oe(se);var ue=e=>{e.__sourceTitle=`\r
\u652F\u6301 size\r
`,e.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <Button size="large">large</Button>\r
      <Button>default</Button>\r
      <Button size="small">small</Button>\r
    </div>\r
    <div>\r
      <Button theme="link" size="large">large</Button>\r
      <Button theme="link">default</Button>\r
      <Button size="small" theme="link">small</Button>\r
    </div>\r
    <div>\r
      <Button size="large" theme="text">large</Button>\r
      <Button theme="text">default</Button>\r
      <Button size="small" theme="text">small</Button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import Button from "@/lib/Button.vue";\r
<\/script>`};const Et=c("large"),Ct=c("default"),xt=c("small"),Ft=c("large"),wt=c("default"),At=c("small"),Dt=c("large"),Tt=c("default"),Vt=c("small"),le=p({setup(e){return(t,o)=>(r(),a("div",null,[l("div",null,[u(_,{size:"large"},{default:i(()=>[Et]),_:1}),u(_,null,{default:i(()=>[Ct]),_:1}),u(_,{size:"small"},{default:i(()=>[xt]),_:1})]),l("div",null,[u(_,{theme:"link",size:"large"},{default:i(()=>[Ft]),_:1}),u(_,{theme:"link"},{default:i(()=>[wt]),_:1}),u(_,{size:"small",theme:"link"},{default:i(()=>[At]),_:1})]),l("div",null,[u(_,{size:"large",theme:"text"},{default:i(()=>[Dt]),_:1}),u(_,{theme:"text"},{default:i(()=>[Tt]),_:1}),u(_,{size:"small",theme:"text"},{default:i(()=>[Vt]),_:1})])]))}});typeof ue=="function"&&ue(le);var re=e=>{e.__sourceTitle=`\r
\u652F\u6301 level\r
`,e.__sourceCode=`<template>\r
  <div>\r
    <div>\r
      <Button level="main">\u4E3B\u8981\u6309\u94AE</Button>\r
      <Button>\u666E\u901A\u6309\u94AE</Button>\r
      <Button level="danger">\u5371\u9669\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button theme="link" level="main">\u4E3B\u8981\u94FE\u63A5\u6309\u94AE</Button>\r
      <Button theme="link">\u666E\u901A\u94FE\u63A5\u6309\u94AE</Button>\r
      <Button theme="link" level="danger">\u5371\u9669\u94FE\u63A5\u6309\u94AE</Button>\r
    </div>\r
    <div>\r
      <Button theme="text" level="main">\u4E3B\u8981\u6587\u5B57\u6309\u94AE</Button>\r
      <Button theme="text">\u666E\u901A\u6587\u5B57\u6309\u94AE</Button>\r
      <Button theme="text" level="danger">\u5371\u9669\u6587\u5B57\u6309\u94AE</Button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import Button from "@/lib/Button.vue";\r
<\/script>`};const It=c("\u4E3B\u8981\u6309\u94AE"),Ot=c("\u666E\u901A\u6309\u94AE"),St=c("\u5371\u9669\u6309\u94AE"),zt=c("\u4E3B\u8981\u94FE\u63A5\u6309\u94AE"),Lt=c("\u666E\u901A\u94FE\u63A5\u6309\u94AE"),Pt=c("\u5371\u9669\u94FE\u63A5\u6309\u94AE"),Wt=c("\u4E3B\u8981\u6587\u5B57\u6309\u94AE"),Ht=c("\u666E\u901A\u6587\u5B57\u6309\u94AE"),Ut=c("\u5371\u9669\u6587\u5B57\u6309\u94AE"),ie=p({setup(e){return(t,o)=>(r(),a("div",null,[l("div",null,[u(_,{level:"main"},{default:i(()=>[It]),_:1}),u(_,null,{default:i(()=>[Ot]),_:1}),u(_,{level:"danger"},{default:i(()=>[St]),_:1})]),l("div",null,[u(_,{theme:"link",level:"main"},{default:i(()=>[zt]),_:1}),u(_,{theme:"link"},{default:i(()=>[Lt]),_:1}),u(_,{theme:"link",level:"danger"},{default:i(()=>[Pt]),_:1})]),l("div",null,[u(_,{theme:"text",level:"main"},{default:i(()=>[Wt]),_:1}),u(_,{theme:"text"},{default:i(()=>[Ht]),_:1}),u(_,{theme:"text",level:"danger"},{default:i(()=>[Ut]),_:1})])]))}});typeof re=="function"&&re(ie);var ce=e=>{e.__sourceTitle=`\r
\u652F\u6301 disabled\r
`,e.__sourceCode=`<template>\r
  <Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
  <Button theme="link" disabled>\u7981\u7528\u94FE\u63A5\u6309\u94AE</Button>\r
  <Button theme="text" disabled>\u7981\u7528\u6309\u94AE</Button>\r
</template>\r
\r
<script setup lang="ts">\r
import Button from "@/lib/Button.vue";\r
<\/script>`};const Mt=c("\u7981\u7528\u6309\u94AE"),Nt=c("\u7981\u7528\u94FE\u63A5\u6309\u94AE"),Rt=c("\u7981\u7528\u6309\u94AE"),ae=p({setup(e){return(t,o)=>(r(),a(B,null,[u(_,{disabled:""},{default:i(()=>[Mt]),_:1}),u(_,{theme:"link",disabled:""},{default:i(()=>[Nt]),_:1}),u(_,{theme:"text",disabled:""},{default:i(()=>[Rt]),_:1})],64))}});typeof ce=="function"&&ce(ae);var de=e=>{e.__sourceTitle=`\r
\u652F\u6301\u663E\u793A\u52A0\u8F7D\u4E2D\r
`,e.__sourceCode=`<template>\r
  <div>\r
    <Button loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button>\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import Button from "@/lib/Button.vue";\r
<\/script>`};const jt=c("\u52A0\u8F7D\u4E2D"),qt=c("\u52A0\u8F7D\u5B8C\u6BD5"),_e=p({setup(e){return(t,o)=>(r(),a("div",null,[u(_,{loading:""},{default:i(()=>[jt]),_:1}),u(_,null,{default:i(()=>[qt]),_:1})]))}});typeof de=="function"&&de(_e);const Gt={class:"button-demo"},Kt=l("h2",null,"Button \u6309\u94AE",-1),Jt=l("p",null,"\u5E38\u7528\u7684\u6309\u94AE\u64CD\u4F5C",-1),Qt=p({setup(e){return(t,o)=>(r(),a("div",Gt,[Kt,Jt,u(k,{component:se}),u(k,{component:le}),u(k,{component:ie}),u(k,{component:ae}),u(k,{component:_e})]))}});const Xt={class:"cs-dialog-wrapper"},Yt={class:"cs-dialog"},Zt={class:"cs-dialog__header"},en={class:"cs-dialog__header-title"},tn=c("title"),nn={class:"cs-dialog__main"},on={class:"cs-dialog__footer"},sn=c("\u786E\u5B9A"),un=c("\u53D6\u6D88"),me=p({props:{modelValue:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},confirm:null,cancel:null,title:{default:"\u6807\u9898"}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,n=()=>{t("update:modelValue",!1)},s=()=>{o.closeOnClickOverlay&&n()},d=()=>{var f;o.confirm?((f=o.confirm)==null?void 0:f.call(o))&&n():n()},m=()=>{var f;o.cancel?((f=o.cancel)==null?void 0:f.call(o))&&n():n()};return(f,y)=>e.modelValue?(r(),b(we,{key:0,to:"body"},[l("div",{class:"cs-dialog__overlay",onClick:s}),l("div",Xt,[l("div",Yt,[l("section",Zt,[l("p",en,[f.$slots.title?I(f.$slots,"title",{key:0},()=>[tn]):(r(),a(B,{key:1},[c(E(e.title),1)],64))]),l("i",{class:"cs-dialog__header-close",onClick:n})]),l("section",nn,[I(f.$slots,"default")]),l("section",on,[u(_,{level:"main",onClick:d},{default:i(()=>[sn]),_:1}),u(_,{onClick:m},{default:i(()=>[un]),_:1})])])])])):T("",!0)}});var pe=e=>{e.__sourceTitle="\u7EC4\u4EF6\u7528\u6CD5",e.__sourceCode=`<template>\r
  <div>\r
    <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
    <Dialog\r
      v-model="dialogVisiable"\r
      :closeOnClickOverlay="false"\r
      :confirm="onConfirm"\r
      :cancel="onCancel"\r
    >\r
      <template #title>\r
        <strong>\u52A0\u7C97\u7684\u6807\u9898</strong>\r
      </template>\r
      <template #default>\r
        <strong>hi</strong>\r
        <div>hi2</div>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import Dialog from '@/lib/Dialog.vue'\r
import Button from '@/lib/Button.vue'\r
import {\r
  ref\r
} from 'vue'\r
\r
const dialogVisiable = ref(false)\r
const toggle = () => {\r
  dialogVisiable.value = !dialogVisiable.value\r
}\r
const onConfirm = () => { return false }\r
const onCancel = () => { return false }\r
<\/script>`};const ln=c("\u6253\u5F00\u5BF9\u8BDD\u6846"),rn=l("strong",null,"\u52A0\u7C97\u7684\u6807\u9898",-1),cn=l("strong",null,"hi",-1),an=l("div",null,"hi2",-1),fe=p({setup(e){const t=g(!1),o=()=>{t.value=!t.value},n=()=>!1,s=()=>!1;return(d,m)=>(r(),a("div",null,[u(_,{onClick:o},{default:i(()=>[ln]),_:1}),u(me,{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=f=>t.value=f),closeOnClickOverlay:!1,confirm:n,cancel:s},{title:i(()=>[rn]),default:i(()=>[cn,an]),_:1},8,["modelValue"])]))}});typeof pe=="function"&&pe(fe);const dn=e=>{const t=document.createElement("div");document.body.appendChild(t);const o=()=>{n.unmount(),t.remove()},n=Q({render(){return X(me,{modelValue:!0,"onUpdate:modelValue":s=>{!s&&o()},closeOnClickOverlay:e.closeOnClickOverlay,confirm:e.confirm,cancel:e.cancel},{title:()=>e.title,default:()=>e.content})}});n.mount(t)};var he=e=>{e.__sourceTitle="\u51FD\u6570\u7528\u6CD5",e.__sourceCode=`<template>\r
  <Button @click="onOpenDialog">dialog\u51FD\u6570</Button>\r
</template>\r
\r
<script setup lang="ts">\r
import Button from '@/lib/Button.vue';\r
import { dialog } from '@/lib/openDialog';\r
\r
const onOpenDialog = () => {\r
  dialog({\r
    title: "dialog fn",\r
    content: "dialog fn content",\r
    closeOnClickOverlay: false,\r
    confirm: () => {\r
      return false\r
    },\r
    cancel: () => {\r
      return false\r
    }\r
  })\r
}\r
<\/script>`};const _n=c("dialog\u51FD\u6570"),ve=p({setup(e){const t=()=>{dn({title:"dialog fn",content:"dialog fn content",closeOnClickOverlay:!1,confirm:()=>!1,cancel:()=>!1})};return(o,n)=>(r(),b(_,{onClick:t},{default:i(()=>[_n]),_:1}))}});typeof he=="function"&&he(ve);const mn={class:"dialog-demo"},pn=l("h2",null,"Dialog \u5BF9\u8BDD\u6846",-1),fn=l("p",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",-1),hn=p({setup(e){return(t,o)=>(r(),a("div",mn,[pn,fn,u(k,{component:fe}),u(k,{component:ve})]))}});const vn={},gn={class:"cs-tab"};function Bn(e,t){return r(),a("div",gn,[I(e.$slots,"default",{},void 0,!0)])}var H=$(vn,[["render",Bn],["__scopeId","data-v-03b39b08"]]);const bn={class:"cs-tabs"},$n={class:"cs-tabs-nav"},kn=["onClick"],yn={class:"cs-tabs-content"},En=p({props:{selected:null},emits:["update:selected"],setup(e,{emit:t}){var y,V,N;const o=g(),n=Ae(),s=g(),d=(V=(y=n.default)==null?void 0:y.call(n))!=null?V:[],m=d.map(v=>{var C;return(C=v==null?void 0:v.props)==null?void 0:C.title});if((N=n.default)==null?void 0:N.call(n))n.default().forEach((v,C)=>{if(v.type!==H)throw Error(`[Crystal error]: The element ${C} type is not Tab`)});else throw Error("[Crystal error]: Tabs missing content");const f=v=>{t("update:selected",v)};return De(()=>{const v=o.value,{left:C}=v.getBoundingClientRect(),{left:h}=s.value.parentElement.getBoundingClientRect();s&&s.value&&(s.value.style.width=v.clientWidth+"px",s.value.style.left=C-h+"px")}),(v,C)=>(r(),a("div",bn,[l("div",$n,[(r(!0),a(B,null,D(w(m),(h,x)=>(r(),a("div",{class:L(["cs-tabs-nav-item",{selected:h===e.selected}]),key:x+h,ref:F=>{h===e.selected&&F&&(o.value=F)},onClick:F=>f(h)},E(h),11,kn))),128)),l("i",{class:"cs-tabs-nav-indicator",ref:(h,x)=>{x.refIndicator=h,s.value=h}},null,512)]),l("div",yn,[(r(!0),a(B,null,D(w(d),(h,x)=>{var F;return r(),a(B,{key:x},[((F=h==null?void 0:h.props)==null?void 0:F.title)===e.selected?(r(),b(z(h),{key:x})):T("",!0)],64)}),128))])]))}});var Cn=$(En,[["__scopeId","data-v-8d2f9c76"]]),ge=e=>{e.__sourceTitle="\u5E38\u89C4\u7528\u6CD5",e.__sourceCode=`<template>\r
  <Tabs v-model:selected="selected">\r
    <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A2234">\u5185\u5BB92</Tab>\r
  </Tabs>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue';\r
import Tabs from '@/lib/Tabs.vue';\r
import Tab from '@/lib/Tab.vue';\r
\r
const selected = ref('\u5BFC\u822A1');\r
<\/script>`};const xn=c("\u5185\u5BB91"),Fn=c("\u5185\u5BB92"),Be=p({setup(e){const t=g("\u5BFC\u822A1");return(o,n)=>(r(),b(Cn,{selected:t.value,"onUpdate:selected":n[0]||(n[0]=s=>t.value=s)},{default:i(()=>[u(H,{title:"\u5BFC\u822A1"},{default:i(()=>[xn]),_:1}),u(H,{title:"\u5BFC\u822A2234"},{default:i(()=>[Fn]),_:1})]),_:1},8,["selected"]))}});typeof ge=="function"&&ge(Be);const wn=l("h2",null,"Tabs \u6807\u7B7E\u9875",-1),An=l("p",null,"\u5206\u9694\u5185\u5BB9\u4E0A\u6709\u5173\u8054\u4F46\u5C5E\u4E8E\u4E0D\u540C\u7C7B\u522B\u7684\u6570\u636E\u96C6\u5408\u3002",-1),Dn=p({setup(e){return(t,o)=>(r(),a("div",null,[wn,An,u(k,{component:Be})]))}}),Tn="modulepreload",be={},Vn="./",U=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Vn}${n}`,n in be)return;be[n]=!0;const s=n.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${d}`))return;const m=document.createElement("link");if(m.rel=s?"stylesheet":Tn,s||(m.as="script",m.crossOrigin=""),m.href=n,document.head.appendChild(m),s)return new Promise((f,y)=>{m.addEventListener("load",f),m.addEventListener("error",y)})})).then(()=>t())};function In(e){switch(e){case"../markdown/get-start.md":return U(()=>import("./get-start.e166bd0f.js"),[]);case"../markdown/install.md":return U(()=>import("./install.d1ced4a8.js"),[]);case"../markdown/intro.md":return U(()=>import("./intro.c794642f.js"),[]);default:return new Promise(function(t,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const On=["innerHTML"],Sn=p({props:{filename:null},setup(e){const t=e,o=g();return In(`../markdown/${t.filename}.md`).then(n=>{o.value=n.default}),(n,s)=>(r(),a("article",{class:"markdown-body",innerHTML:o.value},null,8,On))}}),M=e=>X(Sn,{filename:e,key:e}),zn=Te(),$e=Ve({history:zn,routes:[{path:"/",component:Ke},{path:"/doc",component:st,redirect:"/doc/intro",children:[{path:"intro",component:M("intro")},{path:"get-start",component:M("get-start")},{path:"install",component:M("install")},{path:"switch",component:bt},{path:"button",component:Qt},{path:"dialog",component:hn},{path:"tabs",component:Dn}]}]}),Ln=p({setup(e){const t=g(document.documentElement.clientWidth>500),o=()=>{t.value=!t.value},n=s=>{t.value=s};return P("asideVisible",Ie(t)),P("toggleAsideVisible",o),P("setAsideVisible",n),$e.afterEach(()=>{document.documentElement.clientWidth<500&&(t.value=!1)}),(s,d)=>{const m=A("router-view");return r(),b(m)}}});const ke=Q(Ln);ke.use($e);ke.mount("#app");
