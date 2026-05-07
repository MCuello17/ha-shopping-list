/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=globalThis,e$3=t$4.ShadowRoot&&(void 0===t$4.ShadyCSS||t$4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$3),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$3)},S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$4.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$3=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$2,getOwnPropertyDescriptor:h$2,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$2=a$1.trustedTypes,l$1=c$2?c$2.emptyScript:"",p$2=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$3={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$4(t,s),b$1={attribute:true,type:String,converter:u$3,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$2(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$3(s));}else void 0!==s&&i.push(c$3(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$3).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$3;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$2?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,i$3=t=>t,s$2=t$3.trustedTypes,e$1=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,h$1="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c$1=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u$2=Array.isArray,d=t=>u$2(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p$1=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u$2(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v$1?"!--"===u[1]?c=_:void 0!==u[1]?c=m$1:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p$1):void 0!==u[3]&&(c=p$1):c===p$1?">"===u[0]?(c=n??v$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p$1:'"'===u[3]?$:g):c===$||c===g?c=p$1:c===_||c===m$1?c=v$1:(c=p$1,n=void 0);const x=c===p$1&&t[i+1].startsWith("/>")?" ":"";l+=c===v$1?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h$1+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h$1)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c$1()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c$1());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M$1(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M$1(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M$1(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c$1()),this.O(c$1()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$3(t).nextSibling;i$3(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M$1(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M$1(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M$1(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M$1(this,t);}}const j={I:k},B=t$3.litHtmlPolyfillSupport;B?.(S,k),(t$3.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c$1(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=globalThis;let i$2 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$2._$litElement$=true,i$2["finalized"]=true,s$1.litElementHydrateSupport?.({LitElement:i$2});const o$1=s$1.litElementPolyfillSupport;o$1?.({LitElement:i$2});(s$1.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$3,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={CHILD:2},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {I:t}=j,i=o=>o,s=()=>document.createComment(""),v=(o,n,e)=>{const l=o._$AA.parentNode,d=void 0===n?o._$AB:n._$AA;if(void 0===e){const i=l.insertBefore(s(),d),n=l.insertBefore(s(),d);e=new t(i,n,o,o.options);}else {const t=e._$AB.nextSibling,n=e._$AM,c=n!==o;if(c){let t;e._$AQ?.(o),e._$AM=o,void 0!==e._$AP&&(t=o._$AU)!==n._$AU&&e._$AP(t);}if(t!==d||c){let o=e._$AA;for(;o!==t;){const t=i(o).nextSibling;i(l).insertBefore(o,d),o=t;}}}return e},u$1=(o,t,i=o)=>(o._$AI(t,i),o),m={},p=(o,t=m)=>o._$AH=t,M=o=>o._$AH,h=o=>{o._$AR(),o._$AA.remove();};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e(class extends i$1{constructor(e){if(super(e),e.type!==t$1.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s,[t,r,c]){const d=M(s),{values:p$1,keys:a}=this.dt(t,r,c);if(!Array.isArray(d))return this.ut=a,p$1;const h$1=this.ut??=[],v$1=[];let m,y,x=0,j=d.length-1,k=0,w=p$1.length-1;for(;x<=j&&k<=w;)if(null===d[x])x++;else if(null===d[j])j--;else if(h$1[x]===a[k])v$1[k]=u$1(d[x],p$1[k]),x++,k++;else if(h$1[j]===a[w])v$1[w]=u$1(d[j],p$1[w]),j--,w--;else if(h$1[x]===a[w])v$1[w]=u$1(d[x],p$1[w]),v(s,v$1[w+1],d[x]),x++,w--;else if(h$1[j]===a[k])v$1[k]=u$1(d[j],p$1[k]),v(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u(a,k,w),y=u(h$1,x,j)),m.has(h$1[x]))if(m.has(h$1[j])){const e=y.get(a[k]),t=void 0!==e?d[e]:null;if(null===t){const e=v(s,d[x]);u$1(e,p$1[k]),v$1[k]=e;}else v$1[k]=u$1(t,p$1[k]),v(s,d[x],t),d[e]=null;k++;}else h(d[j]),j--;else h(d[x]),x++;for(;k<=w;){const e=v(s,v$1[w+1]);u$1(e,p$1[k]),v$1[k++]=e;}for(;x<=j;){const e=d[x++];null!==e&&h(e);}return this.ut=a,p(s,v$1),E}});

const CARD_VERSION = "0.1.0";
const CARD_TAG = "shopping-list-card";
const EDITOR_TAG = "shopping-list-card-editor";
const DEFAULT_CONFIG = {
    type: `custom:${CARD_TAG}`,
    title: "Shopping List",
    show_header: true,
    completed: "bottom",
    completed_label: "Completed",
    show_add_input: true,
    add_input_position: "bottom",
    add_button_label: "Add",
    enable_edit: true,
    enable_remove: true,
    enable_quantity: false,
    quantity_max: 0,
    empty_message: "Nothing on the list",
    sort: "manual",
};

/**
 * Quantity is encoded into the item summary as a `<quantity: N>` marker.
 * Encoding it in plain text keeps the data portable:
 *
 *   - Survives a roundtrip through HA's todo API untouched.
 *   - Power users can edit YAML or use HA's UI directly without losing it.
 *   - When the quantity feature is disabled, the marker is just visible
 *     text — no data migration needed to toggle the feature on/off.
 *
 * On parse we are deliberately tolerant:
 *   - The marker can appear anywhere in the summary (we still strip it).
 *   - Multiple markers are accepted; the last numeric value wins.
 *   - Whitespace around the colon and inside the brackets is allowed.
 *
 * On format we are strict and canonical: always written at the end of the
 * summary as `<name> <quantity: N>`. When N == 1 we omit the marker so
 * single-quantity items stay clean in the underlying todo list.
 */
const MARKER_RE = /<quantity:\s*(\d+)\s*>/gi;
function parseQuantity(summary) {
    let last = null;
    for (const m of summary.matchAll(MARKER_RE)) {
        const n = Number.parseInt(m[1], 10);
        if (Number.isFinite(n) && n > 0)
            last = n;
    }
    const name = summary.replace(MARKER_RE, "").replace(/\s+/g, " ").trim();
    return { name, quantity: last ?? 1 };
}
function formatQuantity(name, quantity) {
    const trimmed = name.trim();
    if (quantity <= 1)
        return trimmed;
    return `${trimmed} <quantity: ${quantity}>`;
}
/**
 * Snap a quantity into the [1, max] range. `max <= 0` means unlimited.
 * Non-finite or fractional inputs are floored and clamped at 1.
 */
function clampQuantity(quantity, max) {
    const floored = Math.floor(Number(quantity) || 1);
    const min1 = Math.max(1, floored);
    if (max && max > 0)
        return Math.min(min1, max);
    return min1;
}

/**
 * ════════════════════════════════════════════════════════════════════════
 *  Shopping List Card · Styles
 * ════════════════════════════════════════════════════════════════════════
 *
 * Every visual property is routed through a CSS custom property so the
 * card can be restyled via:
 *   - HA themes (theme YAML)
 *   - the `style:` config option
 *   - `card_mod:` style block
 *   - parent cards (Bubble Card "custom" slot, etc.)
 *
 * ── Light / dark mode strategy ────────────────────────────────────────
 *
 * We never hard-code colors. Instead we lean on HA's `--rgb-*` theme
 * variables (e.g. `--rgb-primary-text-color`) and alpha-blend them. The
 * same rule reads as "subtle white tint" in dark mode and "subtle black
 * tint" in light mode automatically:
 *
 *     background: rgba(var(--rgb-primary-text-color), 0.05);
 *
 * ── Class namespace ───────────────────────────────────────────────────
 *
 * Every targetable element has an `sl-*` class so users can write:
 *
 *     style: |
 *       .sl-item { ... }
 *       .sl-input:focus { ... }
 *
 * Class list:
 *   .sl-card                — root <ha-card>
 *   .sl-header              — header row
 *   .sl-icon                — header icon
 *   .sl-title               — header title text
 *   .sl-error               — error message banner
 *   .sl-empty               — empty / loading message
 *   .sl-list                — <ul> wrapping items
 *   .sl-item                — single item row
 *   .sl-item--completed     — modifier on completed items
 *   .sl-item--editing       — modifier on item being inline-edited
 *   .sl-checkbox            — item checkbox
 *   .sl-summary             — item label text (read-only mode)
 *   .sl-edit-input          — inline rename input (edit mode)
 *   .sl-actions             — wrapper for per-item action buttons
 *   .sl-edit-button         — pencil button to enter edit mode
 *   .sl-delete-button       — per-item delete button
 *   .sl-save-button         — confirm rename (edit mode)
 *   .sl-cancel-button       — abort rename (edit mode)
 *   .sl-quantity-badge      — "×N" badge shown on items with quantity > 1
 *   .sl-quantity-stepper    — −/N/+ wrapper shown in edit mode
 *     .sl-quantity-stepper--add — modifier when used in the add row
 *   .sl-quantity-step       — single − or + button in the stepper
 *     .sl-quantity-step--minus / --plus
 *   .sl-quantity-value      — the numeric label between the −/+ buttons
 *   .sl-add-row             — add-item row (with position modifier)
 *     .sl-add-row--top      — modifier when rendered above the list
 *     .sl-add-row--bottom   — modifier when rendered below the list
 *   .sl-input               — add-item text input
 *   .sl-add-button          — add-item submit button
 *   .sl-completed-toggle    — "Completed (N)" expandable header row
 *     .sl-completed-toggle--expanded — modifier when section is open
 *   .sl-completed-toggle-icon  — chevron icon inside the toggle row
 *   .sl-completed-toggle-label — text label inside the toggle row
 */
const cardStyles = i$5 `
  /* ─── Tokens ─────────────────────────────────────────────────── */
  :host {
    /* Surface tokens — alpha-blended foreground for subtle pills /
       dividers / hover states. Works in both dark and light themes. */
    --shopping-list-pill-bg: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.04);
    --shopping-list-pill-bg-hover: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.08);
    --shopping-list-pill-border: 1px solid rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.06);

    /* Card chrome */
    --shopping-list-bg: var(--ha-card-background, var(--card-background-color, white));
    --shopping-list-fg: var(--primary-text-color, #212121);
    --shopping-list-muted: var(--secondary-text-color, #727272);
    --shopping-list-accent: var(--primary-color, #03a9f4);
    --shopping-list-error: var(--error-color, #db4437);
    --shopping-list-radius: 20px;
    --shopping-list-padding: 16px;
    --shopping-list-gap: 4px;

    /* Shared "inner element" radius — used by items, input, button so
       they all relate to each other and to the outer card. Override
       this single variable to retune the whole interior at once.
       Use 999px here for the full-pill aesthetic. */
    --shopping-list-inner-radius: 14px;

    /* Header */
    --shopping-list-header-gap: 10px;
    --shopping-list-header-padding: 4px 8px 8px;
    --shopping-list-header-icon-size: 22px;
    --shopping-list-header-icon-color: currentColor;
    --shopping-list-header-font-size: 1.1rem;
    --shopping-list-header-font-weight: 500;

    /* Items */
    --shopping-list-item-bg: var(--shopping-list-pill-bg);
    --shopping-list-item-bg-hover: var(--shopping-list-pill-bg-hover);
    --shopping-list-item-radius: var(--shopping-list-inner-radius);
    --shopping-list-item-padding: 8px 12px;
    --shopping-list-item-gap: 12px;
    --shopping-list-list-gap: 4px;

    /* Per-item actions (edit / delete / save / cancel) */
    --shopping-list-actions-gap: 2px;
    --shopping-list-action-size: 32px;
    --shopping-list-action-icon-size: 18px;

    /* Quantity badge (display) */
    --shopping-list-quantity-badge-bg: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
    --shopping-list-quantity-badge-fg: var(--shopping-list-accent);
    --shopping-list-quantity-badge-padding: 1px 8px;
    --shopping-list-quantity-badge-radius: 999px;
    --shopping-list-quantity-badge-font-size: 0.85em;
    --shopping-list-quantity-badge-font-weight: 600;
    --shopping-list-quantity-badge-margin: 0 0 0 6px;

    /* Quantity stepper (edit mode) */
    --shopping-list-quantity-stepper-gap: 2px;
    --shopping-list-quantity-step-size: 28px;
    --shopping-list-quantity-step-icon-size: 16px;
    --shopping-list-quantity-step-bg: var(--shopping-list-pill-bg);
    --shopping-list-quantity-step-bg-hover: var(--shopping-list-pill-bg-hover);
    --shopping-list-quantity-step-fg: var(--shopping-list-fg);
    --shopping-list-quantity-step-radius: 999px;
    --shopping-list-quantity-value-min-width: 22px;

    /* Completed items */
    --shopping-list-completed-fg: var(--disabled-text-color, #bdbdbd);
    --shopping-list-completed-decoration: line-through;

    /* Completed-section toggle (collapse mode) */
    --shopping-list-completed-toggle-bg: transparent;
    --shopping-list-completed-toggle-bg-hover: var(--shopping-list-pill-bg);
    --shopping-list-completed-toggle-fg: var(--shopping-list-muted);
    --shopping-list-completed-toggle-padding: 6px 10px;
    --shopping-list-completed-toggle-radius: var(--shopping-list-inner-radius);
    --shopping-list-completed-toggle-font-size: 0.85rem;
    --shopping-list-completed-toggle-font-weight: 500;
    --shopping-list-completed-toggle-icon-size: 18px;
    --shopping-list-completed-toggle-margin: 6px 0 0;

    /* Input */
    --shopping-list-input-bg: var(--shopping-list-pill-bg);
    --shopping-list-input-bg-focus: var(--shopping-list-pill-bg-hover);
    --shopping-list-input-fg: var(--shopping-list-fg);
    --shopping-list-input-placeholder: var(--shopping-list-muted);
    --shopping-list-input-border: var(--shopping-list-pill-border);
    --shopping-list-input-border-focus: 1px solid var(--shopping-list-accent);
    --shopping-list-input-radius: var(--shopping-list-inner-radius);
    --shopping-list-input-padding: 10px 14px;
    --shopping-list-input-font-size: 0.95rem;

    /* Add button */
    --shopping-list-button-bg: var(--shopping-list-accent);
    --shopping-list-button-fg: var(--text-primary-color, white);
    --shopping-list-button-radius: var(--shopping-list-inner-radius);
    --shopping-list-button-padding: 10px 16px;
    --shopping-list-button-font-size: 0.95rem;
    --shopping-list-button-font-weight: 500;

    /* Empty / loading */
    --shopping-list-empty-fg: var(--shopping-list-muted);
    --shopping-list-empty-padding: 16px 8px;

    /* Layout */
    --shopping-list-add-row-gap: 8px;
    /* Breathing room between the add row and the list. Applied to the
       side facing the list so it works for both top and bottom placement
       (margin-top when the row sits at the bottom, margin-bottom when it
       sits at the top). */
    --shopping-list-add-row-spacing: 8px;

    display: block;
  }

  /* ─── Card chrome ─────────────────────────────────────────────── */
  .sl-card {
    background: var(--shopping-list-bg);
    color: var(--shopping-list-fg);
    border-radius: var(--shopping-list-radius);
    padding: var(--shopping-list-padding);
    display: flex;
    flex-direction: column;
    gap: var(--shopping-list-gap);
  }

  /* ─── Header ──────────────────────────────────────────────────── */
  .sl-header {
    display: flex;
    align-items: center;
    gap: var(--shopping-list-header-gap);
    padding: var(--shopping-list-header-padding);
    font-size: var(--shopping-list-header-font-size);
    font-weight: var(--shopping-list-header-font-weight);
  }

  .sl-icon {
    --mdc-icon-size: var(--shopping-list-header-icon-size);
    color: var(--shopping-list-header-icon-color);
  }

  /* ─── Banners (empty / error) ─────────────────────────────────── */
  .sl-empty {
    color: var(--shopping-list-empty-fg);
    font-style: italic;
    padding: var(--shopping-list-empty-padding);
    text-align: center;
  }

  .sl-error {
    color: var(--shopping-list-error);
    background: rgba(var(--rgb-error-color, 219, 68, 55), 0.08);
    border-radius: var(--shopping-list-inner-radius);
    padding: 8px 12px;
    font-size: 0.9rem;
  }

  /* ─── List + items ────────────────────────────────────────────── */
  .sl-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--shopping-list-list-gap);
  }

  .sl-item {
    display: flex;
    align-items: center;
    gap: var(--shopping-list-item-gap);
    padding: var(--shopping-list-item-padding);
    border-radius: var(--shopping-list-item-radius);
    background: var(--shopping-list-item-bg);
    cursor: pointer;
    user-select: none;
    transition:
      background 120ms ease,
      transform 80ms ease;
  }
  .sl-item:hover {
    background: var(--shopping-list-item-bg-hover);
  }
  .sl-item:active {
    transform: scale(0.99);
  }

  .sl-item--completed .sl-summary {
    color: var(--shopping-list-completed-fg);
    text-decoration: var(--shopping-list-completed-decoration);
  }

  .sl-checkbox {
    --mdc-checkbox-unchecked-color: var(--shopping-list-muted);
    --mdc-theme-secondary: var(--shopping-list-accent);
    margin: -8px 0 -8px -8px;
  }

  .sl-summary {
    flex: 1;
    word-break: break-word;
  }

  /* ─── Per-item action buttons (edit / delete / save / cancel) ─── */
  .sl-actions {
    display: flex;
    align-items: center;
    gap: var(--shopping-list-actions-gap);
    flex-shrink: 0;
    /* Hidden by default; revealed on hover or focus on devices that
       support hover. The @media (hover: none) block below makes them
       always visible on touch devices (phones, tablets, HA's mobile
       dashboards) where hover is not a viable affordance. */
    opacity: 0;
    transition: opacity 120ms ease;
  }
  .sl-item:hover .sl-actions,
  .sl-item:focus-within .sl-actions,
  .sl-item--editing .sl-actions {
    opacity: 1;
  }
  @media (hover: none) {
    .sl-actions {
      opacity: 1;
    }
  }

  .sl-edit-button,
  .sl-delete-button,
  .sl-save-button,
  .sl-cancel-button {
    --mdc-icon-button-size: var(--shopping-list-action-size);
    --mdc-icon-size: var(--shopping-list-action-icon-size);
    color: var(--shopping-list-muted);
  }
  .sl-save-button {
    color: var(--shopping-list-accent);
  }

  .sl-edit-input {
    flex: 1;
    min-width: 0;
    background: transparent;
    color: var(--shopping-list-fg);
    border: none;
    border-bottom: 1px solid var(--shopping-list-accent);
    font: inherit;
    outline: none;
    padding: 2px 0;
  }
  .sl-edit-input::selection {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.35);
  }

  /* ─── Quantity (badge + stepper) ────────────────────────────── */
  .sl-quantity-badge {
    display: inline-block;
    margin: var(--shopping-list-quantity-badge-margin);
    padding: var(--shopping-list-quantity-badge-padding);
    background: var(--shopping-list-quantity-badge-bg);
    color: var(--shopping-list-quantity-badge-fg);
    border-radius: var(--shopping-list-quantity-badge-radius);
    font-size: var(--shopping-list-quantity-badge-font-size);
    font-weight: var(--shopping-list-quantity-badge-font-weight);
    vertical-align: middle;
    white-space: nowrap;
  }
  /* Inherit the muted/strikethrough treatment of completed items so the
     badge fades along with the rest of the row. */
  .sl-item--completed .sl-quantity-badge {
    color: var(--shopping-list-completed-fg);
    background: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.06);
  }

  .sl-quantity-stepper {
    display: inline-flex;
    align-items: center;
    gap: var(--shopping-list-quantity-stepper-gap);
    flex-shrink: 0;
  }
  .sl-quantity-step {
    width: var(--shopping-list-quantity-step-size);
    height: var(--shopping-list-quantity-step-size);
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--shopping-list-quantity-step-bg);
    color: var(--shopping-list-quantity-step-fg);
    border: none;
    border-radius: var(--shopping-list-quantity-step-radius);
    cursor: pointer;
    line-height: 1;
    transition: background 120ms ease;
    --mdc-icon-size: var(--shopping-list-quantity-step-icon-size);
  }
  .sl-quantity-step:hover:not(:disabled) {
    background: var(--shopping-list-quantity-step-bg-hover);
  }
  .sl-quantity-step:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .sl-quantity-value {
    min-width: var(--shopping-list-quantity-value-min-width);
    text-align: center;
    font-variant-numeric: tabular-nums;
    font-weight: 500;
    color: var(--shopping-list-fg);
  }

  /* ─── Completed section toggle (collapse mode) ─────────────────── */
  .sl-completed-toggle {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--shopping-list-item-gap);
    padding: var(--shopping-list-completed-toggle-padding);
    margin: var(--shopping-list-completed-toggle-margin);
    border-radius: var(--shopping-list-completed-toggle-radius);
    background: var(--shopping-list-completed-toggle-bg);
    color: var(--shopping-list-completed-toggle-fg);
    font-size: var(--shopping-list-completed-toggle-font-size);
    font-weight: var(--shopping-list-completed-toggle-font-weight);
    cursor: pointer;
    user-select: none;
    transition: background 120ms ease;
  }
  .sl-completed-toggle:hover,
  .sl-completed-toggle:focus-visible {
    background: var(--shopping-list-completed-toggle-bg-hover);
    outline: none;
  }
  .sl-completed-toggle-icon {
    --mdc-icon-size: var(--shopping-list-completed-toggle-icon-size);
    color: currentColor;
    flex-shrink: 0;
  }
  .sl-completed-toggle-label {
    flex: 1;
  }

  /* ─── Add row (input + button) ────────────────────────────────── */
  .sl-add-row {
    display: flex;
    gap: var(--shopping-list-add-row-gap);
    align-items: center;
  }
  /* Position-aware spacing: push away from the list, not from the edge. */
  .sl-add-row--bottom {
    margin-top: var(--shopping-list-add-row-spacing);
  }
  .sl-add-row--top {
    margin-bottom: var(--shopping-list-add-row-spacing);
  }

  .sl-input {
    flex: 1;
    min-width: 0;
    background: var(--shopping-list-input-bg);
    color: var(--shopping-list-input-fg);
    border: var(--shopping-list-input-border);
    border-radius: var(--shopping-list-input-radius);
    padding: var(--shopping-list-input-padding);
    font: inherit;
    font-size: var(--shopping-list-input-font-size);
    outline: none;
    transition:
      background 120ms ease,
      border-color 120ms ease;
  }
  .sl-input:focus {
    background: var(--shopping-list-input-bg-focus);
    border: var(--shopping-list-input-border-focus);
  }
  .sl-input::placeholder {
    color: var(--shopping-list-input-placeholder);
  }

  .sl-add-button {
    background: var(--shopping-list-button-bg);
    color: var(--shopping-list-button-fg);
    border: none;
    border-radius: var(--shopping-list-button-radius);
    padding: var(--shopping-list-button-padding);
    font: inherit;
    font-size: var(--shopping-list-button-font-size);
    font-weight: var(--shopping-list-button-font-weight);
    cursor: pointer;
    transition:
      filter 120ms ease,
      transform 80ms ease,
      opacity 120ms ease;
  }
  .sl-add-button:hover:not(:disabled) {
    filter: brightness(1.1);
  }
  .sl-add-button:active:not(:disabled) {
    transform: scale(0.97);
  }
  .sl-add-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const SORT_OPTIONS = [
    { value: "manual", label: "Manual (HA order)" },
    { value: "alpha", label: "Alphabetical" },
    { value: "created", label: "Created order" },
];
const COMPLETED_OPTIONS = [
    { value: "bottom", label: "At the bottom of the list" },
    { value: "inline", label: "Mixed with active items" },
    { value: "collapse", label: "Collapsible section" },
    { value: "hide", label: "Hide completed items" },
];
const ADD_INPUT_POSITION_OPTIONS = [
    { value: "bottom", label: "Bottom (below the list)" },
    { value: "top", label: "Top (below the header)" },
];
const SCHEMA = [
    // Top-level: entity selector lives outside any group.
    { name: "entity", required: true, selector: { entity: { domain: "todo" } } },
    {
        type: "expandable",
        name: "_grp_header",
        title: "Header",
        icon: "mdi:format-title",
        flatten: true,
        schema: [
            { name: "show_header", selector: { boolean: {} } },
            { name: "title", selector: { text: {} } },
            { name: "icon", selector: { icon: {} } },
        ],
    },
    {
        type: "expandable",
        name: "_grp_list",
        title: "To-do items",
        icon: "mdi:format-list-bulleted",
        flatten: true,
        schema: [
            { name: "sort", selector: { select: { mode: "dropdown", options: SORT_OPTIONS } } },
            { name: "enable_edit", selector: { boolean: {} } },
            { name: "enable_remove", selector: { boolean: {} } },
            { name: "empty_message", selector: { text: {} } },
        ],
    },
    {
        type: "expandable",
        name: "_grp_quantity",
        title: "Quantities",
        icon: "mdi:counter",
        flatten: true,
        schema: [
            { name: "enable_quantity", selector: { boolean: {} } },
            {
                name: "quantity_max",
                selector: { number: { min: 0, max: 9999, step: 1, mode: "box" } },
            },
        ],
    },
    {
        type: "expandable",
        name: "_grp_completed",
        title: "Completed items",
        icon: "mdi:check-circle-outline",
        flatten: true,
        schema: [
            {
                name: "completed",
                selector: { select: { mode: "dropdown", options: COMPLETED_OPTIONS } },
            },
            { name: "completed_label", selector: { text: {} } },
        ],
    },
    {
        type: "expandable",
        name: "_grp_add",
        title: "Add items",
        icon: "mdi:plus-circle-outline",
        flatten: true,
        schema: [
            { name: "show_add_input", selector: { boolean: {} } },
            {
                name: "add_input_position",
                selector: { select: { mode: "dropdown", options: ADD_INPUT_POSITION_OPTIONS } },
            },
            { name: "add_button_label", selector: { text: {} } },
        ],
    },
];
let ShoppingListCardEditor = class ShoppingListCardEditor extends i$2 {
    constructor() {
        super(...arguments);
        this._labelFor = (schema) => {
            if ("type" in schema && schema.type === "expandable") {
                return schema.title ?? schema.name;
            }
            const map = {
                entity: "Todo Entity (required)",
                title: "Title",
                icon: "Icon",
                show_header: "Show header",
                completed: "Show completed items",
                completed_label: "Completed group label",
                show_add_input: "Show add-item input",
                add_input_position: "Add bar position",
                add_button_label: "Add button label",
                empty_message: "Empty list message",
                sort: "Sort order",
                enable_edit: "Allow editing items",
                enable_remove: "Allow removing items",
                enable_quantity: "Enable quantities",
                quantity_max: "Maximum quantity (0 = unlimited)",
            };
            return map[schema.name] ?? schema.name;
        };
    }
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this.hass || !this._config)
            return b ``;
        // Merge defaults under the user's config so toggles/selects reflect
        // the card's actual behavior even when the user hasn't explicitly set
        // a field. Saved YAML stays clean — see `_formValueChanged` for the
        // diff-based persistence logic.
        const formData = { ...DEFAULT_CONFIG, ...this._config };
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${formData}
        .schema=${SCHEMA}
        .computeLabel=${this._labelFor}
        @value-changed=${this._formValueChanged}
      ></ha-form>

      <details class="customization">
        <summary>
          <ha-icon icon="mdi:palette-outline"></ha-icon>
          <span>Customization</span>
          <ha-icon class="chevron" icon="mdi:chevron-down"></ha-icon>
        </summary>
        <div class="customization-body">
          <p class="hint">
            Custom CSS appended to the card. Target <code>.sl-*</code> classes or override
            <code>--shopping-list-*</code> variables.
          </p>
          <ha-code-editor
            mode="css"
            .value=${typeof this._config.style === "string" ? this._config.style : ""}
            @value-changed=${this._styleChanged}
          ></ha-code-editor>
        </div>
      </details>
    `;
    }
    _formValueChanged(ev) {
        ev.stopPropagation();
        if (!this._config)
            return;
        const data = ev.detail.value;
        // Persist only fields the user actually intends to set:
        //   - Fields already present in the user's existing config (update)
        //   - Fields whose new value differs from the built-in default
        //
        // ha-form sends back values for every visible field — including ones
        // we merged in for display purposes. Without this filter, the very
        // first toggle would balloon the saved YAML with all defaults.
        const existing = this._config;
        const defaults = DEFAULT_CONFIG;
        const newConfig = { ...this._config };
        for (const [key, value] of Object.entries(data)) {
            const wasExplicit = key in existing;
            const matchesDefault = value === defaults[key];
            if (wasExplicit || !matchesDefault) {
                newConfig[key] = value;
            }
        }
        // Drop the deprecated boolean once the user touches the editor so we
        // don't keep two sources of truth in the saved YAML.
        if ("show_completed" in newConfig)
            delete newConfig.show_completed;
        this._fireChange(newConfig);
    }
    _styleChanged(ev) {
        ev.stopPropagation();
        if (!this._config)
            return;
        const value = ev.detail?.value ?? "";
        const newConfig = { ...this._config, style: value };
        if (!value)
            delete newConfig.style;
        this._fireChange(newConfig);
    }
    _fireChange(config) {
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
    }
};
ShoppingListCardEditor.styles = i$5 `
    :host {
      display: block;
    }
    ha-form {
      display: block;
    }
    /* Visual match for the Customization section so it sits naturally
       below HA's native ha-form expandable groups. */
    .customization {
      display: block;
      margin-top: 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, var(--ha-card-background, transparent));
      overflow: hidden;
    }
    .customization > summary {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      cursor: pointer;
      user-select: none;
      list-style: none;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .customization > summary::-webkit-details-marker {
      display: none;
    }
    .customization > summary ha-icon {
      --mdc-icon-size: 22px;
      color: var(--secondary-text-color);
    }
    .customization > summary .chevron {
      margin-left: auto;
      transition: transform 200ms ease;
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
    }
    .customization[open] > summary .chevron {
      transform: rotate(180deg);
    }
    .customization-body {
      padding: 0 16px 16px;
    }
    .customization-body .hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin: 0 0 6px;
    }
    ha-code-editor {
      --code-mirror-max-height: 240px;
    }
  `;
