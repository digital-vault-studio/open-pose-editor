if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const f=e=>i(e,o),a={module:{uri:o},exports:r,require:f};n[o]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(s(...e),r)))}}define(["./workbox-5a48017c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"854209f1bb64f5e89bc06614af0df717"},{url:"android-chrome-512x512.png",revision:"51e02545615240080450aede47678ee9"},{url:"apple-touch-icon.png",revision:"cda901d5eff80bbcc4f88ff84ef6ad37"},{url:"assets/data-40bf0b01.bin",revision:null},{url:"assets/foot-39a69ffb.fbx",revision:null},{url:"assets/hand-fba36931.fbx",revision:null},{url:"assets/index-2249a735.css",revision:null},{url:"assets/index-95a9e173.js",revision:null},{url:"assets/reworked_hand-3e16934c.fbx",revision:null},{url:"assets/workbox-window.prod.es5-08b2315b.js",revision:null},{url:"favicon-16x16.png",revision:"0fb0887f4b5e004347a86a60cf19a06b"},{url:"favicon-32x32.png",revision:"b3401f2a7105b73a4493feb74185c43d"},{url:"favicon.ico",revision:"1d92e313f5be2dc6dc84bbfcc27c6c84"},{url:"icons/icon-128x128.png",revision:"20b27cdf1ae7a124025ce658f21944fb"},{url:"icons/icon-144x144.png",revision:"b8df57544cd021bb7748e6be4fe5f1fa"},{url:"icons/icon-152x152.png",revision:"68976934838357061a7625ea86c5cf36"},{url:"icons/icon-192x192.png",revision:"da7f40aba27991d100512157655c0747"},{url:"icons/icon-384x384.png",revision:"d801564ecd4f0c9d82fcb830eccd5a0e"},{url:"icons/icon-48x48.png",revision:"c64af69ce04a7bf77a3206febcfe3ac5"},{url:"icons/icon-512x512.png",revision:"bd399c546100875e0e6561c7fa2b66b7"},{url:"icons/icon-72x72.png",revision:"f5850467df869259812388757cf1cc42"},{url:"icons/icon-96x96.png",revision:"7751c5f72f1bb067cbae0a4c48b1936d"},{url:"index.html",revision:"98ec7fc6032a52edd57c90d8509f09b6"},{url:"mstile-150x150.png",revision:"959106e328b299fa69bb37ec725590f7"},{url:"safari-pinned-tab.svg",revision:"36f4ebfa2c3e0365e37ff273fc513994"},{url:"favicon.ico",revision:"1d92e313f5be2dc6dc84bbfcc27c6c84"},{url:"apple-touch-icon.png",revision:"cda901d5eff80bbcc4f88ff84ef6ad37"},{url:"safari-pinned-tab.svg",revision:"36f4ebfa2c3e0365e37ff273fc513994"},{url:"icons/icon-72x72.png",revision:"f5850467df869259812388757cf1cc42"},{url:"icons/icon-96x96.png",revision:"7751c5f72f1bb067cbae0a4c48b1936d"},{url:"icons/icon-128x128.png",revision:"20b27cdf1ae7a124025ce658f21944fb"},{url:"icons/icon-144x144.png",revision:"b8df57544cd021bb7748e6be4fe5f1fa"},{url:"icons/icon-152x152.png",revision:"68976934838357061a7625ea86c5cf36"},{url:"icons/icon-192x192.png",revision:"da7f40aba27991d100512157655c0747"},{url:"icons/icon-384x384.png",revision:"d801564ecd4f0c9d82fcb830eccd5a0e"},{url:"icons/icon-512x512.png",revision:"bd399c546100875e0e6561c7fa2b66b7"},{url:"manifest.webmanifest",revision:"537763c153e24ba45020facf64957327"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.CacheFirst({cacheName:"jsdelivr-cdn",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/openpose-editor.oss-cn-beijing\.aliyuncs\.com\/.*/i,new e.CacheFirst({cacheName:"aliyuncs",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
