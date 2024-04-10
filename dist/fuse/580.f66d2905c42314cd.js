"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[580],{1580:(O,v,i)=>{i.r(v),i.d(v,{AnnouncementModule:()=>w});var d,r=i(6895),f=i(7392),T=i(5804),x=i(9299),g=i(9549),c=i(4006),_=i(7274),e=i(4650),U=i(925),A=i(9742),C=i(284),y=i(9349);function J(o,t){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(null==n.file?null:n.file.name)}}function D(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"div",16)(1,"input",17,8),e.NdJ("change",function(a){e.CHM(n);const u=e.oxw();return e.KtG(u.onImageUpload(a))}),e.qZA(),e.TgZ(3,"label",18),e._UZ(4,"mat-icon",10),e._uU(5," Attach Image "),e.qZA()()}2&o&&(e.xp6(1),e.Q6J("multiple",!1)("accept","application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:document-text"))}class Z{constructor(t,n,l,a){this._studentData=t,this.data=n,this._studentHttp=l,this._dialogRef=a,this.formFieldHelpers=[""],this.createStudentCircularForm=this._studentData.getCreateCircularForm()}onCreateCircular(){"Circular"===this.data.type?this._studentHttp.createCirculars(this._populateData()).subscribe({next:t=>{this._closeDialog(),document.location.reload()},error:t=>{console.log(t)}}):this._studentHttp.createAnnouncement(this._populateData()).subscribe({next:t=>{this._closeDialog(),console.log(t)},error:t=>{console.log(t)}})}_populateData(){let t=new FormData;return this.file&&t.append("file_name",this.file),this.image_file&&t.append("image_name",this.image_file),t.append("heading",this.createStudentCircularForm.get("heading").value),t.append("group_name","grp_name"),t.append("description",this.createStudentCircularForm.get("description").value),t}onFileUpload(t){this.file=t.target.files[0]}onImageUpload(t){this.image_file=t.target.files[0]}_closeDialog(){this._dialogRef.close()}}(d=Z).\u0275fac=function(t){return new(t||d)(e.Y36(U.h),e.Y36(_.WI,8),e.Y36(A.A),e.Y36(_.so))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-create-announcement-club"]],decls:22,vars:10,consts:[[1,"flex","flex-col","mt-4","pb-4","overflow-hidden",3,"formGroup"],[1,"flex","flex-col","gt-xs:flex-row"],[1,"flex-auto","gt-xs:pr-3",3,"ngClass"],["required","","matInput","","formControlName","heading","placeholder","This is a placeholder"],[1,"flex"],[1,"flex-auto",3,"ngClass"],["required","","matInput","","formControlName","description","cdkTextareaAutosize",""],["required","","id","document-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["post_documet",""],["for","document-file-input","matRipple","",1,"flex"],[3,"svgIcon"],["class","text-md font-semibold",4,"ngIf"],["class","mt-2",4,"ngIf"],[1,"mt-4"],[1,"br-10",2,"background-color","lightsteelblue","border-radius","10px","width","111px","height","31px",3,"click"],[1,"text-md","font-semibold"],[1,"mt-2"],["id","document-image-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","document-image-input","matRipple","",1,"flex"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),e._uU(4),e.qZA(),e._UZ(5,"input",3),e.qZA()(),e.TgZ(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9),e.qZA(),e._UZ(10,"textarea",6),e.qZA()(),e.TgZ(11,"div")(12,"input",7,8),e.NdJ("change",function(a){return n.onFileUpload(a)}),e.qZA(),e.TgZ(14,"label",9),e._UZ(15,"mat-icon",10),e._uU(16," Attach File "),e.qZA(),e.YNc(17,J,2,1,"span",11),e.qZA(),e.YNc(18,D,6,3,"div",12),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){return n.onCreateCircular()}),e._uU(21,"Create"),e.qZA()()()),2&t&&(e.Q6J("formGroup",n.createStudentCircularForm),e.xp6(2),e.Q6J("ngClass",n.formFieldHelpers),e.xp6(2),e.hij("",n.data.type," Name"),e.xp6(3),e.Q6J("ngClass",n.formFieldHelpers),e.xp6(2),e.hij("",n.data.type," Description"),e.xp6(3),e.Q6J("multiple",!1)("accept","application/pdf"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(2),e.Q6J("ngIf",null==n.file?null:n.file.name),e.xp6(1),e.Q6J("ngIf","Circular"!==n.data.type))},dependencies:[r.mk,r.O5,f.Hw,g.KE,g.hX,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.sg,c.u,C.Nt,y.IC]});var m,F=i(9602),p=i(4859);function q(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"fuse-card",9)(1,"div",10)(2,"div",11)(3,"span",12),e._uU(4),e.ALo(5,"slice"),e.qZA()(),e.TgZ(6,"div")(7,"button",13),e.NdJ("click",function(){const u=e.CHM(n).$implicit,h=e.oxw(2);return e.KtG(h.onDeleteCircular(null==u?null:u.Id))}),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA()()()(),e.TgZ(10,"div",14)(11,"div"),e._uU(12),e.ALo(13,"slice"),e.qZA()(),e.TgZ(14,"div",15)(15,"div",16),e._UZ(16,"mat-icon",17),e.TgZ(17,"a",18)(18,"span",19),e._uU(19,"Download Attachment"),e.qZA()()(),e.TgZ(20,"div",20)(21,"span",21),e._uU(22,"Created at:"),e.qZA(),e._uU(23),e.ALo(24,"date"),e.qZA()()()}if(2&o){const n=t.$implicit;e.xp6(4),e.Oqu(e.Dn7(5,5,n.heading,0,45)),e.xp6(8),e.hij(" ",e.Dn7(13,9,n.description,0,400)," "),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:download"),e.xp6(1),e.Q6J("href",null==n?null:n.file_path,e.LSH),e.xp6(6),e.hij(" ",e.xi3(24,13,null==n?null:n.created_at,"medium")," ")}}function I(o,t){if(1&o&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,q,25,16,"fuse-card",8),e.qZA()()),2&o){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.allAnnouncement)}}const H=function(){return["./"]};function Q(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"fuse-card",27),e.NdJ("click",function(){const u=e.CHM(n).$implicit,h=e.oxw(3);return e.KtG(h.onAnncExpanded(u))}),e.TgZ(1,"div",28)(2,"div",29),e._uU(3,"Admin"),e.qZA(),e.TgZ(4,"div",30),e._uU(5),e.ALo(6,"slice"),e.qZA(),e.TgZ(7,"div",31),e._uU(8),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",32)(11,"a",33),e._uU(12," View more "),e.qZA()()(),e.TgZ(13,"div",34),e._UZ(14,"img",35),e.qZA()()}if(2&o){const n=t.$implicit;e.xp6(5),e.Oqu(e.Dn7(6,5,n.heading,0,10)+"...."),e.xp6(3),e.hij(" ",e.Dn7(9,9,n.description,0,10)+"...."," "),e.xp6(3),e.Q6J("color","primary")("routerLink",e.DdM(13,H)),e.xp6(3),e.Q6J("src",n.image_url,e.LSH)}}function N(o,t){if(1&o&&(e.TgZ(0,"div",25),e.YNc(1,Q,15,14,"fuse-card",26),e.qZA()),2&o){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.allAnnouncement)}}function j(o,t){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"button",36),e.NdJ("click",function(){e.CHM(n);const a=e.oxw(2);return e.KtG(a.isAnncExpanded=!1)}),e._uU(2,"Go Back"),e.qZA(),e.TgZ(3,"fuse-card",37)(4,"div",38)(5,"div",29),e._uU(6,"Admin"),e.qZA(),e.TgZ(7,"div",30),e._uU(8),e.qZA(),e.TgZ(9,"div",31),e._uU(10),e.qZA()(),e.TgZ(11,"div",39),e._UZ(12,"img",35),e.qZA()()()}if(2&o){const n=e.oxw(2);e.xp6(8),e.Oqu(n.selectedAnnDetails.heading),e.xp6(2),e.hij(" ",n.selectedAnnDetails.description," "),e.xp6(2),e.Q6J("src",null==n.selectedAnnDetails?null:n.selectedAnnDetails.image_url,e.LSH)}}function k(o,t){if(1&o&&(e.TgZ(0,"div",22),e.YNc(1,N,2,1,"div",23),e.YNc(2,j,13,3,"div",24),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",!n.isAnncExpanded),e.xp6(1),e.Q6J("ngIf",n.isAnncExpanded)}}class b{constructor(t,n,l){this._studentHttp=t,this._matDialog=n,this._activatedRoute=l,this.isCircExpanded=!1,this.isAnncExpanded=!1,this.isCircular=this._activatedRoute.snapshot.queryParamMap.get("circular"),this.onTypeSelection("announcement"===this.isCircular?"Announcement":"Circular")}onCreateCircular(t){this._matDialog.open(Z,{autoFocus:!1,maxHeight:"90vh",width:"60vw",data:{type:t}}).afterClosed().subscribe(l=>{console.log(`Dialog result: ${l}`)})}onTypeSelection(t){"Circular"===t?(this.isCircular="Circular",this._studentHttp.getAllCircualrs().subscribe({next:n=>{this.allAnnouncement=n?.data?.rows,this.allAnnouncement=this.allAnnouncement?.sort((l,a)=>-l.updated_at.localeCompare(a.updated_at))}})):(this.isCircular="announcement",this._studentHttp.getAllAnnouncements().subscribe({next:n=>{this.allAnnouncement=n.data.rows}}))}onAnncExpanded(t){this.isAnncExpanded=!0,this.selectedAnnDetails=t}onDeleteCircular(t){this._studentHttp.deleteCircular(t).subscribe({next:n=>{this.onTypeSelection("Circular")},error:n=>{console.log(n)}})}}(m=b).\u0275fac=function(t){return new(t||m)(e.Y36(A.A),e.Y36(_.uw),e.Y36(x.gz))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-announcement-clubs"]],decls:9,vars:2,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"p-6","flex","justify-between","header-bg-grad-lit"],[1,"text-3xl","font-semibold","flex"],["mat-raised-button","",2,"background-color","#001E52","color","white",3,"click"],["class","flex-auto p-3",4,"ngIf"],["class","flex-auto",4,"ngIf"],[1,"flex-auto","p-3"],[1,"items-start","w-full","-m-4"],["class","flex flex-col w-full filter-article m-4 min-h-52 max-h-96 relative",4,"ngFor","ngForOf"],[1,"flex","flex-col","w-full","filter-article","m-4","min-h-52","max-h-96","relative"],[1,"flex","items-center","justify-between","mx-6","sm:mx-8","mt-6","mb-1"],[1,"flex","flex-col"],[1,"font-semibold","leading-none"],["mat-icon-button","","color","warn",1,"iconbutton",3,"click"],[1,"m-6","sm:mx-8"],[1,"absolute","bottom-0","w-full","flex","justify-between"],[1,"flex","justify-start",2,"padding","10px"],[1,"icon-size-5","text-red-500",3,"svgIcon"],["download","attachedFile.txt",3,"href"],[1,"ml-2"],[1,"p-4"],[1,"font-medium"],[1,"flex-auto"],["class","flex flex-wrap gap-1",4,"ngIf"],[4,"ngIf"],[1,"flex","flex-wrap","gap-1"],["class","flex flex-col md:flex-row justify-between max-w-64 min-w-80 p-4 pb-4 mx-2 my-3 filter-listing carousel-block",3,"click",4,"ngFor","ngForOf"],[1,"flex","flex-col","md:flex-row","justify-between","max-w-64","min-w-80","p-4","pb-4","mx-2","my-3","filter-listing","carousel-block",3,"click"],[1,"flex","flex-col","flex-auto","order-2","md:order-1","max-w-1/2","min-w-1/2",2,"overflow-wrap","anywhere"],[1,"font-medium","text-secondary"],[1,"text-xl","font-bold"],[1,"mt-2","mb-4","leading-relaxed","text-secondary"],[1,"flex","items-center","mt-3","-mx-3"],["mat-button","",1,"px-3","mr-1",3,"color","routerLink"],[1,"order-1","md:order-2","w-full","md:w-40","rounded-lg","overflow-hidden"],["alt","announcement image",1,"w-full","h-full","object-cover",3,"src"],[3,"click"],[1,"mt-10","flex","flex-col","md:flex-row","justify-between","w-full","min-w-3/4","p-4","pb-4","filter-listing","carousel-block"],[1,"flex","flex-col","flex-auto","order-2","md:order-1","max-w-2/3","h-full"],[1,"order-1","md:order-2","w-full","md:w-40","md:ml-6","mb-8","md:mb-4","rounded-lg","overflow-hidden","min-w-1/3","h-full"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Circulars"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return n.onCreateCircular("Circular")}),e._uU(6,"Add Circular"),e.qZA()()(),e.YNc(7,I,3,1,"div",4),e.YNc(8,k,3,2,"div",5),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf","announcement"!==n.isCircular),e.xp6(1),e.Q6J("ngIf","announcement"===n.isCircular))},dependencies:[r.sg,r.O5,f.Hw,F.y,p.zs,p.lW,p.RK,x.rH,r.OU,r.uU],styles:["#grad-lit-table-row[_ngcontent-%COMP%]:hover{background-color:#c7d3eb!important}.header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var s,Y=i(4385);const E=[{path:"",component:b}];class w{}(s=w).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[r.ez,f.Ps,T.J,g.lN,c.UX,C.c,Y.LD,p.ot,x.Bz.forChild(E)]})}}]);