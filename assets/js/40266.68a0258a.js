"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[40266],{68926:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(66252),a=n(2262),r=n(42119);const s=(0,o.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,r.yj)(),n=(0,a.iH)();(0,o.YP)((()=>t.path),(()=>n.value.focus()));const s=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,o.h)("span",{ref:n,tabindex:"-1"}),(0,o.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:s},"Skip to content")]}})},40266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(66252),a=n(97621),r=n(49963),s=n(92439);const u=(0,o.aZ)({name:"FadeSlideY",setup(e,{slots:t}){const n=(0,s.P$)(),a=n.resolve,u=n.pending;return()=>(0,o.h)(r.uT,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:a,onBeforeLeave:u},(()=>t.default?.()))}});var i=n(68926);const l=(0,o.aZ)({name:"Layout",setup(){const e=(0,a.Vi)(),t=(0,a.I2)();return()=>[(0,o.h)(i.Z),(0,o.h)((0,o.up)("CommonWrapper"),{},(()=>t.value.home?(0,o.h)((0,o.up)("HomePage")):(0,o.h)(u,{},(()=>(0,o.h)((0,o.up)("NormalPage"),{key:e.value.path})))))]}})}}]);