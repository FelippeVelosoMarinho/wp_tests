import{u as v,t as h}from"./links.6fea55de.js";import{B as y}from"./Img.36b58c68.js";import{b as S}from"./Caret.660dc2fe.js";import{S as b}from"./Profile.2db757d0.js";import{y as n,o as c,c as l,a as e,D as r,t as s,I as k,d as I,q as x,E as N,M as B,N as C}from"./vue.esm-bundler.f425fb9b.js";import{_ as V}from"./_plugin-vue_export-helper.c114f5e4.js";const w={setup(){return{rootStore:v()}},components:{BaseImg:y,CoreLoader:S,SvgDannieProfile:b},props:{description:{type:String,required:!0},image:String,loading:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{images:{}}},computed:{appName(){return"All in One SEO"},date(){const o=new Date;return o.toLocaleString("default",{month:"long"})+" "+o.getDate()},isVerticalImage(){const o=this.images[this.image];return o?o.vertical:!1}},methods:{truncate:h}},d=o=>(B("data-v-d177735a"),o=o(),C(),o),D={class:"aioseo-facebook-preview"},A={class:"facebook-post"},L={class:"facebook-header"},P={class:"profile-photo"},q={class:"poster"},E={class:"poster-name"},F={class:"poster-date"},O=d(()=>e("div",{class:"ellipsis"},[e("div"),e("div"),e("div")],-1)),R={key:0,class:"loader"},z={class:"facebook-site-description"},M={class:"site-domain"},T={class:"site-title"},U={class:"site-description"},j=d(()=>e("div",{class:"facebook-footer"},null,-1));function G(o,i,a,_,u,t){const p=n("svg-dannie-profile"),m=n("base-img"),f=n("core-loader");return c(),l("div",D,[e("div",A,[e("div",L,[e("div",P,[r(p)]),e("div",q,[e("div",E,s(t.appName),1),e("div",F,s(t.date),1)]),O]),e("div",{class:k(["facebook-content",{vertical:t.isVerticalImage}])},[r(m,{debounce:!1,src:a.image,onImages:i[0]||(i[0]=g=>u.images=g),class:"facebook-content__image"},null,8,["src"]),a.loading?(c(),l("div",R,[r(f)])):I("",!0),e("div",z,[e("div",M,[x(o.$slots,"site-url",{},()=>[N(s(_.rootStore.aioseo.urls.domain),1)],!0)]),e("div",T,s(t.truncate(a.title,60)),1),e("div",U,s(t.truncate(a.description,110)),1)])],2),j])])}const Y=V(w,[["render",G],["__scopeId","data-v-d177735a"]]);export{Y as C};