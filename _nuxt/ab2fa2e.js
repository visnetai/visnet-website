(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{308:function(e,t,o){var n;"undefined"!=typeof self&&self,n=()=>(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function i(e){for(;e.children&&e.children.length>0;)i(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach((t=>{e.material[t]&&null!==e.material[t]&&"function"==typeof e.material[t].dispose&&e.material[t].dispose()})),e.material.dispose())}e.r(t),e.d(t,{default:()=>d}),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};const s="object"==typeof window;let o=s&&window.THREE||{};s&&!window.VANTA&&(window.VANTA={});const n=s&&window.VANTA||{};n.register=(e,t)=>n[e]=e=>new t(e),n.version="0.5.24";const r=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};n.VantaBase=class{constructor(e={}){if(!s)return!1;n.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||"string"==typeof e)&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(o=this.options.THREE),this.el=this.options.el,null==this.el)r('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const e=this.el;if(this.el=(i=e,document.querySelector(i)),!this.el)return void r("Cannot find element",e)}var i,h;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(e){return r("Init error",e),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(h=this.options.backgroundColor,"number"==typeof h?"#"+("00000"+h.toString(16)).slice(-6):h)))}this.initMouse(),this.resize(),this.animationLoop();const a=window.addEventListener;a("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(a("scroll",this.windowMouseMoveWrapper),a("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(a("touchstart",this.windowTouchWrapper),a("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&a("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if("undefined"!=typeof Node&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const t=this.el.childNodes[e];if(t.nodeType===Node.TEXT_NODE){const e=document.createElement("span");e.textContent=t.textContent,t.parentElement.insertBefore(e,t),t.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],"static"===getComputedStyle(t).position&&(t.style.position="relative"),"auto"===getComputedStyle(t).zIndex&&(t.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){o.WebGLRenderer?(this.renderer=new o.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new o.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const i=e.clientX-t.left,s=e.clientY-t.top;i>=0&&s>=0&&i<=t.width&&s<=t.height&&(this.mouseX=i,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(i,s))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(1===e.touches.length){const i=e.touches[0].clientX-t.left,s=e.touches[0].clientY-t.top;i>=0&&s>=0&&i<=t.width&&s<=t.height&&(this.mouseX=i,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(i,s))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const i=Math.round(2*e.alpha)-t.left,s=Math.round(2*e.beta)-t.top;i>=0&&s>=0&&i<=t.width&&s<=t.height&&(this.mouseX=i,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(i,s))}triggerMouseMove(e,t){void 0===e&&void 0===t&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const i=e/this.width,s=t/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(i,s)}setSize(){this.scale||(this.scale=1),"undefined"!=typeof navigator&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600)&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,s=t.top+i;return s-window.innerHeight<=i&&i<=s+e}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const e=performance.now();if(this.prevNow){let t=(e-this.prevNow)/(1e3/60);t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&i(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),n.current===this&&(n.current=null)}};const h=n.VantaBase;let a="object"==typeof window&&window.THREE;class l extends h{constructor(e){a=e.THREE||a,a.Color.prototype.toVector=function(){return new a.Vector3(this.r,this.g,this.b)},super(e),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new a.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new a.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(e){super.setOptions(e),this.updateUniforms()}initBasicShader(e=this.fragmentShader,t=this.vertexShader){t||(t="uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"),this.updateUniforms(),"function"==typeof this.valuesChanger&&this.valuesChanger();const i=new a.ShaderMaterial({uniforms:this.uniforms,vertexShader:t,fragmentShader:e}),s=this.options.texturePath;s&&(this.uniforms.iTex={type:"t",value:(new a.TextureLoader).load(s)});const o=new a.Mesh(new a.PlaneGeometry(2,2),i);this.scene.add(o),this.camera=new a.Camera,this.camera.position.z=1}updateUniforms(){const e={};let t,i;for(t in this.options)i=this.options[t],-1!==t.toLowerCase().indexOf("color")?e[t]={type:"v3",value:new a.Color(i).toVector()}:"number"==typeof i&&(e[t]={type:"f",value:i});return Object.assign(this.uniforms,e)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}class u extends l{}const d=n.register("CLOUDS2",u);return u.prototype.defaultOptions={backgroundColor:0,skyColor:6072010,cloudColor:3362176,lightColor:16777215,speed:1,texturePath:"./gallery/noise.png",scaleMobile:4},u.prototype.fragmentShader="uniform vec2 iResolution;\nuniform vec2 iMouse;\nuniform float iTime;\nuniform sampler2D iTex;\nuniform float speed;\nuniform vec3 skyColor;\nuniform vec3 cloudColor;\nuniform vec3 lightColor;\n\n# define T texture2D(iTex, fract((s*p.zw + ceil(s*p.x)) / 200.0)).y / (s += s) * 4.0\n\nvoid main(){\n    vec2 coord = gl_FragCoord.xy;\n    vec4 p, d = vec4(0.8, 0, coord / iResolution.y - 0.65);\n    vec3 out1 = skyColor - d.w; // sky gradient\n    float s, f, t = 200.0 + sin(dot(coord,coord));\n    const float MAX_ITER = 100.0;\n    for (float i = 1.0; i <= MAX_ITER; i += 1.0) {\n      t -= 2.0; if (t < 0.0) { break; } // march step\n      p = 0.05 * t * d;\n      p.xz += iTime * 0.50000 * speed; // movement through space\n      p.x += sin(iTime * 0.25 * speed) * 0.25;\n      s = 2.0;\n      f = p.w + 1.0-T-T-T-T;\n      // f = p.w + 1.0 - 0.25*noise(p.xyz * 2.0) - 0.25*noise(p.zxy * 2.01) - 0.25*noise(p.yzx * 2.03);\n      if (f < 0.0) {\n        vec3 cloudColorShading = mix(lightColor, cloudColor, -f);\n        out1 = mix(out1, cloudColorShading, -f * 0.4);\n      }\n    }\n    gl_FragColor = vec4(out1, 1.0);\n}",t})(),e.exports=n()}}]);