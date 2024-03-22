(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis,Le=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),Be=new WeakMap;let Et=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Le&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Be.set(t,e))}return e}toString(){return this.cssText}};const oi=i=>new Et(typeof i=="string"?i:i+"",void 0,Ue),y=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new Et(t,i,Ue)},ai=(i,e)=>{if(Le)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=ee.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)}},ze=Le?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return oi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:li,defineProperty:ci,getOwnPropertyDescriptor:hi,getOwnPropertyNames:di,getOwnPropertySymbols:ui,getPrototypeOf:pi}=Object,O=globalThis,Ve=O.trustedTypes,fi=Ve?Ve.emptyScript:"",be=O.reactiveElementPolyfillSupport,F=(i,e)=>i,ne={toAttribute(i,e){switch(e){case Boolean:i=i?fi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},je=(i,e)=>!li(i,e),qe={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:je};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);class U extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&ci(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:s}=hi(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qe}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=pi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,r=[...di(t),...ui(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(ze(n))}else e!==void 0&&t.push(ze(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ai(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var s;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:ne).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var s;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=r.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:ne;this._$Em=n,this[n]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??je)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[F("elementProperties")]=new Map,U[F("finalized")]=new Map,be==null||be({ReactiveElement:U}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,se=B.trustedTypes,We=se?se.createPolicy("lit-html",{createHTML:i=>i}):void 0,At="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+A,gi=`<${Pt}>`,T=document,V=()=>T.createComment(""),q=i=>i===null||typeof i!="object"&&typeof i!="function",Ot=Array.isArray,vi=i=>Ot(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ye=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Ge=/>/g,R=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Je=/'/g,Xe=/"/g,St=/^(?:script|style|textarea|title)$/i,mi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=mi(1),D=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Qe=new WeakMap,M=T.createTreeWalker(T,129);function Ct(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}const _i=(i,e)=>{const t=i.length-1,r=[];let n,s=e===2?"<svg>":"",o=H;for(let c=0;c<t;c++){const a=i[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===H?h[1]==="!--"?o=Ke:h[1]!==void 0?o=Ge:h[2]!==void 0?(St.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=R):h[3]!==void 0&&(o=R):o===R?h[0]===">"?(o=n??H,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?R:h[3]==='"'?Xe:Je):o===Xe||o===Je?o=R:o===Ke||o===Ge?o=H:(o=R,n=void 0);const p=o===R&&i[c+1].startsWith("/>")?" ":"";s+=o===H?a+gi:d>=0?(r.push(l),a.slice(0,d)+At+a.slice(d)+A+p):a+A+(d===-2?c:p)}return[Ct(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class W{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=_i(e,t);if(this.el=W.createElement(l,r),M.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=M.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(At)){const u=h[o++],p=n.getAttribute(d).split(A),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:C[2],strings:p,ctor:C[1]==="."?yi:C[1]==="?"?wi:C[1]==="@"?$i:pe}),n.removeAttribute(d)}else d.startsWith(A)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(St.test(n.tagName)){const d=n.textContent.split(A),u=d.length-1;if(u>0){n.textContent=se?se.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],V()),M.nextNode(),a.push({type:2,index:++s});n.append(d[u],V())}}}else if(n.nodeType===8)if(n.data===Pt)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(A,d+1))!==-1;)a.push({type:7,index:s}),d+=A.length-1}s++}}static createElement(e,t){const r=T.createElement("template");return r.innerHTML=e,r}}function k(i,e,t=i,r){var o,c;if(e===D)return e;let n=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const s=q(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(i),n._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=n:t._$Cl=n),n!==void 0&&(e=k(i,n._$AS(i,e.values),n,r)),e}class bi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((e==null?void 0:e.creationScope)??T).importNode(t,!0);M.currentNode=n;let s=M.nextNode(),o=0,c=0,a=r[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new X(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new xi(s,this,e)),this._$AV.push(l),a=r[++c]}o!==(a==null?void 0:a.index)&&(s=M.nextNode(),o++)}return M.currentNode=T,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class X{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),q(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==f&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=W.createElement(Ct(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const o=new bi(n,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=Qe.get(e.strings);return t===void 0&&Qe.set(e.strings,t=new W(e)),t}k(e){Ot(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const s of e)n===t.length?t.push(r=new X(this.S(V()),this.S(V()),this,this.options)):r=t[n],r._$AI(s),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(e,t=this,r,n){const s=this.strings;let o=!1;if(s===void 0)e=k(this,e,t,0),o=!q(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=k(this,c[r+a],t,a),l===D&&(l=this._$AH[a]),o||(o=!q(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class yi extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class wi extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class $i extends pe{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??f)===D)return;const r=this._$AH,n=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==f&&(r===f||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class xi{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const we=B.litHtmlPolyfillSupport;we==null||we(W,X),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.1.2");const Ei=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let n=r._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;r._$litPart$=n=new X(e.insertBefore(V(),s),s,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ei(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}};var xt;w._$litElement$=!0,w.finalized=!0,(xt=globalThis.litElementHydrateSupport)==null||xt.call(globalThis,{LitElement:w});const $e=globalThis.litElementPolyfillSupport;$e==null||$e({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:je},Pi=(i=Ai,e,t)=>{const{kind:r,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.P(o,void 0,i),c}}}if(r==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function $(i){return(e,t)=>typeof t=="object"?Pi(i,e,t):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(i){return $({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rt=class extends Event{constructor(e,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ye=class{constructor(e,t,r,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=r,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Rt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},e!==void 0&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Si=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Ze extends Oi{constructor(e,t,r){var n,s;super(t.context!==void 0?t.initialValue:r),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Rt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(n=this.host).addController)==null||s.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Si(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ci({context:i}){return(e,t)=>{const r=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){r.set(this,new Ze(this,{context:i}))}),{get(){return e.get.call(this)},set(n){var s;return(s=r.get(this))==null||s.setValue(n),e.set.call(this,n)},init(n){var s;return(s=r.get(this))==null||s.setValue(n),n}};{e.constructor.addInitializer(o=>{r.set(o,new Ze(o,{context:i}))});const n=Object.getOwnPropertyDescriptor(e,t);let s;if(n===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(c){r.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=n.set;s={...n,set:function(c){r.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ri({context:i,subscribe:e}){return(t,r)=>{typeof r=="object"?r.addInitializer(function(){new Ye(this,{context:i,callback:n=>{this[r.name]=n},subscribe:e})}):t.constructor.addInitializer(n=>{new Ye(n,{context:i,callback:s=>{n[r]=s},subscribe:e})})}}let Mi=class extends w{constructor(e,t,r){super(),this.updateFn=e,this.getModel=t,this.setModel=r,this.addEventListener("mvu:message",n=>{const s=n.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){const t=this.updateFn(this.getModel(),e),r=t;typeof(r==null?void 0:r.then)=="function"?r.then(n=>{const s=n(this.getModel());console.log("Updating model in Promise:",s),this.setModel(s)}):(console.log("Updating model:",t),this.setModel(t))}},Ti=class extends w{dispatchMessage(e,t=this){const r=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(r)}};class Li{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:r}=t,n=this._handlers.get(r);return n?n(t,e):e}}function Ui(i){return e=>Object.assign({},e,i)}function ji(i){return i}var Di=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Mt=(i,e,t,r)=>{for(var n=r>1?void 0:r?ki(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Di(e,t,n),n};const Tt="BlazingModel",Ii={profile:void 0,flightList:[]};class Lt extends Mi{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Ii}}Mt([Ci({context:Tt}),fe()],Lt.prototype,"model",2);class S extends Ti{getFromModel(e){if(this._model)return this._model[e]}}Mt([Ri({context:Tt,subscribe:!0}),$({attribute:!1})],S.prototype,"_model",2);const Ni=()=>new Li,ge=Ui,ve=ji;function oe(i){return i=i||[],Array.isArray(i)?i:[i]}function b(i){return`[Vaadin.Router] ${i}`}function Hi(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const ae="module",le="nomodule",Ee=[ae,le];function et(i){if(!i.match(/.+\.[m]?js$/))throw new Error(b(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Ut(i){if(!i||!_(i.path))throw new Error(b('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!L(i.action)&&!Array.isArray(i.children)&&!L(i.children)&&!ce(e)&&!t.some(r=>_(i[r])))throw new Error(b(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(_(e))et(e);else if(Ee.some(r=>r in e))Ee.forEach(r=>r in e&&et(e[r]));else throw new Error(b('Expected route bundle to include either "'+le+'" or "'+ae+'" keys, or both'));i.redirect&&["bundle","component"].forEach(r=>{r in i&&console.warn(b(`Route config "${i.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function tt(i){oe(i).forEach(e=>Ut(e))}function it(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===ae?t.setAttribute("type",ae):e===le&&t.setAttribute(le,""),t.async=!0),new Promise((r,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,r(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function Fi(i){return _(i)?it(i):Promise.race(Ee.filter(e=>e in i).map(e=>it(i[e],e)))}function z(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function ce(i){return typeof i=="object"&&!!i}function L(i){return typeof i=="function"}function _(i){return typeof i=="string"}function jt(i){const e=new Error(b(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const j=new class{};function Bi(i){const e=i.port,t=i.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${s}`}function rt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Bi(e))!==window.location.origin)return;const{pathname:n,search:s,hash:o}=e;z("go",{pathname:n,search:s,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const zi={activate(){window.document.addEventListener("click",rt)},inactivate(){window.document.removeEventListener("click",rt)}},Vi=/Trident/.test(navigator.userAgent);Vi&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function nt(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;z("go",{pathname:e,search:t,hash:r})}const qi={activate(){window.addEventListener("popstate",nt)},inactivate(){window.removeEventListener("popstate",nt)}};var N=Ft,Wi=De,Ki=Qi,Gi=It,Ji=Ht,Dt="/",kt="./",Xi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function De(i,e){for(var t=[],r=0,n=0,s="",o=e&&e.delimiter||Dt,c=e&&e.delimiters||kt,a=!1,l;(l=Xi.exec(i))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=i.slice(n,u),n=u+h.length,d){s+=d[1],a=!0;continue}var p="",C=i[n],ei=l[2],ti=l[3],ii=l[4],Y=l[5];if(!a&&s.length){var _e=s.length-1;c.indexOf(s[_e])>-1&&(p=s[_e],s=s.slice(0,_e))}s&&(t.push(s),s="",a=!1);var ri=p!==""&&C!==void 0&&C!==p,ni=Y==="+"||Y==="*",si=Y==="?"||Y==="*",He=p||o,Fe=ti||ii;t.push({name:ei||r++,prefix:p,delimiter:He,optional:si,repeat:ni,partial:ri,pattern:Fe?Yi(Fe):"[^"+x(He)+"]+?"})}return(s||n<i.length)&&t.push(s+i.substr(n)),t}function Qi(i,e){return It(De(i,e))}function It(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(r,n){for(var s="",o=n&&n.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){s+=a;continue}var l=r?r[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function x(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Yi(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Nt(i){return i&&i.sensitive?"":"i"}function Zi(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function er(i,e,t){for(var r=[],n=0;n<i.length;n++)r.push(Ft(i[n],e,t).source);return new RegExp("(?:"+r.join("|")+")",Nt(t))}function tr(i,e,t){return Ht(De(i,t),e,t)}function Ht(i,e,t){t=t||{};for(var r=t.strict,n=t.start!==!1,s=t.end!==!1,o=x(t.delimiter||Dt),c=t.delimiters||kt,a=[].concat(t.endsWith||[]).map(x).concat("$").join("|"),l=n?"^":"",h=i.length===0,d=0;d<i.length;d++){var u=i[d];if(typeof u=="string")l+=x(u),h=d===i.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+x(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=x(u.prefix)+"("+p+")?":l+="(?:"+x(u.prefix)+"("+p+"))?":l+=x(u.prefix)+"("+p+")"}}return s?(r||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Nt(t))}function Ft(i,e,t){return i instanceof RegExp?Zi(i,e):Array.isArray(i)?er(i,e,t):tr(i,e,t)}N.parse=Wi;N.compile=Ki;N.tokensToFunction=Gi;N.tokensToRegExp=Ji;const{hasOwnProperty:ir}=Object.prototype,Ae=new Map;Ae.set("|false",{keys:[],pattern:/(?:)/});function st(i){try{return decodeURIComponent(i)}catch{return i}}function rr(i,e,t,r,n){t=!!t;const s=`${i}|${t}`;let o=Ae.get(s);if(!o){const l=[];o={keys:l,pattern:N(i,l,{end:t,strict:i===""})},Ae.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!ir.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(st):[]:a[d]=u&&st(u))}return{path:c[0],keys:(r||[]).concat(o.keys),params:a}}function Bt(i,e,t,r,n){let s,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!s&&(s=rr(a,e,!h,r,n),s))return{done:!1,value:{route:i,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=i;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Bt(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function nr(i){if(L(i.route.action))return i.route.action(i)}function sr(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function or(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function ar(i,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const n={path:r,route:t};if(!i.chain)i.chain=[];else if(t.parent){let s=i.chain.length;for(;s--&&i.chain[s].route&&i.chain[s].route!==t.parent;)i.chain.pop()}i.chain.push(n)}}class K{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||nr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){tt(e);const t=[...oe(e)];this.root.__children=t}addRoutes(e){return tt(e),this.root.__children.push(...oe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,_(e)?{pathname:e}:e),r=Bt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||r.next(u),o=null,!l&&(s.done||!sr(h,s.value.route))?(o=s,Promise.resolve(j)):s.done?Promise.reject(jt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),ar(c,s.value),Promise.resolve(n(c)).then(p=>p!=null&&p!==j?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=or(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}K.pathToRegexp=N;const{pathToRegexp:ot}=K,at=new Map;function zt(i,e,t){const r=e.name||e.component;if(r&&(i.has(r)?i.get(r).push(e):i.set(r,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,zt(i,s,s.__children||s.children)}}function lt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function ct(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function lr(i,e={}){if(!(i instanceof K))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,n)=>{let s=lt(t,r);if(!s&&(t.clear(),zt(t,i.root,i.root.__children),s=lt(t,r),!s))throw new Error(`Route "${r}" not found`);let o=at.get(s.fullPath);if(!o){let a=ct(s),l=s.parent;for(;l;){const p=ct(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=ot.parse(a),d=ot.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)_(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},at.set(a,o),s.fullPath=a}let c=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=n[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let ht=[];function cr(i){ht.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),ht=i}const hr=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},dr=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function dt(i,e){return i.classList.add(e),new Promise(t=>{if(hr(i)){const r=i.getBoundingClientRect(),n=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;i.setAttribute("style",`position: absolute; ${n}`),dr(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const ur=256;function xe(i){return i!=null}function pr(i){const e=Object.assign({},i);return delete e.next,e}function m({pathname:i="",search:e="",hash:t="",chain:r=[],params:n={},redirectFrom:s,resolver:o},c){const a=r.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>ie(P.pathToRegexp.compile(Vt(a))(Object.assign({},n,l)),o)}}function ut(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function fr(i,e){e.location=m(i);const t=i.chain.map(r=>r.route).indexOf(i.route);return i.chain[t].element=e,e}function te(i,e,t){if(L(i))return i.apply(t,e)}function pt(i,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return te(t[i],e,t)}}function gr(i,e){if(!Array.isArray(i)&&!ce(i))throw new Error(b(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=oe(i);for(let r=0;r<t.length;r++)Ut(t[r]),e.__children.push(t[r])}function Z(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function ie(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Vt(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class P extends K{constructor(e,t){const r=document.head.querySelector("base"),n=r&&r.getAttribute("href");super([],Object.assign({baseUrl:n&&K.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=P.NavigationTrigger;P.setTriggers.apply(P,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=m({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();L(t.children)&&(r=r.then(()=>t.children(pr(e))).then(s=>{!xe(s)&&!L(t.children)&&(s=t.children),gr(s,t)}));const n={redirect:s=>ut(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(e))return te(t.action,[e,n],t)}).then(s=>{if(xe(s)&&(s instanceof HTMLElement||s.redirect||s===j))return s;if(_(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Fi(t.bundle).then(()=>{},()=>{throw new Error(b(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(xe(s))return s;if(_(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=m(s),t&&this.__updateBrowserHistory(s,r===1),z("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),Z(this.__outlet&&this.__outlet.children),this.location=m(Object.assign(n,{resolver:this})),z("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const s=r!==t?r:e,c=ie(Vt(r.chain),r.resolver)===r.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===j?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(r).then(l=>{if(l===null||l===j)throw jt(s);return l&&l!==j&&l!==r?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(fr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(b(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Hi(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],n=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>ut(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,n.length)&&!(r[a].route!==n[a].route||r[a].path!==n[a].path&&r[a].element!==n[a].element||!this.__isReusableElement(r[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===r.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},r[a]);for(let a=0;a<n.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),r[a].element.location=m(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},r[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=m(e,r[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),n[a].element&&(n[a].element.location=m(e,n[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,n){const s=m(t);return e.then(o=>{if(this.__isLatestRender(t))return pt("onBeforeLeave",[s,r,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,r,n){const s=m(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return pt("onBeforeEnter",[s,r,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>ur)throw new Error(b(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(b(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===r)e.chain[n].element=s,r=s;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=r;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===r&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&Z(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Z(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const n=t.chain[r].element;if(n)try{const s=m(e);te(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&Z(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},n=m(e,e.chain[t].route);te(r.onAfterEnter,[n,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],n=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&r&&o){const c=ce(o)&&o.leave||"leaving",a=ce(o)&&o.enter||"entering";n.push(dt(t,c)),n.push(dt(r,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:n}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:n},!0))}static setTriggers(...e){cr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=lr(this)),ie(this.__urlForName(e,t),this)}urlForPath(e,t){return ie(P.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:n}=_(e)?this.__createUrl(e,"http://a"):e;return z("go",{pathname:t,search:r,hash:n})}}const vr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,re=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function mr(){function i(){return!0}return qt(i)}function _r(){try{return br()?!0:yr()?re?!wr():!mr():!1}catch{return!1}}function br(){return localStorage.getItem("vaadin.developmentmode.force")}function yr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function wr(){return!!(re&&Object.keys(re).map(e=>re[e]).filter(e=>e.productionMode).length>0)}function qt(i,e){if(typeof i!="function")return;const t=vr.exec(i.toString());if(t)try{i=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(e)}window.Vaadin=window.Vaadin||{};const ft=function(i,e){if(window.Vaadin.developmentMode)return qt(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=_r());function $r(){}const xr=function(){if(typeof ft=="function")return ft($r)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});xr();P.NavigationTrigger={POPSTATE:qi,CLICK:zi};var Er=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Wt=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ar(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Er(e,t,n),n};let Pe=class extends w{constructor(){super(...arguments),this.router=new P(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};Wt([$({attribute:!1})],Pe.prototype,"routes",2);Pe=Wt([v("vaadin-router")],Pe);var Pr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Kt=(i,e,t,r)=>{for(var n=r>1?void 0:r?Or(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Pr(e,t,n),n};let he=class extends w{constructor(){super(...arguments),this.open=!1}toggleDarkMode(){document.body.classList.toggle("dark")}render(){return g`
    <div class="menu-bar" @click="${this._toggle}">
    <slot>Menu</slot>
  </div>
  ${this.open?g`
    <div class="dropdown-content" slot="menu">
      <ul>
        <li><a href="/profile/">Profile</a></li>
        <li><a href="settings.html">Settings</a></li>
        <li><a href="/login/">Logout</a></li>
        <li>
          <label class="switch">
            <input type="checkbox" @change="${this.toggleDarkMode}">
            <span class="slider round"></span>
          </label> Toggle Dark Mode
        </li>
      </ul>
    </div>
  `:""}
`}_handleChange(i){const e=i.target;this._toggle(e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};he.styles=y`
  :host {
    display: block;
    width: 100%;
  }

  .menu-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #f06d47; /* Example background color */
    color: white; /* Example text color */
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .dropdown-content {
    display: block;
    justify-content:left;
    position: absolute;
    width: 100%;
    top: var(--menu-bar-height, 50px); /* Adjust the height as needed */
    left: 0;
    background-color: #f06d47;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 10px 20px;
  }

  a {
    text-decoration: none;
    color: #333; /* Example link color */
    display: block;
  }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid;
      background: white;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;Kt([$({reflect:!0,type:Boolean})],he.prototype,"open",2);he=Kt([v("drop-down")],he);var Sr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Rr=(i,e,t,r)=>{for(var n=r>1?void 0:r?Cr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Sr(e,t,n),n};let Oe=class extends S{render(){return g`
    <drop-down align="left">
    <div class="dropdown">
        <div>Menu</div>
        <div class="dropdown-content" slot="menu">
 
        </div>
    </div>
    </drop-down>
<h1>Home</h1>
<div>
    <a href="flights/" class="button-link">Flights</a>
    <a href="things/" class="button-link">Things to Do</a>
    <a href="maps/" class="button-link">Maps</a>
    <a href="itinerary/" class="button-link">Itinerary</a>
</div>
    `}};Oe.styles=y`
  body {
    background-color: var(--page-background-color);
    color: var(--text-color);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}
.button-link {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
}

.button-link:hover {
    background-color: #0056b3;
}`;Oe=Rr([v("homepage-view")],Oe);var Mr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,ke=(i,e,t,r)=>{for(var n=r>1?void 0:r?Tr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Mr(e,t,n),n};let G=class extends w{constructor(){super(...arguments),this.data=[],this.sortAscending=!0}toggleSort(){this.sortAscending=!this.sortAscending,this.sortData()}sortData(){this.data=[...this.data].sort((i,e)=>this.sortAscending?i.sortOrder-e.sortOrder:e.sortOrder-i.sortOrder),this.requestUpdate()}renderFlightInfo(i){return g`
        <div class="flight">
            <div class="day">${i.day}</div>
            <div class="route">${i.route}</div>
            <div class="airline">${i.airline} <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- SVG content -->
            </svg></div>
            <div class="flight-number">${i.flightNumber}</div>
            <div class="airplane">${i.airplane}</div>
        </div>`}render(){return g`
            <button @click="${this.toggleSort}">Sort (Toggles Ascending & Descending)</button>
            <div class="main-container">
                ${this.data.map(i=>this.renderFlightInfo(i))}
            </div>
        `}};G.styles=y`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }

        .main-container {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .flight {
            background-color: white;
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 10px;
            width: 100%;
        }

        .icon {
            width: 16px;
            height: 16px;
        }

        button {
            margin: 10px;
            padding: 5px 10px;
            cursor: pointer;
        }
    `;ke([$({type:Array})],G.prototype,"data",2);ke([$({type:Boolean})],G.prototype,"sortAscending",2);G=ke([v("list-f")],G);var gt=Object.freeze,Gt=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Jt=(i,e,t,r)=>{for(var n=r>1?void 0:r?Lr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Gt(e,t,n),n},Ur=(i,e)=>gt(Gt(i,"raw",{value:gt(e||i.slice())})),vt;let de=class extends S{get flights(){return this.getFromModel("flightList")}connectedCallback(){super.connectedCallback(),this.dispatchMessage({type:"FlightListLoaded"})}render(){return g(vt||(vt=Ur([`
    <drop-down align="left">
        <div class="dropdown">
            <div>Menu</div>
            <div class="dropdown-content" slot="menu">
                <script>
                    // Simple dark mode toggle script
                    document.getElementById('darkModeToggle').addEventListener('change', function() {
                        document.body.classList.toggle('dark-mode');
                    });
                <\/script>
            </div>
        </div>
        
        </drop-down>
    
    <div class="main-container"> <!-- Wrapper for sidebar and flights-container -->
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="navbar">
                <a href="/" class="navbar-item">Home</a>
                <a href="/flights/" class="navbar-item">Flights</a>
                <a href="/itinerary/" class="navbar-item">Itinerary</a>
                <a href="/things/" class="navbar-item">Things to Do</a>
                <a href="/maps/" class="navbar-item">Map</a>
            </div>
        </div>
        
        <list-f .data=`,`></list-f>

        <!-- Flights Container -->
    `])),this.flights)}};de.styles=y`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.main-container {
    display: flex; /* This makes the sidebar and flights-container display side by side */
    width: 100%; /* Adjust as necessary */
    max-width: 1200px; /* Optional: limits the maximum width of the content */
}

.sidebar {
    background-color: #f06d47;
    padding: 20px;
    width: 250px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
}

.navbar-item {
    background-color: white;
    color: black;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: block;
}

.flights-container {
    background-color: #8dc3d6;
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto; /* Allows scrolling if the content exceeds the viewport height */
}

.flight {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .main-container {
        flex-direction: column; /* Stack the sidebar and flights-container on smaller screens */
    }

    .sidebar, .flights-container {
        width: 100%; /* Full width for both on smaller screens */
        height: auto; /* Adjust height automatically */
    }
}
`;Jt([$({type:Array})],de.prototype,"flights",1);de=Jt([v("flight-view")],de);var mt=Object.freeze,Xt=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Dr=(i,e,t,r)=>{for(var n=r>1?void 0:r?jr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Xt(e,t,n),n},kr=(i,e)=>mt(Xt(i,"raw",{value:mt(e||i.slice())})),_t;let Se=class extends S{render(){return g(_t||(_t=kr([`
    <drop-down align="left">
    <div class="dropdown">
        <div>Menu</div>
        <div class="dropdown-content" slot="menu">
            <script>
                // Simple dark mode toggle script
                document.getElementById('darkModeToggle').addEventListener('change', function() {
                    document.body.classList.toggle('dark-mode');
                });
            <\/script>
        </div>
    </div>
    
    </drop-down>
<div class="content-container"> <!-- Wrapper for sidebar and content -->
    <!-- Sidebar -->
    <div class="sidebar">
    <div class="navbar">
    <a href="/" class="navbar-item">Home</a>
    <a href="/flights/" class="navbar-item">Flights</a>
    <a href="/itinerary/" class="navbar-item">Itinerary</a>
    <a href="/things/" class="navbar-item">Things to Do</a>
    <a href="/maps/" class="navbar-item">Map</a>
</div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <h1>Top Things to Do in London</h1>
        <ol>
            <li>Visit the British Museum</li>
            <li>Explore the Tower of London</li>
            <li>Enjoy the views from the London Eye</li>
            <li>Walk through Hyde Park</li>
            <li>Experience the history at Westminster Abbey</li>
            <li>Shop at Camden Market</li>
            <li>See a show in the West End</li>
        </ol>
    </div>
</div>
    `])))}};Se.styles=y`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.content-container {
    display: flex;
    height: 100vh; /* Ensure it takes the full viewport height */
    width: 100%; /* Ensure it takes the full width */
}

.sidebar {
    background-color: var(--sidebar-background-color, #f06d47);
    padding: 20px;
    width: 250px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
}

.navbar {
    display: flex;
    flex-direction: column;
}

.navbar-item {
    background-color: var(--item-background-color, white);
    color: var(--text-color);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: block;
}

.main-content {
    flex-grow: 1; /* Allows the main content to fill the remaining space */
    padding: 20px;
    overflow-y: auto; /* Scroll if content exceeds the viewport height */
}

/* h1 {
    text-align: left; /* Align the title to the left */
/* }

ol {
    padding-left: 20px; /* Indent the list for better readability */
/* } */ 
h1,ol {
    margin: 0;
    padding-left: 0; /* Adjust if you want some spacing */
}`;Se=Dr([v("things-view")],Se);var bt=Object.freeze,Qt=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Nr=(i,e,t,r)=>{for(var n=r>1?void 0:r?Ir(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Qt(e,t,n),n},Hr=(i,e)=>bt(Qt(i,"raw",{value:bt(e||i.slice())})),yt;let Ce=class extends S{render(){return g(yt||(yt=Hr([`
    <drop-down align="left">
        <div class="dropdown">
            <div>Menu</div>
            <div class="dropdown-content" slot="menu">
                <script>
                    // Simple dark mode toggle script
                    document.getElementById('darkModeToggle').addEventListener('change', function() {
                        document.body.classList.toggle('dark-mode');
                    });
                <\/script>
            </div>
        </div>
        
        </drop-down>
    <!-- Sidebar -->
    <div class="sidebar">
    <div class="navbar">
    <a href="/" class="navbar-item">Home</a>
    <a href="/flights/" class="navbar-item">Flights</a>
    <a href="/itinerary/" class="navbar-item">Itinerary</a>
    <a href="/things/" class="navbar-item">Things to Do</a>
    <a href="/maps/" class="navbar-item">Map</a>
    </div>
    </div>
    
    <div class="map-container">
        <h1>Map of London</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518354257!2d-0.266402471571921!3d51.528526204716215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1705474888621!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `])))}};Ce.styles=y`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

/* Sidebar styles */
.sidebar {
    background-color: var(--sidebar-background-color, #f06d47);
    padding: 20px;
    width: 250px; /* Fixed width for the sidebar */
    height: 100vh; /* Full height */
    box-sizing: border-box; /* Include padding in width calculation */
    float: left; /* Float the sidebar to the left */
}

/* Navbar and navbar items */
.navbar {
    display: block;
}

.navbar-item {
    background-color: var(--item-background-color, white);
    color: var(--text-color);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: block; /* Block-level elements stack vertically */
}

/* Map container styles */
.map-container {
    margin-left: 270px; /* Add left margin equal to the sidebar width plus padding */
    height: 100vh; /* Full viewport height */
    box-sizing: border-box;
    overflow: hidden;
}

/* Iframe styles within the map container */
iframe {
    width: calc(100% - 270px); /* Subtract the sidebar width */
    height: 100%;
    border: none;
}

/* Clearfix for the floated sidebar */
body::after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .sidebar, 
    .map-container {
        width: 100%; /* Full width for both on smaller screens */
        height: auto; /* Adjust height automatically */
        float: none; /* Disable float for mobile view */
        margin-left: 0; /* Reset margins */
    }

    iframe {
        width: 100%; /* Full width for iframe on smaller screens */
    }
}
`;Ce=Nr([v("maps-view")],Ce);var wt=Object.freeze,Yt=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Br=(i,e,t,r)=>{for(var n=r>1?void 0:r?Fr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Yt(e,t,n),n},zr=(i,e)=>wt(Yt(i,"raw",{value:wt(e||i.slice())})),$t;let Re=class extends S{render(){return g($t||($t=zr([`
    <drop-down align="left">
        <div class="dropdown">
            <div>Menu</div>
            <div class="dropdown-content" slot="menu">
                <script>
                    // Simple dark mode toggle script
                    document.getElementById('darkModeToggle').addEventListener('change', function() {
                        document.body.classList.toggle('dark-mode');
                    });
                <\/script>
            </div>
        </div>
        
        </drop-down>
    <div class="content-container"> <!-- Wrap sidebar and main content together -->
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="navbar">
                <a href="/" class="navbar-item">Home</a>
                <a href="/flights/" class="navbar-item">Flights</a>
                <a href="/itinerary/" class="navbar-item">Itinerary</a>
                <a href="/things/" class="navbar-item">Things to Do</a>
                <a href="/maps/" class="navbar-item">Map</a>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content"> <!-- New wrapper for the main content -->
            <h1>3-Day London Itinerary</h1>
            <div class="itinerary">
                <div class="day-title">
                    Day 1: <a href="/flights/" class="flights-link">Arrival from San Francisco <svg class="icon">
                        <use xlink:href="/icons/transportation.svg#icon-train"></use>
                      </svg></a>
                </div>
                <ul>
                    <li>Check-in to the hotel</li>
                    <li>Evening walk through Hyde Park</li>
                    <li>Dinner in a traditional British pub</li>
                </ul>
            </div>
        
            <!-- Day 2 -->
            <div class="itinerary">
                <div class="day-title">Day 2: Exploring History</div>
                <ul>
                    <li>Morning visit to the British Museum</li>
                    <li>Lunch at a nearby cafe</li>
                    <li>Afternoon tour of Westminster Abbey</li>
                    <li>Evening at leisure</li>
                </ul>
            </div>
        
            <!-- Day 3 -->
            <div class="itinerary">
                <div class="day-title">Day 3: Sightseeing and Departure</div>
                       <ul>
                    <li>Ride on the London Eye in the morning</li>
                    <li>Explore Camden Market and have lunch</li>
                    <li>Visit the Tower of London in the afternoon</li>
                    <li>Flight: Depart London to San Francisco in the evening</li>
                </ul>
            </div>
            </div>
            <!-- Additional days' content here -->
        </div>
    </div>
    `])))}};Re.styles=y`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.content-container {
    display: flex;
    height: 100vh; /* Ensure it takes the full viewport height */
    width: 100%; /* Ensure it takes the full width */
}

.sidebar {
    background-color: var(--sidebar-background-color, #f06d47);
    padding: 20px;
    width: 250px; /* Keep the sidebar width fixed */
    box-sizing: border-box;
    overflow-y: auto; /* Allow scrolling if needed */
}

.navbar {
    display: flex;
    flex-direction: column;
}

.navbar-item {
    background-color: var(--item-background-color, white);
    color: var(--text-color);
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    text-align: left;
    text-decoration: none;
    display: block;
}

.main-content {
    flex-grow: 1; /* Allows the main content to fill the remaining space */
    padding: 20px;
    overflow-y: auto; /* Scroll if content exceeds the viewport height */
}

h1, .itinerary, ol {
    margin: 0;
    padding-left: 0; /* Adjust if you want some spacing */
}
`;Re=Br([v("itinerary-view")],Re);var Vr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,me=(i,e,t,r)=>{for(var n=r>1?void 0:r?qr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Vr(e,t,n),n};let I=class extends S{constructor(){super(),this.showSignup=!1,this.username="",this.password="",this.handleUsernameChange=this.handleUsernameChange.bind(this),this.handlePasswordChange=this.handlePasswordChange.bind(this),this.performLogin=this.performLogin.bind(this)}render(){return g`
      ${this.showSignup?this.renderSignup():this.renderLogin()}
    `}toggleForm(){this.showSignup=!this.showSignup}handleUsernameChange(i){const e=i.target;this.username=e.value}handlePasswordChange(i){const e=i.target;this.password=e.value}performLogin(){console.log("Logging in with username:",this.username,"and password:",this.password)}renderLogin(){return g`
      <div class="login-container">
        <input id="username" type="text" placeholder="Username" @input=${this.handleUsernameChange}>
        <input id="password" type="password" placeholder="Password" @input=${this.handlePasswordChange}>
        <button @click=${this.performLogin}>Login</button>
        <div class="toggle-button" @click="${this.toggleForm}">Don't have an account? Sign up</div>
      </div>
    `}renderSignup(){return g`
      <div class="signup-container">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Sign Up</button>
        <div class="toggle-button" @click="${this.toggleForm}">Already have an account? Sign in</div>
      </div>
    `}};I.styles=y`
    /* Add your existing styles here */
    .login-container, .signup-container {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .toggle-button {
      margin-top: 20px;
      padding: 10px;
      background-color: var(--button-background-color, blue);
      color: white;
      cursor: pointer;
      text-align: center;
    }
  `;me([fe()],I.prototype,"showSignup",2);me([fe()],I.prototype,"username",2);me([fe()],I.prototype,"password",2);I=me([v("login-view")],I);var Wr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Gr=(i,e,t,r)=>{for(var n=r>1?void 0:r?Kr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Wr(e,t,n),n};let Me=class extends S{render(){return g`
    <div class="user-panel">
    <user-profile></user-profile>
    </div>
    

    <div class="sidebar">
            <div class="navbar">
                <a href="/" class="navbar-item">Home</a>
                <a href="/flights/" class="navbar-item">Flights</a>
                <a href="/itinerary/" class="navbar-item">Itinerary</a>
                <a href="/things/" class="navbar-item">Things to Do</a>
                <a href="/maps/" class="navbar-item">Map</a>
            </div>
        </div>
    `}};Me.styles=y`
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    height: 100vh;
    margin: 0;
    overflow: hidden; /* Prevents scrollbars if the content fits the viewport */
}

/* Main container styles */
.main-container {
    width: 100%; /* Ensures it fills the width of the viewport */
    height: 100vh; /* Full viewport height */
}

/* Sidebar styles */
.sidebar {
    background-color: #f06d47; /* Fallback color if the variable is not defined */
    padding: 20px;
    width: 250px; /* Fixed width for the sidebar */
    height: 100vh; /* Full height */
    box-sizing: border-box; /* Include padding in width calculation */
    overflow-y: auto; /* Enable scroll on small screens/high number of itineraries */
    float: left; /* Floats the sidebar to the left */
}

/* Navbar and navbar items */
.navbar {
    display: block; /* Default display for block-level elements */
}

.navbar-item {
    background-color: white; /* Fallback color if the variable is not defined */
    color: black; /* Fallback color if the variable is not defined */
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px; /* Slightly rounded corners for a softer look */
    text-align: center;
    text-decoration: none; /* Remove underline from links */
    display: block; /* Block display will fill the width of the sidebar */
}

/* User panel styles */
.user-panel {
    margin-left: 270px; /* Sidebar width plus its padding */
    display: inline-block; /* Allows for centering */
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    justify: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    vertical-align: center; /* Aligns with the top of the sidebar if they are side by side */
}

.user-panel img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

/* Clearfix for the floated sidebar */
.main-container::after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
    .sidebar {
        width: 100%; /* Full width for the sidebar on smaller screens */
        height: auto; /* Height adjusted to content */
        float: none; /* Removes float on mobile */
    }

    .user-panel {
        margin-left: 0; /* Reset margin since the sidebar is now above */
        display: block; /* Takes the full width */
    }
}
`;Me=Gr([v("profile-view")],Me);const Jr=[{path:"/flights/",component:"flight-view"},{path:"/",component:"homepage-view"},{path:"/things/",component:"things-view"},{path:"/maps/",component:"maps-view"},{path:"/itinerary/",component:"itinerary-view"},{path:"/profile/",component:"profile-view"},{path:"/login/",component:"login-view"},{path:"(.*)",redirect:"/"}];var Xr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Ie=(i,e,t,r)=>{for(var n=r>1?void 0:r?Qr(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&Xr(e,t,n),n};let J=class extends w{constructor(){super(...arguments),this.userId="rogp"}connectedCallback(){super.connectedCallback(),fetch(`http://localhost:3000/api/profile/${this.userId}`).then(i=>i.json()).then(i=>{this.profile=i})}render(){var i,e,t,r;return g`
      <h1>${(i=this.profile)==null?void 0:i.name}</h1>
      <p>${(e=this.profile)==null?void 0:e.userid}</p>
      <p>${(t=this.profile)==null?void 0:t.nickname}</p>
      <p>${(r=this.profile)==null?void 0:r.city}</p>
    `}};J.styles=y``;Ie([$({type:String})],J.prototype,"userId",2);Ie([$({type:Object})],J.prototype,"profile",2);J=Ie([v("user-profile")],J);const Yr="http://127.0.0.1:3000",Zr="/api",en="JWT_AUTH_TOKEN",E=class E{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new E;return console.log("Deauthenticating",e,E._theUser),e===E._theUser&&(localStorage.removeItem(en),E._theUser=t),t}};E._theUser=new E;let ue=E;class Ne{constructor(e){this._base=Zr,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=ue._theUser.authenticated,r={"Content-Type":"application/json"};if(t){const s={Authorization:`Bearer ${ue._theUser.token}`};return e?{...r,...s}:s}else return e?{...r}:void 0}_url(e){return`${Yr}${this._base}${e}`}}class Zt extends Ne{constructor(){super(void 0)}}const Q=Ni(),tn=Q.update;Q.addMessage("LoginSubmitted",i=>{const{userid:e,password:t}=i;return new Ne({userid:e,password:t}).post("login").then(r=>{if(r.status===200)return r.json()}).then(r=>{if(r)return console.log("Login:",r),r}).then(r=>r?ge({profile:r}):ve)});Q.addMessage("FlightListLoaded",i=>new Zt().get("/flights/").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Flights:",e),e}).then(e=>e?ge({flightList:e}):ve));Q.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new Zt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?ge({profile:t}):ve)});Q.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new Ne(t).put(`/profiles/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{r&&console.log("Profile:",r)}).then(r=>r?ge({profile:r}):ve)});var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,sn=(i,e,t,r)=>{for(var n=r>1?void 0:r?nn(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&rn(e,t,n),n};let Te=class extends Lt{constructor(){super(tn)}render(){return g`
    <vaadin-router .routes=${Jr}> </vaadin-router>
    `}};Te.styles=y``;Te=sn([v("travelbuddy-app")],Te);
