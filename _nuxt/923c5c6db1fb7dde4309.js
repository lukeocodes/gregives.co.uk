(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(e,o,r){"use strict";function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(object,e){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),o.push.apply(o,r)}return o}r.d(o,"a",(function(){return d})),r.d(o,"b",(function(){return v}));var c=new Map;function f(e){if("undefined"==typeof IntersectionObserver)return null;var o=JSON.stringify(e);if(c.has(o))return c.get(o);var r=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return c.set(o,r),r}function l(e,o){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(o){t(e,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(source,o))}))}return e}({render:function(o){var r=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),o(r)}},o)}function m(component){var e,o=new Promise((function(o){e=o}));return o._resolve=function(){e("function"==typeof component?component():component)},o}var _="undefined"==typeof window;function d(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.ignoredProps;if(_)return component;var r=m(component),t=l(r,{props:o,mounted:function(){if("requestIdleCallback"in window&&"requestAnimationFrame"in window){var e=requestIdleCallback((function(){requestAnimationFrame(r._resolve)}),{timeout:this.idleTimeout});r.then((function(){return cancelIdleCallback(e)}))}else r._resolve()}});return function(){return{component:r,delay:0,loading:t}}}function v(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.ignoredProps,r=e.observerOptions;if(_)return component;var t=m(component),n=f(r),c=l(t,{props:o,mounted:function(){var e=this;if(n){this.$el.hydrate=t._resolve;t.then((function(){return n.unobserve(e.$el)})),n.observe(this.$el)}else t._resolve()}});return function(){return{component:t,delay:0,loading:c}}}Boolean,Boolean,Boolean,Boolean,Boolean},389:function(e,o,r){var content=r(404);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("32542e4a",content,!0,{sourceMap:!1})},403:function(e,o,r){"use strict";var t=r(389);r.n(t).a},404:function(e,o,r){var t=r(7),n=r(11),c=r(12),f=r(13);o=t(!1);var l=n(c),m=n(f);o.push([e.i,':root{--color__primary:#35f;--color__primary--muted:rgba(51,85,255,0.3);--color__primary--hue:230deg;--color__body:#f9f9fb;--color__body--overlay:#fff;--color__body--blur:hsla(0,0%,100%,0.9);--color__text:rgba(0,0,0,0.87);--color__text--muted:rgba(0,0,0,0.6);--color__text--muter:rgba(0,0,0,0.02);--box-shadow:0 0 2rem -1rem rgba(0,0,0,0.2);--box-shadow--small:0 0 0.5rem -0.25rem rgba(0,0,0,0.2);--box-shadow--primary:0 0.5rem 1rem -0.5rem #35f;--box-shadow--primary-small:0 0.25rem 0.5rem -0.25rem #35f}@media screen{:root[data-theme=dark]{--color__primary:#89f;--color__primary--muted:rgba(136,153,255,0.3);--color__primary--hue:231.42857deg;--color__body:#1a1b23;--color__body--overlay:#22242f;--color__body--blur:rgba(34,36,47,0.9);--color__text:hsla(0,0%,100%,0.87);--color__text--muted:hsla(0,0%,100%,0.6);--color__text--muter:hsla(0,0%,100%,0.04);--box-shadow:0 0 2rem -1rem rgba(0,0,0,0.4);--box-shadow--small:0 0 0.5rem -0.25rem rgba(0,0,0,0.4);--box-shadow--primary:0 0.5rem 1rem -0.5rem #22242f;--box-shadow--primary-small:0 0.25rem 0.5rem -0.25rem #22242f}}@media print{:root{--color__body:#fff}}@font-face{font-display:swap;font-family:"DM Serif Text";font-style:normal;font-weight:400;src:local("DM Serif Text Regular"),local("DMSerifText-Regular"),url('+l+') format("woff2"),url('+m+') format("woff")}.contact{margin:0 auto;max-width:1080px;position:relative;width:90%;min-height:calc(100vh - 10.5rem);min-height:calc(var(--vh, 1vh)*100 - 10.5rem);padding-top:3.5rem;padding-bottom:4.5rem}@media (min-width:768px){.contact{min-height:calc(100vh - 8rem);min-height:calc(var(--vh, 1vh)*100 - 8rem);padding-top:5rem}}@media print{.contact{margin:0;padding:0;width:100%}}@supports ((-webkit-clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%)) or (clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%))){.contact:before{background-image:radial-gradient(rgba(51,85,255,.3) .075rem,transparent 0),radial-gradient(rgba(51,85,255,.3) .075rem,transparent 0);background-image:radial-gradient(var(--color__primary--muted) .075rem,transparent 0),radial-gradient(var(--color__primary--muted) .075rem,transparent 0);background-size:.75rem .75rem;background-position:0 0,.375rem .375rem;-webkit-clip-path:polygon(100% 35%,80% 30%,55% 60%,100% 95%);clip-path:polygon(100% 35%,80% 30%,55% 60%,100% 95%);content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw;z-index:-1}}.contact__title{font-weight:400;text-shadow:.125rem .125rem rgba(51,85,255,.3);text-shadow:.125rem .125rem var(--color__primary--muted);-webkit-text-stroke:.25vmin #35f;-webkit-text-stroke:.25vmin var(--color__primary);-webkit-text-fill-color:transparent}.contact__title--primary{color:#35f;color:var(--color__primary);font-size:110%;font-weight:700;line-height:1;-webkit-text-stroke:0 currentColor;-webkit-text-fill-color:currentColor}.contact__layout{display:grid;grid-template-columns:100%;grid-gap:3rem}@media (min-width:768px){.contact__layout{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}}.contact__social{margin-top:2rem}.contact__social-item~.contact__social-item{margin-top:.5rem}.contact__social-icon:hover{color:#35f;color:var(--color__primary)}.contact__social-icon:hover .contact__social-text{background-size:100% .25vmin}.contact__social-icon span{margin-right:1rem}.contact__social-icon svg{height:2rem;width:2rem}.contact__social-icon[href*="devpost.com"] svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.contact__social-text{text-shadow:0 0 #f9f9fb,-.2ex -.04em #f9f9fb,-.2ex -.02em #f9f9fb,-.2ex 0 #f9f9fb,-.2ex .02em #f9f9fb,-.2ex .04em #f9f9fb,-.2ex .06em #f9f9fb,-.2ex .08em #f9f9fb,-.15ex -.04em #f9f9fb,-.15ex -.02em #f9f9fb,-.15ex 0 #f9f9fb,-.15ex .02em #f9f9fb,-.15ex .04em #f9f9fb,-.15ex .06em #f9f9fb,-.15ex .08em #f9f9fb,-.1ex -.04em #f9f9fb,-.1ex -.02em #f9f9fb,-.1ex 0 #f9f9fb,-.1ex .02em #f9f9fb,-.1ex .04em #f9f9fb,-.1ex .06em #f9f9fb,-.1ex .08em #f9f9fb,-.05ex -.04em #f9f9fb,-.05ex -.02em #f9f9fb,-.05ex 0 #f9f9fb,-.05ex .02em #f9f9fb,-.05ex .04em #f9f9fb,-.05ex .06em #f9f9fb,-.05ex .08em #f9f9fb,0 -.04em #f9f9fb,0 -.02em #f9f9fb,0 0 #f9f9fb,0 .02em #f9f9fb,0 .04em #f9f9fb,0 .06em #f9f9fb,0 .08em #f9f9fb,.05ex -.04em #f9f9fb,.05ex -.02em #f9f9fb,.05ex 0 #f9f9fb,.05ex .02em #f9f9fb,.05ex .04em #f9f9fb,.05ex .06em #f9f9fb,.05ex .08em #f9f9fb,.1ex -.04em #f9f9fb,.1ex -.02em #f9f9fb,.1ex 0 #f9f9fb,.1ex .02em #f9f9fb,.1ex .04em #f9f9fb,.1ex .06em #f9f9fb,.1ex .08em #f9f9fb,.15ex -.04em #f9f9fb,.15ex -.02em #f9f9fb,.15ex 0 #f9f9fb,.15ex .02em #f9f9fb,.15ex .04em #f9f9fb,.15ex .06em #f9f9fb,.15ex .08em #f9f9fb,.2ex -.04em #f9f9fb,.2ex -.02em #f9f9fb,.2ex 0 #f9f9fb,.2ex .02em #f9f9fb,.2ex .04em #f9f9fb,.2ex .06em #f9f9fb,.2ex .08em #f9f9fb;text-shadow:0 0 var(--color__body),-.2ex -.04em var(--color__body),-.2ex -.02em var(--color__body),-.2ex 0 var(--color__body),-.2ex .02em var(--color__body),-.2ex .04em var(--color__body),-.2ex .06em var(--color__body),-.2ex .08em var(--color__body),-.15ex -.04em var(--color__body),-.15ex -.02em var(--color__body),-.15ex 0 var(--color__body),-.15ex .02em var(--color__body),-.15ex .04em var(--color__body),-.15ex .06em var(--color__body),-.15ex .08em var(--color__body),-.1ex -.04em var(--color__body),-.1ex -.02em var(--color__body),-.1ex 0 var(--color__body),-.1ex .02em var(--color__body),-.1ex .04em var(--color__body),-.1ex .06em var(--color__body),-.1ex .08em var(--color__body),-.05ex -.04em var(--color__body),-.05ex -.02em var(--color__body),-.05ex 0 var(--color__body),-.05ex .02em var(--color__body),-.05ex .04em var(--color__body),-.05ex .06em var(--color__body),-.05ex .08em var(--color__body),0 -.04em var(--color__body),0 -.02em var(--color__body),0 0 var(--color__body),0 .02em var(--color__body),0 .04em var(--color__body),0 .06em var(--color__body),0 .08em var(--color__body),.05ex -.04em var(--color__body),.05ex -.02em var(--color__body),.05ex 0 var(--color__body),.05ex .02em var(--color__body),.05ex .04em var(--color__body),.05ex .06em var(--color__body),.05ex .08em var(--color__body),.1ex -.04em var(--color__body),.1ex -.02em var(--color__body),.1ex 0 var(--color__body),.1ex .02em var(--color__body),.1ex .04em var(--color__body),.1ex .06em var(--color__body),.1ex .08em var(--color__body),.15ex -.04em var(--color__body),.15ex -.02em var(--color__body),.15ex 0 var(--color__body),.15ex .02em var(--color__body),.15ex .04em var(--color__body),.15ex .06em var(--color__body),.15ex .08em var(--color__body),.2ex -.04em var(--color__body),.2ex -.02em var(--color__body),.2ex 0 var(--color__body),.2ex .02em var(--color__body),.2ex .04em var(--color__body),.2ex .06em var(--color__body),.2ex .08em var(--color__body);background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(51,85,255,.3)),to(rgba(51,85,255,.3))),-webkit-gradient(linear,left top,left bottom,from(#35f),to(#35f));background-image:linear-gradient(rgba(51,85,255,.3),rgba(51,85,255,.3)),linear-gradient(#35f,#35f);background-image:-webkit-gradient(linear,left top,left bottom,from(var(--color__primary--muted)),to(var(--color__primary--muted))),-webkit-gradient(linear,left top,left bottom,from(var(--color__primary)),to(var(--color__primary)));background-image:linear-gradient(var(--color__primary--muted),var(--color__primary--muted)),linear-gradient(var(--color__primary),var(--color__primary));background-size:100% .25vmin,0 .25vmin;background-repeat:no-repeat;color:#35f;color:var(--color__primary);-webkit-transition:background-size .3s cubic-bezier(.77,0,.175,1);transition:background-size .3s cubic-bezier(.77,0,.175,1);background-position:0 100%}.contact__social-text:hover{background-size:100% .25vmin}',""]),e.exports=o},429:function(e,o,r){"use strict";r.r(o);r(23);var t,n=r(3),c=r(366),f=r(111),l=r(112),m=r(113),_=r(114),d=r(115),v={components:{EmailIcon:f.a,TwitterIcon:l.a,GithubIcon:m.a,DevpostIcon:_.a,LinkedinIcon:d.a,ContactForm:Object(c.a)((function(){return r.e(15).then(r.bind(null,436))}))},asyncData:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var o,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(22).then(r.t.bind(null,425,7));case 2:return o=e.sent,t=o.vue,e.abrupt("return",{markdown:{vue:t}});case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),head:function(){return{title:"Contact"}}},x=(r(403),r(2)),component=Object(x.a)(v,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("main",{staticClass:"contact"},[e._m(0),e._v(" "),r("div",{staticClass:"contact__layout"},[r("div",{staticClass:"contact__text"},[r("markdown",{attrs:{markdown:e.markdown}}),e._v(" "),r("div",{staticClass:"contact__social"},[r("div",{staticClass:"contact__social-item"},[r("a",{staticClass:"contact__social-icon",attrs:{href:"mailto:greg@gregives.co.uk"}},[r("email-icon",{attrs:{title:"Email"}}),e._v(" "),r("span",{staticClass:"contact__social-text"},[e._v("Email me for a chat")])],1)]),e._v(" "),r("div",{staticClass:"contact__social-item"},[r("a",{staticClass:"contact__social-icon",attrs:{href:"https://www.linkedin.com/in/gregiv-es/",rel:"noopener noreferrer",target:"_blank"}},[r("linkedin-icon",{attrs:{title:"LinkedIn"}}),e._v(" "),r("span",{staticClass:"contact__social-text"},[e._v("Connect with me")])],1)]),e._v(" "),r("div",{staticClass:"contact__social-item"},[r("a",{staticClass:"contact__social-icon",attrs:{href:"https://github.com/gregives",rel:"noopener noreferrer",target:"_blank"}},[r("github-icon",{attrs:{title:"GitHub"}}),e._v(" "),r("span",{staticClass:"contact__social-text"},[e._v("Check out my projects")])],1)]),e._v(" "),r("div",{staticClass:"contact__social-item"},[r("a",{staticClass:"contact__social-icon",attrs:{href:"https://devpost.com/gregives",rel:"noopener noreferrer",target:"_blank"}},[r("devpost-icon",{attrs:{title:"Devpost"}}),e._v(" "),r("span",{staticClass:"contact__social-text"},[e._v("Hackathon submissions")])],1)]),e._v(" "),r("div",{staticClass:"contact__social-item"},[r("a",{staticClass:"contact__social-icon",attrs:{href:"https://twitter.com/gregiv_es",rel:"noopener noreferrer",target:"_blank"}},[r("twitter-icon",{attrs:{title:"Twitter"}}),e._v(" "),r("span",{staticClass:"contact__social-text"},[e._v("Follow me on Twitter")])],1)])])],1),e._v(" "),r("div",{staticClass:"contact__form"},[r("contact-form")],1)])])}),[function(){var e=this.$createElement,o=this._self._c||e;return o("h1",{staticClass:"contact__title"},[o("span",{staticClass:"contact__title--primary"},[this._v("Contact")]),this._v(" Me\n  ")])}],!1,null,null,null);o.default=component.exports}}]);