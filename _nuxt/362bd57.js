(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{274:function(n,t,e){var content=e(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(113).default)("e1a93fa4",content,!0,{sourceMap:!0})},276:function(n,t,e){"use strict";e(274)},277:function(n,t,e){var r=e(112)(!0);r.push([n.i,".primary-button[data-v-f354e86c]{font-weight:700;font-size:1.6rem;line-height:2.4rem;color:#000816;background:linear-gradient(240.51deg,#01b5ff,#00c957);width:-moz-max-content;width:max-content;flex-direction:row;align-items:flex-start;padding:8px 20px;grid-gap:10px;gap:10px;border-radius:8px;cursor:pointer;display:flex;justify-content:center;align-items:center}@media only screen and (min-width:768px){.primary-button[data-v-f354e86c]{font-size:2.4rem}}","",{version:3,sources:["webpack://components/PrimaryButton.vue"],names:[],mappings:"AACA,iCACE,eAAgB,CAChB,gBAAiB,CACjB,kBAAmB,CACnB,aAAc,CACd,qDAAgE,CAEhE,sBAAkB,CAAlB,iBAAkB,CAElB,kBAAmB,CACnB,sBAAuB,CACvB,gBAAiB,CACjB,aAAS,CAAT,QAAS,CAET,iBAAkB,CAElB,cAAe,CACf,YAAa,CACb,sBAAuB,CACvB,kBACF,CAGA,yCACE,iCACE,gBACF,CACF",sourcesContent:["\n.primary-button {\n  font-weight: 700;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  color: #000816;\n  background: linear-gradient(240.51deg, #01b5ff 0%, #00c957 100%);\n\n  width: max-content;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 8px 20px;\n  gap: 10px;\n\n  border-radius: 8px;\n\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* MEDIA QUERY FOR TABLET */\n@media only screen and (min-width: 768px) {\n  .primary-button {\n    font-size: 2.4rem;\n  }\n}\n/* MEDIA QUERY FOR TABLET END*/\n"],sourceRoot:""}]),n.exports=r},281:function(n,t,e){"use strict";e.r(t);e(32);var r=e(1),o=Object(r.b)({data:function(){return{}},props:{name:{type:String,default:"Click me"},handler:{type:Function,default:function(){},required:!0},styles:{type:String,default:""}}}),l=(e(276),e(31)),component=Object(l.a)(o,(function(){var n=this,t=n._self._c;n._self._setupProxy;return t("a",{staticClass:"primary-button",style:n.styles,attrs:{"data-after":n.name},on:{click:function(){return n.handler()}}},[t("span",[n._v(n._s(n.name))])])}),[],!1,null,"f354e86c",null);t.default=component.exports},300:function(n,t,e){var content=e(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(113).default)("6c4c258b",content,!0,{sourceMap:!0})},331:function(n,t,e){"use strict";e(300)},332:function(n,t,e){var r=e(112)(!0);r.push([n.i,".header[data-v-87400bb0]{padding:15px 20px;background:transparent;font-weight:100;width:100%;justify-content:space-between;align-items:center}.header[data-v-87400bb0],.header__left[data-v-87400bb0]{display:flex}.navigation[data-v-87400bb0]{display:none}.navigation__link[data-v-87400bb0]{text-decoration:none;color:#fff;font-size:1.8rem;line-height:2.4rem;margin-right:4rem}@media only screen and (min-width:768px){.navigation[data-v-87400bb0]{display:flex}}","",{version:3,sources:["webpack://components/Header.vue"],names:[],mappings:"AACA,yBACE,iBAAkB,CAClB,sBAAuB,CACvB,eAAgB,CAChB,UAAW,CAEX,6BAA8B,CAC9B,kBACF,CAEA,wDALE,YAOF,CAEA,6BACE,YACF,CAEA,mCACE,oBAAqB,CACrB,UAAY,CACZ,gBAAiB,CACjB,kBAAmB,CAEnB,iBACF,CAGA,yCACE,6BACE,YACF,CACF",sourcesContent:["\n.header {\n  padding: 15px 20px;\n  background: transparent;\n  font-weight: 100;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__left {\n  display: flex;\n}\n\n.navigation {\n  display: none;\n}\n\n.navigation__link {\n  text-decoration: none;\n  color: white;\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n\n  margin-right: 4rem;\n}\n\n/* MEDIA QUERY FOR TABLET */\n@media only screen and (min-width: 768px) {\n  .navigation {\n    display: flex;\n  }\n}\n/* MEDIA QUERY FOR TABLET END*/\n"],sourceRoot:""}]),n.exports=r},339:function(n,t,e){"use strict";e.r(t);var r=e(1),o=Object(r.b)({data:function(){return{}},methods:{signUpHandler:function(){},scroll:function(n){var t,e,r,element=null===(r=null===(e=null===(t=this.$parent)||void 0===t?void 0:t.$children[1])||void 0===e?void 0:e.$children[0])||void 0===r?void 0:r.$refs[n];element&&element.scrollIntoView({behavior:"smooth"})}}}),l=(e(331),e(31)),component=Object(l.a)(o,(function(){var n=this,t=n._self._c;n._self._setupProxy;return t("div",{staticClass:"header foreground"},[t("nuxt-img",{staticStyle:{height:"40px"},attrs:{src:"/images/hero/Visnet-logo-header.svg",alt:"LOGO",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),n._v(" "),t("div",{staticClass:"navigation"},[t("a",{staticClass:"navigation__link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),n.scroll("home")}}},[n._v("Home")]),n._v(" "),t("a",{staticClass:"navigation__link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),n.scroll("framework")}}},[n._v("Framework")]),n._v(" "),t("a",{staticClass:"navigation__link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),n.scroll("research")}}},[n._v("Research")]),n._v(" "),t("a",{staticClass:"navigation__link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),n.scroll("aboutus")}}},[n._v("About Us")]),n._v(" "),t("a",{staticClass:"navigation__link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),n.scroll("contactus")}}},[n._v("Contact")]),n._v(" "),t("PrimaryButton",{attrs:{name:"Signup",styles:"margin-right:6rem",handler:n.signUpHandler}})],1)],1)}),[],!1,null,"87400bb0",null);t.default=component.exports;installComponents(component,{PrimaryButton:e(281).default})}}]);