"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e4a7b0de42900d5162bc717478745f5b"],["/static/css/main.6938ee86.css","180b2fbcefcaa978d09d6c80f9717b20"],["/static/js/main.62719f49.js","a1c2a9e796d12785ca40ee88a1c8cbb0"],["/static/media/adijo.7d9cc5fe.m4a","7d9cc5feab99936aa15a622f67f5007e"],["/static/media/cetrtek.98dd10d5.m4a","98dd10d5a678a6c11fa35417ea5c2e0c"],["/static/media/deset.0208fb5c.m4a","0208fb5cfb874e8c93dab1be365e9d84"],["/static/media/devet.9a7a7089.m4a","9a7a70891a1d05b5076fb2ef41ec4540"],["/static/media/doberdan.d03bd738.m4a","d03bd7380c625d8db796f210f58e7fd2"],["/static/media/dobervecer.94aeaab7.m4a","94aeaab763e1f60844ece38c3afa6b91"],["/static/media/dobrojutro.497b4889.m4a","497b4889c71462bd0fd17738f859d82b"],["/static/media/dve.d125a8e9.m4a","d125a8e963f3ce794ce837d72fe2c4e0"],["/static/media/ena.12993eb2.m4a","12993eb25efd3354add926f909097194"],["/static/media/jazsem.f88e2c92.m4a","f88e2c9250dda16859a58ee74d3aade3"],["/static/media/knock.1433383f.wav","1433383fcb4911a9bb1ef42d95d6a959"],["/static/media/lahkonoc.10c816ae.m4a","10c816aed69fb8b04a45312771b4a5fe"],["/static/media/midvasva.2c9740e6.m4a","2c9740e61b3809e079e8c220cceb4761"],["/static/media/mismo.1aa4fa9e.m4a","1aa4fa9e44ed135bca8af682c67f63f4"],["/static/media/nasvidenje.ff430309.m4a","ff4303098709df72af070629a0aa4f5b"],["/static/media/nedelja.46433b87.m4a","46433b879b1068a230ea03a79e6b3333"],["/static/media/onadvasta.071817d2.m4a","071817d238df91dca25294119f227730"],["/static/media/onaje.aec14695.m4a","aec14695c885049c3949df51aeb54ade"],["/static/media/oniso.63c3ebe6.m4a","63c3ebe632b580396edbffdf2b4b52bc"],["/static/media/onje.fdd95caa.m4a","fdd95caabecfc0f12250194ae957084a"],["/static/media/osem.2b42bc9c.m4a","2b42bc9cf7129281a656c6b181e4bcdf"],["/static/media/pet.1c65bb1b.m4a","1c65bb1b25e0341b1ad29327822244c5"],["/static/media/petek.6f87a4d2.m4a","6f87a4d2a9d38d426cb3c673049db57c"],["/static/media/ponedeljek.5770065f.m4a","5770065f8e61378cec924d4e3b287c93"],["/static/media/ring.d0541e32.wav","d0541e32517cdbb6a3033286acb1cdef"],["/static/media/sedem.15c3b166.m4a","15c3b1664a18868e9e8c585e73a21edf"],["/static/media/sest.29581c51.m4a","29581c511ec1613d014ededb4c61465a"],["/static/media/sobota.77c618fa.m4a","77c618faf38b25408bc41dc53bfc1b1c"],["/static/media/sreda.864c91c0.m4a","864c91c0c188b581bd75b38f502b316c"],["/static/media/stiri.d46fe7b9.m4a","d46fe7b9fd82215f3ef67f67322f5f37"],["/static/media/tisi.ad54846f.m4a","ad54846f7f3a26143adbf2868fa4955b"],["/static/media/torek.64c0c886.m4a","64c0c886f1dd2aaf754adc6edf4aae9f"],["/static/media/tri.63e901b7.m4a","63e901b758ebfba4ff3c80cbbb8d8485"],["/static/media/vidvasta.1cd2f04d.m4a","1cd2f04d11e8be27453443f5c68f5a55"],["/static/media/viste.1a8a1288.m4a","1a8a12885f79a85c452701b110b24266"],["/static/media/zdravo.3ef177e0.m4a","3ef177e0cd8c5613b5ddc2c11cce888c"],["/static/media/zivjo.3bebec64.m4a","3bebec64ba86fb44b0278271936076e6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});