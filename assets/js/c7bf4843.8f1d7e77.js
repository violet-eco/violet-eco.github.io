"use strict";(self.webpackChunkviolet_eco_github_io=self.webpackChunkviolet_eco_github_io||[]).push([[6450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(v,a(a({ref:t},c),{},{components:n})):o.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const r={slug:"developer-mode",sidebar_position:2,description:"The developer mode enables several features that are not available by default."},a="Developer Mode",i={unversionedId:"technical/developer-mode",id:"technical/developer-mode",title:"Developer Mode",description:"The developer mode enables several features that are not available by default.",source:"@site/docs/technical/developer-mode.md",sourceDirName:"technical",slug:"/technical/developer-mode",permalink:"/docs/technical/developer-mode",draft:!1,editUrl:"https://github.com/violet-eco/docs/tree/main/docs/docs/technical/developer-mode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"developer-mode",sidebar_position:2,description:"The developer mode enables several features that are not available by default."},sidebar:"violetSidebar",previous:{title:"Overview",permalink:"/docs/technical/overview"},next:{title:"Integrity",permalink:"/docs/technical/integrity"}},s={},p=[{value:"How to enable?",id:"how-to-enable",level:2},{value:"Kernel Module Development",id:"kernel-module-development",level:2},{value:"Application proxies",id:"application-proxies",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"developer-mode"},"Developer Mode"),(0,l.kt)("p",null,"The developer mode enables several features that are not\navailable by default. Only administrator user get access to\nthem when they are enabled."),(0,l.kt)("h2",{id:"how-to-enable"},"How to enable?"),(0,l.kt)("p",null,"Developer mode can be enabled either by typing the following command\nin the terminal:"),(0,l.kt)("p",null,"Developer Mode can be enabled in two ways:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the terminal and type following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"vio central --enable dev-mode\n")),(0,l.kt)("p",null,"Alternatively, while holding the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift")," keys, type ",(0,l.kt)("inlineCode",{parentName:"p"},"DEV"),"."),(0,l.kt)("p",null,"Once Developer Mode is enabled, additional features and options become accessible,\nproviding developers with greater control and flexibility over the system."),(0,l.kt)("h2",{id:"kernel-module-development"},"Kernel Module Development"),(0,l.kt)("p",null,"Kernel module development is a powerful capability offered by Violet's Developer\nMode that allows developers to extend the functionality of the operating system at\nthe kernel level. Kernel modules are pieces of code that can be dynamically loaded\nand unloaded into the running kernel."),(0,l.kt)("p",null,"Kernel modules have direct access to various services and resources provided by Sakura,\nsuch as memory management, process scheduling, IPC."),(0,l.kt)("h2",{id:"application-proxies"},"Application proxies"),(0,l.kt)("p",null,"Application proxies collect all calls made by the application to the system.\nIt is useful for applications debugging."),(0,l.kt)("p",null,"When a proxy is set up for an application, all system calls sent to this application\nwill be transferred to the proxy, which will be able to do whatever it wants with it.\nIt's possible for the proxy to never answer the signal, to change its content before actually sending it to the system, etc."),(0,l.kt)("p",null,'Basic usage of an application proxy is as a "listener": it only listens to\nspecific signals and logs them, without cancelling them and/or modifying them.\nThis is useful to check all filesystem access requested by an application, in real time.'))}u.isMDXComponent=!0}}]);