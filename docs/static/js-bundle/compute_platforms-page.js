!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=41)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=n(4),a=n(14),o=n(10),c=n.n(o),i=n(0),l=n.n(i),u=n(15),s=n(9),f=function(e){return l.a.forwardRef((function(t,n){return l.a.createElement("div",Object(r.a)({},t,{ref:n,className:c()(t.className,e)}))}))},p=l.a.createContext(null);p.displayName="CardContext";var d=p,m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,s=e.as,f=void 0===s?"img":s,p=Object(a.a)(e,["bsPrefix","className","variant","as"]),d=Object(u.a)(n,"card-img");return l.a.createElement(f,Object(r.a)({ref:t,className:c()(i?d+"-"+i:d,o)},p))}));m.displayName="CardImg",m.defaultProps={variant:null};var h=m,b=f("h5"),v=f("h6"),y=Object(s.a)("card-body"),g=Object(s.a)("card-title",{Component:b}),E=Object(s.a)("card-subtitle",{Component:v}),x=Object(s.a)("card-link",{Component:"a"}),w=Object(s.a)("card-text",{Component:"p"}),O=Object(s.a)("card-header"),j=Object(s.a)("card-footer"),C=Object(s.a)("card-img-overlay"),k=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.bg,f=e.text,p=e.border,m=e.body,h=e.children,b=e.as,v=void 0===b?"div":b,g=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(u.a)(n,"card"),x=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return l.a.createElement(d.Provider,{value:x},l.a.createElement(v,Object(r.a)({ref:t},g,{className:c()(o,E,s&&"bg-"+s,f&&"text-"+f,p&&"border-"+p)}),m?l.a.createElement(y,null,h):h))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=h,k.Title=g,k.Subtitle=E,k.Body=y,k.Link=x,k.Text=w,k.Header=O,k.Footer=j,k.ImgOverlay=C;t.a=k},,function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(12),a=n(13);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(4),a=n(14),o=n(10),c=n.n(o),i=/-(.)/g;var l=n(0),u=n.n(l),s=n(15),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e,t){var n=void 0===t?{}:t,o=n.displayName,i=void 0===o?f(e):o,l=n.Component,p=n.defaultProps,d=u.a.forwardRef((function(t,n){var o=t.className,i=t.bsPrefix,f=t.as,p=void 0===f?l||"div":f,d=Object(a.a)(t,["className","bsPrefix","as"]),m=Object(s.a)(i,e);return u.a.createElement(p,Object(r.a)({ref:n,className:c()(o,m)},d))}));return d.defaultProps=p,d.displayName=i,d}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(4);var r=n(0),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function c(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},function(e,t,n){"use strict";var r=n(9);t.a=Object(r.a)("card-deck")},,,,function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],l=t.base?o[0]+t.base:o[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=i(s),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(c[f].references++,c[f].updater(p)):c.push({identifier:s,updater:b(p,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,a);else{var o=document.createTextNode(a),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(o,c[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(e,t){var n,r,a;if(t.singleton){var o=h++;n=m||(m=u(t)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=u(t),r=d.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);c[a].references--}for(var o=l(e,t),u=0;u<n.length;u++){var s=i(n[u]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var r=n(21),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,".provider-card{width:160px}",""]),t.a=a},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(6),c=n.n(o),i=n(7),l=n.n(i),u=n(8),s=n.n(u),f=n(3),p=n.n(f),d=n(20),m=n.n(d),h=n(22),b={insert:"head",singleton:!1},v=(m()(h.a,b),h.a.locals,n(0)),y=n.n(v),g=n(16),E=n(1);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var w=function(e){l()(n,e);var t=x(n);function n(){return a()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return y.a.createElement("div",null,y.a.createElement("p",null,y.a.createElement("a",{href:"https://spark.apache.org/"},"Apache Spark")," is highly recommended for batch data processing and near real time streaming."),y.a.createElement("p",null,y.a.createElement("a",{href:"https://flink.apache.org/"},"Apache Flink")," is a framework that  handles real-time streaming data at scale with very low latency."),y.a.createElement("p",null,"Apache Spark is also hosted in various public could, please see the table below"),y.a.createElement("div",null,y.a.createElement("div",null,y.a.createElement("h2",null,"Apache Spark in Public Cloud")),y.a.createElement(g.a,null,y.a.createElement(E.a,null,y.a.createElement(E.a.Header,null,y.a.createElement("a",{href:"https://databricks.com/"},"databricks")),y.a.createElement(E.a.Img,{variant:"top",src:"https://databricks.com/wp-content/uploads/2019/02/databricks-generic-tile.png"}),y.a.createElement(E.a.Body,null,y.a.createElement(E.a.Text,null,"Host your apache spark with databricks in AWS or Azure."))),y.a.createElement(E.a,null,y.a.createElement(E.a.Header,null,y.a.createElement("a",{href:"https://aws.amazon.com/emr/"},"AWS EMR")),y.a.createElement(E.a.Img,{variant:"top",src:"https://blog.ippon.tech/content/images/2019/06/emrlogogo.png"}),y.a.createElement(E.a.Body,null,y.a.createElement(E.a.Text,null,"Host your apache spark with AWS EMR."))),y.a.createElement(E.a,null,y.a.createElement(E.a.Header,null,y.a.createElement("a",{href:"https://cloud.google.com/dataproc"},"Google Cloud")),y.a.createElement(E.a.Img,{variant:"top",src:"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2020/07/100-768x402.jpeg"}),y.a.createElement(E.a.Body,null,y.a.createElement(E.a.Text,null,"Host your apache spark with Google Cloud."))),y.a.createElement(E.a,null,y.a.createElement(E.a.Header,null,y.a.createElement("a",{href:"https://azure.microsoft.com/en-us/services/hdinsight/"},"Microsoft Azure")),y.a.createElement(E.a.Img,{variant:"top",src:"https://apifriends.com/wp-content/uploads/2018/05/HDInsightsDetails.png"}),y.a.createElement(E.a.Body,null,y.a.createElement(E.a.Text,null,"Host your apache spark with Google Cloud."))),y.a.createElement(E.a,null,y.a.createElement(E.a.Header,null,y.a.createElement("a",{href:"https://www.oracle.com/big-data/data-flow/"},"Oracle OCI")),y.a.createElement(E.a.Img,{variant:"top",src:"https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/d3598759-8045-4b7f-9619-0fed901a9e0b/File/a35b11e3f02caf5d5080e48167cf320c/1_xtt86qweroeeldhjroaaaq.png"}),y.a.createElement(E.a.Body,null,y.a.createElement(E.a.Text,null,"Host your apache spark with Oracle OCI."))),y.a.createElement(E.a,null,y.a.createElement(E.a.Header,null,y.a.createElement("a",{href:"https://www.ibm.com/products/big-data-and-analytics"},"IBM Cloud")),y.a.createElement(E.a.Img,{variant:"top",src:"https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_Cloud_logo.png"}),y.a.createElement(E.a.Body,null,y.a.createElement(E.a.Text,null,"Host your apache spark with IBM Cloud."))))))}}]),n}(y.a.Component);window.ContentComponent=w}]);