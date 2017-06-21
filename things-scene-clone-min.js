(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if("value"in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var NATURE={mutable:false,resizable:true,rotatable:true,properties:[{type:"number",label:"duration",name:"duration",property:"duration"},{type:"string",label:"target",name:"target",property:"target"},{type:"checkbox",label:"repeat",name:"repeat",property:"repeat"},{type:"checkbox",label:"autostart",name:"autostart",property:"autostart"},{type:"number",label:"targetRetention",name:"targetRetention",property:"targetRetention"}]};var _scene=scene,RectPath=_scene.RectPath,Shape=_scene.Shape,Model=_scene.Model;function clone(cloner,target,targetRetention){var targetComponent=cloner.root.findById(target);if(!targetComponent)return;var clone=Object.assign(targetComponent.hierarchy,{templatePrefix:"",id:""});if(targetRetention)clone.retention=targetRetention;var component=Model.compile(clone,cloner.app);var index=targetComponent.parent.indexOf(targetComponent);targetComponent.parent.insertComponentAt(component,index+1);component.started=true;return component}var Clone=function(_RectPath){_inherits(Clone,_RectPath);function Clone(){_classCallCheck(this,Clone);return _possibleConstructorReturn(this,(Clone.__proto__||Object.getPrototypeOf(Clone)).apply(this,arguments))}_createClass(Clone,[{key:"added",value:function added(parent){var _this2=this;this.started=false;setTimeout(function(){if(_this2.get("autostart"))_this2.started=true},500)}},{key:"dispose",value:function dispose(){this.started=false;self._timeout&&clearTimeout(self._timeout);_get(Clone.prototype.__proto__||Object.getPrototypeOf(Clone.prototype),"dispose",this).call(this)}},{key:"_draw",value:function _draw(ctx){var _bounds=this.bounds,left=_bounds.left,top=_bounds.top,width=_bounds.width,height=_bounds.height;ctx.beginPath();ctx.fillStyle="black";ctx.strokeStyle="black";ctx.rect(left,top,width*.8,height*.8);ctx.fill();ctx.stroke();ctx.beginPath();ctx.rect(left+width*.2,top+height*.2,width*.8,height*.8)}},{key:"nature",get:function get(){return NATURE}},{key:"started",get:function get(){return this._started},set:function set(started){if(!!this.started===!!started)return;this._started=!!started;if(!!this._started&&this.app.isViewMode){var _2=function _2(){if(!_self._started||!clone(_self,target,targetRetention)||!duration||!repeat){_self._started=false;return}_self._timeout=setTimeout(function(){requestAnimationFrame(_2)},duration)};var _model=this.model,repeat=_model.repeat,duration=_model.duration,target=_model.target,targetRetention=_model.targetRetention;if(!target)return;if(duration<500)duration=500;var _self=this;requestAnimationFrame(_2)}}}]);return Clone}(RectPath(Shape));exports.default=Clone;scene.Component.register("clone",Clone)},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _clone=require("./clone");Object.defineProperty(exports,"Clone",{enumerable:true,get:function get(){return _interopRequireDefault(_clone).default}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},{"./clone":1}]},{},[2]);