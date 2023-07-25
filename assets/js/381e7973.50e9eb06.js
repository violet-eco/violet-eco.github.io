"use strict";(self.webpackChunkviolet_eco_github_io=self.webpackChunkviolet_eco_github_io||[]).push([[9177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?s.createElement(f,i(i({ref:t},l),{},{components:n})):s.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=n(7462),r=(n(7294),n(3905));const a={slug:"filesystem",sidebar_position:3,description:"This document describes the structure, features and behaviours to both applications and libraries."},i="Filesystem",o={unversionedId:"specs/filesystem",id:"specs/filesystem",title:"Filesystem",description:"This document describes the structure, features and behaviours to both applications and libraries.",source:"@site/docs/specs/filesystem.md",sourceDirName:"specs",slug:"/specs/filesystem",permalink:"/docs/specs/filesystem",draft:!1,editUrl:"https://github.com/violet-eco/docs/tree/main/docs/docs/specs/filesystem.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"filesystem",sidebar_position:3,description:"This document describes the structure, features and behaviours to both applications and libraries."},sidebar:"violetSidebar",previous:{title:"Applications",permalink:"/docs/specs/applications"},next:{title:"Permissions",permalink:"/docs/specs/permissions"}},c={},p=[{value:"Structure",id:"structure",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filesystem"},"Filesystem"),(0,r.kt)("p",null,"Violet utilizes the ",(0,r.kt)("strong",{parentName:"p"},"Btrfs")," filesystem as the primary storage system. There are three partitions used for data:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"FAT32 partition for bootloader:")," This partition is dedicated to storing the bootloader, which is responsible for booting the operating system."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"FAT32 partition for the system (",(0,r.kt)("inlineCode",{parentName:"strong"},"/sys")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"/etc/sys"),"):")," The system partition contains essential system files and configurations that are necessary for the proper functioning of the operating system."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Btrfs partition for user data:")," The user data partition is where user-specific files and data are stored.")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"/\n\u251c\u2500\u2500 apps\n\u2502  \u2514\u2500\u2500 <appname>                        An application's folder\n\u2502     \u251c\u2500\u2500 content                       Executables, static resources, etc\n\u2502     \u251c\u2500\u2500 crashsaves\n\u2502     \u2502  \u2514\u2500\u2500 [timestamp]_[pid].csf <F>\n\u2502     \u251c\u2500\u2500 data                          Application's data, such as databases, etc\n\u2502     \u251c\u2500\u2500 packages                      Packages (original package + update packages)\n\u2502     \u2514\u2500\u2500 sandboxes\n\u251c\u2500\u2500 dev                                 Devices\n\u2502  \u251c\u2500\u2500 bst                              Basic storage devices (SD cards, USB drives)\n\u2502  \u251c\u2500\u2500 cam                              Cameras\n\u2502  \u251c\u2500\u2500 etc                              Uncategorized devices\n\u2502  \u251c\u2500\u2500 mic                              Microphones\n\u2502  \u251c\u2500\u2500 net                              Network adapters\n\u2502  \u251c\u2500\u2500 snd                              Sound-related output devices\n\u2502  \u251c\u2500\u2500 sst                              Sensitive storage devices (SSDs, HDDs)\n\u2502  \u2514\u2500\u2500 wrl                              Other supported wireless devices (Bluetooth adapter, etc.)\n\u251c\u2500\u2500 etc\n\u2502  \u251c\u2500\u2500 env      <F>\n\u2502  \u251c\u2500\u2500 hosts    <F>\n\u2502  \u251c\u2500\u2500 logs\n\u2502  \u2502  \u251c\u2500\u2500 fsck_btrfs        <F>\n\u2502  \u2502  \u251c\u2500\u2500 fsck_btrfs_err    <F>\n\u2502  \u2502  \u251c\u2500\u2500 logins            <F>\n\u2502  \u2502  \u251c\u2500\u2500 sys                           Logs of system services\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 app            <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 crashsave      <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 crypto         <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 flow           <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 fs             <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 hw             <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 i18n           <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 net            <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 perm           <F>\n\u2502  \u2502  \u2502  \u251c\u2500\u2500 process        <F>\n\u2502  \u2502  \u2502  \u2514\u2500\u2500 ui             <F>\n\u2502  \u2502  \u251c\u2500\u2500 upex              <F>\n\u2502  \u2502  \u2514\u2500\u2500 wifi              <F>\n\u2502  \u2514\u2500\u2500 sys\n\u2502     \u251c\u2500\u2500 awake             <F>\n\u2502     \u251c\u2500\u2500 hashes            <F>\n\u2502     \u251c\u2500\u2500 registry          <F>\n\u2502     \u2514\u2500\u2500 users             <F>\n\u251c\u2500\u2500 fl\n\u251c\u2500\u2500 home\n\u2502  \u2514\u2500\u2500 <user>\n\u2502     \u251c\u2500\u2500 apps\n\u2502     \u2502  \u2514\u2500\u2500 <appname>\n\u2502     \u2502     \u251c\u2500\u2500 content\n\u2502     \u2502     \u251c\u2500\u2500 crashsaves\n\u2502     \u2502     \u2502  \u2514\u2500\u2500 [timestamp]_[pid].csf <F>\n\u2502     \u2502     \u251c\u2500\u2500 data\n\u2502     \u2502     \u251c\u2500\u2500 packages\n\u2502     \u2502     \u2514\u2500\u2500 sandboxes\n\u2502     \u251c\u2500\u2500 desktop\n\u2502     \u251c\u2500\u2500 documents\n\u2502     \u251c\u2500\u2500 downloads\n\u2502     \u251c\u2500\u2500 movies\n\u2502     \u251c\u2500\u2500 music\n\u2502     \u2514\u2500\u2500 pictures\n\u251c\u2500\u2500 mnt\n\u251c\u2500\u2500 sys\n\u2502  \u251c\u2500\u2500 apps\n\u2502  \u251c\u2500\u2500 backup\n\u2502  \u251c\u2500\u2500 boot\n\u2502  \u251c\u2500\u2500 kernel\n\u2502  \u2514\u2500\u2500 old\n\u2514\u2500\u2500 tmp\n   \u2514\u2500\u2500 <user>\n")))}d.isMDXComponent=!0}}]);