__decorate([
    n({ attribute: false })
], ShoppingListCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], ShoppingListCardEditor.prototype, "_config", void 0);
ShoppingListCardEditor = __decorate([
    t$2(EDITOR_TAG)
], ShoppingListCardEditor);

/* ───────────────────────────────────────────────────────────────────────────
 * Register card with the HA frontend.
 * ─────────────────────────────────────────────────────────────────────────── */
const win = window;
win.customCards = win.customCards || [];
if (!win.customCards.find((c) => c.type === CARD_TAG)) {
    win.customCards.push({
        type: CARD_TAG,
        name: "Shopping List Card",
        description: "Work in progress — a Lovelace shopping list card.",
        preview: true,
        documentationURL: "https://github.com/MCuello17/ha-shopping-list",
    });
}
console.info(`%c SHOPPING-LIST-CARD %c v${CARD_VERSION} `, "color: white; background: #03a9f4; font-weight: 700;", "color: #03a9f4; background: white; font-weight: 700;");
/* ─────────────────────────────────────────────────────────────────────────── */
let ShoppingListCard = class ShoppingListCard extends i$2 {
    constructor() {
        super(...arguments);
        this._items = [];
        this._loading = false;
        this._draft = "";
        this._completedExpanded = false;
        this._editDraft = "";
        this._editQuantity = 1;
        this._addQuantity = 1;
        /** Set true on edit start; consumed by `updated()` to focus the input once. */
        this._focusEditOnUpdate = false;
        this._toggleCompletedExpanded = () => {
            this._completedExpanded = !this._completedExpanded;
        };
    }
    /* ─── Card public API ──────────────────────────────────────────────── */
    static getStubConfig() {
        return { ...DEFAULT_CONFIG };
    }
    static async getConfigElement() {
        return document.createElement(EDITOR_TAG);
    }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        // Migrate legacy `show_completed: boolean` → new `completed` enum.
        // We only fill `completed` when it isn't already set, so explicit new
        // configs always win over the deprecated flag.
        const migrated = { ...config };
        if (migrated.completed === undefined && migrated.show_completed !== undefined) {
            migrated.completed = migrated.show_completed ? "inline" : "hide";
        }
        this._config = { ...DEFAULT_CONFIG, ...migrated };
    }
    getCardSize() {
        const base = this._config?.show_header ? 2 : 1;
        return base + Math.min(this._items.length, 6);
    }
    /* ─── Lifecycle ────────────────────────────────────────────────────── */
    disconnectedCallback() {
        super.disconnectedCallback();
        this._teardownSubscription();
    }
    updated(changed) {
        super.updated(changed);
        if (this._focusEditOnUpdate) {
            const input = this.renderRoot.querySelector(".sl-edit-input");
            if (input) {
                input.focus();
                input.select();
                this._focusEditOnUpdate = false;
            }
        }
        const entity = this._config?.entity;
        if (!entity || !this.hass)
            return;
        if (entity !== this._lastEntity) {
            this._lastEntity = entity;
            void this._setupSubscription(entity);
        }
    }
    /* ─── HA Todo API plumbing ─────────────────────────────────────────── */
    async _setupSubscription(entity) {
        this._teardownSubscription();
        if (!this.hass)
            return;
        this._loading = true;
        this._error = undefined;
        try {
            // Initial fetch.
            const result = await this.hass.callWS({
                type: "todo/item/list",
                entity_id: entity,
            });
            this._items = result.items ?? [];
            // Subscribe to updates.
            this._unsub = await this.hass.connection.subscribeMessage((msg) => {
                this._items = msg.items ?? [];
            }, { type: "todo/item/subscribe", entity_id: entity });
        }
        catch (err) {
            this._error = err instanceof Error ? err.message : String(err);
        }
        finally {
            this._loading = false;
        }
    }
    _teardownSubscription() {
        if (this._unsub) {
            try {
                this._unsub();
            }
            catch {
                /* ignore */
            }
            this._unsub = undefined;
        }
    }
    async _addItem() {
        const cfg = this._config;
        const entity = cfg?.entity;
        const trimmed = this._draft.trim();
        if (!entity || !trimmed || !this.hass)
            return;
        const enableQuantity = cfg.enable_quantity ?? false;
        const quantity = clampQuantity(this._addQuantity, cfg.quantity_max ?? 0);
        // formatQuantity drops the marker entirely when quantity == 1, so
        // single-quantity adds still produce clean summaries.
        const itemSummary = enableQuantity ? formatQuantity(trimmed, quantity) : trimmed;
        try {
            await this.hass.callService("todo", "add_item", { entity_id: entity, item: itemSummary });
            this._draft = "";
            // Per spec: quantities start at 1. Reset after every successful
            // add so the next item begins fresh rather than carrying over.
            this._addQuantity = 1;
        }
        catch (err) {
            this._error = err instanceof Error ? err.message : String(err);
        }
    }
    _adjustAddQuantity(delta) {
        const max = this._config?.quantity_max ?? 0;
        this._addQuantity = clampQuantity(this._addQuantity + delta, max);
    }
    async _toggleItem(item) {
        const entity = this._config?.entity;
        if (!entity || !this.hass)
            return;
        const next = item.status === "completed" ? "needs_action" : "completed";
        try {
            await this.hass.callService("todo", "update_item", {
                entity_id: entity,
                item: item.uid,
                status: next,
            });
        }
        catch (err) {
            this._error = err instanceof Error ? err.message : String(err);
        }
    }
    async _removeItem(item) {
        const entity = this._config?.entity;
        if (!entity || !this.hass)
            return;
        try {
            await this.hass.callService("todo", "remove_item", {
                entity_id: entity,
                item: item.uid,
            });
        }
        catch (err) {
            this._error = err instanceof Error ? err.message : String(err);
        }
    }
    /* ─── Inline edit ──────────────────────────────────────────────────── */
    _startEdit(item) {
        const enableQuantity = this._config?.enable_quantity ?? false;
        if (enableQuantity) {
            // With quantity ON, split the marker out so the user edits only the
            // name; the stepper handles quantity separately.
            const { name, quantity } = parseQuantity(item.summary);
            this._editDraft = name;
            this._editQuantity = quantity;
        }
        else {
            // With quantity OFF, treat the summary as opaque text — markers (if
            // any) are shown verbatim and the user can edit them by hand.
            this._editDraft = item.summary;
            this._editQuantity = 1;
        }
        this._editingUid = item.uid;
        this._focusEditOnUpdate = true;
    }
    _cancelEdit() {
        this._editingUid = undefined;
        this._editDraft = "";
        this._editQuantity = 1;
    }
    /**
     * Commit an edit (name and/or quantity). Safe to call multiple times
     * for the same item — once it completes `_editingUid` is cleared so a
     * stray late blur won't re-fire the service. The new summary is the
     * trimmed name plus an encoded `<quantity: N>` marker when the feature
     * is enabled and N > 1; otherwise it's just the trimmed name.
     */
    async _saveEdit(item) {
        if (this._editingUid !== item.uid)
            return;
        const cfg = this._config;
        if (!cfg) {
            this._cancelEdit();
            return;
        }
        const trimmedName = this._editDraft.trim();
        if (!trimmedName) {
            this._cancelEdit();
            return;
        }
        const enableQuantity = cfg.enable_quantity ?? false;
        const newSummary = enableQuantity
            ? formatQuantity(trimmedName, clampQuantity(this._editQuantity, cfg.quantity_max ?? 0))
            : trimmedName;
        if (newSummary === item.summary) {
            this._cancelEdit();
            return;
        }
        const entity = cfg.entity;
        if (!entity || !this.hass) {
            this._cancelEdit();
            return;
        }
        // Clear editing state before the await so a blur fired by the DOM
        // teardown can't trigger a second service call.
        this._cancelEdit();
        try {
            await this.hass.callService("todo", "update_item", {
                entity_id: entity,
                item: item.uid,
                rename: newSummary,
            });
        }
        catch (err) {
            this._error = err instanceof Error ? err.message : String(err);
        }
    }
    _adjustEditQuantity(delta) {
        const max = this._config?.quantity_max ?? 0;
        this._editQuantity = clampQuantity(this._editQuantity + delta, max);
    }
    /* ─── Sorting / filtering ──────────────────────────────────────────── */
    _sort(items) {
        const sortMode = this._config?.sort;
        if (sortMode === "alpha") {
            return [...items].sort((a, b) => a.summary.localeCompare(b.summary));
        }
        // "manual" / "created" / undefined → preserve HA's order.
        return items;
    }
    /**
     * Split items into the two buckets used by every render mode, applying
     * the configured sort to each bucket independently.
     */
    _splitItems() {
        const active = [];
        const completed = [];
        for (const item of this._items) {
            if (item.status === "completed")
                completed.push(item);
            else
                active.push(item);
        }
        return { active: this._sort(active), completed: this._sort(completed) };
    }
    /* ─── Render ───────────────────────────────────────────────────────── */
    render() {
        if (!this._config || !this.hass)
            return A;
        const cfg = this._config;
        const customStyle = this._extractCustomStyle();
        const showAdd = !!(cfg.show_add_input && cfg.entity);
        const position = cfg.add_input_position ?? "bottom";
        return b `
      <ha-card class="sl-card">
        ${cfg.show_header ? this._renderHeader() : A}
        ${this._error ? b `<div class="sl-error">${this._error}</div>` : A}
        ${showAdd && position === "top" ? this._renderAddRow("top") : A} ${this._renderBody()}
        ${showAdd && position !== "top" ? this._renderAddRow("bottom") : A}
      </ha-card>
      ${customStyle
            ? b `<style>
            ${customStyle}
          </style>`
            : A}
    `;
    }
    _renderBody() {
        const cfg = this._config;
        if (!cfg.entity) {
            return b `<div class="sl-empty">
        No todo entity selected. Open the editor to pick one.
      </div>`;
        }
        if (this._loading && this._items.length === 0) {
            return b `<div class="sl-empty">Loading…</div>`;
        }
        const mode = cfg.completed ?? "bottom";
        const { active, completed } = this._splitItems();
        // Compute the items to render in the main list, plus whether we need
        // a collapsed-toggle row at the end.
        let mainItems;
        let trailingCompleted = [];
        let showCollapseToggle = false;
        if (mode === "hide") {
            mainItems = active;
        }
        else if (mode === "inline") {
            // HA already gives us a single ordered stream; just sort the union.
            mainItems = this._sort([...this._items]);
        }
        else if (mode === "bottom") {
            mainItems = active;
            trailingCompleted = completed;
        }
        else {
            // collapse
            mainItems = active;
            showCollapseToggle = completed.length > 0;
            if (this._completedExpanded)
                trailingCompleted = completed;
        }
        if (mainItems.length === 0 && trailingCompleted.length === 0 && !showCollapseToggle) {
            return b `<div class="sl-empty">${cfg.empty_message}</div>`;
        }
        // Keyed lists: Lit's `repeat` directive uses `item.uid` to track each
        // row across re-renders. Without it Lit recycles DOM nodes positionally,
        // which lets stale DOM state (e.g. an `<input>` the user just toggled
        // before it moved buckets) bleed into the new item that takes its slot.
        return b `
      <ul class="sl-list">
        ${c(mainItems, (i) => i.uid, (i) => this._renderItem(i))}
        ${showCollapseToggle ? this._renderCompletedToggle(completed.length) : A}
        ${c(trailingCompleted, (i) => i.uid, (i) => this._renderItem(i))}
      </ul>
    `;
    }
    _renderCompletedToggle(count) {
        const expanded = this._completedExpanded;
        const label = this._config?.completed_label || "Completed";
        return b `
      <li
        class="sl-completed-toggle ${expanded ? "sl-completed-toggle--expanded" : ""}"
        role="button"
        tabindex="0"
        aria-expanded=${expanded ? "true" : "false"}
        @click=${this._toggleCompletedExpanded}
        @keydown=${(ev) => {
            if (ev.key === "Enter" || ev.key === " ") {
                ev.preventDefault();
                this._toggleCompletedExpanded();
            }
        }}
      >
        <ha-icon
          class="sl-completed-toggle-icon"
          .icon=${expanded ? "mdi:chevron-up" : "mdi:chevron-down"}
        ></ha-icon>
        <span class="sl-completed-toggle-label">${label} (${count})</span>
      </li>
    `;
    }
    _renderHeader() {
        const cfg = this._config;
        return b `
      <div class="sl-header">
        ${cfg.icon ? b `<ha-icon class="sl-icon" .icon=${cfg.icon}></ha-icon>` : A}
        <span class="sl-title">${cfg.title}</span>
      </div>
    `;
    }
    _renderItem(item) {
        const cfg = this._config;
        const completed = item.status === "completed";
        const isEditing = this._editingUid === item.uid;
        const enableEdit = cfg.enable_edit !== false;
        const enableRemove = cfg.enable_remove !== false;
        const enableQuantity = cfg.enable_quantity ?? false;
        const quantityMax = cfg.quantity_max ?? 0;
        // When the feature is on, split the marker out for display. When off,
        // pass the summary through verbatim — markers (if any) become text.
        const parsed = enableQuantity
            ? parseQuantity(item.summary)
            : { name: item.summary, quantity: 1 };
        const showQuantityBadge = enableQuantity && parsed.quantity > 1;
        const canDecrement = this._editQuantity > 1;
        const canIncrement = quantityMax <= 0 || this._editQuantity < quantityMax;
        // Used on stepper/save/cancel buttons to suppress the implicit focus
        // shift — otherwise mousedown moves focus off the input which fires
        // `blur`, racing the explicit click handler.
        const suppressBlur = (ev) => ev.preventDefault();
        return b `
      <li
        class="sl-item ${completed ? "sl-item--completed" : ""} ${isEditing
            ? "sl-item--editing"
            : ""}"
        @click=${(ev) => {
            if (isEditing)
                return;
            // Avoid double-toggle when clicking the checkbox itself.
            if (ev.target.tagName === "HA-CHECKBOX")
                return;
            void this._toggleItem(item);
        }}
      >
        <ha-checkbox
          class="sl-checkbox"
          .checked=${completed}
          ?disabled=${isEditing}
          @change=${() => this._toggleItem(item)}
        ></ha-checkbox>

        ${isEditing
            ? b `<input
              class="sl-edit-input"
              type="text"
              .value=${this._editDraft}
              aria-label="Edit item"
              @click=${(ev) => ev.stopPropagation()}
              @input=${(ev) => {
                this._editDraft = ev.target.value;
            }}
              @keydown=${(ev) => {
                if (ev.key === "Enter") {
                    ev.preventDefault();
                    void this._saveEdit(item);
                }
                else if (ev.key === "Escape") {
                    ev.preventDefault();
                    this._cancelEdit();
                }
            }}
              @blur=${() => {
                // Commit on blur (e.g. user clicks elsewhere on the page).
                // Stepper/save/cancel buttons preventDefault on mousedown
                // so they don't trigger this path.
                if (this._editingUid === item.uid) {
                    void this._saveEdit(item);
                }
            }}
            />`
            : b `<span class="sl-summary"
              >${parsed.name}${showQuantityBadge
                ? b `<span class="sl-quantity-badge">×${parsed.quantity}</span>`
                : A}</span
            >`}
        ${isEditing && enableQuantity
            ? b `
              <div class="sl-quantity-stepper" aria-label="Item quantity">
                <button
                  type="button"
                  class="sl-quantity-step sl-quantity-step--minus"
                  ?disabled=${!canDecrement}
                  aria-label="Decrease quantity"
                  @mousedown=${suppressBlur}
                  @click=${(ev) => {
                ev.stopPropagation();
                this._adjustEditQuantity(-1);
            }}
                >
                  <ha-icon icon="mdi:minus"></ha-icon>
                </button>
                <span class="sl-quantity-value" aria-live="polite">${this._editQuantity}</span>
                <button
                  type="button"
                  class="sl-quantity-step sl-quantity-step--plus"
                  ?disabled=${!canIncrement}
                  aria-label="Increase quantity"
                  @mousedown=${suppressBlur}
                  @click=${(ev) => {
                ev.stopPropagation();
                this._adjustEditQuantity(1);
            }}
                >
                  <ha-icon icon="mdi:plus"></ha-icon>
                </button>
              </div>
            `
            : A}

        <div class="sl-actions">
          ${isEditing
            ? b `
                <ha-icon-button
                  class="sl-save-button"
                  .label=${"Save"}
                  @mousedown=${suppressBlur}
                  @click=${(ev) => {
                ev.stopPropagation();
                void this._saveEdit(item);
            }}
                >
                  <ha-icon icon="mdi:check"></ha-icon>
                </ha-icon-button>
                <ha-icon-button
                  class="sl-cancel-button"
                  .label=${"Cancel"}
                  @mousedown=${suppressBlur}
                  @click=${(ev) => {
                ev.stopPropagation();
                this._cancelEdit();
            }}
                >
                  <ha-icon icon="mdi:close"></ha-icon>
                </ha-icon-button>
              `
            : b `
                ${enableEdit
                ? b `<ha-icon-button
                      class="sl-edit-button"
                      .label=${"Edit"}
                      @click=${(ev) => {
                    ev.stopPropagation();
                    this._startEdit(item);
                }}
                    >
                      <ha-icon icon="mdi:pencil"></ha-icon>
                    </ha-icon-button>`
                : A}
                ${enableRemove
                ? b `<ha-icon-button
                      class="sl-delete-button"
                      .label=${"Remove"}
                      @click=${(ev) => {
                    ev.stopPropagation();
                    void this._removeItem(item);
                }}
                    >
                      <ha-icon icon="mdi:close"></ha-icon>
                    </ha-icon-button>`
                : A}
              `}
        </div>
      </li>
    `;
    }
    _renderAddRow(position) {
        const cfg = this._config;
        const canAdd = this._draft.trim().length > 0;
        const enableQuantity = cfg.enable_quantity ?? false;
        const quantityMax = cfg.quantity_max ?? 0;
        const canAddDecrement = this._addQuantity > 1;
        const canAddIncrement = quantityMax <= 0 || this._addQuantity < quantityMax;
        // Keep the input focused when the user adjusts quantity so they can
        // immediately press Enter to add. Without this, mousedown on the
        // stepper button would steal focus from the input.
        const suppressBlur = (ev) => ev.preventDefault();
        return b `
      <div class="sl-add-row sl-add-row--${position}">
        <input
          class="sl-input"
          type="text"
          placeholder="Add an item…"
          .value=${this._draft}
          @input=${(ev) => {
            this._draft = ev.target.value;
        }}
          @keydown=${(ev) => {
            if (ev.key === "Enter") {
                ev.preventDefault();
                void this._addItem();
            }
        }}
        />
        ${enableQuantity
            ? b `
              <div
                class="sl-quantity-stepper sl-quantity-stepper--add"
                aria-label="Initial quantity for new item"
              >
                <button
                  type="button"
                  class="sl-quantity-step sl-quantity-step--minus"
                  ?disabled=${!canAddDecrement}
                  aria-label="Decrease quantity"
                  @mousedown=${suppressBlur}
                  @click=${() => this._adjustAddQuantity(-1)}
                >
                  <ha-icon icon="mdi:minus"></ha-icon>
                </button>
                <span class="sl-quantity-value" aria-live="polite">${this._addQuantity}</span>
                <button
                  type="button"
                  class="sl-quantity-step sl-quantity-step--plus"
                  ?disabled=${!canAddIncrement}
                  aria-label="Increase quantity"
                  @mousedown=${suppressBlur}
                  @click=${() => this._adjustAddQuantity(1)}
                >
                  <ha-icon icon="mdi:plus"></ha-icon>
                </button>
              </div>
            `
            : A}
        <button
          class="sl-add-button"
          type="button"
          ?disabled=${!canAdd}
          @click=${() => this._addItem()}
        >
          ${cfg.add_button_label}
        </button>
      </div>
    `;
    }
    /**
     * Allow users to inject custom CSS via either:
     *   style: |
     *     ha-card { ... }
     * or the card-mod compatible:
     *   card_mod:
     *     style: |
     *       ha-card { ... }
     */
    _extractCustomStyle() {
        const cfg = this._config;
        if (!cfg)
            return undefined;
        if (typeof cfg.style === "string" && cfg.style.trim())
            return cfg.style;
        if (cfg.card_mod) {
            if (typeof cfg.card_mod === "string")
                return cfg.card_mod;
            if (typeof cfg.card_mod === "object" && cfg.card_mod.style)
                return cfg.card_mod.style;
        }
        return undefined;
    }
};
ShoppingListCard.styles = cardStyles;
__decorate([
    n({ attribute: false })
], ShoppingListCard.prototype, "hass", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_config", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_items", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_loading", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_error", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_draft", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_completedExpanded", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_editingUid", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_editDraft", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_editQuantity", void 0);
__decorate([
    r()
], ShoppingListCard.prototype, "_addQuantity", void 0);
ShoppingListCard = __decorate([
    t$2(CARD_TAG)
], ShoppingListCard);

export { ShoppingListCard };
//# sourceMappingURL=ha-shopping-list-card.js.map
