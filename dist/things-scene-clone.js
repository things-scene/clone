!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=scene},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e);var n=r(0);const a={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"duration",name:"duration",property:"duration"},{type:"string",label:"target",name:"target",property:"target"},{type:"checkbox",label:"repeat",name:"repeat",property:"repeat"},{type:"checkbox",label:"autostart",name:"autostart",property:"autostart"},{type:"number",label:"targetRetention",name:"targetRetention",property:"targetRetention"}]};class o extends(Object(n.RectPath)(n.Shape)){added(t){this.started=!1,setTimeout(()=>{this.get("autostart")&&(this.started=!0)},500)}dispose(){this.started=!1,super.dispose()}_draw(t){var{left:e,top:r,width:n,height:a}=this.bounds;t.beginPath(),t.fillStyle="black",t.strokeStyle="black",t.rect(e,r,.8*n,.8*a),t.fill(),t.stroke(),t.beginPath(),t.rect(e+.2*n,r+.2*a,.8*n,.8*a)}get nature(){return a}get started(){return this._started}set started(t){if(!!this.started!=!!t&&(this._started=!!t,this.app.isViewMode))if(this._started){var{repeat:e,duration:r,target:a,targetRetention:o}=this.model;if(!a)return;r<500&&(r=500);let t=this;requestAnimationFrame(function i(){t._started&&function(t,e,r){var a=t.root.findById(e);if(a){var o=Object.assign(a.hierarchy,{templatePrefix:"",id:""});r&&(o.retention=r);var i=n.Model.compile(o,t.app),s=a.parent.indexOf(a);return a.parent.insertComponentAt(i,s+1),i}}(t,a,o)&&r&&e?t._timeout=setTimeout(()=>{requestAnimationFrame(i)},r):t._started=!1})}else this._timeout&&(clearTimeout(this._timeout),this._timeout=0)}}n.Component.register("clone",o),r.d(e,"Clone",function(){return o})}]);
//# sourceMappingURL=things-scene-clone.js.map