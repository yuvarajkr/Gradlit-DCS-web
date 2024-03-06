"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[192],{3192:(ve,F,d)=>{d.r(F),d.d(F,{RolesModule:()=>I});var h,_=d(6895),e=d(4650),U=d(925),m=d(9299);class y{constructor(t){this._studentDataService=t,this.roleFormGroup=this._studentDataService.getRolesForm()}}(h=y).\u0275fac=function(t){return new(t||h)(e.Y36(U.h))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-roles"]],decls:2,vars:0,consts:[[1,"w-full"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},dependencies:[m.lC]});var x,Z=d(9742),f=d(9549),w=d(6709),R=d(284),c=d(4006),p=d(4859),g=d(7392),v=d(266);function q(i,t){if(1&i&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o," ")}}function J(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,q,2,1,"div",17),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function Y(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",20)(1,"mat-checkbox",21,22),e.NdJ("change",function(n){e.CHM(o);const r=e.MAs(2),l=e.oxw(3);return e.KtG(l.onPermissionChange(n.checked,r.id))}),e.qZA()()}if(2&i){const o=t.$implicit,s=e.MAs(2),n=e.oxw(2).$implicit,r=e.oxw();e.xp6(1),e.Q6J("id",n+"_"+o)("color","primary")("disabled",r.disableCheckBox(s.id))}}function G(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,Y,3,3,"div",19),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function H(i,t){if(1&i&&(e.TgZ(0,"div",13)(1,"div")(2,"div",14)(3,"mat-icon",15),e._uU(4,"info"),e.qZA(),e._uU(5),e.qZA(),e.YNc(6,J,2,1,"div",16),e.YNc(7,G,2,1,"div",16),e.qZA()()),2&i){const o=t.$implicit,s=t.index,n=e.oxw();e.xp6(3),e.Q6J("matTooltip",n.permissionHeaderToolTips[s]),e.xp6(2),e.hij(" ",o," "),e.xp6(1),e.Q6J("ngIf",0===s),e.xp6(1),e.Q6J("ngIf",0!=s)}}class k{constructor(t,o,s){this._studentDataService=t,this._router=o,this._http=s,this.permission=[{mod_id:2,actions:""},{mod_id:3,actions:""},{mod_id:4,actions:""},{mod_id:5,actions:""},{mod_id:6,actions:""},{mod_id:7,actions:""},{mod_id:8,actions:""}],this.is_moderator=!1,this.is_need_approval=!1,this.permissionHeader=["Module","Create","View","Edit","Delete","Approval","Moderation"],this.actions=["Moderation","Create","View","Edit","Delete","Approval"],this.permissionHeaderToolTips=["Modules in roles","Grants permission to create feeds, events, announcement, circular, clubs, profile to this role","Grants permission to View modules to this role","Grants permission to Edit modules except Feeds module (only creater of feeds are allowed to edit)","Grants permission to Delete modules","Needs Approval of content moderator to make any of this roles posts visible","Grants permission to do content Moderation to this role"],this.allModule=["Feed","Events","Announcement","Circular","Clubs","Profile","Chat"],this.roleFormGroup=this._studentDataService.getRolesForm(),this._http.getActions().subscribe(n=>{})}onPermissionChange(t,o){"Moderation_Feed"===o&&(this.is_moderator=!0,this.is_need_approval=!this.is_moderator),"Approval_Feed"===o&&(this.is_need_approval=!0,this.is_moderator=!this.is_need_approval);let s=o.split("_")[0],n=this.actions.findIndex(r=>r===s)+1;switch(o.split("_").pop()){case"Feed":t?this.setPermission(0,n):this.removePermission(0,n),(this.is_need_approval||this.is_moderator)&&setTimeout(()=>{this.toggleApproveAndModerator()},100);break;case"Events":t?this.setPermission(1,n):this.removePermission(1,n);break;case"Announcement":t?this.setPermission(2,n):this.removePermission(2,n);break;case"Circular":t?this.setPermission(3,n):this.removePermission(3,n);break;case"Clubs":t?this.setPermission(4,n):this.removePermission(4,n);break;case"Profile":t?this.setPermission(5,n):this.removePermission(5,n);case"Chat":t?this.setPermission(6,n):this.removePermission(6,n)}}setPermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(",");s.push(String(o)),this.permission[t].actions=s.toString()}else this.permission[t].actions=this.permission[t].actions+o}removePermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(","),n=s.findIndex(r=>r===String(o));n>=0&&s.splice(n,1),this.permission[t].actions=s.toString()}}onCreateRole(){let t=this.roleFormGroup.getRawValue();t.permissions=this.permission,t.is_add_role=!0,t.is_moderator=this.is_moderator,this._http.createRole(t).subscribe({next:o=>{console.log("created role"),this._router.navigate(["student/roles/list-roles"])},error:o=>console.log("role creation failed..!")})}disableCheckBox(t){return!!t.includes("Edit_Feed")||(t.includes("Approval")||t.includes("Moderation")?!("Approval_Feed"===t||"Moderation_Feed"===t):void 0)}toggleApproveAndModerator(){(this.is_need_approval||this.is_moderator)&&(this.is_need_approval?document.getElementById("Approval_Feed-input").checked=!0:(document.getElementById("Approval_Feed-input").checked=!1,this.removePermission(0,6)),this.is_moderator?document.getElementById("Moderation_Feed-input").checked=!0:(document.getElementById("Moderation_Feed-input").checked=!1,this.removePermission(0,1)))}}(x=k).\u0275fac=function(t){return new(t||x)(e.Y36(U.h),e.Y36(m.F0),e.Y36(Z.A))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-add-new-role"]],decls:21,vars:2,consts:[[1,"w-full",3,"formGroup"],[1,"p-6","text-3xl","font-semibold","header-bg-grad-lit"],[1,"ml-3","mt-10"],[1,"flex-auto","gt-xs:pr-3","w-2/3"],[1,"font-semibold"],["matInput","","formControlName","role_name"],[1,"flex-auto","gt-xs:pr-3","w-1/3"],["matInput","","formControlName","description"],[1,"ml-3","text-xl","font-semibold"],[1,"flex","border","ml-4","pr-16"],["class","m-9 mt-8 mb-2 font-medium",4,"ngFor","ngForOf"],[1,"my-10","mr-5","flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"click"],[1,"m-9","mt-8","mb-2","font-medium"],[1,"text-lg"],[1,"icon-size-3.5",2,"color","rgb(91, 92, 94)",3,"matTooltip"],[4,"ngIf"],["class","my-8",4,"ngFor","ngForOf"],[1,"my-8"],["class","my-4",4,"ngFor","ngForOf"],[1,"my-4"],[1,"flex","items-center",3,"id","color","disabled","change"],["checkBox",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Add New Role"),e.qZA(),e.TgZ(3,"div",2)(4,"div")(5,"mat-form-field",3)(6,"mat-label",4),e._uU(7,"Role Name"),e.qZA(),e._UZ(8,"input",5),e.qZA()(),e.TgZ(9,"div")(10,"mat-form-field",6)(11,"mat-label",4),e._uU(12,"Brief Description"),e.qZA(),e._UZ(13,"textarea",7),e.qZA()()(),e.TgZ(14,"p",8),e._uU(15,"Permissions"),e.qZA(),e.TgZ(16,"div",9),e.YNc(17,H,8,4,"div",10),e.qZA(),e.TgZ(18,"div",11)(19,"button",12),e.NdJ("click",function(){return o.onCreateRole()}),e._uU(20,"Create Role"),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.roleFormGroup),e.xp6(17),e.Q6J("ngForOf",o.permissionHeader))},dependencies:[_.sg,_.O5,f.KE,f.hX,w.oG,R.Nt,c.Fj,c.JJ,c.JL,c.sg,c.u,p.lW,g.Hw,v.gM],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var C,a=d(7155),Q=d(2819),B=d(7274),A=d(6308);function O(i,t){1&i&&(e.TgZ(0,"mat-header-cell",16),e._uU(1," Role Name "),e.qZA())}function S(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell",17),e.NdJ("click",function(){const r=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.onRoleClick(r))}),e._uU(1),e.qZA()}if(2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.Name," ")}}function L(i,t){1&i&&(e.TgZ(0,"mat-header-cell",16),e._uU(1," Actions "),e.qZA())}function $(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell",18)(1,"button",19),e.NdJ("click",function(){const r=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.onClickEdit(r))}),e.TgZ(2,"mat-icon",20),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",21),e.NdJ("click",function(){const r=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.onClickDelete(r.id,r))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}function j(i,t){1&i&&(e.TgZ(0,"mat-header-cell",16),e._uU(1," Add Users "),e.qZA())}function V(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell")(1,"button",22),e.NdJ("click",function(){const r=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.onRoleClick(r))}),e.TgZ(2,"mat-icon"),e._uU(3,"supervisor_account"),e.qZA()()()}}function K(i,t){1&i&&e._UZ(0,"mat-header-row")}function X(i,t){1&i&&e._UZ(0,"mat-row",23)}const N=[];class D{constructor(t,o,s){this._http=t,this._router=o,this._matDialog=s,this.displayedColumns=["name","Actions","add_users"],this.products=N,this.dataSource=N}ngOnInit(){this._http.getAllRoles().subscribe({next:t=>{this.products=t.data,this.dataSource=this.products},error:t=>{console.log("fetching roles failed...")}})}onNavigate(t){console.log(`product code ${t}`)}filterProduct(t){}onClickEdit(t){this._router.navigate([`/student/roles/edit-roles/${t.id}`])}onClickDelete(t,o){0===o.UserCount?this._http.deleteRole(t).subscribe({next:s=>{console.log(s),this._http.getAllRoles().subscribe({next:n=>{this.products=n.data,this.dataSource=this.products},error:n=>{console.log("fetching roles failed...")}})},error:s=>{console.log(s)}}):this.notifiyLoadedUserDelete("")}onRoleClick(t){this._router.navigate([`/student/roles/add-users-to-role/${t.id}`,{name:t.Name,description:t.Description,id:t.id}])}notifiyLoadedUserDelete(t){this._matDialog.open(Q.u,{autoFocus:!1,maxHeight:"80vh",width:"30vw",data:{type:t}}).afterClosed().subscribe(s=>{console.log(`Dialog result: ${s}`)})}}(C=D).\u0275fac=function(t){return new(t||C)(e.Y36(Z.A),e.Y36(m.F0),e.Y36(B.uw))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-list-roles"]],decls:21,vars:4,consts:[[1,"w-full"],[1,"p-6","flex","justify-between","header-bg-grad-lit"],[1,"text-3xl","font-semibold","flex"],["mat-raised-button","",2,"background-color","#001E52","color","white",3,"routerLink"],[1,"w-4/5","m-6"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],["class","cursor-pointer",3,"click",4,"matCellDef"],["matColumnDef","Actions"],["style","padding-left:0px !important",4,"matCellDef"],["matColumnDef","add_users"],[4,"matCellDef"],[4,"matHeaderRowDef"],["id","grad-lit-table-row",4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],[1,"cursor-pointer",3,"click"],[2,"padding-left","0px !important"],["mat-icon-button","","color","primary",1,"iconbutton",3,"click"],[2,"color","#001E52 !important"],["mat-icon-button","","color","warn",1,"iconbutton",3,"click"],["mat-icon-button","","color","normal",1,"iconbutton",3,"click"],["id","grad-lit-table-row"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Roles"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e._uU(6,"Add Role"),e.qZA()()(),e.TgZ(7,"div",4)(8,"mat-table",5,6),e.ynx(10,7),e.YNc(11,O,2,0,"mat-header-cell",8),e.YNc(12,S,2,1,"mat-cell",9),e.BQk(),e.ynx(13,10),e.YNc(14,L,2,0,"mat-header-cell",8),e.YNc(15,$,7,0,"mat-cell",11),e.BQk(),e.ynx(16,12),e.YNc(17,j,2,0,"mat-header-cell",8),e.YNc(18,V,4,0,"mat-cell",13),e.BQk(),e.YNc(19,K,1,0,"mat-header-row",14),e.YNc(20,X,1,0,"mat-row",15),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("routerLink","/student/roles/add-roles"),e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(11),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[m.rH,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,p.lW,p.RK,g.Hw,A.YE,A.nU],styles:["#grad-lit-table-row[_ngcontent-%COMP%]:hover{background-color:#ebeff5!important}.header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var b,T,z=d(1572);function W(i,t){if(1&i&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o," ")}}function ee(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,W,2,1,"div",17),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function te(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",20)(1,"mat-checkbox",21,22),e.NdJ("change",function(n){e.CHM(o);const r=e.MAs(2),l=e.oxw(3);return e.KtG(l.onPermissionChange(n.checked,r.id))}),e.qZA()()}if(2&i){const o=t.$implicit,s=e.MAs(2),n=e.oxw(2).$implicit,r=e.oxw();e.xp6(1),e.Q6J("id",n+"_"+o)("color","primary")("disabled",r.disableCheckBox(s.id))}}function oe(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,te,3,3,"div",19),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function ie(i,t){if(1&i&&(e.TgZ(0,"div",13)(1,"div")(2,"div",14)(3,"mat-icon",15),e._uU(4,"info"),e.qZA(),e._uU(5),e.qZA(),e.YNc(6,ee,2,1,"div",16),e.YNc(7,oe,2,1,"div",16),e.qZA()()),2&i){const o=t.$implicit,s=t.index,n=e.oxw();e.xp6(3),e.Q6J("matTooltip",n.permissionHeaderToolTips[s]),e.xp6(2),e.hij(" ",o," "),e.xp6(1),e.Q6J("ngIf",0===s),e.xp6(1),e.Q6J("ngIf",0!=s)}}class M{constructor(t,o,s,n){this._http=t,this._studentDataService=o,this._router=s,this._actvRoute=n,this.permission=[{mod_id:2,actions:""},{mod_id:3,actions:""},{mod_id:4,actions:""},{mod_id:5,actions:""},{mod_id:6,actions:""},{mod_id:7,actions:""},{mod_id:8,actions:""}],this.is_moderator=!1,this.is_need_approval=!1,this.permissionHeader=["Module","Create","View","Edit","Delete","Approval","Moderation"],this.actions=["Moderation","Create","View","Edit","Delete","Approval"],this.permissionHeaderToolTips=["Modules in roles","Grants permission to create feeds, events, announcement, circular, clubs, profile to this role","Grants permission to View modules to this role","Grants permission to Edit modules except Feeds module (only creater of feeds are allowed to edit)","Grants permission to Delete modules","Needs Approval of content moderator to make any of this roles posts visible","Grants permission to do content Moderation to this role"],this.allModule=["Feed","Events","Announcement","Circular","Clubs","Profile","Chat"],this._http.getRolePermission(+this._actvRoute.snapshot.paramMap.get("id")).subscribe({next:r=>{this.selectedRoleId=+this._actvRoute.snapshot.paramMap.get("id"),this.rolesData=r?.data[0].sub_modules,this.is_moderator=r?.data[0].is_moderator||!1,this.assignAllPermissions(this.rolesData),this.roleFormGroup.get("role_name").setValue(r?.data[0]?.name||"Admin Test"),this.roleFormGroup.get("description").setValue(r?.data[0]?.description||"Admin Description")},error:r=>{console.log(r),this.roleFormGroup.get("role_name").setValue("Admin Test"),this.roleFormGroup.get("description").setValue("Admin Description")}}),this.roleFormGroup=this._studentDataService.getRolesForm()}ngAfterViewInit(){}onPermissionChange(t,o){"Moderation_Feed"===o&&(this.is_moderator=!0,this.is_need_approval=!this.is_moderator),"Approval_Feed"===o&&(this.is_need_approval=!0,this.is_moderator=!this.is_need_approval);let s=o.split("_")[0],n=this.actions.findIndex(r=>r===s)+1;switch(o.split("_").pop()){case"Feed":t?this.setPermission(0,n):this.removePermission(0,n),(this.is_need_approval||this.is_moderator)&&setTimeout(()=>{this.toggleApproveAndModerator()},100);break;case"Events":t?this.setPermission(1,n):this.removePermission(1,n);break;case"Announcement":t?this.setPermission(2,n):this.removePermission(2,n);break;case"Circular":t?this.setPermission(3,n):this.removePermission(3,n);break;case"Clubs":t?this.setPermission(4,n):this.removePermission(4,n);break;case"Profile":t?this.setPermission(5,n):this.removePermission(5,n);case"Chat":t?this.setPermission(6,n):this.removePermission(6,n)}}setPermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(",");s.push(String(o)),s=[...new Set(s)],this.permission[t].actions=s.toString()}else this.permission[t].actions=this.permission[t].actions+o}removePermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(","),n=s.findIndex(r=>r===String(o));n>=0&&s.splice(n,1),this.permission[t].actions=s.toString()}}onUpdateRole(){let t=this.roleFormGroup.getRawValue();t.permissions=this.permission,t.is_add_role=!1,t.is_moderator=this.is_moderator,t.role_id=this.selectedRoleId,this._http.updateRole(t).subscribe({next:o=>{console.log("created role"),this._router.navigate(["student/roles/list-roles"])},error:o=>console.log("role creation failed..!")})}assignAllPermissions(t){t.forEach(o=>{let s=o.name;o.allowed_actions.forEach(r=>{switch(r.action_id){case 1:document.getElementById("Moderation_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(l=>l===s),1);break;case 2:document.getElementById("Create_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(l=>l===s),2);break;case 3:document.getElementById("View_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(l=>l===s),3);break;case 4:document.getElementById("Edit_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(l=>l===s),4);break;case 5:document.getElementById("Delete_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(l=>l===s),5);break;case 6:document.getElementById("Approval_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(l=>l===s),6)}})})}disableCheckBox(t){return!!t.includes("Edit_Feed")||(t.includes("Approval")||t.includes("Moderation")?!("Approval_Feed"===t||"Moderation_Feed"===t):void 0)}toggleApproveAndModerator(){(this.is_need_approval||this.is_moderator)&&(this.is_need_approval?document.getElementById("Approval_Feed-input").checked=!0:(document.getElementById("Approval_Feed-input").checked=!1,this.removePermission(0,6)),this.is_moderator?document.getElementById("Moderation_Feed-input").checked=!0:(document.getElementById("Moderation_Feed-input").checked=!1,this.removePermission(0,1)))}}function se(i,t){if(1&i&&(e.TgZ(0,"span",22),e._uU(1),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Oqu(null==o.usersDetailFile?null:o.usersDetailFile.name)}}function ne(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"h1",5),e._uU(3,"Role Name -"),e.qZA(),e.TgZ(4,"h1"),e._uU(5),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7)(8,"p"),e._uU(9,"Add users for the above role"),e.qZA()(),e.TgZ(10,"div")(11,"div",8)(12,"div")(13,"a",9),e._uU(14," Download a sample template "),e.TgZ(15,"mat-icon",10),e._uU(16,"download"),e.qZA()()()()(),e.TgZ(17,"div",11)(18,"div",12)(19,"p",13),e._uU(20,"Choose File"),e.qZA()(),e.TgZ(21,"div",12)(22,"input",14,15),e.NdJ("change",function(n){e.CHM(o);const r=e.oxw();return e.KtG(r.onFileUpload(n))}),e.qZA(),e.TgZ(24,"label",16),e._UZ(25,"mat-icon",17),e.qZA(),e.YNc(26,se,2,1,"span",18),e.qZA()(),e.TgZ(27,"div",19)(28,"div",20)(29,"button",21),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onAddUsers())}),e._uU(30,"Add Users"),e.qZA()()()()()}if(2&i){const o=e.oxw();e.xp6(5),e.Oqu(o.selectedRoleName),e.xp6(17),e.Q6J("multiple",!1)("accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(1),e.Q6J("ngIf",null==o.usersDetailFile?null:o.usersDetailFile.name)}}function re(i,t){1&i&&(e.TgZ(0,"mat-header-cell",36),e._uU(1," User "),e.qZA())}function le(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.name," ")}}function ae(i,t){1&i&&(e.TgZ(0,"mat-header-cell",36),e._uU(1," User ID"),e.qZA())}function de(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.usn," ")}}function ce(i,t){1&i&&(e.TgZ(0,"mat-header-cell",36),e._uU(1," Department"),e.qZA())}function me(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",null==o||null==o.department?null:o.department.Name," ")}}function pe(i,t){1&i&&(e.TgZ(0,"mat-header-cell",36),e._uU(1," Delete "),e.qZA())}function _e(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell")(1,"button",37),e.NdJ("click",function(){const r=e.CHM(o).$implicit,l=e.oxw(2);return e.KtG(l.onDeleteUser(r))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()()}}function ue(i,t){1&i&&e._UZ(0,"mat-header-row")}function he(i,t){1&i&&e._UZ(0,"mat-row")}function fe(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div")(1,"div")(2,"div",23)(3,"div",8)(4,"h1",5),e._uU(5,"Role -"),e.qZA(),e.TgZ(6,"h1"),e._uU(7),e.qZA()(),e.TgZ(8,"div")(9,"div",24)(10,"button",21),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onUpdateUsers())}),e._uU(11,"Add Users"),e.qZA()()()(),e.TgZ(12,"div",25)(13,"mat-table",26,27),e.ynx(15,28),e.YNc(16,re,2,0,"mat-header-cell",29),e.YNc(17,le,2,1,"mat-cell",30),e.BQk(),e.ynx(18,31),e.YNc(19,ae,2,0,"mat-header-cell",29),e.YNc(20,de,2,1,"mat-cell",30),e.BQk(),e.ynx(21,32),e.YNc(22,ce,2,0,"mat-header-cell",29),e.YNc(23,me,2,1,"mat-cell",30),e.BQk(),e.ynx(24,33),e.YNc(25,pe,2,0,"mat-header-cell",29),e.YNc(26,_e,4,0,"mat-cell",30),e.BQk(),e.YNc(27,ue,1,0,"mat-header-row",34),e.YNc(28,he,1,0,"mat-row",35),e.qZA()()()()}if(2&i){const o=e.oxw();e.xp6(7),e.Oqu(o.selectedRoleName),e.xp6(6),e.Q6J("dataSource",o.existingUserDetails),e.xp6(14),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns)}}(b=M).\u0275fac=function(t){return new(t||b)(e.Y36(Z.A),e.Y36(U.h),e.Y36(m.F0),e.Y36(m.gz))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-edit-roles"]],decls:21,vars:2,consts:[[1,"w-full",3,"formGroup"],[1,"p-6","text-3xl","font-semibold","header-bg-grad-lit"],[1,"ml-3","mt-10"],[1,"flex-auto","gt-xs:pr-3","w-2/3"],[1,"font-semibold"],["matInput","","formControlName","role_name"],[1,"flex-auto","gt-xs:pr-3","w-1/3"],["matInput","","formControlName","description"],[1,"ml-3","text-xl","font-semibold"],[1,"flex","border","ml-4","pr-16"],["class","m-12 mt-8 mb-2 font-medium",4,"ngFor","ngForOf"],[1,"my-10","flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"click"],[1,"m-12","mt-8","mb-2","font-medium"],[1,"text-lg"],[1,"icon-size-3.5",2,"color","rgb(91, 92, 94)",3,"matTooltip"],[4,"ngIf"],["class","my-8",4,"ngFor","ngForOf"],[1,"my-8"],["class","my-4",4,"ngFor","ngForOf"],[1,"my-4"],["disableRipple","",1,"flex","items-center",3,"id","color","disabled","change"],["checkBox",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Edit Role"),e.qZA(),e.TgZ(3,"div",2)(4,"div")(5,"mat-form-field",3)(6,"mat-label",4),e._uU(7,"Role Name"),e.qZA(),e._UZ(8,"input",5),e.qZA()(),e.TgZ(9,"div")(10,"mat-form-field",6)(11,"mat-label",4),e._uU(12,"Brief Description"),e.qZA(),e._UZ(13,"textarea",7),e.qZA()()(),e.TgZ(14,"p",8),e._uU(15,"Permissions"),e.qZA(),e.TgZ(16,"div",9),e.YNc(17,ie,8,4,"div",10),e.qZA(),e.TgZ(18,"div",11)(19,"button",12),e.NdJ("click",function(){return o.onUpdateRole()}),e._uU(20,"Update Role"),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.roleFormGroup),e.xp6(17),e.Q6J("ngForOf",o.permissionHeader))},dependencies:[_.sg,_.O5,f.KE,f.hX,w.oG,R.Nt,c.Fj,c.JJ,c.JL,c.sg,c.u,p.lW,g.Hw,v.gM],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});const P=[];class E{constructor(t,o,s){this._route=t,this._studentHttp=o,this._router=s,this.updateUsers=!1,this.displayedColumns=["user","userID","department","delete"],this.products=P,this.dataSource=P,this.selectedRoleName=this._route.snapshot.params.name,this.selectedRoleDes=this._route.snapshot.params.description,this.selectedRoleId=this._route.snapshot.params.id,this.getAllUsersOfRole()}getAllUsersOfRole(){this._studentHttp.getUsersOfRoleId(this.selectedRoleId).subscribe({next:t=>{this.existingUserDetails=t.data?.rows},error:t=>{console.log(t)}})}onFileUpload(t){this.usersDetailFile=t.target.files[0]}onUpdateUsers(){this.updateUsers=!0}onDeleteUser(t){this._studentHttp.deactivateUserByAdmin({user_id:t.id,role_id:this.selectedRoleId,status:2}).subscribe({next:o=>{},error:o=>{console.log(o)}})}onAddUsers(){if(!this.usersDetailFile)return;let t=new FormData;this.usersDetailFile&&t.append("file",this.usersDetailFile),t.append("role_id",this.selectedRoleId),this._studentHttp.addUsersToRole(t).subscribe({next:o=>{this._router.navigate(["student/roles/list-roles"])},error:o=>{console.log(o)}})}}var u;(T=E).\u0275fac=function(t){return new(t||T)(e.Y36(m.gz),e.Y36(Z.A),e.Y36(m.F0))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-add-user-to-roles"]],decls:3,vars:2,consts:[[2,"width","85vw"],["class"," relative","style","height: 85vh;",4,"ngIf"],[4,"ngIf"],[1,"relative",2,"height","85vh"],[1,"flex","text-3xl","font-semibold","text-blue-900","mb-2","p-6","header-bg-grad-lit"],[1,"mr-2"],[1,"m-4"],[1,"mt-1","text-base","font-medium"],[1,"flex"],["href","assets/docs/gradlit_user_role_assign.xlsx","download","",1,"text-primary-900","font-semibold"],[2,"color","#001E52 !important","padding-top","16px"],[1,"flex","mt-13"],[1,"flex","items-center"],[1,"text-lg"],["id","document-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["post_documet",""],["for","document-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-gray-400","hover:bg-opacity-20","dark:hover:bg-black","dark:hover:bg-opacity-5"],[3,"svgIcon"],["class","text-md font-semibold",4,"ngIf"],[1,"min-w-256","absolute","bottom-1"],[1,"my-10","flex","justify-end","mt-2"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"click"],[1,"text-md","font-semibold"],[1,"flex","text-4xl","font-semibold","text-blue-900","m-2","p-2","justify-between"],[1,"flex","justify-end"],[1,"w-4/5","m-2","p-2"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","user"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","userID"],["matColumnDef","department"],["matColumnDef","delete"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],["mat-icon-button","","matTooltip","Click to Delete","color","warn",1,"iconbutton",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,ne,31,5,"div",1),e.YNc(2,fe,29,4,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",!o.existingUserDetails||o.updateUsers),e.xp6(1),e.Q6J("ngIf",o.existingUserDetails&&!o.updateUsers))},dependencies:[_.O5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,p.lW,p.RK,g.Hw,v.gM,A.YE,A.nU],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});const ge=[{path:"",component:y,children:[{path:"list-roles",component:D},{path:"add-roles",component:k},{path:"edit-roles/:id",component:M},{path:"add-users-to-role/:id",component:E}]}];class I{}(u=I).\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[_.ez,m.Bz.forChild(ge),a.p0,f.lN,w.p9,R.c,c.u5,c.UX,p.ot,g.Ps,a.p0,v.AV,v.AV,A.JX,R.c,z.Cq]})}}]);