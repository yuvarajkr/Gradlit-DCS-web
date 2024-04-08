"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[510],{3179:(C,v,o)=>{o.r(v),o.d(v,{AuthUnlockSessionModule:()=>M});var t,r=o(9299),g=o(4859),d=o(9549),h=o(7392),y=o(284),k=o(1572),x=o(5804),b=o(7775),w=o(4466),l=o(4006),S=o(3844),e=o(4650),T=o(8951),A=o(7495),s=o(8214),p=o(6895);const c=["unlockSessionNgForm"];function a(n,i){if(1&n&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&n){const m=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",m.alert.type)("@shake","error"===m.alert.type),e.xp6(1),e.hij(" ",m.alert.message," ")}}function I(n,i){1&n&&e._UZ(0,"mat-icon",41),2&n&&e.Q6J("svgIcon","heroicons_solid:eye")}function O(n,i){1&n&&e._UZ(0,"mat-icon",41),2&n&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function P(n,i){1&n&&(e.TgZ(0,"span"),e._uU(1," Unlock your session "),e.qZA())}function F(n,i){1&n&&e._UZ(0,"mat-progress-spinner",42),2&n&&e.Q6J("diameter",24)("mode","indeterminate")}const R=function(){return["/sign-out"]};class U{constructor(i,m,u,Z,_){this._activatedRoute=i,this._authService=m,this._formBuilder=u,this._router=Z,this._userService=_,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._userService.user$.subscribe(i=>{this.name=i.name,this._email=i.email,this.name=i?i.name:JSON.parse(localStorage.getItem("user")).name,this._email=i?i.email:JSON.parse(localStorage.getItem("user")).email}),this.unlockSessionForm=this._formBuilder.group({name:[{value:this.name,disabled:!0}],password:["",l.kI.required]})}unlock(){this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this.showAlert=!1,this._authService.unlockSession({email:this._email??"",password:this.unlockSessionForm.get("password").value}).subscribe(()=>{const i=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(i)},i=>{this.unlockSessionForm.enable(),this.unlockSessionNgForm.resetForm({name:{value:this.name,disabled:!0}}),this.alert={type:"error",message:"Invalid password"},this.showAlert=!0}))}}(t=U).\u0275fac=function(i){return new(i||t)(e.Y36(r.gz),e.Y36(T.e),e.Y36(l.QS),e.Y36(r.F0),e.Y36(A.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-unlock-session"]],viewQuery:function(i,m){if(1&i&&e.Gf(c,5),2&i){let u;e.iGM(u=e.CRH())&&(m.unlockSessionNgForm=u.first)}},decls:60,vars:13,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["unlockSessionNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(i,m){if(1&i){const u=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Unlock your session"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Your session is locked due to inactivity"),e.qZA(),e.YNc(9,a,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"Full name"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"mat-form-field",10)(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",12,13),e.TgZ(21,"button",14),e.NdJ("click",function(){e.CHM(u);const _=e.MAs(20);return e.KtG(_.type="password"===_.type?"text":"password")}),e.YNc(22,I,1,1,"mat-icon",15),e.YNc(23,O,1,1,"mat-icon",15),e.qZA(),e.TgZ(24,"mat-error"),e._uU(25," Password is required "),e.qZA()(),e.TgZ(26,"button",16),e.NdJ("click",function(){return m.unlock()}),e.YNc(27,P,2,0,"span",17),e.YNc(28,F,1,2,"mat-progress-spinner",18),e.qZA(),e.TgZ(29,"div",19)(30,"span"),e._uU(31,"I'm not"),e.qZA(),e.TgZ(32,"a",20),e._uU(33),e.qZA()()()()(),e.TgZ(34,"div",21),e.O4$(),e.TgZ(35,"svg",22)(36,"g",23),e._UZ(37,"circle",24)(38,"circle",25),e.qZA()(),e.TgZ(39,"svg",26)(40,"defs")(41,"pattern",27),e._UZ(42,"rect",28),e.qZA()(),e._UZ(43,"rect",29),e.qZA(),e.kcU(),e.TgZ(44,"div",30)(45,"div",31)(46,"div"),e._uU(47,"Welcome to"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"our community"),e.qZA()(),e.TgZ(50,"div",32),e._uU(51," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(52,"div",33)(53,"div",34),e._UZ(54,"img",35)(55,"img",36)(56,"img",37)(57,"img",38),e.qZA(),e.TgZ(58,"div",39),e._uU(59,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&i){const u=e.MAs(20);e.xp6(9),e.Q6J("ngIf",m.showAlert),e.xp6(1),e.Q6J("formGroup",m.unlockSessionForm),e.xp6(5),e.Q6J("formControlName","name"),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===u.type),e.xp6(1),e.Q6J("ngIf","text"===u.type),e.xp6(3),e.Q6J("color","primary")("disabled",m.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",!m.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",m.unlockSessionForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(12,R)),e.xp6(1),e.Oqu(m.name)}},dependencies:[r.rH,g.lW,g.RK,d.KE,d.hX,d.TO,d.R9,h.Hw,y.Nt,k.Ou,s.W,p.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],encapsulation:2,data:{animation:S.L}});const J=[{path:"",component:U}];var f;class M{}(f=M).\u0275fac=function(i){return new(i||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[r.Bz.forChild(J),g.ot,d.lN,h.Ps,y.c,k.Cq,x.J,b.fC,w.m]})},1572:(C,v,o)=>{o.d(v,{Cq:()=>A,Ou:()=>e});var r=o(4650),g=o(3238),d=o(1281),h=o(6895);const y=["determinateSpinner"];function k(s,p){if(1&s&&(r.O4$(),r.TgZ(0,"svg",11),r._UZ(1,"circle",12),r.qZA()),2&s){const t=r.oxw();r.uIk("viewBox",t._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),r.uIk("r",t._circleRadius())}}const x=(0,g.pj)(class{constructor(s){this._elementRef=s}},"primary"),b=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function w(){return{diameter:l}}}),l=100;let e=(()=>{class s extends x{constructor(t,c,a){super(t),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=l,this._noopAnimations="NoopAnimations"===c&&!!a&&!a._forceAnimations,a&&(a.color&&(this.color=this.defaultColor=a.color),a.diameter&&(this.diameter=a.diameter),a.strokeWidth&&(this.strokeWidth=a.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,(0,d.su)(t)))}get diameter(){return this._diameter}set diameter(t){this._diameter=(0,d.su)(t)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=(0,d.su)(t)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const t=2*this._circleRadius()+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return s.\u0275fac=function(t){return new(t||s)(r.Y36(r.SBq),r.Y36(r.QbO,8),r.Y36(b))},s.\u0275cmp=r.Xpm({type:s,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,c){if(1&t&&r.Gf(y,5),2&t){let a;r.iGM(a=r.CRH())&&(c._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:12,hostBindings:function(t,c){2&t&&(r.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===c.mode?c.value:null)("mode",c.mode),r.Udp("width",c.diameter,"px")("height",c.diameter,"px"),r.ekj("_mat-animation-noopable",c._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===c.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,c){if(1&t&&(r.YNc(0,k,2,8,"ng-template",null,0,r.W1O),r.TgZ(2,"div",1,2),r.O4$(),r.TgZ(4,"svg",3),r._UZ(5,"circle",4),r.qZA()(),r.kcU(),r.TgZ(6,"div",5)(7,"div",6)(8,"div",7),r.GkF(9,8),r.qZA(),r.TgZ(10,"div",9),r.GkF(11,8),r.qZA(),r.TgZ(12,"div",10),r.GkF(13,8),r.qZA()()()),2&t){const a=r.MAs(1);r.xp6(4),r.uIk("viewBox",c._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",c._strokeCircumference(),"px")("stroke-dashoffset",c._strokeDashOffset(),"px")("stroke-width",c._circleStrokeWidth(),"%"),r.uIk("r",c._circleRadius()),r.xp6(4),r.Q6J("ngTemplateOutlet",a),r.xp6(2),r.Q6J("ngTemplateOutlet",a),r.xp6(2),r.Q6J("ngTemplateOutlet",a)}},dependencies:[h.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, transparent)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),s})(),A=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[h.ez,g.BQ]}),s})()}}]);