(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(e,t,n){"use strict";var r=n(2),c=n(284);r({target:"String",proto:!0,forced:n(285)("sub")},{sub:function(){return c(this,"sub","","")}})},284:function(e,t,n){var r=n(4),c=n(28),o=n(15),A=/"/g,l=r("".replace);e.exports=function(e,t,n,r){var C=o(c(e)),d="<"+t;return""!==n&&(d+=" "+n+'="'+l(o(r),A,"&quot;")+'"'),d+">"+C+"</"+t+">"}},285:function(e,t,n){var r=n(3);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},288:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("a1a76afe",content,!0,{sourceMap:!0})},294:function(e,t,n){"use strict";n(288)},295:function(e,t,n){var r=n(72)(!0);r.push([e.i,".frame__card[data-v-6cc2c84b]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:25.5389px 30.0995px;max-width:369px;background:#000d23;border-radius:8px}.frame__card .profilepic[data-v-6cc2c84b]{width:13rem;height:13rem;background-image:linear-gradient(240.51deg,#01b5ff,#00c957);padding:3px;border-radius:50%}.frame__card .title[data-v-6cc2c84b]{font-weight:700;font-size:3rem;line-height:4rem;color:#fff}.frame__card .sub[data-v-6cc2c84b]{font-weight:500;font-size:1.8rem;line-height:2.4rem;background:linear-gradient(240.51deg,#01b5ff,#00c957);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.frame__card .desc[data-v-6cc2c84b]{margin-top:4rem;font-weight:400;font-size:1.6162rem;line-height:24px;color:#fff}.links[data-v-6cc2c84b]{margin-top:3rem}.links .icon[data-v-6cc2c84b]{width:3rem;height:3rem;margin-right:3rem}","",{version:3,sources:["webpack://components/FrameCard.vue"],names:[],mappings:"AACA,8BACI,YAAa,CACb,qBAAsB,CACtB,sBAAuB,CACvB,sBAAuB,CACvB,2BAA4B,CAC5B,eAAgB,CAChB,kBAAmB,CACnB,iBACJ,CAEA,0CACI,WAAY,CACZ,YAAa,CACb,2DAAsE,CACtE,WAAY,CACZ,iBAEJ,CAEA,qCACI,eAAgB,CAChB,cAAe,CACf,gBAAiB,CACjB,UACJ,CAEA,mCACI,eAAgB,CAChB,gBAAiB,CACjB,kBAAmB,CACnB,qDAAgE,CAChE,4BAA6B,CAC7B,mCAAoC,CACpC,oBACJ,CAEA,oCACI,eAAgB,CAChB,eAAgB,CAChB,mBAAoB,CACpB,gBAAiB,CACjB,UACJ,CAEA,wBACI,eACJ,CAEA,8BACI,UAAW,CACX,WAAY,CACZ,iBACJ",sourcesContent:["\n.frame__card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 25.5389px 30.0995px;\n    max-width: 369px;\n    background: #000D23;\n    border-radius: 8px;\n}\n\n.frame__card .profilepic {\n    width: 13rem;\n    height: 13rem;\n    background-image: linear-gradient(240.51deg, #01B5FF 0%, #00C957 100%);\n    padding: 3px;\n    border-radius: 50%;\n\n}\n\n.frame__card .title {\n    font-weight: 700;\n    font-size: 3rem;\n    line-height: 4rem;\n    color: #FFFFFF;\n}\n\n.frame__card .sub {\n    font-weight: 500;\n    font-size: 1.8rem;\n    line-height: 2.4rem;\n    background: linear-gradient(240.51deg, #01B5FF 0%, #00C957 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n}\n\n.frame__card .desc {\n    margin-top: 4rem;\n    font-weight: 400;\n    font-size: 1.6162rem;\n    line-height: 24px;\n    color: #FFFFFF;\n}\n\n.links {\n    margin-top: 3rem;\n}\n\n.links .icon {\n    width: 3rem;\n    height: 3rem;\n    margin-right: 3rem;\n}\n"],sourceRoot:""}]),e.exports=r},301:function(e,t,n){"use strict";n.r(t);n(283),n(22),n(50);var r=n(0),c=Object(r.b)({data:function(){return{}},props:{profilePic:{type:String,required:!0},title:{type:String,required:!0},sub:{type:String,required:!0},description:{type:String,required:!0},links:{type:Object,default:function(){return{fb:"",email:"",linkedin:""}}},styles:{type:String,default:""}}}),o=(n(294),n(23)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"frame__card foreground",style:e.styles},[t("img",{staticClass:"profilepic",attrs:{src:e.profilePic,alt:"profilePic"}}),e._v(" "),t("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("h4",{staticClass:"sub"},[e._v(" "+e._s(e.sub))]),e._v(" "),t("h5",{staticClass:"desc"},[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),t("div",{staticClass:"links"},[t("a",{attrs:{href:e.links.email||"#"}},[t("img",{staticClass:"icon",attrs:{src:"/images/aboutus/Email-icon.svg",alt:"Email_icon"}})]),e._v(" "),t("a",{attrs:{href:e.links.fb||"#"}},[t("img",{staticClass:"icon",attrs:{src:"/images/aboutus/Facebook-icon.svg",alt:"Facebook_icon"}})]),e._v(" "),t("a",{attrs:{href:e.links.linkedin||"#"}},[t("img",{staticClass:"icon",attrs:{src:"/images/aboutus/Linkedin-icon.svg",alt:"Linkedin_icon"}})])])])}),[],!1,null,"6cc2c84b",null);t.default=component.exports}}]);