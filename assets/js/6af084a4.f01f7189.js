(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[7961],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(r),d=i,p=h["".concat(o,".").concat(d)]||h[d]||m[d]||n;return r?a.createElement(p,l(l({ref:t},u),{},{components:r})):a.createElement(p,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(7294),i=r(9443);var n=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),c="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,m=e.values,h=e.groupId,d=e.className,p=n(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,a.useState)(i),v=y[0],b=y[1],x=a.Children.toArray(e.children),w=[];if(null!=h){var k=g[h];null!=k&&k!==v&&m.some((function(e){return e.value===k}))&&b(k)}var E=function(e){var t=e.currentTarget,r=w.indexOf(t),a=m[r].value;b(a),null!=h&&(f(h,a),setTimeout((function(){var e,r,a,i,n,l,c,s;(e=t.getBoundingClientRect(),r=e.top,a=e.left,i=e.bottom,n=e.right,l=window,c=l.innerHeight,s=l.innerWidth,r>=0&&n<=s&&i<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;r=w[a]||w[0];break;case s:var i=w.indexOf(e.target)-1;r=w[i]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:E,onClick:E},r)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7294),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e){var t=e.className,r=e.counterClockwise,i=e.dashRatio,n=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:n,dashRatio:i,counterClockwise:r})),d:l({pathRadius:n,counterClockwise:r}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,i=2*Math.PI*a,n=(1-r)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-n:n)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,i=e.classes,l=e.counterClockwise,c=e.styles,o=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,a.createElement)("svg",{className:i.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:i.background,style:c.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(n,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:c.trail}),(0,a.createElement)(n,{className:i.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:o,style:c.path}),s?(0,a.createElement)("text",{className:i.text,style:c.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component);function s(e){var t=e.part,r=Math.round((t-1)/62*100);return(0,a.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),a.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},a.createElement(o,{value:r,text:r+"%"}))}},2053:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return K},default:function(){return ee},frontMatter:function(){return U},metadata:function(){return J},toc:function(){return Y}});var a,i,n,l,c,o,s,u,m,h,d,p,g,f,y,v,b,x,w,k,E,N,C,O,P,S,T,j,_,B,R,H,q,I,Z=r(2122),D=r(9756),M=r(7294),W=r(3905),A=r(8787),Q=r(5064),V=r(8215),z=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var X=function(e){var t=e.title,r=e.titleId,Z=L(e,z);return M.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,a||(a=M.createElement("defs",null,M.createElement("filter",{x:0,y:0,width:1,height:1,id:"critical-save-question-3_yml__a"},M.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=M.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red2.svg"})),n||(n=M.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=M.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green1.svg"})),c||(c=M.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue4.svg"})),o||(o=M.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple3.svg"})),M.createElement("svg",G({height:100,width:90,x:464,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,s||(s=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=M.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#critical-save-question-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=M.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),M.createElement("svg",G({height:100,width:70,x:554,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,h||(h=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:70,x:632,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,d||(d=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:70,x:710,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,p||(p=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:70,x:788,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,g||(g=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:70,x:866,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,f||(f=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,y||(y=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),M.createElement("svg",G({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,v||(v=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,b||(b=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M.createElement("svg",G({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,x||(x=M.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),w||(w=M.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),M.createElement("svg",G({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,k||(k=M.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/yellow.svg"}))),E||(E=M.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),N||(N=M.createElement("circle",{cx:823,cy:110,fill:"#ff0",r:15,stroke:"#000",strokeWidth:2})),C||(C=M.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),M.createElement("svg",G({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,O||(O=M.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/3.svg"}))),M.createElement("svg",G({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},Z),t?M.createElement("title",{id:r},t):null,P||(P=M.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),S||(S=M.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green3.svg",y:250})),T||(T=M.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),j||(j=M.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow3.svg",y:250})),_||(_=M.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green1.svg",y:250})),B||(B=M.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple1.svg",y:250})),R||(R=M.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),H||(H=M.createElement("image",{height:100,width:70,x:138.5,xlinkHref:"/img/pieces/cards/yellow3.svg",y:153.333})),q||(q=M.createElement("image",{height:100,width:70,x:173.5,xlinkHref:"/img/pieces/cards/yellow4.svg",y:186.667})),I||(I=M.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},F=["components"],U={id:"critical-save-question-3",title:"The Critical Save (Question 3)"},K=void 0,J={unversionedId:"beginner/critical-save-question-3",id:"beginner/critical-save-question-3",isDocsHomePage:!1,title:"The Critical Save (Question 3)",description:"<Tabs",source:"@site/docs/beginner/critical-save-question-3.md",sourceDirName:"beginner",slug:"/beginner/critical-save-question-3",permalink:"/docs/beginner/critical-save-question-3",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/critical-save-question-3.md",version:"current",frontMatter:{id:"critical-save-question-3",title:"The Critical Save (Question 3)"},sidebar:"mainSidebar",previous:{title:"The Critical Save (Question 2)",permalink:"/docs/beginner/critical-save-question-2"},next:{title:"The Critical Save (Question 4)",permalink:"/docs/beginner/critical-save-question-4"}},Y=[],$={toc:Y};function ee(e){var t=e.components,r=(0,D.Z)(e,F);return(0,W.kt)("wrapper",(0,Z.Z)({},$,r,{components:t,mdxType:"MDXLayout"}),(0,W.kt)(A.Z,{part:"25",mdxType:"BeginnersGuideProgress"}),(0,W.kt)(Q.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,W.kt)(V.Z,{value:"question",mdxType:"TabItem"},(0,W.kt)("ul",null,(0,W.kt)("li",{parentName:"ul"},"Alice clues yellow to Bob, touching a card on slot 4."),(0,W.kt)("li",{parentName:"ul"},"Is this a ",(0,W.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,W.kt)("em",{parentName:"li"},"Save Clue"),"?"),(0,W.kt)("li",{parentName:"ul"},"What identity does Bob write on the card? (Be specific.)"))),(0,W.kt)(V.Z,{value:"solution",mdxType:"TabItem"},(0,W.kt)("ul",null,(0,W.kt)("li",{parentName:"ul"},"Bob knows that this could be a ",(0,W.kt)("em",{parentName:"li"},"Play Clue")," on the yellow 1."),(0,W.kt)("li",{parentName:"ul"},"However, since it touched his chop, it could also be a ",(0,W.kt)("em",{parentName:"li"},"Save Clue"),". Since yellow 3 and yellow 4 are in the trash, a yellow clue matches those cards, so it could be yellow 3 or yellow 4."),(0,W.kt)("li",{parentName:"ul"},"Bob then notices that Cathy has a yellow 3 in her hand. Since there are only two copies of yellow 3 in the deck, Bob cannot have the yellow 3."),(0,W.kt)("li",{parentName:"ul"},"Bob does not know whether or not this is a ",(0,W.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,W.kt)("em",{parentName:"li"},"Save Clue"),", but he has to treat it as a ",(0,W.kt)("em",{parentName:"li"},"Save Clue")," for the time being until he gets move information."),(0,W.kt)("li",{parentName:"ul"},"Bob writes down an identity of:",(0,W.kt)("ul",{parentName:"li"},(0,W.kt)("li",{parentName:"ul"},"yellow 1 (as a ",(0,W.kt)("em",{parentName:"li"},"Play Clue"),")"),(0,W.kt)("li",{parentName:"ul"},"yellow 4 (as a ",(0,W.kt)("em",{parentName:"li"},"Critical Save"),").")))))),(0,W.kt)(X,{mdxType:"CriticalSaveQuestion3"}))}ee.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);