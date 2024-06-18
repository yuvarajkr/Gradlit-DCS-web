"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[594],{9594:(ae,N,a)=>{a.r(N),a.d(N,{ClubsModule:()=>E});var _,g=a(6895),e=a(4650),u=a(9299);class D{}(_=D).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-clubs"]],decls:2,vars:0,consts:[[1,"w-full"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},dependencies:[u.lC]});var b,T=a(7274),r=a(4859);class y{constructor(t,l){this.data=t,this._dialogRef=l}onOkClick(){this._dialogRef.close()}}(b=y).\u0275fac=function(t){return new(t||b)(e.Y36(T.WI,8),e.Y36(T.so))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-club-notification"]],decls:8,vars:0,consts:[[1,"font-bold","text-lg","mb-1"],[1,"font-semibold"],[1,"flex","justify-end","mt-6"],["mat-raised-button","",2,"background-color","#001E52","color","white","min-width","90px",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"div")(1,"p",0),e._uU(2,"Clubs Contains Admins!!"),e.qZA(),e.TgZ(3,"p",1),e._uU(4,"Please delete admins from club and try again."),e.qZA(),e.TgZ(5,"div",2)(6,"button",3),e.NdJ("click",function(){return l.onOkClick()}),e._uU(7,"OK"),e.qZA()()())},dependencies:[r.lW]});var f,v=a(9742),s=a(7155),M=a(7392),U=a(266),w=a(6308);function R(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1,"Club Image"),e.qZA())}function Q(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e._UZ(1,"img",20),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.Q6J("src",l.logo,e.LSH)}}function F(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1," Club Name "),e.qZA())}function Y(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.hij(" ",l.name," ")}}function S(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1," Admin "),e.qZA())}function j(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.hij(" ",l.user?l.user[0].name:"NA"," ")}}function O(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1," Email ID "),e.qZA())}function B(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.hij(" ",l.email," ")}}function H(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1," Followers "),e.qZA())}function $(n,t){if(1&n&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.xp6(1),e.hij(" ",l.followed_count," ")}}function z(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1," Actions "),e.qZA())}function X(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"mat-cell",21)(1,"button",22),e.NdJ("click",function(){const p=e.CHM(l).$implicit,d=e.oxw();return e.KtG(d.onClickEdit(p))}),e.TgZ(2,"mat-icon",23),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",24),e.NdJ("click",function(){const p=e.CHM(l).$implicit,d=e.oxw();return e.KtG(d.onClickDelete(p))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}function P(n,t){1&n&&(e.TgZ(0,"mat-header-cell",19),e._uU(1," Delete "),e.qZA())}function K(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"mat-cell")(1,"button",24),e.NdJ("click",function(){const p=e.CHM(l).$implicit,d=e.oxw();return e.KtG(d.onClickDelete(p.Id))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()()}}function W(n,t){1&n&&e._UZ(0,"mat-header-row")}function G(n,t){1&n&&e._UZ(0,"mat-row",25)}const J=[];class q{constructor(t,l,i){this._http=t,this._router=l,this._matDialog=i,this.displayedColumns=["ProfileImage","ClubName","AdminID","emailId","Followers","Actions"],this.products=J,this.dataSource=J,this.allClubs=[],this._http.getAllClubsByAdmin().subscribe({next:o=>{this.allClubs=o.data.rows},error:o=>{console.log(o)}})}onClickEdit(t){this._router.navigate([`student/add-clubs/edit-club/${t.Id}`])}notifiyLoadedUserDelete(t){this._matDialog.open(y,{autoFocus:!1,maxHeight:"80vh",width:"30vw",data:{type:t}}).afterClosed().subscribe(i=>{console.log(`Dialog result: ${i}`)})}onClickDelete(t){this._http.deleteClubByAdmin(t.Id).subscribe({next:i=>{console.log(i),this._http.getAllClubsByAdmin().subscribe({next:o=>{this.allClubs=o.data.rows},error:o=>{console.log("fetching clubs failed...")}})},error:i=>{console.log(i)}})}}(f=q).\u0275fac=function(t){return new(t||f)(e.Y36(v.A),e.Y36(u.F0),e.Y36(T.uw))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-list-all-clubs"]],decls:33,vars:4,consts:[[1,"w-full"],[1,"p-6","flex","justify-between","header-bg-grad-lit"],[1,"text-3xl","font-semibold","flex"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"routerLink"],[1,"w-full","m-6"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","ProfileImage"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","ClubName"],["matColumnDef","AdminID"],["matColumnDef","emailId"],["matColumnDef","Followers"],["matColumnDef","Actions"],["style","padding-left:0px !important",4,"matCellDef"],["matColumnDef","delete"],[4,"matHeaderRowDef"],["id","grad-lit-table-row",4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],["alt","club_img",1,"max-h-16","max-w-16","rounded-3xl","m-2",3,"src"],[2,"padding-left","0px !important"],["mat-icon-button","","matTooltip","Click to Edit","color","primary",1,"iconbutton",3,"click"],[2,"color","#001E52 !important"],["mat-icon-button","","matTooltip","Click to Delete","color","warn",1,"iconbutton",3,"click"],["id","grad-lit-table-row"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Clubs"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e._uU(6,"Add New Club"),e.qZA()()(),e.TgZ(7,"div",4)(8,"mat-table",5,6),e.ynx(10,7),e.YNc(11,R,2,0,"mat-header-cell",8),e.YNc(12,Q,2,1,"mat-cell",9),e.BQk(),e.ynx(13,10),e.YNc(14,F,2,0,"mat-header-cell",8),e.YNc(15,Y,2,1,"mat-cell",9),e.BQk(),e.ynx(16,11),e.YNc(17,S,2,0,"mat-header-cell",8),e.YNc(18,j,2,1,"mat-cell",9),e.BQk(),e.ynx(19,12),e.YNc(20,O,2,0,"mat-header-cell",8),e.YNc(21,B,2,1,"mat-cell",9),e.BQk(),e.ynx(22,13),e.YNc(23,H,2,0,"mat-header-cell",8),e.YNc(24,$,2,1,"mat-cell",9),e.BQk(),e.ynx(25,14),e.YNc(26,z,2,0,"mat-header-cell",8),e.YNc(27,X,7,0,"mat-cell",15),e.BQk(),e.ynx(28,16),e.YNc(29,P,2,0,"mat-header-cell",8),e.YNc(30,K,4,0,"mat-cell",9),e.BQk(),e.YNc(31,W,1,0,"mat-header-row",17),e.YNc(32,G,1,0,"mat-row",18),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("routerLink","/student/add-clubs/add-new-club"),e.xp6(3),e.Q6J("dataSource",l.allClubs),e.xp6(23),e.Q6J("matHeaderRowDef",l.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",l.displayedColumns))},dependencies:[u.rH,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,r.lW,r.RK,M.Hw,U.gM,w.YE,w.nU],styles:["#grad-lit-table-row[_ngcontent-%COMP%]:hover{background-color:#c7d3eb!important}.header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var A,x,h=a(9549),Z=a(284),I=a(9349),c=a(4006),C=a(8796);function V(n,t){if(1&n&&(e.TgZ(0,"ng-option",22),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.Q6J("value",l.id),e.xp6(1),e.Oqu(l.name)}}function ee(n,t){if(1&n&&(e.TgZ(0,"div",23),e._UZ(1,"img",24),e.qZA()),2&n){const l=e.oxw();e.xp6(1),e.Q6J("src",l.imageUrl,e.LSH)}}class k{constructor(t,l,i){this._http=t,this._actvRoute=l,this._router=i,this.allClubs=[],this.clubName="",this.clubDesc="",this.email="",this.clubDisplayName="",this.searchedUserResult=[],this.selectedUsersID=new Set,this.selectedClubId=this._actvRoute.snapshot.params?.id,this._http.getAllClubsByAdmin().subscribe({next:o=>{this.allClubs=o.data.rows,this.selectedClubDetials=this.allClubs.find(d=>d.Id===+this.selectedClubId),this.clubName=this.selectedClubDetials.name,this.clubDesc=this.selectedClubDetials.description,this.imageUrl=this.selectedClubDetials.logo,this.email=this.selectedClubDetials.email,this.clubDisplayName=this.selectedClubDetials.display_name,this.searchedUserResult=this.selectedClubDetials.user,this.searchedUserResult.forEach(d=>{this.selectedUsersID.add(d.id)})},error:o=>{console.log(o)}})}onFileUpload(t){const l=t.target.files[0];this.clubLogo=l;let i=new FileReader;i.readAsDataURL(l),i.onload=()=>{this.imageUrl=i.result}}onAdminSelected(t){this.selectedUsersID.add(t)}onUserRemoved(t){this.selectedUsersID.delete(t.value)}onUserSearched(t){t.term.length>2&&this._http.getSearchedUsers(t.term).subscribe({next:l=>{this.searchedUserResult=l.data.rows},error:l=>{console.log(l)}})}onEditClubSave(){let t=new FormData;t.append("club_id",""+this.selectedClubId),t.append("name",this.clubName),t.append("description",this.clubDesc),t.append("display_name",this.clubDisplayName),t.append("email",this.email),t.append("User",[...this.selectedUsersID].join(",")),this.clubLogo&&t.append("logo",this.clubLogo),this._http.updateClubByAdmin(t).subscribe({next:l=>{console.log(l),this._router.navigate(["student/add-clubs/list-clubs"])},error:l=>{console.log(l),this._router.navigate(["student/add-clubs/list-clubs"])}})}resetCalculations(){this.selectedUsersID=structuredClone(this.selectedUsersID)}}function te(n,t){if(1&n&&(e.TgZ(0,"ng-option",22),e._uU(1),e.qZA()),2&n){const l=t.$implicit;e.Q6J("value",l.id),e.xp6(1),e.Oqu(l.name)}}function le(n,t){if(1&n&&(e.TgZ(0,"div",23),e._UZ(1,"img",24),e.qZA()),2&n){const l=e.oxw();e.xp6(1),e.Q6J("src",l.imageUrl,e.LSH)}}(A=k).\u0275fac=function(t){return new(t||A)(e.Y36(v.A),e.Y36(u.gz),e.Y36(u.F0))},A.\u0275cmp=e.Xpm({type:A,selectors:[["app-edit-club"]],decls:41,vars:11,consts:[[1,"m-4","w-full","min-h-180","relative"],[1,"w-full"],[1,"font-semibold","text-xl","mb-4"],[1,"flex"],[1,"flex","flex-col","gt-xs:flex-row","w-1/2"],[1,"flex-auto","gt-xs:pr-3","w-full"],["matInput","","placeholder","club name",3,"ngModel","ngModelChange"],[1,"flex","flex-col","gt-xs:flex-row","ml-8","w-1/2"],["matInput","","placeholder","display name",3,"ngModel","ngModelChange"],[1,"flex-auto"],["matInput","","cdkTextareaAutosize","",3,"ngModel","cdkAutosizeMinRows","ngModelChange"],[1,"flex","flex-col","gt-xs:flex-row"],["matInput","","placeholder","email",3,"ngModel","ngModelChange"],[1,"font-medium"],[3,"loading","multiple","add","clear","remove","search"],[3,"value",4,"ngFor","ngForOf"],["id","image-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","image-file-input","matRipple","",1,"flex","items-center","justify-center","w-24","h-10","rounded-full","cursor-pointer","bg-gray-300"],["class","flex mt-5 max-w-48 max-h-44",4,"ngIf"],[1,"my-10","mt-8","w-full","absolute","bottom-6"],[1,"flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52","width","150px",3,"click"],[3,"value"],[1,"flex","mt-5","max-w-48","max-h-44"],[3,"src"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h1",2),e._uU(4,"Edit Club"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Club name"),e.qZA(),e.TgZ(10,"input",6),e.NdJ("ngModelChange",function(o){return l.clubName=o}),e.qZA()()(),e.TgZ(11,"div",7)(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"Display Name"),e.qZA(),e.TgZ(15,"input",8),e.NdJ("ngModelChange",function(o){return l.clubDisplayName=o}),e.qZA()()()(),e.TgZ(16,"div",3)(17,"mat-form-field",9)(18,"mat-label"),e._uU(19,"Brief Description"),e.qZA(),e.TgZ(20,"textarea",10),e.NdJ("ngModelChange",function(o){return l.clubDesc=o}),e.qZA()()(),e.TgZ(21,"div",11)(22,"mat-form-field",5)(23,"mat-label"),e._uU(24,"Email"),e.qZA(),e.TgZ(25,"input",12),e.NdJ("ngModelChange",function(o){return l.email=o}),e.qZA()()(),e.TgZ(26,"div",11)(27,"div",13),e._uU(28,"Select Admins"),e.qZA(),e.TgZ(29,"ng-select",14),e.NdJ("add",function(o){return l.onAdminSelected(o)})("clear",function(){return l.resetCalculations()})("remove",function(o){return l.onUserRemoved(o)})("search",function(o){return l.onUserSearched(o)}),e.YNc(30,V,2,2,"ng-option",15),e.qZA()(),e.TgZ(31,"div")(32,"input",16),e.NdJ("change",function(o){return l.onFileUpload(o)}),e.qZA(),e.TgZ(33,"label",17)(34,"span"),e._uU(35,"Add Logo"),e.qZA()()(),e.YNc(36,ee,2,1,"div",18),e.qZA(),e.TgZ(37,"div",19)(38,"div",20)(39,"button",21),e.NdJ("click",function(){return l.onEditClubSave()}),e._uU(40,"Update Club"),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",l.clubName),e.xp6(5),e.Q6J("ngModel",l.clubDisplayName),e.xp6(5),e.Q6J("ngModel",l.clubDesc)("cdkAutosizeMinRows",3),e.xp6(5),e.Q6J("ngModel",l.email),e.xp6(4),e.Q6J("loading",!1)("multiple",!0),e.xp6(1),e.Q6J("ngForOf",l.searchedUserResult),e.xp6(2),e.Q6J("multiple",!1)("accept","image/jpeg, image/png"),e.xp6(4),e.Q6J("ngIf",l.imageUrl))},dependencies:[g.sg,g.O5,h.KE,h.hX,Z.Nt,I.IC,c.Fj,c.JJ,c.On,r.lW,C.w9,C.jq],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});class L{constructor(t,l){this._http=t,this._router=l,this.clubName="",this.clubDesc="",this.email="",this.clubDisplayName="",this.searchedUserResult=[],this.selectedUsersID=[]}onFileUpload(t){const l=t.target.files[0];this.clubLogo=l;let i=new FileReader;i.readAsDataURL(l),i.onload=()=>{this.imageUrl=i.result}}onAdminSelected(t){this.selectedUsersID.push(t)}onUserRemoved(t){let l=this.selectedUsersID.indexOf(t.value);this.selectedUsersID.splice(l,1)}onUserSearched(t){t.term.length>2&&this._http.getSearchedUsers(t.term).subscribe({next:l=>{this.searchedUserResult=l.data.rows},error:l=>{console.log(l)}})}onAddClub(){let t=new FormData;t.append("name",this.clubName),t.append("description",this.clubDesc),t.append("display_name",this.clubDisplayName),t.append("email",this.email),t.append("User",this.selectedUsersID.join(",")),this.clubLogo&&t.append("logo",this.clubLogo),this._http.createClubByAdmin(t).subscribe({next:l=>{console.log(l),this._router.navigate(["student/add-clubs/list-clubs"])},error:l=>{console.log(l),this._router.navigate(["student/add-clubs/list-clubs"])}})}}(x=L).\u0275fac=function(t){return new(t||x)(e.Y36(v.A),e.Y36(u.F0))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-add-new-club"]],decls:41,vars:15,consts:[[1,"m-4","w-full","min-h-180","relative"],[1,"w-full"],[1,"font-semibold","text-xl","mb-4"],[1,"flex"],[1,"flex","flex-col","gt-xs:flex-row","w-1/2"],[1,"flex-auto","gt-xs:pr-3","w-full"],["required","","matInput","","placeholder","club name",3,"maxlength","ngModel","ngModelChange"],[1,"flex","flex-col","gt-xs:flex-row","ml-8","w-1/2"],["required","","matInput","","placeholder","display name",3,"maxlength","ngModel","ngModelChange"],[1,"flex-auto"],["required","","matInput","","cdkTextareaAutosize","",3,"maxlength","ngModel","cdkAutosizeMinRows","ngModelChange"],[1,"flex","flex-col","gt-xs:flex-row"],["required","","matInput","","placeholder","email",3,"ngModel","ngModelChange"],[1,"font-medium"],["required","",3,"loading","hideSelected","multiple","add","remove","search"],[3,"value",4,"ngFor","ngForOf"],["id","image-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","image-file-input","matRipple","",1,"flex","items-center","justify-center","w-24","h-10","rounded-full","cursor-pointer","bg-gray-300"],["class","flex mt-5 max-w-48 max-h-44",4,"ngIf"],[1,"my-10","mt-8","w-full","absolute","bottom-6"],[1,"flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52","width","150px",3,"click"],[3,"value"],[1,"flex","mt-5","max-w-48","max-h-44"],[3,"src"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h1",2),e._uU(4,"Add New Club"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Club name"),e.qZA(),e.TgZ(10,"input",6),e.NdJ("ngModelChange",function(o){return l.clubName=o}),e.qZA()()(),e.TgZ(11,"div",7)(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"Display Name"),e.qZA(),e.TgZ(15,"input",8),e.NdJ("ngModelChange",function(o){return l.clubDisplayName=o}),e.qZA()()()(),e.TgZ(16,"div",3)(17,"mat-form-field",9)(18,"mat-label"),e._uU(19,"Brief Description"),e.qZA(),e.TgZ(20,"textarea",10),e.NdJ("ngModelChange",function(o){return l.clubDesc=o}),e.qZA()()(),e.TgZ(21,"div",11)(22,"mat-form-field",5)(23,"mat-label"),e._uU(24,"Email"),e.qZA(),e.TgZ(25,"input",12),e.NdJ("ngModelChange",function(o){return l.email=o}),e.qZA()()(),e.TgZ(26,"div",11)(27,"div",13),e._uU(28,"Select Admins"),e.qZA(),e.TgZ(29,"ng-select",14),e.NdJ("add",function(o){return l.onAdminSelected(o)})("remove",function(o){return l.onUserRemoved(o)})("search",function(o){return l.onUserSearched(o)}),e.YNc(30,te,2,2,"ng-option",15),e.qZA()(),e.TgZ(31,"div")(32,"input",16),e.NdJ("change",function(o){return l.onFileUpload(o)}),e.qZA(),e.TgZ(33,"label",17)(34,"span"),e._uU(35,"Add Logo"),e.qZA()()(),e.YNc(36,le,2,1,"div",18),e.qZA(),e.TgZ(37,"div",19)(38,"div",20)(39,"button",21),e.NdJ("click",function(){return l.onAddClub()}),e._uU(40,"Add Club"),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("maxlength",20)("ngModel",l.clubName),e.xp6(5),e.Q6J("maxlength",20)("ngModel",l.clubDisplayName),e.xp6(5),e.Q6J("maxlength",500)("ngModel",l.clubDesc)("cdkAutosizeMinRows",3),e.xp6(5),e.Q6J("ngModel",l.email),e.xp6(4),e.Q6J("loading",!1)("hideSelected",!0)("multiple",!0),e.xp6(1),e.Q6J("ngForOf",l.searchedUserResult),e.xp6(2),e.Q6J("multiple",!1)("accept","image/jpeg, image/png"),e.xp6(4),e.Q6J("ngIf",l.imageUrl))},dependencies:[g.sg,g.O5,h.KE,h.hX,Z.Nt,I.IC,c.Fj,c.JJ,c.Q7,c.nD,c.On,r.lW,C.w9,C.jq],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var m,ne=a(6709),oe=a(1572);const ie=[{path:"",component:D,children:[{path:"list-clubs",component:q},{path:"add-new-club",component:L},{path:"edit-club/:id",component:k}]}];class E{}(m=E).\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[g.ez,u.Bz.forChild(ie),s.p0,h.lN,ne.p9,Z.c,c.u5,c.UX,r.ot,M.Ps,s.p0,U.AV,U.AV,w.JX,Z.c,oe.Cq,C.A0]})}}]);