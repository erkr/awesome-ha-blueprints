"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[89],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?o.createElement(h,a(a({ref:e},m),{},{components:n})):o.createElement(h,a({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8657:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"Importing a Blueprint",description:"How to import a blueprint in Home Assistant"},a=void 0,p={unversionedId:"importing-a-blueprint",id:"importing-a-blueprint",title:"Importing a Blueprint",description:"How to import a blueprint in Home Assistant",source:"@site/docs/importing-a-blueprint.mdx",sourceDirName:".",slug:"/importing-a-blueprint",permalink:"/awesome-ha-blueprints/docs/importing-a-blueprint",draft:!1,editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/importing-a-blueprint.mdx",tags:[],version:"current",frontMatter:{title:"Importing a Blueprint",description:"How to import a blueprint in Home Assistant"},sidebar:"docs",previous:{title:"Introduction",permalink:"/awesome-ha-blueprints/docs/introduction"},next:{title:"Controllers-Hooks Ecosystem",permalink:"/awesome-ha-blueprints/docs/controllers-hooks-ecosystem"}},l={},s=[{value:"Option 1: My Home Assistant",id:"option-1-my-home-assistant",level:2},{value:"Option 2: Direct Link",id:"option-2-direct-link",level:2}],m={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/docs/automation/using_blueprints/"},"Official documentation on Using Automation Blueprints")," for the detailed process of importing blueprints into Home Assistant and using them for automations."))),(0,r.kt)("h2",{id:"option-1-my-home-assistant"},"Option 1: My Home Assistant"),(0,r.kt)("p",null,"If you're running Home Assistant Core 2021.3 or later, you can import blueprints via ",(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/my/"},"My Home Assistant"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Look for the blueprint you'd like to import ",(0,r.kt)("a",{parentName:"li",href:"blueprints"},"here"),";"),(0,r.kt)("li",{parentName:"ol"},"In the page of the blueprint you'd like to import, click on the button: ",(0,r.kt)("img",{parentName:"li",src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"My Import blueprint"})),(0,r.kt)("li",{parentName:"ol"},"In the new page, click on ",(0,r.kt)("strong",{parentName:"li"},"Open Link"),". You'll be redirected to the Blueprint Import view on your Home Assistant instance."),(0,r.kt)("li",{parentName:"ol"},"If desired, change the name of the blueprint and finish the import;"),(0,r.kt)("li",{parentName:"ol"},"You're good to go! Now your blueprint can be used for generating automations.")),(0,r.kt)("h2",{id:"option-2-direct-link"},"Option 2: Direct Link"),(0,r.kt)("p",null,"This option is the standard way of importing blueprints directly from the Home Assistant UI."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Look for the blueprint you'd like to import ",(0,r.kt)("a",{parentName:"li",href:"blueprints"},"here"),";"),(0,r.kt)("li",{parentName:"ol"},"In the page of the blueprint you'd like to import, click on the ",(0,r.kt)("strong",{parentName:"li"},"Copy Link")," button on the top of the page. The URL for the blueprint is now in your clipboard;"),(0,r.kt)("li",{parentName:"ol"},"On your Home Assistant instance go to ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," and then ",(0,r.kt)("strong",{parentName:"li"},"Blueprints")),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Import Blueprint")," button in the bottom right corner. A new dialog will pop-up;"),(0,r.kt)("li",{parentName:"ol"},"Paste the URL for the blueprint and click on ",(0,r.kt)("strong",{parentName:"li"},"Preview Blueprint"),";"),(0,r.kt)("li",{parentName:"ol"},"If desired, change the name of the blueprint and finish the import;"),(0,r.kt)("li",{parentName:"ol"},"You're good to go! Now your blueprint can be used for generating automations.")))}u.isMDXComponent=!0}}]);