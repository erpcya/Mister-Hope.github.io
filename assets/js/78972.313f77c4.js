"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[78972],{68926:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(66252),o=a(2262),l=a(42119);const r=(0,n.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,l.yj)(),a=(0,o.iH)();(0,n.YP)((()=>t.path),(()=>a.value.focus()));const r=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,n.h)("span",{ref:a,tabindex:"-1"}),(0,n.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},78972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(66252),o=a(97621),l=a(32217),r=a(68926),s=a(35205);const u=(0,n.aZ)({name:"Layout",setup(){const e=(0,s.BV)(),t=(0,s.X6)(),a=(0,o.Vi)(),u=(0,o.I2)(),i=(0,s.XA)(),p=(0,n.Fl)((()=>t.value.blog.sidebarDisplay||e.value.blog.sidebarDisplay||"mobile"));return()=>[(0,n.h)(r.Z),(0,n.h)((0,n.up)("CommonWrapper"),{},{default:()=>u.value.home?(0,n.h)((0,n.up)("HomePage")):(0,n.h)(l.d,(()=>(0,n.h)((0,n.up)("NormalPage"),{key:a.value.path}))),..."none"!==p.value?{navScreenBottom:()=>(0,n.h)((0,n.up)("BloggerInfo"))}:{},...i.value||"always"!==p.value?{}:{sidebar:()=>(0,n.h)((0,n.up)("BloggerInfo"))}})]}})}}]);