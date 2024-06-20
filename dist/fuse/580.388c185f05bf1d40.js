"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[580],{1580:(M,A,i)=>{i.r(A),i.d(A,{AnnouncementModule:()=>U});var m,s=i(6895),g=i(7392),D=i(5804),x=i(9299),h=i(9549),r=i(4006),_=i(7274),e=i(4650),J=i(925),C=i(9742),Z=i(4745),b=i(284),y=i(9349),v=i(8796);function F(o,n){if(1&o&&(e.TgZ(0,"ng-option",19),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.Id),e.xp6(1),e.Oqu(t.Name)}}function q(o,n){if(1&o&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(null==t.file?null:t.file.name)}}function I(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",21)(1,"input",22,12),e.NdJ("change",function(a){e.CHM(t);const c=e.oxw();return e.KtG(c.onImageUpload(a))}),e.qZA(),e.TgZ(3,"label",23),e._UZ(4,"mat-icon",14),e._uU(5," Attach Image "),e.qZA()()}2&o&&(e.xp6(1),e.Q6J("multiple",!1)("accept","application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:document-text"))}class w{constructor(n,t,l,a,c){this._studentData=n,this.data=t,this._studentHttp=l,this._data=a,this._dialogRef=c,this.formFieldHelpers=[""],this.createStudentCircularForm=this._studentData.getCreateCircularForm(),this._studentHttp.getAllDepartments().subscribe({next:d=>{this.departments=d.data},error:d=>{console.log("fetching departments failed...")}})}onCreateCircular(){"Circular"===this.data.type?this._studentHttp.createCirculars(this._populateData()).subscribe({next:n=>{this._closeDialog(),document.location.reload()},error:n=>{console.log(n)}}):this._studentHttp.createAnnouncement(this._populateData()).subscribe({next:n=>{this._closeDialog(),console.log(n)},error:n=>{console.log(n)}})}_populateData(){let n=new FormData;return this.file&&n.append("file_name",this.file),this.image_file&&n.append("image_name",this.image_file),n.append("department_id",this.createStudentCircularForm.get("selectedDepId").value),n.append("heading",this.createStudentCircularForm.get("heading").value),n.append("group_name",this.createStudentCircularForm.get("group_name").value),n.append("description",this.createStudentCircularForm.get("description").value),n}onFileUpload(n){this.file=n.target.files[0]}onImageUpload(n){this.image_file=n.target.files[0]}_closeDialog(){this._dialogRef.close()}}(m=w).\u0275fac=function(n){return new(n||m)(e.Y36(J.h),e.Y36(_.WI,8),e.Y36(C.A),e.Y36(Z.D),e.Y36(_.so))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-create-announcement-club"]],decls:27,vars:12,consts:[[1,"flex","flex-col","mt-4","pb-4","overflow-hidden",3,"formGroup"],[1,"flex","flex-col","gt-xs:flex-row","mt-8","w-1/2"],[1,"font-medium"],["formControlName","selectedDepId",3,"virtualScroll"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","flex-col","gt-xs:flex-row"],[1,"flex-auto","gt-xs:pr-3",3,"ngClass"],["required","","matInput","","formControlName","heading","placeholder","This is a placeholder"],[1,"flex"],[1,"flex-auto",3,"ngClass"],["required","","matInput","","formControlName","description","cdkTextareaAutosize",""],["required","","id","document-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["post_documet",""],["for","document-file-input","matRipple","",1,"flex"],[3,"svgIcon"],["class","text-md font-semibold",4,"ngIf"],["class","mt-2",4,"ngIf"],[1,"mt-4"],[1,"br-10",2,"background-color","lightsteelblue","border-radius","10px","width","111px","height","31px",3,"click"],[3,"value"],[1,"text-md","font-semibold"],[1,"mt-2"],["id","document-image-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","document-image-input","matRipple","",1,"flex"]],template:function(n,t){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2),e._uU(3,"Depatrment to show to"),e.qZA(),e.TgZ(4,"ng-select",3),e.YNc(5,F,2,2,"ng-option",4),e.qZA()(),e.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),e._uU(9),e.qZA(),e._UZ(10,"input",7),e.qZA()(),e.TgZ(11,"div",8)(12,"mat-form-field",9)(13,"mat-label"),e._uU(14),e.qZA(),e._UZ(15,"textarea",10),e.qZA()(),e.TgZ(16,"div")(17,"input",11,12),e.NdJ("change",function(a){return t.onFileUpload(a)}),e.qZA(),e.TgZ(19,"label",13),e._UZ(20,"mat-icon",14),e._uU(21," Attach File "),e.qZA(),e.YNc(22,q,2,1,"span",15),e.qZA(),e.YNc(23,I,6,3,"div",16),e.TgZ(24,"div",17)(25,"button",18),e.NdJ("click",function(){return t.onCreateCircular()}),e._uU(26,"Create"),e.qZA()()()),2&n&&(e.Q6J("formGroup",t.createStudentCircularForm),e.xp6(4),e.Q6J("virtualScroll",!0),e.xp6(1),e.Q6J("ngForOf",t.departments),e.xp6(2),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(2),e.hij("",t.data.type," Name"),e.xp6(3),e.Q6J("ngClass",t.formFieldHelpers),e.xp6(2),e.hij("",t.data.type," Description"),e.xp6(3),e.Q6J("multiple",!1)("accept","application/pdf"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(2),e.Q6J("ngIf",null==t.file?null:t.file.name),e.xp6(1),e.Q6J("ngIf","Circular"!==t.data.type))},dependencies:[s.mk,s.sg,s.O5,g.Hw,h.KE,h.hX,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,b.Nt,y.IC,v.w9,v.jq]});var p,Q=i(9602),f=i(4859);function H(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"fuse-card",9)(1,"div",10)(2,"div",11)(3,"span",12),e._uU(4),e.ALo(5,"slice"),e.qZA()(),e.TgZ(6,"div")(7,"button",13),e.NdJ("click",function(){const c=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.onDeleteCircular(null==c?null:c.Id))}),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA()()()(),e.TgZ(10,"div",14)(11,"div"),e._uU(12),e.ALo(13,"slice"),e.qZA()(),e.TgZ(14,"div",15)(15,"div",16),e._UZ(16,"mat-icon",17),e.TgZ(17,"a",18)(18,"span",19),e._uU(19,"Download Attachment"),e.qZA()()(),e.TgZ(20,"div",20)(21,"span",21),e._uU(22,"Created at:"),e.qZA(),e._uU(23),e.ALo(24,"date"),e.qZA()()()}if(2&o){const t=n.$implicit;e.xp6(4),e.Oqu(e.Dn7(5,5,t.heading,0,45)),e.xp6(8),e.hij(" ",e.Dn7(13,9,t.description,0,400)," "),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:download"),e.xp6(1),e.Q6J("href",null==t?null:t.file_path,e.LSH),e.xp6(6),e.hij(" ",e.xi3(24,13,null==t?null:t.created_at,"medium")," ")}}function N(o,n){if(1&o&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,H,25,16,"fuse-card",8),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.allAnnouncement)}}const Y=function(){return["./"]};function j(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"fuse-card",27),e.NdJ("click",function(){const c=e.CHM(t).$implicit,d=e.oxw(3);return e.KtG(d.onAnncExpanded(c))}),e.TgZ(1,"div",28)(2,"div",29),e._uU(3,"Admin"),e.qZA(),e.TgZ(4,"div",30),e._uU(5),e.ALo(6,"slice"),e.qZA(),e.TgZ(7,"div",31),e._uU(8),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",32)(11,"a",33),e._uU(12," View more "),e.qZA()()(),e.TgZ(13,"div",34),e._UZ(14,"img",35),e.qZA()()}if(2&o){const t=n.$implicit;e.xp6(5),e.Oqu(e.Dn7(6,5,t.heading,0,10)+"...."),e.xp6(3),e.hij(" ",e.Dn7(9,9,t.description,0,10)+"...."," "),e.xp6(3),e.Q6J("color","primary")("routerLink",e.DdM(13,Y)),e.xp6(3),e.Q6J("src",t.image_url,e.LSH)}}function S(o,n){if(1&o&&(e.TgZ(0,"div",25),e.YNc(1,j,15,14,"fuse-card",26),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.allAnnouncement)}}function O(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"button",36),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.isAnncExpanded=!1)}),e._uU(2,"Go Back"),e.qZA(),e.TgZ(3,"fuse-card",37)(4,"div",38)(5,"div",29),e._uU(6,"Admin"),e.qZA(),e.TgZ(7,"div",30),e._uU(8),e.qZA(),e.TgZ(9,"div",31),e._uU(10),e.qZA()(),e.TgZ(11,"div",39),e._UZ(12,"img",35),e.qZA()()()}if(2&o){const t=e.oxw(2);e.xp6(8),e.Oqu(t.selectedAnnDetails.heading),e.xp6(2),e.hij(" ",t.selectedAnnDetails.description," "),e.xp6(2),e.Q6J("src",null==t.selectedAnnDetails?null:t.selectedAnnDetails.image_url,e.LSH)}}function k(o,n){if(1&o&&(e.TgZ(0,"div",22),e.YNc(1,S,2,1,"div",23),e.YNc(2,O,13,3,"div",24),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.isAnncExpanded),e.xp6(1),e.Q6J("ngIf",t.isAnncExpanded)}}class T{constructor(n,t,l,a){this._studentHttp=n,this._matDialog=t,this._activatedRoute=l,this._dataService=a,this.isCircExpanded=!1,this.isAnncExpanded=!1,this.isCircular=this._activatedRoute.snapshot.queryParamMap.get("circular"),this.onTypeSelection("announcement"===this.isCircular?"Announcement":"Circular"),this._studentHttp.getAllDepartments().subscribe({next:c=>{this._dataService.setAllDepartments(c.data)},error:c=>{console.log("fetching departments failed...")}})}onCreateCircular(n){this._matDialog.open(w,{autoFocus:!1,maxHeight:"90vh",width:"60vw",data:{type:n}}).afterClosed().subscribe(l=>{console.log(`Dialog result: ${l}`)})}onTypeSelection(n){"Circular"===n?(this.isCircular="Circular",this._studentHttp.getAllCircualrs().subscribe({next:t=>{this.allAnnouncement=t?.data?.rows,this.allAnnouncement=this.allAnnouncement?.sort((l,a)=>-l.updated_at.localeCompare(a.updated_at))}})):(this.isCircular="announcement",this._studentHttp.getAllAnnouncements().subscribe({next:t=>{this.allAnnouncement=t.data.rows}}))}onAnncExpanded(n){this.isAnncExpanded=!0,this.selectedAnnDetails=n}onDeleteCircular(n){this._studentHttp.deleteCircular(n).subscribe({next:t=>{this.onTypeSelection("Circular")},error:t=>{console.log(t)}})}}(p=T).\u0275fac=function(n){return new(n||p)(e.Y36(C.A),e.Y36(_.uw),e.Y36(x.gz),e.Y36(Z.D))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-announcement-clubs"]],decls:9,vars:2,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"p-6","flex","justify-between","header-bg-grad-lit"],[1,"text-3xl","font-semibold","flex"],["mat-raised-button","",2,"background-color","#001E52","color","white",3,"click"],["class","flex-auto p-3",4,"ngIf"],["class","flex-auto",4,"ngIf"],[1,"flex-auto","p-3"],[1,"items-start","w-full","-m-4"],["class","flex flex-col w-full filter-article m-4 min-h-52 max-h-96 relative",4,"ngFor","ngForOf"],[1,"flex","flex-col","w-full","filter-article","m-4","min-h-52","max-h-96","relative"],[1,"flex","items-center","justify-between","mx-6","sm:mx-8","mt-6","mb-1"],[1,"flex","flex-col"],[1,"font-semibold","leading-none"],["mat-icon-button","","color","warn",1,"iconbutton",3,"click"],[1,"m-6","sm:mx-8"],[1,"absolute","bottom-0","w-full","flex","justify-between"],[1,"flex","justify-start",2,"padding","10px"],[1,"icon-size-5","text-red-500",3,"svgIcon"],["download","attachedFile.txt",3,"href"],[1,"ml-2"],[1,"p-4"],[1,"font-medium"],[1,"flex-auto"],["class","flex flex-wrap gap-1",4,"ngIf"],[4,"ngIf"],[1,"flex","flex-wrap","gap-1"],["class","flex flex-col md:flex-row justify-between max-w-64 min-w-80 p-4 pb-4 mx-2 my-3 filter-listing carousel-block",3,"click",4,"ngFor","ngForOf"],[1,"flex","flex-col","md:flex-row","justify-between","max-w-64","min-w-80","p-4","pb-4","mx-2","my-3","filter-listing","carousel-block",3,"click"],[1,"flex","flex-col","flex-auto","order-2","md:order-1","max-w-1/2","min-w-1/2",2,"overflow-wrap","anywhere"],[1,"font-medium","text-secondary"],[1,"text-xl","font-bold"],[1,"mt-2","mb-4","leading-relaxed","text-secondary"],[1,"flex","items-center","mt-3","-mx-3"],["mat-button","",1,"px-3","mr-1",3,"color","routerLink"],[1,"order-1","md:order-2","w-full","md:w-40","rounded-lg","overflow-hidden"],["alt","announcement image",1,"w-full","h-full","object-cover",3,"src"],[3,"click"],[1,"mt-10","flex","flex-col","md:flex-row","justify-between","w-full","min-w-3/4","p-4","pb-4","filter-listing","carousel-block"],[1,"flex","flex-col","flex-auto","order-2","md:order-1","max-w-2/3","h-full"],[1,"order-1","md:order-2","w-full","md:w-40","md:ml-6","mb-8","md:mb-4","rounded-lg","overflow-hidden","min-w-1/3","h-full"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Circulars"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return t.onCreateCircular("Circular")}),e._uU(6,"Add Circular"),e.qZA()()(),e.YNc(7,N,3,1,"div",4),e.YNc(8,k,3,2,"div",5),e.qZA()),2&n&&(e.xp6(7),e.Q6J("ngIf","announcement"!==t.isCircular),e.xp6(1),e.Q6J("ngIf","announcement"===t.isCircular))},dependencies:[s.sg,s.O5,g.Hw,Q.y,f.zs,f.lW,f.RK,x.rH,s.OU,s.uU],styles:["#grad-lit-table-row[_ngcontent-%COMP%]:hover{background-color:#c7d3eb!important}.header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var u,E=i(4385);const L=[{path:"",component:T}];class U{}(u=U).\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[s.ez,g.Ps,D.J,h.lN,r.UX,r.u5,b.c,E.LD,f.ot,v.A0,x.Bz.forChild(L)]})}}]);