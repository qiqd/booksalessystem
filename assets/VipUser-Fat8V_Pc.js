import{a as s,Y as P,w,y as e,A as t,F as R,a1 as G,Z as J,o as k,x as u,D as n,I as y,M as K,J as Y,K as Z,a2 as j,B as q,a4 as L,a5 as O,a6 as Q,G as W,H as X}from"./vendor-BfugLu_u.js";import{g as ee,a as B,d as le,u as ae}from"./vip-wzRVvHCD.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./request-B-Avm3cl.js";import"./index-nOFdZBZ9.js";const E=f=>(W("data-v-16cd668f"),f=f(),X(),f),oe=E(()=>u("span",null,"你确定要删除吗？",-1)),ne={class:"dialog-footer"},de={class:"search"},se={class:"byname"},ue=E(()=>u("span",null,"姓名",-1)),ie={class:"byphone"},pe=E(()=>u("span",null,"电话",-1)),re={class:"table"},ve={key:0},me={key:1},ce={__name:"VipUser",setup(f){const V=s([]),m=s(!1),g=s(!1),p=s(""),r=s(""),I=async()=>{p.value==""&&r.value==""||(p.value!=""&&(V.value=[(await B(p.value)).data.data]),r.value!=""&&(V.value=[(await B(r.value)).data.data]))},D=()=>{p.value="",r.value="",b()},h=s(),x=s(),o=s({vname:"",vgender:"",vphone:"",vemail:""}),b=async()=>{V.value=(await ee()).data.data},N=()=>{console.log(h.value),le(h.value).then(v=>{if(v.data.state>300){y({message:"删除失败",type:"error",plain:!0});return}y({message:"删除成功",type:"success",plain:!0}),m.value=!1,h.value=null,b()})},F=()=>{ae(x.value,o.value).then(v=>{if(v.data.state>300){y({message:"修改失败",type:"error",plain:!0});return}y({message:"修改成功",type:"success",plain:!0}),g.value=!1,b()})},S=(v,l)=>{m.value=!0,h.value=l.vno},$=(v,l)=>{x.value=l.vno,o.value.vemail=l.vemail,o.value.vname=l.vname,o.value.vphone=l.vphone,o.value.vgender=l.vgender,g.value=!0};return P(()=>{b()}),(v,l)=>{const i=K,C=G,c=Y,_=Z,U=j,z=q,M=L,d=O,T=Q,A=J;return k(),w(R,null,[e(C,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=a=>m.value=a),title:"提示",width:"500"},{footer:t(()=>[u("div",ne,[e(i,{onClick:l[0]||(l[0]=a=>m.value=!1)},{default:t(()=>[n("取消")]),_:1}),e(i,{onClick:N,type:"primary"},{default:t(()=>[n(" 确认 ")]),_:1})])]),default:t(()=>[oe]),_:1},8,["modelValue"]),e(C,{modelValue:g.value,"onUpdate:modelValue":l[7]||(l[7]=a=>g.value=a),title:"修改vip顾客信息",width:"500"},{default:t(()=>[e(z,{model:o.value,"label-position":"right","label-width":"auto"},{default:t(()=>[e(_,{label:"名称"},{default:t(()=>[e(c,{modelValue:o.value.vname,"onUpdate:modelValue":l[2]||(l[2]=a=>o.value.vname=a),placeholder:"请输入vip顾客名字",clearable:""},null,8,["modelValue"])]),_:1}),e(_,{label:"手机号"},{default:t(()=>[e(c,{modelValue:o.value.vphone,"onUpdate:modelValue":l[3]||(l[3]=a=>o.value.vphone=a),placeholder:"请输入vip顾客手机号",clearable:""},null,8,["modelValue"])]),_:1}),e(_,{label:"电子邮件"},{default:t(()=>[e(c,{modelValue:o.value.vemail,"onUpdate:modelValue":l[4]||(l[4]=a=>o.value.vemail=a),placeholder:"请输入vip顾客邮件号",clearable:""},null,8,["modelValue"])]),_:1}),e(_,{label:"性别"},{default:t(()=>[e(U,{modelValue:o.value.vgender,"onUpdate:modelValue":l[5]||(l[5]=a=>o.value.vgender=a),label:"1"},{default:t(()=>[n("男")]),_:1},8,["modelValue"]),e(U,{modelValue:o.value.vgender,"onUpdate:modelValue":l[6]||(l[6]=a=>o.value.vgender=a),label:"0"},{default:t(()=>[n("女")]),_:1},8,["modelValue"])]),_:1}),e(_,null,{default:t(()=>[e(i,{type:"primary",onClick:F},{default:t(()=>[n("确认")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(A,null,{default:t(()=>[e(M,null,{default:t(()=>[u("div",de,[u("div",se,[ue,e(c,{modelValue:p.value,"onUpdate:modelValue":l[8]||(l[8]=a=>p.value=a),style:{width:"240px"},placeholder:"请输入姓名"},null,8,["modelValue"])]),u("div",ie,[pe,e(c,{modelValue:r.value,"onUpdate:modelValue":l[9]||(l[9]=a=>r.value=a),style:{width:"240px"},placeholder:"请输入电话"},null,8,["modelValue"]),e(i,{type:"primary",size:"default",onClick:I},{default:t(()=>[n("搜索")]),_:1}),e(i,{type:"warning",size:"default",onClick:D},{default:t(()=>[n("清空")]),_:1})])])]),_:1}),u("div",re,[e(T,{data:V.value,height:"850",style:{width:"100%"},sortable:""},{default:t(()=>[e(d,{align:"center",sortable:"",label:"编号",width:"100",prop:"vno"}),e(d,{align:"center",label:"姓名",width:"80",prop:"vname"}),e(d,{align:"center",label:"性别",width:"80",prop:"vgender"},{default:t(a=>[a.row.vgender==1?(k(),w("span",ve,"男")):(k(),w("span",me,"女"))]),_:1}),e(d,{align:"center",label:"电话",width:"180",prop:"vphone"}),e(d,{align:"center",label:"邮箱",width:"220",prop:"vemail"}),e(d,{align:"center",label:"vip创建时间",width:"180",prop:"vcreationtime"}),e(d,{align:"center",label:"vip过期时间",width:"180",prop:"vdeadline"}),e(d,{align:"center",label:"操作"},{default:t(a=>[e(i,{size:"small",onClick:H=>$(a.$index,a.row)},{default:t(()=>[n(" 编辑")]),_:2},1032,["onClick"]),e(i,{size:"small",type:"danger",onClick:H=>S(a.$index,a.row)},{default:t(()=>[n(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),_:1})],64)}}},be=te(ce,[["__scopeId","data-v-16cd668f"]]);export{be as default};
