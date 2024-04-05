import './polyfills.server.mjs';
import{$ as we,A as E,B as te,C as h,D as j,E as _e,F as l,G as Ce,H as Ve,I as ie,J as ne,K as re,L as B,M as g,N as De,O as be,Q as Ae,V as Me,X as Ee,Y as Fe,Z as oe,a as pe,aa as Se,b as me,ba as Ie,c as ge,ca as R,d as N,da as xe,e as O,ea as Ne,f as T,g as V,h as M,ha as Oe,i as f,j as k,k as v,l as ve,la as Te,m as P,n as G,o as ye,oa as ke,p as X,q as p,r as m,s as u,t as K,u as _,v as Q,w as D,x as ee,y as s,z as a}from"./chunk-L2XAFIQB.mjs";import{a as y,b as C}from"./chunk-VVCT4QZE.mjs";var pt=t=>({strike:t}),Pe=(()=>{let e=class e{constructor(){this.todoDelete=new p,this.todoCheckbox=new p}onClick(i){this.todoDelete.emit(i),console.log("on click has been triggered")}onCheckboxClick(i){this.todoCheckbox.emit(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-todo-item"]],inputs:{todo:"todo"},outputs:{todoDelete:"todoDelete",todoCheckbox:"todoCheckbox"},standalone:!0,features:[g],decls:11,vars:5,consts:[[1,"my-3"],[3,"ngClass"],[1,"form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input",3,"click"],["for","exampleCheck1",1,"form-check-label"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"h4",1),l(2),a(),s(3,"p"),l(4),a(),s(5,"div",2)(6,"input",3),h("click",function(){return o.onCheckboxClick(o.todo)}),a(),s(7,"label",4),l(8,"Mark As Done"),a()(),s(9,"button",5),h("click",function(){return o.onClick(o.todo)}),l(10,"Delete"),a()()),r&2&&(m(),D("ngClass",De(3,pt,!o.todo.active)),m(),Ce(o.todo.title),m(2),Ve("",o.todo.desc," "))},dependencies:[R,we],styles:[".strike[_ngcontent-%COMP%]{text-decoration:line-through}"]});let t=e;return t})();var We=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(K),u(X))},e.\u0275dir=v({type:e});let t=e;return t})(),mt=(()=>{let e=class e extends We{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ye(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[_]});let t=e;return t})(),$e=new V("");var gt={provide:$e,useExisting:O(()=>z),multi:!0};function vt(){let t=oe()?oe().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var yt=new V(""),z=(()=>{let e=class e extends We{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!vt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(K),u(X),u(yt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[B([gt]),_]});let t=e;return t})();var qe=new V(""),ze=new V("");function Ze(t){return t!=null}function Ye(t){return Ae(t)?pe(t):t}function Je(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Xe(t,e){return e.map(n=>n(t))}function _t(t){return!t.validate}function Ke(t){return t.map(e=>_t(e)?e:n=>e.validate(n))}function Ct(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){return Je(Xe(n,e))}}function ae(t){return t!=null?Ct(Ke(t)):null}function Vt(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){let i=Xe(n,e).map(Ye);return ge(i).pipe(me(Je))}}function le(t){return t!=null?Vt(Ke(t)):null}function Ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Dt(t){return t._rawValidators}function bt(t){return t._rawAsyncValidators}function se(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function je(t,e){let n=se(e);return se(t).forEach(r=>{H(n,r)||n.push(r)}),n}function Be(t,e){return se(e).filter(n=>!H(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ae(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},A=class extends L{get formDirective(){return null}get path(){return null}},x=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},At={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Vi=C(y({},At),{"[class.ng-submitted]":"isSubmitted"}),Qe=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(x,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[_]});let t=e;return t})(),et=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(A,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[_]});let t=e;return t})();var w="VALID",U="INVALID",b="PENDING",S="DISABLED";function tt(t){return(Z(t)?t.validators:t)||null}function Mt(t){return Array.isArray(t)?ae(t):t||null}function it(t,e){return(Z(e)?e.asyncValidators:t)||null}function Et(t){return Array.isArray(t)?le(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ft(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new N(1e3,"");if(!i[n])throw new N(1001,"")}function wt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var $=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===U}get pending(){return this.status==b}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(je(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=b,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(C(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(C(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===b)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;let n=Ye(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new p,this.statusChanges=new p}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(U)?U:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Et(this._rawAsyncValidators)}},q=class extends ${constructor(e,n,i){super(tt(n),it(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){wt(this,!0,e),Object.keys(e).forEach(i=>{Ft(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ue=new V("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function St(t,e){return[...e.path,t]}function nt(t,e,n=de){rt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),xt(t,e),Ot(t,e),Nt(t,e),It(t,e)}function Re(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function It(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function rt(t,e){let n=Dt(t);e.validator!==null?t.setValidators(Ge(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=bt(t);e.asyncValidator!==null?t.setAsyncValidators(Ge(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Re(e._rawValidators,r),Re(e._rawAsyncValidators,r)}function xt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ot(t,e)})}function Nt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ot(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ot(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ot(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Tt(t,e){t==null,rt(t,e)}function kt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Pt(t){return Object.getPrototypeOf(t.constructor)===mt}function Gt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function jt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===z?n=o:Pt(o)?i=o:r=o}),r||i||n||null}var Bt={provide:A,useExisting:O(()=>ce)},I=Promise.resolve(),ce=(()=>{let e=class e extends A{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new p,this.form=new q({},ae(i),le(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){I.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),nt(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){I.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){I.then(()=>{let r=this._findContainer(i.path),o=new q({});Tt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){I.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){I.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Gt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(u(qe,10),u(ze,10),u(ue,8))},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&h("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{options:[M.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([Bt]),_]});let t=e;return t})();function Ue(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function He(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Rt=class extends ${constructor(e=null,n,i){super(tt(n),it(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(He(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){He(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ut={provide:x,useExisting:O(()=>he)},Le=Promise.resolve(),he=(()=>{let e=class e extends x{constructor(i,r,o,d,c,J){super(),this._changeDetectorRef=c,this.callSetDisabledState=J,this.control=new Rt,this._registered=!1,this.name="",this.update=new p,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=jt(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),kt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){nt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Le.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ee(r);Le.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?St(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(u(A,9),u(qe,10),u(ze,10),u($e,10),u(Me,8),u(ue,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"],options:[M.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[B([Ut]),_,ve]});let t=e;return t})(),st=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=T({});let t=e;return t})();var Y=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ue,useValue:i.callSetDisabledState??de}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=k({type:e}),e.\u0275inj=T({imports:[Ht]});let t=e;return t})();var at=(()=>{let e=class e{constructor(){this.title="",this.desc="",this.todoAdd=new p}onSubmit(){let i={sno:8,title:this.title,desc:this.desc,active:!0};this.todoAdd.emit(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-add-todo"]],outputs:{todoAdd:"todoAdd"},standalone:!0,features:[g],decls:14,vars:2,consts:[[1,"my-3"],[3,"ngSubmit"],[1,"form-group"],["for","title"],["type","email","name","title","id","title",1,"form-control",3,"ngModelChange","ngModel"],["for","description"],["type","text","name","desc","id","description",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-sm","btn-primary"]],template:function(r,o){r&1&&(s(0,"h4"),l(1,"Add Your Todos"),a(),s(2,"div",0)(3,"form",1),h("ngSubmit",function(){return o.onSubmit()}),s(4,"div",2)(5,"label",3),l(6,"Todo Title"),a(),s(7,"input",4),re("ngModelChange",function(c){return ne(o.title,c)||(o.title=c),c}),a()(),s(8,"div",2)(9,"label",5),l(10,"Todo Description"),a(),s(11,"input",6),re("ngModelChange",function(c){return ne(o.desc,c)||(o.desc=c),c}),a()(),s(12,"button",7),l(13,"Add Todo "),a()()()),r&2&&(m(7),ie("ngModel",o.title),m(4),ie("ngModel",o.desc))},dependencies:[Y,st,z,Qe,et,he,ce]});let t=e;return t})();function Wt(t,e){t&1&&(s(0,"div"),l(1,"No Todos to display."),a())}function $t(t,e){if(t&1){let n=te();s(0,"div")(1,"app-todo-item",6),h("todoDelete",function(r){P(n);let o=j(2);return G(o.deleteTodo(r))})("todoCheckbox",function(){let r=P(n).index,o=j(2);return G(o.toggleTodo(r))}),a()()}if(t&2){let n=e.$implicit;m(),D("todo",n)}}function qt(t,e){if(t&1&&Q(0,$t,2,1,"div",5),t&2){let n=j();D("ngForOf",n.todos)}}var lt=(()=>{let e=class e{constructor(){this.todos=[]}ngOnInit(){this.loadTodosFromLocalStorage()}loadTodosFromLocalStorage(){if(this.isLocalStorageAvailable()){let i=localStorage.getItem("todos");i&&(this.todos=JSON.parse(i))}}isLocalStorageAvailable(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch{return!1}}deleteTodo(i){let r=this.todos.indexOf(i);r!==-1&&(this.todos.splice(r,1),this.saveTodosToLocalStorage())}addTodo(i){this.todos.push(i),this.saveTodosToLocalStorage()}toggleTodo(i){i>=0&&i<this.todos.length&&(this.todos[i].active=!this.todos[i].active,this.saveTodosToLocalStorage())}saveTodosToLocalStorage(){this.isLocalStorageAvailable()&&localStorage.setItem("todos",JSON.stringify(this.todos))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-todos"]],standalone:!0,features:[g],decls:9,vars:2,consts:[["elseBlock",""],[1,"container"],[1,"text-center","mb-3"],[3,"todoAdd"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[3,"todoDelete","todoCheckbox","todo"]],template:function(r,o){if(r&1){let d=te();s(0,"div",1)(1,"h1",2),l(2,"Todo List by Pulkit"),a(),s(3,"app-add-todo",3),h("todoAdd",function(J){return P(d),G(o.addTodo(J))}),a(),s(4,"h4"),l(5,"Your Todos"),a(),Q(6,Wt,2,0,"div",4)(7,qt,1,1,"ng-template",null,0,be),a()}if(r&2){let d=_e(8);m(6),D("ngIf",o.todos.length===0)("ngIfElse",d)}},dependencies:[R,Se,Ie,Pe,at]});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-about"]],standalone:!0,features:[g],decls:12,vars:0,consts:[[1,"container"],[1,"jumbotron"],[1,"display-4"],[1,"lead"],[1,"my-4"],["href","#","role","button",1,"btn","btn-primary","btn-lg"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"About this Angular Page!"),a(),s(4,"p",3),l(5,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),a(),E(6,"hr",4),s(7,"p"),l(8,"It uses utility classes for typography and spacing to space content out within the larger container."),a(),s(9,"p",3)(10,"a",5),l(11,"Learn more"),a()()()())}});let t=e;return t})();var fe=[{path:"",component:lt},{path:"about",component:ut}];var dt=(()=>{let e=class e{constructor(){this.title="cwh-todo-list"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:15,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],["routerLink","/",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item"],["routerLink","/","routerLinkActive","active",1,"nav-link"],["routerLink","/about","routerLinkActive","active",1,"nav-link"],[1,"container"]],template:function(r,o){r&1&&(s(0,"nav",0)(1,"a",1),l(2,"Todos List"),a(),s(3,"button",2),E(4,"span",3),a(),s(5,"div",4)(6,"ul",5)(7,"li",6)(8,"a",7),l(9,"Home"),a()(),s(10,"li",6)(11,"a",8),l(12,"About"),a()()()()(),s(13,"div",9),E(14,"router-outlet"),a())},dependencies:[Te,Y]});let t=e;return t})();var ct={providers:[ke(fe),Ne()]};var zt={providers:[Oe()]},ht=Fe(ct,zt);var Zt=()=>xe(dt,ht),nn=Zt;export{nn as a};
