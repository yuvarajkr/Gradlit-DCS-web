"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[592],{2819:(u,_,r)=>{r.d(_,{u:()=>n});var o,e=r(7274),t=r(4650),a=r(4859);class n{constructor(i,l){this.data=i,this._dialogRef=l}onOkClick(){this._dialogRef.close()}}(o=n).\u0275fac=function(i){return new(i||o)(t.Y36(e.WI,8),t.Y36(e.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-role-notification"]],decls:8,vars:0,consts:[[1,"font-bold","text-lg","mb-1"],[1,"font-semibold"],[1,"flex","justify-end","mt-6"],["mat-raised-button","",2,"background-color","#001E52","color","white","min-width","90px",3,"click"]],template:function(i,l){1&i&&(t.TgZ(0,"div")(1,"p",0),t._uU(2,"Role Contains Users!!"),t.qZA(),t.TgZ(3,"p",1),t._uU(4,"Please delete users from role and try again."),t.qZA(),t.TgZ(5,"div",2)(6,"button",3),t.NdJ("click",function(){return l.onOkClick()}),t._uU(7,"OK"),t.qZA()()())},dependencies:[a.lW]})},925:(u,_,r)=>{r.d(_,{h:()=>n});var o,e=r(4006),t=r(7579),a=r(4650);class n{constructor(i){this._fb=i,this.onPostsChange=new t.x}getStudentPostForm(){return this._fb.group({head:["",e.kI.required],type:[0],event_details:this._fb.group({event_name:["",e.kI.required],event_description:["",e.kI.required],venue:["",e.kI.required],start_date:["",e.kI.required],end_date:["",e.kI.required],is_notification:[!1,e.kI.required],event_file:[null,e.kI.required]}),poll_details:this._fb.group({question:["",e.kI.required],option1:["",e.kI.required],option2:["",e.kI.required],poll_end_date:["",e.kI.required],is_notification:[!1,e.kI.required]}),photos:[[]],files:[[]],vedios:[[]]})}getCreateClubForm(){return this._fb.group({department_id:["1"],user_id:["1"],name:["",e.kI.required],description:["",e.kI.required],display_name:["",e.kI.required],allow_notices:[0],allow_events:[0],allow_delete_post:[0],allow_push_notification:[0],is_all_deportments:[0],password:[],confirm_password:[],email:[]})}getRolesForm(){return this._fb.group({role_name:[""],description:[""],permissions:[""]})}getCreateCircularForm(){return this._fb.group({heading:[""],group_name:[""],description:["",e.kI.required],file_name:["",e.kI.required]})}getCreateNewCollegeForm(){return this._fb.group({name:[""],id:[""],description:["",e.kI.required],logo:["",e.kI.required]})}}(o=n).\u0275fac=function(i){return new(i||o)(a.LFG(e.qu))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}}]);