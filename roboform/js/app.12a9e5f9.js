(function(e){function t(t){for(var a,r,l=t[0],o=t[1],c=t[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,l=1;l<s.length;l++){var o=s[l];0!==i[o]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},n=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("14c6"),s("08c1"),s("4842"),s("d9fc");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-100 w-100",attrs:{id:"app"}},[s("Carousel")],1)},n=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-100 carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},e._l(e.slides,(function(t){return s("li",{class:e.current==t.id?"active":"",attrs:{"data-target":"#carouselExampleIndicators"}})})),0),s("div",{staticClass:"carousel-inner h-100 d-flex align-items-center"},[s("div",{staticClass:"w-100"},[e._l(e.slides,(function(t){return[s(t.type,{tag:"component",attrs:{"is-active":e.current==t.id,"is-first":t.isFirst,"is-last":t.isLast,element:t}})]})),e.isFinished?s("report"):e._e()],2)])])},l=[];class o{constructor(){this.db={12:{id:12,img:"https://static.wixstatic.com/media/e42882_2f3c46b2f14449b8b335c9136e16d694~mv2.png/v1/fill/w_130,h_130,al_c,lg_1,q_80/Logo-felblauw-zonder-P%26P-(mei-2019).webp",title:"Online ADHD (en ADD) Test",description:"<p><strong>Merk je dat je je moeilijk kunt concentreren en snel wordt afgeleid door je gedachten en/of omgeving? Merk je dat plannen en organiseren erg moeilijk voor je zijn? Of heb je enorm veel energie en ben je daarin moeilijk te stoppen?</strong></p><p>Doe dan deze online zelftest om te achterhalen of de kenmerken die ervaart te maken kunnen hebben met AD(H)D. Invullen is geheel anoniem en je ontvangt direct de uitslag na het afronden van de test.</p>",theme:{primary:"#FF0000",background:"#0000FF"},uacode:""}}}requestForId(e){return this.db[e]}}class c{constructor(){this.db={21:{id:21,tags:[],type:"elementIntro",label:"Online ADHD (en ADD) Test",isFirst:!1,isLast:!1,params:{img:"https://static.wixstatic.com/media/e42882_2f3c46b2f14449b8b335c9136e16d694~mv2.png/v1/fill/w_130,h_130,al_c,lg_1,q_80/Logo-felblauw-zonder-P%26P-(mei-2019).webp",body:"<p><strong>Merk je dat je je moeilijk kunt concentreren en snel wordt afgeleid door je gedachten en/of omgeving? Merk je dat plannen en organiseren erg moeilijk voor je zijn? Of heb je enorm veel energie en ben je daarin moeilijk te stoppen?</strong></p><p>Doe dan deze online zelftest om te achterhalen of de kenmerken die ervaart te maken kunnen hebben met AD(H)D. Invullen is geheel anoniem en je ontvangt direct de uitslag na het afronden van de test.</p>"}},22:{id:22,tags:[],type:"elementInputContactDetails",label:"Controleer je gegevens.",isFirst:!1,isLast:!1,params:{}},23:{id:23,tags:[0,1],type:"elementText",label:"Lees dit goed voor je aan de test begint.",params:{body:"<p>Om je een goed advies te kunnen geven, hebben we eerst wat algemene informatie van je nodig. Daarom stellen we eerst enkele algemene vragen.</p>"}},24:{id:24,tags:[1],type:"elementInputNumber",label:"Wat is je leeftijd?",isFirst:!1,isLast:!1,params:{min:0,max:120}},25:{id:25,tags:[0],type:"elementInputRadios",label:"Wat is je geslacht?",isFirst:!1,isLast:!1,params:{options:[{label:"Male",points:5},{label:"Female",points:10}]}},26:{id:26,tags:[0],type:"elementInputText",label:"Wil je verder nog wat zeggen?",isFirst:!1,isLast:!0,params:{placeholder:"Schrijf je bericht...",description:"Een kleine beschrijving kan de gebruiker helpen om het veld van de juiste data te voorzien."}}}}requestForId(e){return this.db[e]}mockNext(e){return this.db[e+1]?this.db[e+1]:this.db[e]}}const d="roboform-state";class u{constructor(){const e=localStorage.getItem(d);if(null!==e){const t=JSON.parse(e);for(let e in t)this[e]=t[e]}else this.init()}init(){this.elements=[],this.save()}set(e,t){this[e]=t,this.save(),console.info(`Set "${t}" for "${e}" in localStorage.`)}remove(e){delete this[e],this.save()}save(){const e=JSON.stringify(this);localStorage.setItem(d,e)}}var m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("element-base",{class:e.isActive?"active":"",attrs:{"is-first":e.isFirst,"is-last":e.isLast}},[s("template",{slot:"header"},[s("img",{staticClass:"brand-logo",attrs:{width:"100",src:e.element.params.img,alt:e.element.label}}),s("h2",{staticClass:"h3"},[e._v(e._s(e.element.label))])]),s("template",{slot:"content"},[s("div",{staticClass:"form-group"},[s("div",{domProps:{innerHTML:e._s(e.element.params.body)}})])])],2)},p=[],v=s("7bf7"),h={components:{"element-base":v["a"]},props:["isFirst","isLast","isActive","element"],methods:{formValidate:function(){return!0}}},_=h,f=s("2877"),g=Object(f["a"])(_,m,p,!1,null,null,null),b=g.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("element-base",{class:e.isActive?"active":"",attrs:{"is-first":e.isFirst,"is-last":e.isLast}},[s("template",{slot:"header"},[s("h2",{staticClass:"h3"},[e._v(e._s(e.element.label))])]),s("template",{slot:"content"},[s("div",{domProps:{innerHTML:e._s(e.element.params.body)}})])],2)},w=[],C={components:{"element-base":v["a"]},props:["isFirst","isLast","isActive","element"],methods:{formValidate:function(){return!0}}},y=C,j=Object(f["a"])(y,k,w,!1,null,null,null),x=j.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("element-base",{class:e.isActive?"active":"",attrs:{"is-first":e.isFirst,"is-last":e.isLast,errors:e.errors}},[s("template",{slot:"header"},[s("h2",{staticClass:"h3"},[e._v(e._s(e.element.label))])]),s("template",{slot:"content"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"form-control form-control-lg",class:!e.isValid&&e.isValidated?"is-invalid":"",attrs:{type:"number",min:e.element.params.min,max:e.element.params.max},domProps:{value:e.number},on:{keyup:function(t){return e.formValidate()},input:function(t){t.target.composing||(e.number=t.target.value)}}})])])],2)},E=[],O=s("6ecd"),D=O["a"],F=Object(f["a"])(D,V,E,!1,null,null,null),P=F.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("element-base",{class:e.isActive?"active":"",attrs:{"is-first":e.isFirst,"is-last":e.isLast,errors:e.errors}},[s("template",{slot:"header"},[s("h2",{staticClass:"h3"},[e._v(e._s(e.element.label))])]),s("template",{slot:"content"},e._l(e.element.params.options,(function(t,a){return s("div",{staticClass:"form-group"},[s("div",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"custom-control-input",class:!e.isValid&&e.isValidated?"is-invalid":"",attrs:{id:"input-"+e.element.id+"-"+a,type:"radio",name:"customRadio"},domProps:{value:a,checked:e._q(e.value,a)},on:{change:[function(t){e.value=a},function(t){return e.formValidate()}]}}),s("label",{staticClass:"custom-control-label btn btn-lg btn-light",attrs:{for:"input-"+e.element.id+"-"+a}},[e._v("\n                    "+e._s(t.label)+" ("+e._s(t.points)+" points)\n                ")])])])})),0)],2)},A=[],I=s("8a65"),M=I["a"],N=Object(f["a"])(M,L,A,!1,null,null,null),$=N.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("element-base",{class:e.isActive?"active":"",attrs:{"is-first":e.isFirst,"is-last":e.isLast,errors:e.errors}},[s("template",{slot:"header"},[s("h2",{staticClass:"h3"},[e._v(e._s(e.element.label))])]),s("template",{slot:"content"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:e.element.params.placeholder},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e.element.params.description?s("small",{staticClass:"form-text text-muted"},[e._v("\n                "+e._s(e.element.params.description)+"\n            ")]):e._e()])])],2)},T=[],q=s("d2e4"),B=q["a"],R=Object(f["a"])(B,S,T,!1,null,null,null),z=R.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("element-base",{class:e.isActive?"active":"",attrs:{"is-first":e.isFirst,"is-last":e.isLast,errors:e.errors}},[s("template",{slot:"header"},[s("h2",{staticClass:"h3"},[e._v(e._s(e.element.label))])]),s("template",{slot:"content"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-md-6"},[s("label",[e._v("First name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.input.firstName.value,expression:"input.firstName.value"}],staticClass:"form-control form-control-lg",class:!e.input.firstName.isValid&&e.isValidated?"is-invalid":"",attrs:{type:"text"},domProps:{value:e.input.firstName.value},on:{keyup:function(t){return e.formValidate()},input:function(t){t.target.composing||e.$set(e.input.firstName,"value",t.target.value)}}})]),s("div",{staticClass:"form-group col-md-6"},[s("label",[e._v("Last name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.input.lastName.value,expression:"input.lastName.value"}],staticClass:"form-control form-control-lg",class:!e.input.lastName.isValid&&e.isValidated?"is-invalid":"",attrs:{type:"text"},domProps:{value:e.input.lastName.value},on:{keyup:function(t){return e.formValidate()},input:function(t){t.target.composing||e.$set(e.input.lastName,"value",t.target.value)}}})]),s("div",{staticClass:"form-group col-md-12"},[s("label",[e._v("E-mail")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email.value,expression:"input.email.value"}],staticClass:"form-control form-control-lg",class:!e.input.email.isValid&&e.isValidated?"is-invalid":"",attrs:{type:"email"},domProps:{value:e.input.email.value},on:{keyup:function(t){return e.formValidate()},input:function(t){t.target.composing||e.$set(e.input.email,"value",t.target.value)}}})])])])])],2)},H=[],K=s("887c"),U=K["a"],J=Object(f["a"])(U,W,H,!1,null,null,null),G=J.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"carousel-item active"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 offset-md-3"},[s("div",{staticClass:"card card-report card-light"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"h3"},[e._v("\n                        De aanwezigheid van AD(H)D bij het kind is\n                        aannemelijk.\n                    ")]),s("p",[e._v("\n                        Op basis van de door jouw ingevulde antwoorden is\n                        het aannemelijk dat het kind te maken heeft met aan\n                        AD(H)D gerelateerde klachten. Niet alleen wordt er\n                        hoog gescoord op het gebied van aandacht en\n                        concentratie, maar wordt er ook (boven)gemiddeld\n                        gescoord op het gebied van hyperactiviteit en\n                        impulsiviteit.\n                    ")]),s("div",{staticClass:"progress mb-3"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"75%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}},[e._v("\n                            75%\n                        ")])]),s("img",{staticClass:"float-right ml-3 mb-3",attrs:{src:"https://picsum.photos/id/1/300/150",alt:"example image"}}),s("p",[s("strong",[e._v("Op basis van de door jouw ingevulde antwoorden\n                            is het aannemelijk dat het kind te maken heeft\n                            met aan AD(H)D gerelateerde klachten.")])]),s("p",[e._v("\n                        Niet alleen wordt er hoog gescoord op het gebied van\n                        aandacht en concentratie, maar wordt er ook\n                        (boven)gemiddeld gescoord op het gebied van\n                        hyperactiviteit en impulsiviteit.\n                    ")]),s("p",[e._v("\n                        Niet alleen wordt er hoog gescoord op het gebied van\n                        aandacht en concentratie, maar wordt er ook\n                        (boven)gemiddeld gescoord op het gebied van\n                        hyperactiviteit en impulsiviteit.\n                    ")]),s("p",[s("a",{attrs:{href:"#"}},[e._v("Klik hier om het rapport te downloaden")])]),s("ul",[s("li",[s("strong",[e._v("Download de eerste middelen")])]),s("li",[e._v("Download wat andere spullen")]),s("li",[s("a",{attrs:{href:"#",target:"_blank"}},[e._v("Download nog een dingetje")])])]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[e._v("\n                        Register now!\n                    ")])]),s("div",{staticClass:"card-footer d-flex justify-content-between"},[s("a",{staticClass:"btn btn-warning",attrs:{href:"widget.html",role:"button","data-slide":"prev"}},[s("i",{staticClass:"fas fa-file-contract mr-2",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"d-none d-sm-inline-block"},[s("strong",[e._v("Send me this report!")])])])])])])])])}],Y={},Z=Object(f["a"])(Y,Q,X,!1,null,null,null),ee=Z.exports,te={components:{elementIntro:b,elementText:x,elementInputNumber:P,elementInputRadios:$,elementInputText:z,elementInputContactDetails:G,report:ee},data:function(){return{e:new c,f:new o,s:new u,isFinished:!1,current:0,slides:[]}},created:function(){if(this.s.elements.length)for(var e in this.s.elements){var t=this.s.elements[e],s=this.e.requestForId(t);this.slides.push(s)}else{var a=this.e.requestForId(21);this.slides.push(a),this.s.elements.push(21),this.s.save()}this.slides[0].isFirst=!0,this.current=this.slides[this.slides.length-1].id,console.log("Current element is ".concat(this.current,"."))},methods:{updateAndSave:function(){this.current=this.slides[this.slides.length-1].id,this.s.save()},prevItem:function(){this.slides.length>1&&(this.slides.pop(),this.s.elements.pop(),this.updateAndSave())},nextItem:function(){var e=this.e.mockNext(this.current);e.id!==this.current?(this.slides.push(e),this.s.elements.push(e.id),this.updateAndSave()):(this.isFinished=!0,console.log("End of form, submitting results and requesting report."))}}},se=te,ae=Object(f["a"])(se,r,l,!1,null,null,null),ie=ae.exports,ne={name:"App",components:{Carousel:ie}},re=ne,le=Object(f["a"])(re,i,n,!1,null,null,null),oe=le.exports,ce=s("5f5b");s("f9e3"),s("2dd8"),s("f669");a["default"].use(ce["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(oe)}}).$mount("#app")},"6ecd":function(module,__webpack_exports__,__webpack_require__){"use strict";var _ElementBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7bf7");__webpack_exports__["a"]={components:{"element-base":_ElementBase__WEBPACK_IMPORTED_MODULE_0__["a"]},props:["isFirst","isLast","isActive","element"],data:function(){return{number:"",errors:[],isValidated:!1,isValid:!1,validations:[{condition:'this.number === ""',message:"Make sure you answer the question."},{condition:"parseInt(this.number) > this.element.params.max",message:"The value you provided exceeds the maximum amount."},{condition:"parseInt(this.number) < this.element.params.min",message:"The value you provided is too low."}]}},methods:{formValidate:function formValidate(){for(var key in this.errors=[],this.validations){var v=this.validations[key];eval(v.condition)&&(this.errors.push(v.message),this.isValid=!1)}if(this.isValidated=!0,!this.errors.length)return this.isValid=!0,!0}}}},"7bf7":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"carousel-item"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 offset-md-3"},[s("div",{staticClass:"card card-light",class:e.isFormValid?"":"shake"},[s("div",{staticClass:"card-body"},[e._t("header"),s("hr"),e._t("content")],2),s("div",{staticClass:"card-footer d-flex justify-content-between"},[e.isFirst?e._e():s("button",{staticClass:"btn btn-warning",on:{click:function(t){return e.$parent.$parent.prevItem()}}},[s("i",{staticClass:"fas fa-angle-left mr-2",attrs:{"aria-hidden":"true"}}),e._m(0)]),e.isFirst||e.isLast?e._e():s("button",{staticClass:"btn btn-warning",on:{click:function(t){return e.formSubmit()}}},[e._m(1),s("i",{staticClass:"fas fa-angle-right ml-2",attrs:{"aria-hidden":"true"}})]),e.isFirst?s("button",{staticClass:"btn btn-warning",on:{click:function(t){return e.formSubmit()}}},[e._m(2),s("i",{staticClass:"fas fa-angle-right ml-2",attrs:{"aria-hidden":"true"}})]):e._e(),e.isLast?s("button",{staticClass:"btn btn-warning",on:{click:function(t){return e.formSubmit()}}},[e._m(3),s("i",{staticClass:"fas fa-angle-right ml-2",attrs:{"aria-hidden":"true"}})]):e._e()])]),s("div",{staticClass:"w-100"},e._l(e.errors,(function(t){return e.errors.length?s("div",{staticClass:"alert alert-danger mt-3"},[s("strong",[e._v("An error occured!")]),e._v(" "+e._s(t)+"\n                ")]):e._e()})),0)])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"d-none d-sm-inline-block"},[s("strong",[e._v("Previous")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"d-none d-sm-inline-block"},[s("strong",[e._v("Next")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"d-none d-sm-inline-block"},[s("strong",[e._v("Start")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"d-none d-sm-inline-block"},[s("strong",[e._v("View Report")])])}],n={props:["errors","isFirst","isLast"],data:function(){return{isFormValid:!0}},methods:{formSubmit:function(){this.isFormValid=this.$parent.formValidate(),this.isFormValid&&this.$parent.$parent.nextItem()}}},r=n,l=s("2877"),o=Object(l["a"])(r,a,i,!1,null,null,null);t["a"]=o.exports},"887c":function(module,__webpack_exports__,__webpack_require__){"use strict";var _ElementBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7bf7");__webpack_exports__["a"]={components:{"element-base":_ElementBase__WEBPACK_IMPORTED_MODULE_0__["a"]},props:["isFirst","isLast","isActive","element"],data:function(){return{input:{firstName:{value:"",isValid:!1},lastName:{value:"",isValid:!1},email:{value:"",isValid:!1}},errors:[],isValidated:!1,validations:[{input:"firstName",condition:'this.input.firstName.value === ""',message:"Make sure you provide your first name."},{input:"lastName",condition:'this.input.lastName.value === ""',message:"Make sure you provide your first name."},{input:"email",condition:'this.input.email.value === ""',message:"Make sure you provide a valid e-mail address."}]}},methods:{formValidate:function formValidate(){for(var key in this.errors=[],this.validations){var v=this.validations[key];eval(v.condition)?(this.errors.push(v.message),this.input[v.input].isValid=!1):this.input[v.input].isValid=!0}if(this.isValidated=!0,!this.errors.length)return!0}}}},"8a65":function(module,__webpack_exports__,__webpack_require__){"use strict";var _ElementBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7bf7");__webpack_exports__["a"]={components:{"element-base":_ElementBase__WEBPACK_IMPORTED_MODULE_0__["a"]},props:["isFirst","isLast","isActive","element"],data:function(){return{value:"",errors:[],isValidated:!1,isValid:!1,validations:[{condition:'this.value === ""',message:"Make sure you answer the question."}]}},methods:{formValidate:function formValidate(){for(var key in this.errors=[],this.validations){var v=this.validations[key];eval(v.condition)&&(this.errors.push(v.message),this.isValid=!1)}if(this.isValidated=!0,!this.errors.length)return this.isValid=!0,!0}}}},d2e4:function(module,__webpack_exports__,__webpack_require__){"use strict";var _ElementBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7bf7");__webpack_exports__["a"]={components:{"element-base":_ElementBase__WEBPACK_IMPORTED_MODULE_0__["a"]},props:["isFirst","isLast","isActive","element"],data:function(){return{value:"",errors:[],isValidated:!1,isValid:!1,validations:[{condition:'this.value === ""',message:"Make sure you answer the question."}]}},methods:{formValidate:function formValidate(){for(var key in this.errors=[],this.validations){var v=this.validations[key];eval(v.condition)&&(this.errors.push(v.message),this.isValid=!1)}if(this.isValidated=!0,!this.errors.length)return this.isValid=!0,!0}}}},f669:function(e,t,s){}});
//# sourceMappingURL=app.12a9e5f9.js.map