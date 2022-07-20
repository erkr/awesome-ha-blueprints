"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},976:(e,t,n)=>{n.d(t,{Lu:()=>h,II:()=>s,nb:()=>c});var o=n(7294);const r=function(e){let{variant:t,children:n}=e;return o.createElement("span",{className:"badge badge--"+t},n)},i={action:{type:"Action"},addon:{type:"Add-on"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},a={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};const s=function(e){let{selector:t,required:n,name:s,description:l}=e;const p=t?i[t]:i.none;return o.createElement("div",null,o.createElement("span",{style:a.inputName},s," ",o.createElement(r,{variant:"primary"},p.type)," ",n?o.createElement(r,{variant:"warning"},n," Required"):o.createElement(r,{variant:"info"},"Optional")),o.createElement("br",null),o.createElement("p",{style:a.inputDescription,className:"margin-top--sm"},l),o.createElement("hr",null))},l={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};const p=function(e){let{name:t,required:n,children:i}=e;return o.createElement("div",{className:"margin-bottom--lg"},o.createElement("div",{style:l.requirementNameContainer},o.createElement("h3",{style:l.requirementName},t," "),n?o.createElement(r,{variant:"warning"},n," Required"):o.createElement(r,{variant:"info"},"Optional")),i)};const u={zigbee2mqtt:function(e){let{required:t,refers:n,children:r}=e;return o.createElement(p,{name:"Zigbee2MQTT Integration",required:t},o.createElement("p",null,"If you plan to integrate the ",n," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),o.createElement("p",null,r),o.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){let{required:t,refers:n,children:r}=e;return o.createElement(p,{name:"ZHA Integration",required:t},o.createElement("p",null,"If you plan to integrate the ",n," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),o.createElement("p",null,r),o.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){let{required:t,refers:n,children:r}=e;return o.createElement(p,{name:"deCONZ Integration",required:t},o.createElement("p",null,"If you plan to integrate the ",n," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),o.createElement("p",null,r),o.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){let{required:t,children:n}=e;return o.createElement(p,{name:"Controller Automation",required:t},o.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",o.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),o.createElement("p",null,n),o.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",o.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};const c=function(e){let{id:t,required:n,name:r,refers:i,children:a}=e;const s=t?u[t]:p;return o.createElement(s,{name:r,required:n,refers:i},a)};var d=n(470);const m={myHomeAssistantImage:{width:"100%",maxWidth:212}};const h=function(e){let{category:t,id:n}=e;const[r,i]=(0,o.useState)(!1),a="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+t+"/"+n+"/"+n+".yaml";return o.createElement("div",{className:"card item shadow--md"},o.createElement("div",{className:"card__header margin-bottom--md"},o.createElement("h3",null,"Import this blueprint")),o.createElement("div",{className:"card__body"},o.createElement("div",{className:"row row--no-gutters"},o.createElement("div",{className:"col col--6"},o.createElement("h5",null,"My Home Assistant"),o.createElement("p",null,o.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(a),target:"_blank",rel:"noreferrer"},o.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:m.myHomeAssistantImage})),o.createElement("br",null),o.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),o.createElement("div",{className:"col col--6"},o.createElement("h5",null,"Direct Link"),o.createElement("button",{type:"button",className:"button button--"+(r?"success":"primary"),onClick:async()=>{await navigator.clipboard.writeText(a),i(!0)}},o.createElement("span",null,o.createElement(d.Z,{size:16}),o.createElement("span",null," ",r?"Link Copied!":"Copy Link")))))))}},3606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905)),i=n(976);const a={title:"Controller - Philips 929002398602 Hue Dimmer switch v2",description:"Controller automation for executing any kind of action triggered by the provided Philips 929002398602 Hue Dimmer switch v2. Supports ZHA, Zigbee2MQTT."},s=void 0,l={unversionedId:"blueprints/controllers/philips_929002398602",id:"blueprints/controllers/philips_929002398602",title:"Controller - Philips 929002398602 Hue Dimmer switch v2",description:"Controller automation for executing any kind of action triggered by the provided Philips 929002398602 Hue Dimmer switch v2. Supports ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/philips_929002398602.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/philips_929002398602",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/philips_929002398602",draft:!1,editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/philips_929002398602.mdx",tags:[],version:"current",frontMatter:{title:"Controller - Philips 929002398602 Hue Dimmer switch v2",description:"Controller automation for executing any kind of action triggered by the provided Philips 929002398602 Hue Dimmer switch v2. Supports ZHA, Zigbee2MQTT."}},p={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Available Hooks",id:"available-hooks",level:2},{value:"Light",id:"light",level:3},{value:"Default Mapping",id:"default-mapping",level:4},{value:"Media Player",id:"media-player",level:3},{value:"Default Mapping",id:"default-mapping-1",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Helper - Last Controller Event",id:"helper---last-controller-event",level:3},{value:"Virtual double press events",id:"virtual-double-press-events",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Lu,{id:"philips_929002398602",category:"controllers",mdxType:"ImportCard"}),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This blueprint is part of the ",(0,r.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided Philips 929002398602 Hue Dimmer switch v2. Supports controllers integrated with ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,r.kt)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press actions while the corresponding button is being held. Once released, the loop stops. This is useful when holding down a button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),(0,r.kt)("p",null,"The blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Automations created with this blueprint can be connected with one or more ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/controllers/philips_929002398602#available-hooks"},"Hooks available for this controller")," for additional details."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)(i.nb,{id:"zha",mdxType:"Requirement"}),(0,r.kt)(i.nb,{id:"zigbee2mqtt",mdxType:"Requirement"}),(0,r.kt)(i.nb,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,r.kt)("p",null,"This integration provides the entity which must be provided to the blueprint in the ",(0,r.kt)("strong",{parentName:"p"},"Helper - Last Controller Event")," input. Learn more about this helper by reading the dedicated section in the ",(0,r.kt)("a",{parentName:"p",href:"#helper---last-controller-event"},"Additional Notes"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)(i.II,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,r.kt)(i.II,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with ZHA.",selector:"device",required:"ZHA",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,r.kt)(i.II,{name:"On button short press",description:"Action to run on short on button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"On button long press",description:"Action to run on long on button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"On button release",description:"Action to run on on button release after long press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"On button double press",description:"Action to run on double on button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Off button short press",description:"Action to run on short off button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Off button long press",description:"Action to run on long off button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Off button release",description:"Action to run on off button release after long press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Off button double press",description:"Action to run on double off button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Up button short press",description:"Action to run on short up button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Up button long press",description:"Action to run on long up button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Up button release",description:"Action to run on up button release after long press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Up button double press",description:"Action to run on double up button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Down button short press",description:"Action to run on short down button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Down button long press",description:"Action to run on long down button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Down button release",description:"Action to run on down button release after long press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Down button double press",description:"Action to run on double down button press.",selector:"action",mdxType:"Input"}),(0,r.kt)(i.II,{name:"On button long press - loop until release",description:"Loop the on button action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"On button long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Off button long press - loop until release",description:"Loop the off button action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Off button long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Up button long press - loop until release",description:"Loop the up button action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Up button long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Down button long press - loop until release",description:"Loop the down button action until the button is released.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Down button long press - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Expose on button double press event",description:"Choose whether or not to expose the virtual double press event for the on button. Turn this on if you are providing an action for the on button double press event.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Expose off button double press event",description:"Choose whether or not to expose the virtual double press event for the off button. Turn this on if you are providing an action for the off button double press event.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Expose up button double press event",description:"Choose whether or not to expose the virtual double press event for the up button. Turn this on if you are providing an action for the up button double press event.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Expose down button double press event",description:"Choose whether or not to expose the virtual double press event for the down button. Turn this on if you are providing an action for the down button double press event.",selector:"boolean",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Helper - Double Press delay",description:"Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.",selector:"number",mdxType:"Input"}),(0,r.kt)(i.II,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,r.kt)("h2",{id:"available-hooks"},"Available Hooks"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Virtual double press actions")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some of the following mappings might include actions for virtual double press events, which are disabled by default.\nIf you are using a hook mapping which provides an action for a virtual double press event, please make sure to enable support for virtual double press on the corresponding buttons with the corresponding blueprint input."))),(0,r.kt)("h3",{id:"light"},"Light"),(0,r.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,r.kt)("h4",{id:"default-mapping"},"Default Mapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On button short press -> Turn on"),(0,r.kt)("li",{parentName:"ul"},"On button long press -> Color up (continuous, until release)"),(0,r.kt)("li",{parentName:"ul"},"Off button short press -> Turn off"),(0,r.kt)("li",{parentName:"ul"},"Off button long press -> Color down (continuous, until release)"),(0,r.kt)("li",{parentName:"ul"},"Up button short press -> Brightness up"),(0,r.kt)("li",{parentName:"ul"},"Up button long press -> Brightness up (continuous, until release)"),(0,r.kt)("li",{parentName:"ul"},"Down button short press -> Brightness down"),(0,r.kt)("li",{parentName:"ul"},"Down button long press -> Brightness down (continuous, until release)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,r.kt)("h3",{id:"media-player"},"Media Player"),(0,r.kt)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,r.kt)("h4",{id:"default-mapping-1"},"Default Mapping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On button short press -> Play/Pause"),(0,r.kt)("li",{parentName:"ul"},"On button long press -> Next track"),(0,r.kt)("li",{parentName:"ul"},"Off button short press -> Stop"),(0,r.kt)("li",{parentName:"ul"},"Off button long press -> Previous track"),(0,r.kt)("li",{parentName:"ul"},"Up button short press -> Volume up"),(0,r.kt)("li",{parentName:"ul"},"Up button long press -> Volume up (continuous, until release)"),(0,r.kt)("li",{parentName:"ul"},"Down button short press -> Volume down"),(0,r.kt)("li",{parentName:"ul"},"Down button long press -> Volume down (continuous, until release)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,r.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,r.kt)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,r.kt)("h3",{id:"virtual-double-press-events"},"Virtual double press events"),(0,r.kt)("p",null,"It's also important to note that the controller doesn't natively support double press events. Instead , this blueprint provides virtual double press events. You can read more about them in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#virtual-events"},"general Controllers-Hooks Ecosystem documentation"),"."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2021-11-21"),": first blueprint version \ud83c\udf89")))}d.isMDXComponent=!0},470:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(7294),r=n(5697),i=n.n(r),a=["color","size","title"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=(0,o.forwardRef)((function(e,t){var n=e.color,r=e.size,i=e.title,p=l(e,a);return o.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},p),i?o.createElement("title",null,i):null,o.createElement("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"}),o.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),o.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}))}));p.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),title:i().string},p.defaultProps={color:"currentColor",size:"1em",title:null};const u=p}}]);