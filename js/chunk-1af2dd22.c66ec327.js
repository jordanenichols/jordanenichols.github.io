(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1af2dd22"],{"0909":function(t,e,i){},"0ef9":function(t,e,i){t.exports=i.p+"img/mapDemo.68c1798f.png"},4987:function(t,e,i){},"4c85":function(t,e,i){"use strict";var n=i("0909"),a=i.n(n);a.a},"61d7":function(t,e,i){"use strict";var n=i("8328"),a=i.n(n);a.a},"71ce":function(t,e,i){},"722d":function(t,e,i){"use strict";var n=i("71ce"),a=i.n(n);a.a},8328:function(t,e,i){},"83ff":function(t,e,i){"use strict";var n=i("a700"),a=i.n(n);a.a},"8b37":function(t,e,i){},"960f":function(t,e,i){"use strict";var n=i("4987"),a=i.n(n);a.a},9734:function(t,e,i){},a700:function(t,e,i){},b5b6:function(t,e,i){},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("LandingPage")},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{id:"Home"}},[i("v-col",{staticClass:"pb-0"},[i("v-row",[i("Main")],1),i("v-row",[i("Divider"),i("About"),i("Footer")],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"container",attrs:{id:"#Home"}},[n("v-col",[n("h1",{staticClass:"display-3"},[t._v(" Crowd-Sourced Air Quality Monitoring ")]),n("blockquote",{staticClass:"blockquote item"},[t._v(" BeagleNet is a network of sensing devices designed to get the data we need about urban environments into your hands. With our proprietary Mobile Environmental Sensing Platform (MESP) units deployed on top of public transportation and ride-sharing vehicles, collecting real-time data on environmental characteristics such as air quality, road quality, and crowd density has never been easier. ")]),n("v-btn",{attrs:{elevation:"10"},on:{click:function(e){return t.map()}}},[t._v("View Demo "),n("v-icon",[t._v("mdi-map-marker")])],1)],1),n("v-col",[n("v-card",{staticClass:"item mapImage",attrs:{elevation:"10",width:t.imageHeight()}},[n("p",{staticClass:"mapText"},[t._v("View the map")]),n("div",{staticClass:"mapImageHolder"},[n("v-img",{attrs:{src:i("0ef9")},on:{click:function(e){return t.map()}}})],1)])],1)],1)},c=[],l=(i("b0c0"),{name:"Main",methods:{map:function(){this.$router.push("/map")},imageHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"300px";case"sm":return"400px";case"md":return"500px";case"lg":return"600px";case"xl":return"600px"}}}}),h=l,u=(i("722d"),i("2877")),d=i("6544"),f=i.n(d),p=i("8336"),v=i("b0af"),m=i("62ad"),g=i("132d"),b=i("adda"),y=i("a722"),w=Object(u["a"])(h,r,c,!1,null,"6332ff5e",null),x=w.exports;f()(w,{VBtn:p["a"],VCard:v["a"],VCol:m["a"],VIcon:g["a"],VImg:b["a"],VLayout:y["a"]});var C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"container"},[i("v-row",[i("v-col",{staticClass:"item"},[i("h1",{staticClass:"display-3 about-header",attrs:{id:"About"}},[t._v(" About ")])])],1),i("v-row",[i("v-col",{staticClass:"item"},[i("OurMission")],1),i("v-col",{staticClass:"item"},[i("WhyBeagleNet")],1)],1)],1)},_=[],O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"container"},[i("h2",{staticClass:"display-1 item"},[t._v(" Our Mission ")]),i("blockquote",{staticClass:"blockquote item"},[t._v(" Today, nearly "),i("b",[t._v(" 60% ")]),t._v(" of the world's population lives in cities; a number only expected to increase in the future. Problems like poor air quality and poor city infrastructure impact the health and quality of life of individuals across the globe. Nearly "),i("b",[t._v(" 4.6 million ")]),t._v(" people die each year from causes related to air quality. Potholes are responsible for "),i("b",[t._v(" $1.9 billion ")]),t._v(" of damages each year. To better diagnose these problems, we are developing BeagleNet, powered by our Mobile Environmental Sensing Platorm (MESP). "),i("br"),i("br"),t._v(" MESP units can be mounted on any vehicle, autonomously collecting data on air and road quality, crowd density, ambient noise, and more. Using our mapped data, city officials can make informed decisions on what actions to take to improve our urban environment. Additionaly, companies can enhance their products and services by connecting them to our API. Not to mention "),i("i",[t._v("all")]),t._v(" of the real-time data is available for free, for everyone, right here. ")])])},k=[],A={name:"OurMission"},$=A,T=(i("4c85"),i("a523")),B=Object(u["a"])($,O,k,!1,null,"61350308",null),M=B.exports;f()(B,{VContainer:T["a"]});var j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"container",style:t.updateLeftPadding()},[i("h2",{staticClass:"item display-1"},[t._v(" Why BeagleNet? ")]),i("blockquote",{staticClass:"item blockquote"},[t._v(" Unlike other APIs that offer air quality data, BeagleNet provides high resolution data in real-time. MESP units also have a lower per-unit cost than other air quality sensors, and their portability means data can be accurately measured anywhere; no need to guess the air quality between the position of fixed sensors. ")]),i("ComparisonTable")],1)},L=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"text-center":"","align-center":""}},[i("v-simple-table",[i("thead",[i("tr",[i("th",{staticClass:"text-center"},[t._v("Features")]),i("th",{staticClass:"text-center"},[t._v("BeagleNet")]),i("th",{staticClass:"text-center"},[t._v("AccuWeather")]),i("th",{staticClass:"text-center"},[t._v("Breezometer")]),i("th",{staticClass:"text-center"},[t._v("AQMesh")])])]),i("tbody",[i("tr",[i("td",[t._v("High-Resolution Data")]),i("td",{staticClass:"text-center"},[i("CheckMark")],1),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"},[i("CheckMark")],1),i("td",{staticClass:"text-center"})]),i("tr",[i("td",[t._v("Non-Weather/Air Quality Data")]),i("td",{staticClass:"text-center"},[t._v(" Crowd Density, Road Quality, Ambient Noise ")]),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"})]),i("tr",[i("td",[t._v("Real-Time")]),i("td",{staticClass:"text-center"},[i("CheckMark")],1),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"},[i("CheckMark")],1)]),i("tr",[i("td",[t._v("Mobile Sensors")]),i("td",{staticClass:"text-center"},[i("CheckMark")],1),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"}),i("td",{staticClass:"text-center"})]),i("tr",[i("td",[t._v("Unit Cost")]),i("td",{staticClass:"text-center"},[t._v("$200 per Unit")]),i("td",{staticClass:"text-center"},[t._v("EPA Sensors")]),i("td",{staticClass:"text-center"},[t._v("EPA Sensors, Satellites")]),i("td",{staticClass:"text-center"},[t._v("$10,000 per Unit")])])])])],1)},N=[],W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-bold")])},I=[],P={name:"CheckMark"},E=P,V=Object(u["a"])(E,W,I,!1,null,null,null),Y=V.exports;f()(V,{VIcon:g["a"]});var D={name:"ComparisonTable",components:{CheckMark:Y}},R=D,H=(i("a9e3"),i("5530")),F=(i("8b37"),i("80d2")),q=i("7560"),X=i("58df"),z=Object(X["a"])(q["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(H["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(F["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),U=Object(u["a"])(R,S,N,!1,null,null,null),J=U.exports;f()(U,{VCard:v["a"],VSimpleTable:z});var Q={components:{ComparisonTable:J},methods:{updateLeftPadding:function(){return this.$vuetify.breakpoint.xsOnly||this.$vuetify.breakpoint.smOnly||this.$vuetify.breakpoint.mdOnly?"padding-left: 10vw;":""}}},Z=Q,G=(i("960f"),Object(u["a"])(Z,j,L,!1,null,"f4219280",null)),K=G.exports;f()(G,{VContainer:T["a"]});var tt={components:{OurMission:M,WhyBeagleNet:K}},et=tt,it=(i("61d7"),i("0fd9")),nt=Object(u["a"])(et,C,_,!1,null,"15b5ac4c",null),at=nt.exports;f()(nt,{VCol:m["a"],VContainer:T["a"],VRow:it["a"]});var ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{staticClass:"accent",staticStyle:{width:"100vw",height:"4vh"}})},st=[],rt={},ct=Object(u["a"])(rt,ot,st,!1,null,null,null),lt=ct.exports;f()(ct,{VLayout:y["a"]});var ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"footer accent text-center"},[i("v-card-text",{staticClass:"pt-10"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.home()}}},n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-home")])],1)]}}])},[i("span",{attrs:{color:"secondary"}},[t._v("Home")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.about()}}},n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-help")])],1)]}}])},[i("span",{attrs:{color:"secondary"}},[t._v("About")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.map()}}},n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-map")])],1)]}}])},[i("span",{attrs:{color:"secondary"}},[t._v("Map")])])],1),i("v-divider"),i("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("BeagleNet")])])],1)},ut=[],dt=(i("45fc"),i("96cf"),i("1da1")),ft={data:function(){return{on:!1}},methods:{map:function(){var t=this;return Object(dt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push("/map").then(t.drawer=!1);case 2:case"end":return e.stop()}}),e)})))()},about:function(){var t=this;return Object(dt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$route.matched.some((function(t){var e=t.name;return"home"===e}))){e.next=5;break}t.$vuetify.goTo("#About",t.options),t.drawer=!1,e.next=7;break;case 5:return e.next=7,t.$router.push("/").then((function(){t.$vuetify.goTo("#About",t.options)})).then(t.drawer=!1);case 7:case"end":return e.stop()}}),e)})))()},home:function(){var t=this;return Object(dt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$router.push("/"),e.next=3,t.$vuetify.goTo("#Home",t.options).then(t.drawer=!1);case 3:case"end":return e.stop()}}),e)})))()}}},pt=ft,vt=(i("83ff"),i("99d9")),mt=i("ce7e"),gt=(i("c7cd"),i("b5b6"),i("3a66")),bt=i("8dd9"),yt=i("d10f"),wt=Object(X["a"])(bt["a"],Object(gt["a"])("footer",["height","inset"]),yt["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(H["a"])({},bt["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(H["a"])({},bt["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(F["f"])(t),left:Object(F["f"])(this.computedLeft),right:Object(F["f"])(this.computedRight),bottom:Object(F["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),xt=i("ade3"),Ct=(i("9734"),i("4ad4")),_t=i("a9ad"),Ot=i("16b7"),kt=i("b848"),At=i("75eb"),$t=(i("d3b7"),i("fe6c")),Tt=i("21be"),Bt=Object(X["a"])(Tt["a"],$t["a"],Ct["a"]),Mt=Bt.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),a=0;if(a+=this.left?i-(n-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-o:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(F["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(F["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,a=this.dimensions.content.height,o=t+a,s=i<o;return s&&this.offsetOverflow&&n.top>a?t=this.pageYOffset+(n.top-a):s&&!this.allowOverflow?t=i-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=Ct["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(H["a"])({},this.dimensions.activator),content:Object(H["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),jt=i("f2e7"),Lt=i("d9bd"),St=Object(X["a"])(_t["a"],Ot["a"],kt["a"],At["a"],Mt,jt["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=a+e.width/2-i.width/2:(this.left||this.right)&&(o=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(F["f"])(this.maxWidth),minWidth:Object(F["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(F["k"])(this,"activator",!0)&&Object(Lt["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=Ct["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===F["m"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(xt["a"])(t,this.contentClass,!0),Object(xt["a"])(t,"menuable__content__active",this.isActive),Object(xt["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),Nt=Object(u["a"])(pt,ht,ut,!1,null,"5b10c590",null),Wt=Nt.exports;f()(Nt,{VBtn:p["a"],VCardText:vt["b"],VDivider:mt["a"],VFooter:wt,VIcon:g["a"],VTooltip:St});var It={components:{Main:x,About:at,Divider:lt,Footer:Wt}},Pt=It,Et=Object(u["a"])(Pt,o,s,!1,null,null,null),Vt=Et.exports;f()(Et,{VCol:m["a"],VLayout:y["a"],VRow:it["a"]});var Yt={name:"Home",components:{LandingPage:Vt}},Dt=Yt,Rt=Object(u["a"])(Dt,n,a,!1,null,null,null);e["default"]=Rt.exports}}]);
//# sourceMappingURL=chunk-1af2dd22.c66ec327.js.map