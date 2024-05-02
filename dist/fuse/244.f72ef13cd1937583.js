"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[244],{6244:(we,F,d)=>{d.r(F),d.d(F,{RolesModule:()=>P});var g,u=d(6895),e=d(4650),h=d(925),m=d(9299);class k{constructor(t){this._studentDataService=t,this.roleFormGroup=this._studentDataService.getRolesForm()}}(g=k).\u0275fac=function(t){return new(t||g)(e.Y36(h.h))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-roles"]],decls:2,vars:0,consts:[[1,"w-full"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},dependencies:[m.lC]});var T,v=d(9742),_=d(9549),y=d(6709),x=d(284),c=d(4006),p=d(4859),A=d(7392),C=d(266);function Y(i,t){if(1&i&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o," ")}}function Q(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,Y,2,1,"div",17),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function B(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",20)(1,"mat-checkbox",21,22),e.NdJ("change",function(n){e.CHM(o);const l=e.MAs(2),r=e.oxw(3);return e.KtG(r.onPermissionChange(n.checked,l.id))}),e.qZA()()}if(2&i){const o=t.$implicit,s=e.MAs(2),n=e.oxw(2).$implicit,l=e.oxw();e.xp6(1),e.Q6J("id",n+"_"+o)("color","primary")("disabled",l.disableCheckBox(s.id))}}function G(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,B,3,3,"div",19),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function H(i,t){if(1&i&&(e.TgZ(0,"div",13)(1,"div")(2,"div",14)(3,"mat-icon",15),e._uU(4,"info"),e.qZA(),e._uU(5),e.qZA(),e.YNc(6,Q,2,1,"div",16),e.YNc(7,G,2,1,"div",16),e.qZA()()),2&i){const o=t.$implicit,s=t.index,n=e.oxw();e.xp6(3),e.Q6J("matTooltip",n.permissionHeaderToolTips[s]),e.xp6(2),e.hij(" ",o," "),e.xp6(1),e.Q6J("ngIf",0===s),e.xp6(1),e.Q6J("ngIf",0!=s)}}class N{constructor(t,o,s){this._studentDataService=t,this._router=o,this._http=s,this.permission=[{mod_id:2,actions:""},{mod_id:3,actions:""},{mod_id:4,actions:""},{mod_id:5,actions:""},{mod_id:6,actions:""},{mod_id:7,actions:""},{mod_id:8,actions:""}],this.is_moderator=!1,this.is_need_approval=!1,this.permissionHeader=["Module","Create","View","Edit","Delete","Approval","Moderation"],this.actions=["Moderation","Create","View","Edit","Delete","Approval"],this.permissionHeaderToolTips=["Modules in roles","Grants permission to create feeds, events, announcement, circular, clubs, profile to this role","Grants permission to View modules to this role","Grants permission to Edit modules except Feeds module (only creater of feeds are allowed to edit)","Grants permission to Delete modules","Needs Approval of content moderator to make any of this roles posts visible","Grants permission to do content Moderation to this role"],this.allModule=["Feed","Events","Circular","Clubs","Profile","Chat"],this.roleFormGroup=this._studentDataService.getRolesForm(),this._http.getActions().subscribe(n=>{})}onPermissionChange(t,o){"Moderation_Feed"===o&&(this.is_moderator=!0),"Approval_Feed"===o&&(this.is_need_approval=!0);let s=o.split("_")[0],n=this.actions.findIndex(l=>l===s)+1;switch(o.split("_").pop()){case"Feed":t?this.setPermission(0,n):this.removePermission(0,n),(this.is_need_approval||this.is_moderator)&&setTimeout(()=>{this.toggleApproveAndModerator()},100);break;case"Events":t?this.setPermission(1,n):this.removePermission(1,n);break;case"Announcement":t?this.setPermission(2,n):this.removePermission(2,n);break;case"Circular":t?this.setPermission(3,n):this.removePermission(3,n);break;case"Clubs":t?this.setPermission(4,n):this.removePermission(4,n);break;case"Profile":t?this.setPermission(5,n):this.removePermission(5,n);case"Chat":t?this.setPermission(6,n):this.removePermission(6,n)}}setPermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(",");s.push(String(o)),this.permission[t].actions=s.toString()}else this.permission[t].actions=this.permission[t].actions+o}removePermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(","),n=s.findIndex(l=>l===String(o));n>=0&&s.splice(n,1),this.permission[t].actions=s.toString()}}onCreateRole(){let t=this.roleFormGroup.getRawValue();t.permissions=this.permission,t.is_add_role=!0,t.is_moderator=this.is_moderator,this._http.createRole(t).subscribe({next:o=>{console.log("created role"),this._router.navigate(["student/roles/list-roles"])},error:o=>console.log("role creation failed..!")})}disableCheckBox(t){return!!t.includes("Edit_Feed")||(t.includes("Approval")||t.includes("Moderation")?!("Approval_Feed"===t||"Moderation_Feed"===t):void 0)}toggleApproveAndModerator(){(this.is_need_approval||this.is_moderator)&&(this.is_need_approval?document.getElementById("Approval_Feed-input").checked=!0:(document.getElementById("Approval_Feed-input").checked=!1,this.removePermission(0,6)),this.is_moderator?document.getElementById("Moderation_Feed-input").checked=!0:(document.getElementById("Moderation_Feed-input").checked=!1,this.removePermission(0,1)))}}(T=N).\u0275fac=function(t){return new(t||T)(e.Y36(h.h),e.Y36(m.F0),e.Y36(v.A))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-add-new-role"]],decls:21,vars:2,consts:[[1,"w-full",3,"formGroup"],[1,"p-6","text-3xl","font-semibold","header-bg-grad-lit"],[1,"ml-3","mt-10"],[1,"flex-auto","gt-xs:pr-3","w-2/3"],[1,"font-semibold"],["required","","matInput","","formControlName","role_name"],[1,"flex-auto","gt-xs:pr-3","w-1/3"],["required","","matInput","","formControlName","description"],[1,"ml-3","text-xl","font-semibold"],[1,"flex","border","ml-4","pr-16"],["class","m-9 mt-8 mb-2 font-medium",4,"ngFor","ngForOf"],[1,"my-10","mr-5","flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"click"],[1,"m-9","mt-8","mb-2","font-medium"],[1,"text-lg"],[1,"icon-size-3.5",2,"color","rgb(91, 92, 94)",3,"matTooltip"],[4,"ngIf"],["class","my-8",4,"ngFor","ngForOf"],[1,"my-8"],["class","my-4",4,"ngFor","ngForOf"],[1,"my-4"],[1,"flex","items-center",3,"id","color","disabled","change"],["checkBox",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Add New Role"),e.qZA(),e.TgZ(3,"div",2)(4,"div")(5,"mat-form-field",3)(6,"mat-label",4),e._uU(7,"Role Name"),e.qZA(),e._UZ(8,"input",5),e.qZA()(),e.TgZ(9,"div")(10,"mat-form-field",6)(11,"mat-label",4),e._uU(12,"Brief Description"),e.qZA(),e._UZ(13,"textarea",7),e.qZA()()(),e.TgZ(14,"p",8),e._uU(15,"Permissions"),e.qZA(),e.TgZ(16,"div",9),e.YNc(17,H,8,4,"div",10),e.qZA(),e.TgZ(18,"div",11)(19,"button",12),e.NdJ("click",function(){return o.onCreateRole()}),e._uU(20,"Create Role"),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.roleFormGroup),e.xp6(17),e.Q6J("ngForOf",o.permissionHeader))},dependencies:[u.sg,u.O5,_.KE,_.hX,y.oG,x.Nt,c.Fj,c.JJ,c.JL,c.Q7,c.sg,c.u,p.lW,A.Hw,C.gM],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var U,a=d(7155),O=d(2819),$=d(7274),b=d(6308);function j(i,t){1&i&&(e.TgZ(0,"mat-header-cell",16),e._uU(1," Role Name "),e.qZA())}function L(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell",17),e.NdJ("click",function(){const l=e.CHM(o).$implicit,r=e.oxw();return e.KtG(r.onRoleClick(l))}),e._uU(1),e.qZA()}if(2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.Name," ")}}function K(i,t){1&i&&(e.TgZ(0,"mat-header-cell",16),e._uU(1," Actions "),e.qZA())}function V(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell",18)(1,"button",19),e.NdJ("click",function(){const l=e.CHM(o).$implicit,r=e.oxw();return e.KtG(r.onClickEdit(l))}),e.TgZ(2,"mat-icon",20),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",21),e.NdJ("click",function(){const l=e.CHM(o).$implicit,r=e.oxw();return e.KtG(r.onClickDelete(l.id,l))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}function X(i,t){1&i&&(e.TgZ(0,"mat-header-cell",16),e._uU(1," Add Users "),e.qZA())}function z(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell")(1,"button",22),e.NdJ("click",function(){const l=e.CHM(o).$implicit,r=e.oxw();return e.KtG(r.onRoleClick(l))}),e.TgZ(2,"mat-icon"),e._uU(3,"supervisor_account"),e.qZA()()()}}function W(i,t){1&i&&e._UZ(0,"mat-header-row")}function ee(i,t){1&i&&e._UZ(0,"mat-row",23)}const M=[];class E{constructor(t,o,s,n){this._http=t,this._router=o,this._matDialog=s,this._studentDataService=n,this.displayedColumns=["name","Actions","add_users"],this.products=M,this.dataSource=M}ngOnInit(){this._http.getAllRoles().subscribe({next:t=>{this.products=t.data,this.dataSource=this.products},error:t=>{console.log("fetching roles failed...")}})}onNavigate(t){console.log(`product code ${t}`)}filterProduct(t){}onClickEdit(t){this._studentDataService.selectedRoleData=t,this._router.navigate([`/student/roles/edit-roles/${t.id}`])}onClickDelete(t,o){0===o.UserCount?this._http.deleteRole(t).subscribe({next:s=>{console.log(s),this._http.getAllRoles().subscribe({next:n=>{this.products=n.data,this.dataSource=this.products},error:n=>{console.log("fetching roles failed...")}})},error:s=>{console.log(s)}}):this.notifiyLoadedUserDelete("")}onRoleClick(t){this._router.navigate([`/student/roles/add-users-to-role/${t.id}`,{name:t.Name,description:t.Description,id:t.id}])}notifiyLoadedUserDelete(t){this._matDialog.open(O.u,{autoFocus:!1,maxHeight:"80vh",width:"30vw",data:{type:t}}).afterClosed().subscribe(s=>{console.log(`Dialog result: ${s}`)})}}(U=E).\u0275fac=function(t){return new(t||U)(e.Y36(v.A),e.Y36(m.F0),e.Y36($.uw),e.Y36(h.h))},U.\u0275cmp=e.Xpm({type:U,selectors:[["app-list-roles"]],decls:21,vars:4,consts:[[1,"w-full"],[1,"p-6","flex","justify-between","header-bg-grad-lit"],[1,"text-3xl","font-semibold","flex"],["mat-raised-button","",2,"background-color","#001E52","color","white",3,"routerLink"],[1,"w-full","m-6"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","name"],["mat-sort-header","",4,"matHeaderCellDef"],["class","cursor-pointer",3,"click",4,"matCellDef"],["matColumnDef","Actions"],["style","padding-left:0px !important",4,"matCellDef"],["matColumnDef","add_users"],[4,"matCellDef"],[4,"matHeaderRowDef"],["id","grad-lit-table-row",4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],[1,"cursor-pointer",3,"click"],[2,"padding-left","0px !important"],["mat-icon-button","","color","primary",1,"iconbutton",3,"click"],[2,"color","#001E52 !important"],["mat-icon-button","","color","warn",1,"iconbutton",3,"click"],["mat-icon-button","","color","normal",1,"iconbutton",3,"click"],["id","grad-lit-table-row"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Roles"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e._uU(6,"Add Role"),e.qZA()()(),e.TgZ(7,"div",4)(8,"mat-table",5,6),e.ynx(10,7),e.YNc(11,j,2,0,"mat-header-cell",8),e.YNc(12,L,2,1,"mat-cell",9),e.BQk(),e.ynx(13,10),e.YNc(14,K,2,0,"mat-header-cell",8),e.YNc(15,V,7,0,"mat-cell",11),e.BQk(),e.ynx(16,12),e.YNc(17,X,2,0,"mat-header-cell",8),e.YNc(18,z,4,0,"mat-cell",13),e.BQk(),e.YNc(19,W,1,0,"mat-header-row",14),e.YNc(20,ee,1,0,"mat-row",15),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("routerLink","/student/roles/add-roles"),e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(11),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[m.rH,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,p.lW,p.RK,A.Hw,b.YE,b.nU],styles:["#grad-lit-table-row[_ngcontent-%COMP%]:hover{background-color:#ebeff5!important}.header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var Z,R,te=d(1572);function oe(i,t){if(1&i&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o," ")}}function ie(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,oe,2,1,"div",17),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function se(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",20)(1,"mat-checkbox",21,22),e.NdJ("change",function(n){e.CHM(o);const l=e.MAs(2),r=e.oxw(3);return e.KtG(r.onPermissionChange(n.checked,l.id))}),e.qZA()()}if(2&i){const o=t.$implicit,s=e.MAs(2),n=e.oxw(2).$implicit,l=e.oxw();e.xp6(1),e.Q6J("id",n+"_"+o)("color","primary")("disabled",l.disableCheckBox(s.id))}}function ne(i,t){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,se,3,3,"div",19),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.allModule)}}function le(i,t){if(1&i&&(e.TgZ(0,"div",13)(1,"div")(2,"div",14)(3,"mat-icon",15),e._uU(4,"info"),e.qZA(),e._uU(5),e.qZA(),e.YNc(6,ie,2,1,"div",16),e.YNc(7,ne,2,1,"div",16),e.qZA()()),2&i){const o=t.$implicit,s=t.index,n=e.oxw();e.xp6(3),e.Q6J("matTooltip",n.permissionHeaderToolTips[s]),e.xp6(2),e.hij(" ",o," "),e.xp6(1),e.Q6J("ngIf",0===s),e.xp6(1),e.Q6J("ngIf",0!=s)}}class I{constructor(t,o,s,n){this._http=t,this._studentDataService=o,this._router=s,this._actvRoute=n,this.permission=[{mod_id:2,actions:""},{mod_id:3,actions:""},{mod_id:4,actions:""},{mod_id:5,actions:""},{mod_id:6,actions:""},{mod_id:7,actions:""},{mod_id:8,actions:""}],this.is_moderator=!1,this.is_need_approval=!1,this.permissionHeader=["Module","Create","View","Edit","Delete","Approval","Moderation"],this.actions=["Moderation","Create","View","Edit","Delete","Approval"],this.permissionHeaderToolTips=["Modules in roles","Grants permission to create feeds, events, announcement, circular, clubs, profile to this role","Grants permission to View modules to this role","Grants permission to Edit modules except Feeds module (only creater of feeds are allowed to edit)","Grants permission to Delete modules","Needs Approval of content moderator to make any of this roles posts visible","Grants permission to do content Moderation to this role"],this.allModule=["Feed","Events","Circular","Clubs","Profile","Chat"],this._http.getRolePermission(+this._actvRoute.snapshot.paramMap.get("id")).subscribe({next:l=>{this.selectedRoleId=+this._actvRoute.snapshot.paramMap.get("id"),this.rolesData=l?.data[0].sub_modules,this.is_moderator=l?.data[0].is_moderator||!1,this.assignAllPermissions(this.rolesData),this.roleFormGroup.get("role_name").setValue(this._studentDataService.selectedRoleData?.Name||"Role Name Fetch Failed"),this.roleFormGroup.get("description").setValue(this._studentDataService.selectedRoleData?.Description||"Role Description Fetch Failed")},error:l=>{console.log(l),this.roleFormGroup.get("role_name").setValue("Admin Test"),this.roleFormGroup.get("description").setValue("Admin Description")}}),this.roleFormGroup=this._studentDataService.getRolesForm()}ngAfterViewInit(){}onPermissionChange(t,o){"Moderation_Feed"===o&&(this.is_moderator=!0),"Approval_Feed"===o&&(this.is_need_approval=!0);let s=o.split("_")[0],n=this.actions.findIndex(l=>l===s)+1;switch(o.split("_").pop()){case"Feed":t?this.setPermission(0,n):this.removePermission(0,n),(this.is_need_approval||this.is_moderator)&&setTimeout(()=>{this.toggleApproveAndModerator()},100);break;case"Events":t?this.setPermission(1,n):this.removePermission(1,n);break;case"Announcement":t?this.setPermission(2,n):this.removePermission(2,n);break;case"Circular":t?this.setPermission(3,n):this.removePermission(3,n);break;case"Clubs":t?this.setPermission(4,n):this.removePermission(4,n);break;case"Profile":t?this.setPermission(5,n):this.removePermission(5,n);case"Chat":t?this.setPermission(6,n):this.removePermission(6,n)}}setPermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(",");s.push(String(o)),s=[...new Set(s)],this.permission[t].actions=s.toString()}else this.permission[t].actions=this.permission[t].actions+o}removePermission(t,o){if(this.permission[t].actions){let s=this.permission[t].actions.split(","),n=s.findIndex(l=>l===String(o));n>=0&&s.splice(n,1),this.permission[t].actions=s.toString()}}onUpdateRole(){let t=this.roleFormGroup.getRawValue();t.permissions=this.permission,t.is_add_role=!1,t.is_moderator=this.is_moderator,t.role_id=this.selectedRoleId,this._http.updateRole(t).subscribe({next:o=>{console.log("created role"),this._router.navigate(["student/roles/list-roles"])},error:o=>console.log("role creation failed..!")})}assignAllPermissions(t){t.forEach(o=>{let s=o.name;o.allowed_actions.forEach(l=>{switch(l.action_id){case 1:document.getElementById("Moderation_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(r=>r===s),1);break;case 2:document.getElementById("Create_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(r=>r===s),2);break;case 3:document.getElementById("View_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(r=>r===s),3);break;case 4:document.getElementById("Edit_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(r=>r===s),4);break;case 5:document.getElementById("Delete_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(r=>r===s),5);break;case 6:document.getElementById("Approval_"+s+"-input").checked=!0,this.setPermission(this.allModule.findIndex(r=>r===s),6)}})})}disableCheckBox(t){return!!t.includes("Edit_Feed")||(t.includes("Approval")||t.includes("Moderation")?!("Approval_Feed"===t||"Moderation_Feed"===t):void 0)}toggleApproveAndModerator(){(this.is_need_approval||this.is_moderator)&&(this.is_need_approval?document.getElementById("Approval_Feed-input").checked=!0:(document.getElementById("Approval_Feed-input").checked=!1,this.removePermission(0,6)),this.is_moderator?document.getElementById("Moderation_Feed-input").checked=!0:(document.getElementById("Moderation_Feed-input").checked=!1,this.removePermission(0,1)))}}function re(i,t){if(1&i&&(e.TgZ(0,"span",22),e._uU(1),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Oqu(null==o.usersDetailFile?null:o.usersDetailFile.name)}}function ae(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"h1",5),e._uU(3,"Role Name -"),e.qZA(),e.TgZ(4,"h1"),e._uU(5),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7)(8,"p"),e._uU(9,"Add users for the above role"),e.qZA()(),e.TgZ(10,"div")(11,"div",8)(12,"div")(13,"a",9),e._uU(14," Download a sample template "),e.TgZ(15,"mat-icon",10),e._uU(16,"download"),e.qZA()()()()(),e.TgZ(17,"div",11)(18,"div",12)(19,"p",13),e._uU(20,"Choose File"),e.qZA()(),e.TgZ(21,"div",12)(22,"input",14,15),e.NdJ("change",function(n){e.CHM(o);const l=e.oxw();return e.KtG(l.onFileUpload(n))}),e.qZA(),e.TgZ(24,"label",16),e._UZ(25,"mat-icon",17),e.qZA(),e.YNc(26,re,2,1,"span",18),e.qZA()(),e.TgZ(27,"div",19)(28,"div",20)(29,"button",21),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onAddUsers())}),e._uU(30,"Add Users"),e.qZA()()()()()}if(2&i){const o=e.oxw();e.xp6(5),e.Oqu(o.selectedRoleName),e.xp6(17),e.Q6J("multiple",!1)("accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:document-text"),e.xp6(1),e.Q6J("ngIf",null==o.usersDetailFile?null:o.usersDetailFile.name)}}function de(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-header-cell",40)(1,"mat-checkbox",41),e.NdJ("change",function(n){e.CHM(o);const l=e.oxw(2);return e.KtG(l.onSelectAllUser(n))}),e._uU(2,"User "),e.qZA()()}2&i&&(e.xp6(1),e.Q6J("color","primary"))}function ce(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell")(1,"mat-checkbox",42),e.NdJ("change",function(n){const r=e.CHM(o).$implicit,Re=e.oxw(2);return e.KtG(Re.onUserSelect(n,r))}),e._uU(2),e.qZA()()}if(2&i){const o=t.$implicit,s=e.oxw(2);e.xp6(1),e.Q6J("checked",s.allUsersSelected)("color","primary"),e.xp6(1),e.hij("",o.name," ")}}function me(i,t){1&i&&(e.TgZ(0,"mat-header-cell",40),e._uU(1," User ID"),e.qZA())}function pe(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.usn," ")}}function ue(i,t){1&i&&(e.TgZ(0,"mat-header-cell",40),e._uU(1,"Email"),e.qZA())}function _e(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.email," ")}}function he(i,t){1&i&&(e.TgZ(0,"mat-header-cell",40),e._uU(1," Department"),e.qZA())}function fe(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",null==o||null==o.department?null:o.department.Name," ")}}function ge(i,t){1&i&&(e.TgZ(0,"mat-header-cell",40),e._uU(1,"Email Status"),e.qZA())}function ve(i,t){if(1&i&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.xp6(1),e.hij(" ",o.email_send," ")}}function xe(i,t){1&i&&(e.TgZ(0,"mat-header-cell",40),e._uU(1," Actions "),e.qZA())}function Ae(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"mat-cell",43)(1,"button",44),e.NdJ("click",function(){const l=e.CHM(o).$implicit,r=e.oxw(2);return e.KtG(r.onClickEdit(l))}),e.TgZ(2,"mat-icon",45),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",46),e.NdJ("click",function(){const l=e.CHM(o).$implicit,r=e.oxw(2);return e.KtG(r.onClickDelete(l))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}function Ce(i,t){1&i&&e._UZ(0,"mat-header-row")}function Te(i,t){1&i&&e._UZ(0,"mat-row")}function be(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"div")(1,"div")(2,"div",23)(3,"div",8)(4,"h1",5),e._uU(5,"Role -"),e.qZA(),e.TgZ(6,"h1"),e._uU(7),e.qZA()(),e.TgZ(8,"div",8)(9,"div",24)(10,"div",25)(11,"button",21),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onSendEmail())}),e._uU(12,"Send email to selected users"),e.qZA()()(),e.TgZ(13,"div")(14,"div",25)(15,"button",21),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onUpdateUsers())}),e._uU(16,"Add Users"),e.qZA()()()()(),e.TgZ(17,"div",26)(18,"mat-table",27,28),e.ynx(20,29),e.YNc(21,de,3,1,"mat-header-cell",30),e.YNc(22,ce,3,3,"mat-cell",31),e.BQk(),e.ynx(23,32),e.YNc(24,me,2,0,"mat-header-cell",30),e.YNc(25,pe,2,1,"mat-cell",31),e.BQk(),e.ynx(26,33),e.YNc(27,ue,2,0,"mat-header-cell",30),e.YNc(28,_e,2,1,"mat-cell",31),e.BQk(),e.ynx(29,34),e.YNc(30,he,2,0,"mat-header-cell",30),e.YNc(31,fe,2,1,"mat-cell",31),e.BQk(),e.ynx(32,35),e.YNc(33,ge,2,0,"mat-header-cell",30),e.YNc(34,ve,2,1,"mat-cell",31),e.BQk(),e.ynx(35,36),e.YNc(36,xe,2,0,"mat-header-cell",30),e.YNc(37,Ae,7,0,"mat-cell",37),e.BQk(),e.YNc(38,Ce,1,0,"mat-header-row",38),e.YNc(39,Te,1,0,"mat-row",39),e.qZA()()()()}if(2&i){const o=e.oxw();e.xp6(7),e.Oqu(o.selectedRoleName),e.xp6(11),e.Q6J("dataSource",o.existingUserDetails),e.xp6(20),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns)}}(Z=I).\u0275fac=function(t){return new(t||Z)(e.Y36(v.A),e.Y36(h.h),e.Y36(m.F0),e.Y36(m.gz))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-edit-roles"]],decls:21,vars:2,consts:[[1,"w-full",3,"formGroup"],[1,"p-6","text-3xl","font-semibold","header-bg-grad-lit"],[1,"ml-3","mt-10"],[1,"flex-auto","gt-xs:pr-3","w-2/3"],[1,"font-semibold"],["matInput","","formControlName","role_name"],[1,"flex-auto","gt-xs:pr-3","w-1/3"],["matInput","","formControlName","description"],[1,"ml-3","text-xl","font-semibold"],[1,"flex","border","ml-4","pr-16"],["class","m-12 mt-8 mb-2 font-medium",4,"ngFor","ngForOf"],[1,"my-10","flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"click"],[1,"m-12","mt-8","mb-2","font-medium"],[1,"text-lg"],[1,"icon-size-3.5",2,"color","rgb(91, 92, 94)",3,"matTooltip"],[4,"ngIf"],["class","my-8",4,"ngFor","ngForOf"],[1,"my-8"],["class","my-4",4,"ngFor","ngForOf"],[1,"my-4"],["disableRipple","",1,"flex","items-center",3,"id","color","disabled","change"],["checkBox",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Edit Role"),e.qZA(),e.TgZ(3,"div",2)(4,"div")(5,"mat-form-field",3)(6,"mat-label",4),e._uU(7,"Role Name"),e.qZA(),e._UZ(8,"input",5),e.qZA()(),e.TgZ(9,"div")(10,"mat-form-field",6)(11,"mat-label",4),e._uU(12,"Brief Description"),e.qZA(),e._UZ(13,"textarea",7),e.qZA()()(),e.TgZ(14,"p",8),e._uU(15,"Permissions"),e.qZA(),e.TgZ(16,"div",9),e.YNc(17,le,8,4,"div",10),e.qZA(),e.TgZ(18,"div",11)(19,"button",12),e.NdJ("click",function(){return o.onUpdateRole()}),e._uU(20,"Update Role"),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.roleFormGroup),e.xp6(17),e.Q6J("ngForOf",o.permissionHeader))},dependencies:[u.sg,u.O5,_.KE,_.hX,y.oG,x.Nt,c.Fj,c.JJ,c.JL,c.sg,c.u,p.lW,A.Hw,C.gM],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});const q=[];class J{constructor(t,o,s,n){this._route=t,this._studentHttp=o,this._studentDataService=s,this._router=n,this.updateUsers=!1,this.displayedColumns=["user","userID","email","department","emailStatus","Actions"],this.products=q,this.dataSource=q,this.selectedUserByAdmin=new Set,this.selectedRoleName=this._route.snapshot.params.name,this.selectedRoleDes=this._route.snapshot.params.description,this.selectedRoleId=this._route.snapshot.params.id,this.getAllUsersOfRole()}getAllUsersOfRole(){this._studentHttp.getUsersOfRoleId(this.selectedRoleId).subscribe({next:t=>{this.existingUserDetails=t.data?.rows},error:t=>{console.log(t)}})}onFileUpload(t){this.usersDetailFile=t.target.files[0]}onUpdateUsers(){this.updateUsers=!0}onClickDelete(t){this._studentHttp.deactivateUserByAdmin({user_id:t.id,status:2}).subscribe({next:o=>{this.getAllUsersOfRole()},error:o=>{console.log(o)}})}onSelectAllUser(t){this.allUsersSelected=t.checked,t.checked?this.existingUserDetails.forEach(o=>this.selectedUserByAdmin?.add(o.id)):this.selectedUserByAdmin=new Set}onUserSelect(t,o){t.checked?this.selectedUserByAdmin.add(o.id):this.selectedUserByAdmin.delete(o.id)}onSendEmail(){this._studentHttp.sendWelcomeMailByAdmin({users_list:Array.from(this.selectedUserByAdmin).join(",")}).subscribe({next:t=>{console.log(t),this._router.navigate(["/student/roles/list-roles"])},error:t=>{console.log(t),this._router.navigate(["/student/roles/list-roles"])}})}onClickEdit(t){this._studentDataService.selectedUserData=t,this._router.navigate([`/student/roles/edit-user/${t.id}/${t.name}`])}onAddUsers(){if(!this.usersDetailFile)return;let t=new FormData;this.usersDetailFile&&t.append("file",this.usersDetailFile),t.append("role_id",this.selectedRoleId),this._studentHttp.addUsersToRole(t).subscribe({next:o=>{this._router.navigate(["student/roles/list-roles"])},error:o=>{console.log(o)}})}}(R=J).\u0275fac=function(t){return new(t||R)(e.Y36(m.gz),e.Y36(v.A),e.Y36(h.h),e.Y36(m.F0))},R.\u0275cmp=e.Xpm({type:R,selectors:[["app-add-user-to-roles"]],decls:3,vars:2,consts:[[2,"width","85vw"],["class"," relative","style","height: 85vh;",4,"ngIf"],[4,"ngIf"],[1,"relative",2,"height","85vh"],[1,"flex","text-3xl","font-semibold","text-blue-900","mb-2","p-6","header-bg-grad-lit"],[1,"mr-2"],[1,"m-4"],[1,"mt-1","text-base","font-medium"],[1,"flex"],["href","assets/docs/gradlit_user_role_assign.xlsx","download","",1,"text-primary-900","font-semibold"],[2,"color","#001E52 !important","padding-top","16px"],[1,"flex","mt-13"],[1,"flex","items-center"],[1,"text-lg"],["id","document-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["post_documet",""],["for","document-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-gray-400","hover:bg-opacity-20","dark:hover:bg-black","dark:hover:bg-opacity-5"],[3,"svgIcon"],["class","text-md font-semibold",4,"ngIf"],[1,"min-w-256","w-11/12","absolute","bottom-1"],[1,"my-10","flex","justify-end","mt-2"],["mat-raised-button","","color","primary",2,"background-color","#001E52",3,"click"],[1,"text-md","font-semibold"],[1,"flex","text-4xl","font-semibold","text-blue-900","m-2","p-2","justify-between"],[1,"mr-3"],[1,"flex","justify-end"],[1,"w-full","m-2","p-2"],["matSort","",3,"dataSource"],["table",""],["matColumnDef","user"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","userID"],["matColumnDef","email"],["matColumnDef","department"],["matColumnDef","emailStatus",1,"w-fit"],["matColumnDef","Actions"],["style","padding-left:0px !important",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],["disableRipple","",1,"flex","items-center",3,"color","change"],["disableRipple","",1,"flex","items-center",3,"checked","color","change"],[2,"padding-left","0px !important"],["mat-icon-button","","matTooltip","Click to Edit","color","primary",1,"iconbutton",3,"click"],[2,"color","#001E52 !important"],["mat-icon-button","","color","warn",1,"iconbutton",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,ae,31,5,"div",1),e.YNc(2,be,40,4,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",!o.existingUserDetails||o.updateUsers),e.xp6(1),e.Q6J("ngIf",o.existingUserDetails&&!o.updateUsers))},dependencies:[u.O5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,y.oG,p.lW,p.RK,A.Hw,C.gM,b.YE,b.nU],styles:[".header-bg-grad-lit[_ngcontent-%COMP%]{background-color:#e7eaeb}"]});var w,f,D=d(8796);function Ue(i,t){if(1&i&&(e.TgZ(0,"ng-option",16),e._uU(1),e.qZA()),2&i){const o=t.$implicit;e.Q6J("value",o.Id),e.xp6(1),e.Oqu(o.Id)}}class S{constructor(t,o,s,n){this._http=t,this._actvRoute=o,this.studentDataService=s,this._router=n,this.allClubs=[],this.studentName="",this.usn="",this.email="",this.clubDisplayName="",this.searchedUserResult=[],this.selectedUsersID=[],this.selectedStudentId=this._actvRoute.snapshot.params?.id,this._http.getAllDepartments().subscribe({next:l=>{this.departments=l.data},error:l=>{console.log("fetching departments failed...")}})}onFileUpload(t){const o=t.target.files[0];this.clubLogo=o;let s=new FileReader;s.readAsDataURL(o),s.onload=()=>{this.imageUrl=s.result}}onAdminSelected(t){this.selectedUsersID.push(t)}onUserRemoved(t){let o=this.selectedUsersID.indexOf(t.value);this.selectedUsersID.splice(o,1)}onUserSearched(t){t.term.length>2&&this._http.getSearchedUsers(t.term).subscribe({next:o=>{this.searchedUserResult=o.data.rows},error:o=>{console.log(o)}})}onEditStudentSave(){let t={name:this.studentName,user_id:parseInt(this.selectedStudentId),usn:this.usn,email:this.email,dep_id:this.selectedDepId};this._http.updateStudentByAdmin(t).subscribe({next:o=>{console.log(o),this._router.navigate(["/student/roles/list-roles"])},error:o=>{console.log(o),this._router.navigate(["/student/roles/list-roles"])}})}resetCalculations(){this.selectedUsersID=structuredClone(this.selectedUsersID)}}(w=S).\u0275fac=function(t){return new(t||w)(e.Y36(v.A),e.Y36(m.gz),e.Y36(h.h),e.Y36(m.F0))},w.\u0275cmp=e.Xpm({type:w,selectors:[["app-edit-user-in-a-role"]],decls:31,vars:6,consts:[[1,"m-4","w-full","min-h-180","relative"],[1,"w-full"],[1,"font-semibold","text-xl","mb-4"],[1,"flex"],[1,"flex","flex-col","gt-xs:flex-row","w-1/2"],[1,"flex-auto","gt-xs:pr-3","w-full"],["matInput","","placeholder","student name",3,"ngModel","ngModelChange"],[1,"flex","flex-col","gt-xs:flex-row","ml-8","w-1/2"],["matInput","","placeholder","USN",3,"ngModel","ngModelChange"],["matInput","","placeholder","email",3,"ngModel","ngModelChange"],[1,"font-medium"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"my-10","mt-8","w-full","absolute","bottom-6"],[1,"flex","justify-end"],["mat-raised-button","","color","primary",2,"background-color","#001E52","width","150px",3,"click"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h1",2),e._uU(4),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Student Name"),e.qZA(),e.TgZ(10,"input",6),e.NdJ("ngModelChange",function(n){return o.studentName=n}),e.qZA()()(),e.TgZ(11,"div",7)(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"USN"),e.qZA(),e.TgZ(15,"input",8),e.NdJ("ngModelChange",function(n){return o.usn=n}),e.qZA()()()(),e.TgZ(16,"div",3)(17,"div",4)(18,"mat-form-field",5)(19,"mat-label"),e._uU(20,"Email"),e.qZA(),e.TgZ(21,"input",9),e.NdJ("ngModelChange",function(n){return o.email=n}),e.qZA()()(),e.TgZ(22,"div",7)(23,"div",10),e._uU(24,"Depatrment ID"),e.qZA(),e.TgZ(25,"ng-select",11),e.NdJ("ngModelChange",function(n){return o.selectedDepId=n}),e.YNc(26,Ue,2,2,"ng-option",12),e.qZA()()(),e.TgZ(27,"div",13)(28,"div",14)(29,"button",15),e.NdJ("click",function(){return o.onEditStudentSave()}),e._uU(30,"Update student data"),e.qZA()()()()()),2&t&&(e.xp6(4),e.hij("Edit User : ",null==o.studentDataService||null==o.studentDataService.selectedUserData?null:o.studentDataService.selectedUserData.name,""),e.xp6(6),e.Q6J("ngModel",o.studentName),e.xp6(5),e.Q6J("ngModel",o.usn),e.xp6(6),e.Q6J("ngModel",o.email),e.xp6(4),e.Q6J("ngModel",o.selectedDepId),e.xp6(1),e.Q6J("ngForOf",o.departments))},dependencies:[u.sg,_.KE,_.hX,x.Nt,c.Fj,c.JJ,c.On,p.lW,D.w9,D.jq]});const Ze=[{path:"",component:k,children:[{path:"list-roles",component:E},{path:"add-roles",component:N},{path:"edit-roles/:id",component:I},{path:"add-users-to-role/:id",component:J},{path:"edit-user/:id/:name",component:S}]}];class P{}(f=P).\u0275fac=function(t){return new(t||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[u.ez,m.Bz.forChild(Ze),a.p0,_.lN,y.p9,x.c,c.u5,c.UX,p.ot,A.Ps,a.p0,C.AV,C.AV,b.JX,x.c,te.Cq,D.A0]})}}]);