(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{198:function(n,e,t){"use strict";var A=t(31),component=Object(A.a)({},(function(){var n=this._self._c;return n("div",[n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},199:function(n,e,t){t(200),n.exports=t(201)},260:function(n,e,t){var content=t(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(113).default)("46f36878",content,!0,{sourceMap:!0})},261:function(n,e,t){var A=t(112),o=t(262),r=t(263),C=A(!0),l=o(r);C.push([n.i,'*,:after,:before{box-sizing:border-box;padding:0;margin:0}html{font-size:62.5%;scroll-behavior:smooth}@font-face{font-family:"Red Hat Display";src:url('+l+')}body{font-family:"Red Hat Display";background:#04061b;overflow-x:hidden}a{text-decoration:none}.container{min-height:50vh;width:100%;display:flex;align-items:center;justify-content:center}.section-title{font-size:4rem;font-weight:700;line-height:114.8%;text-align:center;background:linear-gradient(240.51deg,#01b5ff,#00c957);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.section-subtitle{margin-top:20px;font-weight:400;font-size:1.9rem;text-align:center;color:hsla(0,0%,100%,.70196);line-height:2.5rem;max-width:420px}.background{z-index:-1}.foreground{z-index:1}.gradient-primary{background:linear-gradient(90deg,#01b5ff,#00c957)}.main__title{font-size:5.6rem;font-weight:500;line-height:114.8%;text-align:center;background:linear-gradient(240.51deg,#01b5ff,#00c957);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.sub__title{margin-top:20px;font-weight:400;font-size:1.9rem;line-height:137.8%;text-align:center;color:#fff;width:40%;margin-left:auto;margin-right:auto}.highlight-effect{display:inline;background:linear-gradient(179deg,#0199ff,#00c957);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}@media only screen and (min-width:768px){.section-title{font-size:5.4rem}.section-subtitle{font-size:1.9rem;max-width:620px}.container{min-height:50vh}}#hero #globe>canvas{width:105%!important}@media only screen and (min-width:1200px){.container{min-height:100vh}}',"",{version:3,sources:["webpack://assests/styles/global.css"],names:[],mappings:"AAAA,iBAGE,qBAAsB,CACtB,SAAU,CACV,QACF,CAEA,KAEE,eAAgB,CAEhB,sBACF,CAEA,WACE,6BAA8B,CAE9B,2CACF,CAEA,KAGE,6BAA8B,CAE9B,kBAAmB,CACnB,iBACF,CAEA,EACE,oBACF,CAEA,WACE,eAAgB,CAChB,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,sBACF,CAEA,eACE,cAAe,CACf,eAAgB,CAChB,kBAAmB,CACnB,iBAAkB,CAElB,qDAAgE,CAChE,4BAA6B,CAC7B,mCAAoC,CACpC,oBACF,CAEA,kBACE,eAAgB,CAChB,eAAgB,CAChB,gBAAiB,CACjB,iBAAkB,CAClB,4BAAgB,CAChB,kBAAmB,CACnB,eACF,CAEA,YACE,UACF,CAMA,YACE,SACF,CAEA,kBACE,iDACF,CAEA,aACE,gBAAiB,CACjB,eAAgB,CAChB,kBAAmB,CACnB,iBAAkB,CAElB,qDAAgE,CAChE,4BAA6B,CAC7B,mCAAoC,CACpC,oBACF,CAEA,YACE,eAAgB,CAChB,eAAgB,CAChB,gBAAiB,CACjB,kBAAmB,CACnB,iBAAkB,CAClB,UAAY,CACZ,SAAU,CACV,gBAAiB,CACjB,iBACF,CAEA,kBACE,cAAe,CAGf,kDAA6D,CAC7D,4BAA6B,CAC7B,mCAAoC,CACpC,oBACF,CAGA,yCACE,eACE,gBACF,CACA,kBACE,gBAAiB,CACjB,eACF,CACA,WACE,eACF,CACF,CAGA,oBACE,oBACF,CAKA,0CACE,WACE,gBACF,CACF",sourcesContent:['*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  /* 62.5% of 16px browser font size is 10px */\n  font-size: 62.5%;\n\n  scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: "Red Hat Display";\n\n  src: url(RedHatDisplayRegular.ttf);\n}\n\nbody {\n  /* import red hat display font from google */\n\n  font-family: "Red Hat Display";\n\n  background: #04061b;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  min-height: 50vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.section-title {\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: 114.8%;\n  text-align: center;\n\n  background: linear-gradient(240.51deg, #01b5ff 0%, #00c957 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.section-subtitle {\n  margin-top: 20px;\n  font-weight: 400;\n  font-size: 1.9rem;\n  text-align: center;\n  color: #ffffffb3;\n  line-height: 2.5rem;\n  max-width: 420px;\n}\n\n.background {\n  z-index: -1;\n}\n\n.foreground {\n  z-index: 1;\n}\n\n.foreground {\n  z-index: 1;\n}\n\n.gradient-primary {\n  background: linear-gradient(90deg, #01b5ff 0%, #00c957 100%);\n}\n\n.main__title {\n  font-size: 5.6rem;\n  font-weight: 500;\n  line-height: 114.8%;\n  text-align: center;\n\n  background: linear-gradient(240.51deg, #01b5ff 0%, #00c957 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.sub__title {\n  margin-top: 20px;\n  font-weight: 400;\n  font-size: 1.9rem;\n  line-height: 137.8%;\n  text-align: center;\n  color: white;\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.highlight-effect {\n  display: inline;\n\n  /* add gradient color effect here for text */\n  background: linear-gradient(179deg, #0199ff 0%, #00c957 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n/* MEDIA QUERY FOR TABLET */\n@media only screen and (min-width: 768px) {\n  .section-title {\n    font-size: 5.4rem;\n  }\n  .section-subtitle {\n    font-size: 1.9rem;\n    max-width: 620px;\n  }\n  .container {\n    min-height: 50vh;\n  }\n}\n\n/* CSS for Vanta.js GLOBE animation in index.js hero section */\n#hero #globe > canvas {\n  width: 105% !important;\n}\n\n/* MEDIA QUERY FOR TABLET END*/\n\n/* MEDIA QUERY FOR DESKTOP */\n@media only screen and (min-width: 1200px) {\n  .container {\n    min-height: 100vh;\n  }\n}\n/* MEDIA QUERY FOR DESKTOP END*/\n'],sourceRoot:""}]),n.exports=C},263:function(n,e,t){n.exports=t.p+"fonts/RedHatDisplayRegular.48bda87.ttf"}},[[199,9,2,10]]]);