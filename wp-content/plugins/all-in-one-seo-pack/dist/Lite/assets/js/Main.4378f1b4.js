import{E as p}from"./links.6fea55de.js";import{a as i}from"./addons.393743a4.js";import{R as m,a as u}from"./RequiresUpdate.8a16a987.js";import{C as _}from"./Index.bbb56e7c.js";import{a as l}from"./Header.7b90c1c7.js";import{o,c as s,y as d,D as f,m as g,l as h,x}from"./vue.esm-bundler.f425fb9b.js";import{_ as n}from"./_plugin-vue_export-helper.c114f5e4.js";import k from"./Overview.45b1c2eb.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.a77a8422.js";import"./upperFirst.62b3e825.js";import"./_stringToArray.4de3b1f3.js";import"./toString.eb8a9d40.js";import"./RequiresUpdate.14823634.js";import"./license.fb6d0c45.js";import"./allowed.c057c34a.js";/* empty css             */import"./params.f0608262.js";import"./Ellipse.61f2058b.js";import"./Caret.660dc2fe.js";import"./ScrollAndHighlight.943ff92b.js";import"./LogoGear.4492dfce.js";import"./Logo.15d8c305.js";import"./Support.237c422f.js";import"./Tabs.d9517892.js";import"./TruSeoScore.b474bf15.js";import"./Information.dd77e1c6.js";import"./Slide.ab12a8fa.js";import"./Url.50455516.js";import"./Date.cb06e01c.js";import"./constants.2883a7a9.js";import"./Exclamation.ece79eec.js";import"./Gear.8e97317b.js";import"./AnimatedNumber.b29b44b5.js";import"./numbers.c7cb4085.js";import"./index.c4983756.js";import"./AddonConditions.c185d06e.js";import"./Index.af8a043b.js";import"./Row.c43f487a.js";import"./Blur.77607e56.js";import"./Card.79833296.js";import"./Tooltip.7040733e.js";import"./InternalOutbound.68f7762a.js";import"./DonutChartWithLegend.2ed81f73.js";import"./SeoSiteScore.f2154b15.js";import"./Row.0a31cd53.js";import"./RequiredPlans.c86ac4fb.js";const v={};function $(t,e){return o(),s("div")}const A=n(v,[["render",$]]),y={};function b(t,e){return o(),s("div")}const S=n(y,[["render",b]]),R={};function T(t,e){return o(),s("div")}const w=n(R,[["render",T]]),C={};function L(t,e){return o(),s("div")}const M=n(C,[["render",L]]);const P={setup(){return{linkAssistantStore:p()}},components:{CoreMain:_,CoreProcessingPopup:l,DomainsReport:A,LinksReport:S,Overview:k,PostReport:w,Settings:M},mixins:[m,u],data(){return{strings:{pageName:this.$t.__("Link Assistant",this.$td)}}},computed:{excludedTabs(){const t=(i.isActive("aioseo-link-assistant")?this.getExcludedUpdateTabs("aioseo-link-assistant"):this.getExcludedActivationTabs("aioseo-link-assistant"))||[];return t.push("post-report"),t}},mounted(){window.aioseoBus.$on("changes-saved",()=>{this.linkAssistantStore.getMenuData()}),this.$isPro&&this.linkAssistantStore.suggestionsScan.percent!==100&&i.isActive("aioseo-link-assistant")&&!i.requiresUpgrade("aioseo-link-assistant")&&i.hasMinimumVersion("aioseo-link-assistant")&&this.linkAssistantStore.pollSuggestionsScan()}},B={class:"aioseo-link-assistant"};function D(t,e,E,U,r,a){const c=d("core-main");return o(),s("div",B,[f(c,{"page-name":r.strings.pageName,"exclude-tabs":a.excludedTabs,showTabs:t.$route.name!=="post-report"},{default:g(()=>[(o(),h(x(t.$route.name)))]),_:1},8,["page-name","exclude-tabs","showTabs"])])}const Lt=n(P,[["render",D]]);export{Lt as default};