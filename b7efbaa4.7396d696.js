(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(1),i=n(9),r=(n(0),n(289)),o={id:"ecosystem-ember",title:"single-spa-ember",sidebar_label:"Ember"},p=[{value:"Overview",id:"overview",children:[]},{value:"API",id:"api",children:[{value:"loadEmberApp",id:"loademberapp",children:[]},{value:"singleSpaEmber",id:"singlespaember",children:[]}]},{value:"Usage with ember cli",id:"usage-with-ember-cli",children:[]}],l={rightToc:p},s="wrapper";function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"single-spa-ember is a helper library that helps implement ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.emberjs.com/"}),"Ember.js"),". Check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-ember"}),"single-spa-ember github"),"."),Object(r.b)("p",null,"It is available on npm as ",Object(r.b)("inlineCode",{parentName:"p"},"single-spa-ember"),", and also available on bower as ",Object(r.b)("inlineCode",{parentName:"p"},"single-spa-ember")," in case you want to use it with ember cli and need to use bower."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"When you are building an ember application that you want to work as a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications"}),"single-spa application"),", there are five things you need to implement:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"}),"loading function")),Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#activity-function"}),"activity function")),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#bootstrap"}),"bootstrap function")),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#mount"}),"mount function")),Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#unmount"}),"unmount function"))),Object(r.b)("p",null,"Single-spa-ember will help you implement all of those except for the activity function."),Object(r.b)("p",null,"Note that the loading and activity functions are part of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md"}),"single-spa root application"),", whereas the bootstrap, mount, and unmount functions are part of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md"}),"single-spa application")),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"loademberapp"},"loadEmberApp"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"loadEmberApp(appName, appUrl, vendorUrl)")," is a function that helps you implement the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"}),"loading function")," for your ember application.\n",Object(r.b)("inlineCode",{parentName:"p"},"appName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"appUrl")," are both strings and both required, whereas ",Object(r.b)("inlineCode",{parentName:"p"},"vendorUrl")," is an optional string."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// In the single-spa root application\n\nimport {registerApplication} from 'single-spa';\nimport {loadEmberApp} from 'single-spa-ember';\n\nconst appName = 'ember-app';\nconst loadingFunction = () => loadEmberApp(appName, '/dist/ember-app/assets/ember-app.js', '/dist/ember-app/assets/vendor.js');\nconst activityFunction = location => location.hash.startsWith('ember');\n\nregisterApplication(appName, loadingFunction, activityFunction);\n")),Object(r.b)("h3",{id:"singlespaember"},"singleSpaEmber"),Object(r.b)("p",null,"Single-spa-ember will implement the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#application-lifecycle"}),"single-spa lifecyle functions")," for you. To use it, you call the default export as a function with a configuration object, which returns an object that has ",Object(r.b)("inlineCode",{parentName:"p"},"bootstrap"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mount"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"unmount")," lifecycle functions on it. The provided configuration object has the following options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"App")," (required): The ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"}),"ember Application"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createOpts")," (optional): The options to provide when calling ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"}),"App.create(options)"),". See the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"}),"ember docs")," for more details.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// In the ember application\nimport singleSpaEmber from 'single-spa-ember/src/single-spa-ember';\n\nconst emberLifecycles = singleSpaEmber({\n  appName: 'ember-app', // required\n  createOpts: { // See https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application\n    rootElement: '#ember-app',\n  },\n});\n\nexport const bootstrap = emberLifecycles.bootstrap;\nexport const mount = emberLifecycles.mount;\nexport const unmount = emberLifecycles.unmount;\n")),Object(r.b)("h2",{id:"usage-with-ember-cli"},"Usage with ember cli"),Object(r.b)("p",null,"For the most part, you can get applications that use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ember-cli.com/"}),"ember cli")," to work pretty seamlessly with single-spa. Maybe the biggest thing you'll have to worry about is that ember-cli assumes that it controls the entire html page, whereas a single-spa application does not. However, usually we can achieve equivalent behavior by just loading the vendor and app bundles into the html page dynamically, instead of baking them right into the html page. Below is a description of the known things you should do when setting up an ember-cli application with single-spa:"),Object(r.b)("p",null,"First, since the ember cli only supports dependencies from bower, you'll need to do:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bower init")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bower install single-spa-ember --save"))),Object(r.b)("p",null,"Add the following options to your ember-cli-build.js file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* eslint-env node */\n'use strict';\n\nconst EmberApp = require('ember-cli/lib/broccoli/ember-app');\n\nmodule.exports = function(defaults) {\n  let app = new EmberApp(defaults, {\n    autoRun: false, // Set autoRun to false, because we only want the ember app to render to the DOM when single-spa tells it to.\n    storeConfigInMeta: false, // We're making a single-spa application, which doesn't exclusively own the html file. So we don't want to have to have a `<meta>` tag for the ember environment to be initialized.\n        fingerprint: {\n            customHash: null, // This is optional, just will make it easier for you to have the same url every time you do an ember build.\n        },\n    // Add options here\n  });\n  \n  // Tell ember how to use the single-spa-ember library\n  app.import('bower_components/single-spa-ember/amd/single-spa-ember.js', {\n        using: [\n            {transformation: 'amd', as: 'single-spa-ember'},\n        ],\n    });\n\n  return app.toTree();\n};\n")),Object(r.b)("p",null,"In your single-spa root application (which is separate from anything generated by ember cli):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// root-application.js\nimport * as singleSpa from 'single-spa';\nimport {loadEmberApp} from 'single-spa-ember';\n\nsingleSpa.registerApplication('ember-app', loadingFunction, activityFunction);\n\nfunction activityFunction(location) {\n  // Only render the ember app when the url hash starts with ember\n  return location.hash.startsWith('ember');\n}\n\n// single-spa-ember helps us load the script tags and give the ember app module to single-spa.\nfunction loadingFunction() {\n  const appName = 'ember-app';\n  const appUrl = '/dist/ember-app/assets/ember-app.js';\n  const vendorUrl = '/dist/ember-app/assets/vendor.js'; // Optional if you have one vendor bundle used for many different ember apps\n  return loadEmberApp(appName, appUrl, vendorUrl);\n}\n")),Object(r.b)("p",null,"In your app.js file (that is generated by ember cli)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// app.js (the ember application)\nimport Ember from 'ember';\nimport Resolver from './resolver';\nimport loadInitializers from 'ember-load-initializers';\nimport config from './config/environment';\nimport singleSpaEmber from 'single-spa-ember';\n\n// This part is generated by the ember cli\nconst App = Ember.Application.extend({\n  modulePrefix: config.modulePrefix,\n  podModulePrefix: config.podModulePrefix,\n  Resolver\n});\n\nloadInitializers(App, config.modulePrefix);\n\nexport default App;\n\n// This is the single-spa part\nconst emberLifecycles = singleSpaEmber({\n    App, // required\n    appName: 'ember-app', // required\n    createOpts: { // optional\n        rootElement: '#ember-app',\n    },\n})\n\n// Single-spa lifecycles.\nexport const bootstrap = emberLifecycles.bootstrap;\nexport const mount = emberLifecycles.mount;\nexport const unmount = emberLifecycles.unmount;\n")))}c.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=o(n),b=a,m=c[p+"."+b]||c[b]||s[b]||r;return n?i.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):i.a.createElement(m,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);