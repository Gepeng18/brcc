(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-499851a2"],{"1bf1":function(e,t,a){"use strict";a("6d67"),a("c5f6");var n,r,o=a("f933"),i=a("ed08"),s={name:"Ellipsis",components:{Tooltip:o["a"]},props:{prefixCls:{type:String,default:"ant-pro-ellipsis"},tooltip:{type:Boolean},length:{type:Number,required:!0},lines:{type:Number,default:1},fullWidthRecognition:{type:Boolean,default:!1}},methods:{getStrDom:function(e,t){var a=this.$createElement;return a("span",[Object(i["a"])(e,this.length)+(t>this.length?"...":"")])},getTooltip:function(e,t){var a=this.$createElement;return a(o["a"],[a("template",{slot:"title"},[e]),this.getStrDom(e,t)])}},render:function(){var e=this.$props,t=e.tooltip,a=e.length,n=this.$slots.default.map((function(e){return e.text})).join(""),r=Object(i["c"])(n),o=t&&r>a?this.getTooltip(n,r):this.getStrDom(n,r);return o}},l=s,c=a("2877"),d=Object(c["a"])(l,n,r,!1,null,null,null);t["a"]=d.exports},"386d":function(e,t,a){"use strict";var n=a("cb7c"),r=a("83a1"),o=a("5f1b");a("214f")("search",1,(function(e,t,a,i){return[function(a){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=i(a,e,this);if(t.done)return t.value;var s=n(e),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var d=o(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===d?-1:d.index}]}))},"5dbc":function(e,t,a){var n=a("d3f4"),r=a("8b97").set;e.exports=function(e,t,a){var o,i=t.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&n(o)&&r&&r(e,o),e}},"6d67":function(e,t,a){"use strict";var n=a("5ca1"),r=a("0a49")(1);n(n.P+n.F*!a("2f21")([].map,!0),"Array",{map:function(e){return r(this,e,arguments[1])}})},7514:function(e,t,a){"use strict";var n=a("5ca1"),r=a("0a49")(5),o="find",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"8b97":function(e,t,a){var n=a("d3f4"),r=a("cb7c"),o=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:o}},"9fe8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("section",{staticClass:"add-btn"},[a("a-button",{staticStyle:{"margin-right":"24px"},attrs:{icon:"plus",type:"primary"},on:{click:e.handleAddGray}},[e._v("\n            "+e._s(e.$t("version.btn.add.gray"))+"\n        ")]),a("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:e.handleAdd}},[e._v("\n            "+e._s(e.$t("version.btn.add"))+"\n        ")])],1),a("section",{staticClass:"content"},[a("div",{staticClass:"table"},[a("a-table",{attrs:{columns:e.columns,"data-source":e.versiondata,pagination:e.pagination,loading:e.loading,"row-key":function(e){return e.id}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"name",fn:function(t,n){return[a("a",{on:{click:function(t){return e.toListConfigGroup(n)}}},[e._v(e._s(t))]),n.grayFlag?a("a-tag",{staticStyle:{"margin-left":"12px"}},[e._v(e._s(e.$t("version.table.columns.grayFlag")))]):e._e()]}},{key:"operation",fn:function(t,n){return[e.canManage?[a("a",{attrs:{href:"javascript:;",type:"primary"},on:{click:function(t){return e.handleEdit(n)}}},[e._v(e._s(e.$t("version.table.operation.edit")))]),a("a-divider",{attrs:{type:"vertical"}}),n.grayFlag?[a("a-popconfirm",{attrs:{title:e.$t("version.table.operation.delete.gray.tips")},on:{confirm:function(t){return e.handleDeleteGray(n.id)}}},[a("a",{attrs:{href:"javascript:;",type:"primary"}},[e._v(e._s(e.$t("version.table.operation.delete")))])]),a("a-divider",{attrs:{type:"vertical"}}),n.grayFlag?a("a",{attrs:{href:"javascript:;",type:"primary"},on:{click:function(t){return e.handleSetGrayRule(n)}}},[e._v(e._s(e.$t("version.table.operation.gray")))]):e._e()]:a("a-popconfirm",{attrs:{title:e.$t("version.table.operation.delete.tips")},on:{confirm:function(t){return e.handleDelete(n.id)}}},[a("a",{attrs:{href:"javascript:;",type:"primary"}},[e._v(e._s(e.$t("version.table.operation.delete")))])]),a("a-divider",{attrs:{type:"vertical"}})]:e._e(),[a("a",{attrs:{href:"javascript:;",type:"primary"},on:{click:function(t){return e.toListConfigGroup(n)}}},[e._v(e._s(e.$t("version.table.operation.group")))]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{attrs:{href:"javascript:;",type:"primary"},on:{click:function(t){return e.changeconfig(n)}}},[e._v(e._s(e.$t("version.table.operation.changeLog")))])],a("a-divider",{attrs:{type:"vertical"}}),e.canManage?a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n                            "+e._s(e.$t("version.table.operation.more"))),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;",type:"primary"},on:{click:function(t){return e.copyversion(n)}}},[e._v(e._s(e.$t("version.table.operation.copy")))])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;",type:"primary"},on:{click:function(t){return e.routerTo("/instance?versionId="+n.id)}}},[e._v(e._s(e.$t("version.table.operation.instantce")))])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:e.$t("version.table.operation.push.tips")},on:{confirm:function(t){return e.handleChange(n.id)}}},[a("a",{attrs:{href:"javascript:;",type:"primary"}},[e._v(e._s(e.$t("version.table.operation.pushChange")))])])],1)],1)],1):e._e()]}}])},[e._l(e.columns,(function(t,n){return a("template",{slot:t.scopedSlots.title},[a("span",{key:n},[e._v(e._s(e.$t(t.scopedSlots.title)))])])}))],2)],1)]),a("copyversion",{attrs:{copyversiondialog:e.copyversiondialog,alldata:e.alldata}}),a("configchangerecord",{attrs:{configchangedialog:e.configchangedialog,versiondata:e.versiondata}}),a("versiondialog",{attrs:{dialog:e.dialog,formdata:e.formdata},on:{update:e.getAllList}}),a("gray-modal",{attrs:{versiondata:e.versiondata,dialog:e.graydialog,formdata:e.grayForm},on:{update:e.getAllList}}),a("gray-rule",{attrs:{dialog:e.grayRuledialog,formdata:e.grayRuleForm},on:{update:e.getAllList}})],1)},r=[],o=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"envdialog"},[a("a-modal",{attrs:{title:e.dialog.title,visible:e.dialog.show,"confirm-loading":e.dialog.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formdata.id}],expression:"['id',{initialValue:formdata.id}]"}]})],1),a("a-form-item",{attrs:{label:e.$t("version.table.columns.name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:e.$t("version.modal.name.message")}],initialValue:e.formdata.name}],expression:"[\n                        'name',{\n                        rules: [{ required: true, message: $t('version.modal.name.message')}],\n                        initialValue: formdata.name,\n                        }]"}],attrs:{placeholder:e.$t("version.modal.name.placeholder")}})],1),a("a-form-item",{attrs:{label:e.$t("version.table.columns.memo")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:e.formdata.memo}],expression:"['memo',{initialValue: formdata.memo}]"}],attrs:{type:"textarea"}})],1)],1)],1)],1)},s=[];function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{dialog:Object,formdata:Object},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e){if(!e){t.dialog.loading=!0;var a="add"===t.dialog.option?"addVersion":"updateVersion";t.$api.version[a](c({environmentId:t.$route.query.environmentId},t.form.getFieldsValue())).then((function(e){0===e.status?(t.$emit("update"),t.dialog.show=!1,t.$message.success("success！"),t.form.resetFields()):t.dialog.loading=!1}))}}))},handleCancel:function(e){this.dialog.show=!1,this.form.resetFields()}}},u=d,p=a("2877"),m=Object(p["a"])(u,i,s,!1,null,null,null),f=m.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dependmodal"},[a("a-modal",{attrs:{title:e.$t("version.table.operation.copy"),visible:e.copyversiondialog.show,"mask-closable":!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form-item",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:e.$t("version.modal.copy.current")}},[e._v("\n            "+e._s(e.copyversiondialog.name)+"（"+e._s(e.$t("version.table.columns.id"))+"："+e._s(e.copyversiondialog.id)+"）\n        ")]),a("a-form-item",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:e.$t("version.modal.copy.origin")}},[a("a-cascader",{staticStyle:{width:"100%"},attrs:{options:e.alldata,"change-on-select":"","field-names":{label:"name",value:"id",children:"children"},"popup-class-name":"search-select",placeholder:e.$t("version.modal.name.mainversion.placeholder"),"show-search":e.showSearch},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)],1)},h=[],v=(a("96cf"),a("3b8d")),y={data:function(){return{value:[],showSearch:{matchInputWidth:!0},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{copyversiondialog:Object,alldata:Array},methods:{handleOk:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:4===this.value.length?this.$api.version.copyVersion({srcVersionId:this.value[3],destVersionId:this.copyversiondialog.id}).then((function(e){0===e.status&&(a.$message.success("复制成功！"),a.copyversiondialog.show=!1,a.value=[])})):this.$message.error("请选择版本！");case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCancel:function(e){this.copyversiondialog.show=!1},onChange:function(e){this.value=e}}},b=y,w=Object(p["a"])(b,g,h,!1,null,null,null),$=w.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.$t("version.modal.change.title"),visible:e.configchangedialog.show,"mask-closable":!1,footer:null,width:1200},on:{cancel:e.handleCancel}},[a("a-form",{attrs:{layout:"inline",form:e.form}},[a("a-form-item",{staticStyle:{"margin-bottom":"24px"}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["rangetime",{rules:[{type:"array",required:!0,message:e.$t("version.modal.change.message")}],initialValue:[e.moment().subtract(1,"week"),e.moment()]}],expression:"['rangetime', {\n                    rules: [{ type: 'array', required: true, message: $t('version.modal.change.message') }],\n                    initialValue: [moment().subtract(1, 'week'), moment()]\n                }]"}],staticStyle:{width:"500px"},attrs:{ranges:{Today:[e.moment(),e.moment()],"Last Week":[e.moment().subtract(1,"week"),e.moment()]},"show-time":""}})],1),a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"100px"},attrs:{type:"primary"},on:{click:e.search}},[e._v("\n                "+e._s(e.$t("version.modal.change.search"))+"\n            ")])],1)],1),a("a-table",{attrs:{columns:e.columns,pagination:e.pagination,"data-source":e.configdata,loading:e.loading,border:"","row-key":function(e){return e.id}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"oldContent",fn:function(t){return[a("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t))])]}},{key:"newContent",fn:function(t){return[a("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t))])]}},{key:"operation",fn:function(t,n){return a("a-popconfirm",{attrs:{title:e.$t("version.modal.change.operation.rollback.tips")},on:{confirm:function(t){return e.handleRollBack(n)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v(e._s(e.$t("version.modal.change.operation.rollback")))])])}}])},[e._l(e.columns,(function(t,n){return a("template",{slot:t.scopedSlots.title},[a("span",{key:n},[e._v(e._s(e.$t(t.scopedSlots.title)))])])}))],2)],1)},_=[],I=(a("57e7"),a("6d67"),a("28a5"),a("386d"),a("c1df")),j=a.n(I),x=[{dataIndex:"createTime",scopedSlots:{title:"version.modal.change.table.createtime"}},{dataIndex:"groupName",scopedSlots:{title:"version.modal.change.table.groupname"}},{dataIndex:"oldContent",width:"30%",scopedSlots:{customRender:"oldContent",title:"version.modal.change.table.oldcontent"}},{dataIndex:"newContent",width:"30%",scopedSlots:{title:"version.modal.change.table.newcontent",customRender:"newContent"}},{dataIndex:"operator",width:80,scopedSlots:{title:"version.modal.change.table.operator",customRender:"newContent"}},{dataIndex:"operation",width:80,scopedSlots:{customRender:"operation",title:"env.table.columns.operation"}}],C={data:function(){return{form:this.$form.createForm(this),columns:x,configdata:[],loading:!1,pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}}}},props:{configchangedialog:Object,versiondata:Array},methods:{moment:j.a,handleCancel:function(e){this.configchangedialog.show=!1,this.reset()},search:function(e){var t=this;this.form.validateFields((function(e,a){if(!e){var n=a.rangetime;t.loading=!0,t.$api.version.getChangeLogs(t.configchangedialog.id,{startDate:n[0].format("x"),endDate:n[1].format("x"),pageNo:t.pagination.current,pageSize:t.pagination.pageSize,versionId:t.configchangedialog.id}).then((function(e){t.configdata=e.data.dataList,t.pagination.total=e.data.total,t.loading=!1}))}}))},reset:function(){this.form.resetFields()},handleTableChange:function(e){this.pagination.current=e.current,this.search()},handleRollBack:function(e){var t=this,a=e.versionId,n=e.groupId,r=e.oldContent,o=r.split(/[\n]/g).filter((function(e){return e})),i=[];o.map((function(e,t){var a=e.indexOf("=");i[t]={name:e.substring(0,a),val:e.substring(a+1)}})),this.$api.version.rollBack(a,{versionId:a,groupId:n,items:i}).then((function(e){0===e.status&&t.$message.success("success")}))}}},S=C,k=Object(p["a"])(S,O,_,!1,null,null,null),F=k.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.dialog.title,visible:e.dialog.show,"confirm-loading":e.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-item",{attrs:{label:e.$t("version.table.columns.name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:e.$t("version.modal.name.message")}],initialValue:e.formdata.name}],expression:"[\n                    'name',{\n                    rules: [{ required: true, message: $t('version.modal.name.message')}],\n                    initialValue: formdata.name,\n                    }]"}],attrs:{placeholder:e.$t("version.modal.name.placeholder")}})],1),a("a-form-item",{attrs:{label:e.$t("version.table.columns.memo")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:e.formdata.memo}],expression:"['memo',{initialValue: formdata.memo}]"}],attrs:{type:"textarea"}})],1),a("a-form-item",{attrs:{label:e.$t("version.modal.name.mainversion")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.formdata.id,rules:[{required:!0,message:e.$t("version.modal.name.mainversion.message")}]}],expression:"['id', {\n                    initialValue: formdata.id,\n                    rules: [{ required: true, message: $t('version.modal.name.mainversion.message')}]\n                }]"}],attrs:{placeholder:e.$t("version.modal.name.mainversion.placeholder")}},e._l(e.versionList,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1)],1)},R=[];a("c5f6");function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},loading:!1}},props:{dialog:Object,formdata:Object,versiondata:Array},computed:{versionList:function(){return this.versiondata.filter((function(e){return!e.grayFlag}))}},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e){e||(t.loading=!0,t.$api.version.modifyGray(E({environmentId:Number(t.$route.query.environmentId)},t.form.getFieldsValue())).then((function(e){t.$api.version.copyVersion({srcVersionId:t.form.getFieldValue("id"),destVersionId:e.data}).then((function(e){0===e.status&&(t.$emit("update"),t.$message.success("success！"),t.dialog.show=!1,t.form.resetFields())}))})).finally((function(){t.loading=!1})))}))},handleCancel:function(e){this.dialog.show=!1,this.form.resetFields()}}},A=P,D=Object(p["a"])(A,V,R,!1,null,null,null),L=D.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.dialog.title,visible:e.dialog.show,destroyOnClose:"","confirm-loading":e.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-item",[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                数量 \n                "),a("a-tooltip",{attrs:{title:"填写灰度的实例个数"}},[a("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["count",{initialValue:e.grayRuleForm.count}],expression:"['count',{initialValue: grayRuleForm.count}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入灰度的实例数量"}})],1),a("a-form-item",[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                ip \n                "),a("a-tooltip",{attrs:{title:"填写需要灰度的实例IP"}},[a("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ip",{initialValue:e.grayRuleForm.ip}],expression:"['ip',{initialValue: grayRuleForm.ip}]"}],attrs:{placeholder:"多个ip间用英文逗号分隔"}})],1),a("a-form-item",[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                idc \n                "),a("a-tooltip",{attrs:{title:"填写需要灰度的机房名称"}},[a("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idc",{initialValue:e.grayRuleForm.idc}],expression:"['idc',{initialValue: grayRuleForm.idc}]"}],attrs:{placeholder:"多个机房间用英文逗号分隔"}})],1),a("a-form-item",[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n                containerId \n                "),a("a-tooltip",{attrs:{title:"填写需要灰度的容器ID"}},[a("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["container",{initialValue:e.grayRuleForm.containerId}],expression:"['container',{initialValue: grayRuleForm.containerId}]"}],attrs:{placeholder:"多个容器间用英文逗号分隔"}})],1)],1)],1)},q=[],G=(a("7514"),{data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},loading:!1,grayRuleForm:{}}},props:{dialog:Object,formdata:Array},watch:{formdata:function(e){console.log(e);var t={};e.forEach((function(e){t[e.ruleName]=e.ruleContent})),this.grayRuleForm=t,console.log(this.grayRuleForm)}},methods:{handleOk:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e){if(!e){t.loading=!0;var a=t.form.getFieldsValue(),n=Object.keys(a).map((function(e){return{ruleName:e,ruleContent:a[e]||"",grayInfoId:t.formdata.find((function(t){return t.ruleName===e}))&&t.formdata.find((function(t){return t.ruleName===e})).grayInfoId||""}})).filter((function(e){return e.ruleContent||e.grayInfoId}));t.$api.version.modifyGrayRule({grayVersionId:t.dialog.grayVersionId,grayRuleReqs:n}).then((function(e){0===e.status&&(t.$emit("update"),t.dialog.show=!1,t.$message.success("success！"),t.form.resetFields())})).finally((function(){t.loading=!1}))}}))},handleCancel:function(e){this.dialog.show=!1,this.form.resetFields()}}}),M=G,z=Object(p["a"])(M,T,q,!1,null,null,null),B=z.exports,W=a("1bf1");function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=[{dataIndex:"id",width:"8%",scopedSlots:{title:"version.table.columns.id"}},{dataIndex:"name",width:"20%",scopedSlots:{customRender:"name",title:"version.table.columns.name"}},{dataIndex:"memo",ellipsis:!0,scopedSlots:{customRender:"memo",title:"version.table.columns.memo"}},{dataIndex:"operation",width:400,scopedSlots:{customRender:"operation",title:"version.table.columns.operation"}}],Y={name:"listVersion",components:{versiondialog:f,copyversion:$,configchangerecord:F,GrayModal:L,GrayRule:B,Ellipsis:W["a"]},created:function(){this.getAllList()},data:function(){return{pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(e,t){return"显示 ".concat(t[0]," ~ ").concat(t[1]," 条记录，共 ").concat(e," 条记录")}},columns:X,versiondata:[],alldata:[],dialog:{show:!1},graydialog:{show:!1},formdata:{},grayForm:{},grayRuleForm:[],copyversiondialog:{show:!1},configchangedialog:{show:!1},grayRuledialog:{show:!1},loading:!1,canManage:!1}},methods:{getAllList:function(){var e=this;this.loading=!0,this.$api.version.getVersionList({environmentId:this.$route.query.environmentId,pageNo:this.pagination.curPage,pageSize:this.pagination.pageSize}).then((function(t){e.loading=!1,e.versiondata=t.data.dataList||[],e.pagination.total=t.data.total,e.canManage=t.ext.canManage}))},handleTableChange:function(e){this.pagination.pageSize=e.pageSize,this.pagination.curPage=e.current,this.getAllList()},toListConfigGroup:function(e){this.$store.dispatch("setRccInfo",U(U({},this.$store.getters.rccInfo),{},{versionId:e.id,versionName:e.name})),this.$router.push({path:"/group",query:{versionId:e.id}})},handleAdd:function(){this.dialog={show:!0,title:this.$t("version.btn.add"),option:"add"},this.formdata={name:"",memo:""}},handleAddGray:function(){this.graydialog={show:!0,title:this.$t("version.btn.add.gray"),option:"add"}},handleEdit:function(e){this.dialog={show:!0,title:this.$t("version.btn.edit"),option:"edit"},this.formdata=U({},e)},handleSetGrayRule:function(e){var t=this;this.$api.version.getGrayRuleList(e.id).then((function(a){a.data.length>0?(t.grayRuledialog={show:!0,title:t.$t("version.btn.edit.grayrule"),grayVersionId:e.id},t.grayRuleForm=a.data):t.grayRuledialog={show:!0,title:t.$t("version.btn.add.grayrule"),grayVersionId:e.id}}))},handleDelete:function(e){var t=this;this.$api.version.deleteVersion(e).then((function(e){0===e.status&&t.$message.success("success"),t.getAllList()}))},handleDeleteGray:function(e){var t=this;this.$api.version.deleteGray(e).then((function(e){0===e.status&&t.$message.success("success"),t.getAllList()}))},handleChange:function(e){var t=this;this.$api.version.pushChange(e).then((function(e){0===e.status&&t.$message.success("success")}))},copyversion:function(e){var t=this;this.$api.version.getMyVersions().then((function(e){t.alldata=e.data})),this.copyversiondialog={show:!0,id:e.id,name:e.name}},changeconfig:function(e){this.configchangedialog={show:!0,id:e.id}},routerTo:function(e){this.$router.push(e)}}},H=Y,K=(a("ec00"),Object(p["a"])(H,n,r,!1,null,"955239b8",null));t["default"]=K.exports},aa77:function(e,t,a){var n=a("5ca1"),r=a("be13"),o=a("79e5"),i=a("fdef"),s="["+i+"]",l="​",c=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),u=function(e,t,a){var r={},s=o((function(){return!!i[e]()||l[e]()!=l})),c=r[e]=s?t(p):i[e];a&&(r[a]=c),n(n.P+n.F*s,"String",r)},p=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(d,"")),e};e.exports=u},c5f6:function(e,t,a){"use strict";var n=a("7726"),r=a("69a8"),o=a("2d95"),i=a("5dbc"),s=a("6a99"),l=a("79e5"),c=a("9093").f,d=a("11e9").f,u=a("86cc").f,p=a("aa77").trim,m="Number",f=n[m],g=f,h=f.prototype,v=o(a("2aeb")(h))==m,y="trim"in String.prototype,b=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():p(t,3);var a,n,r,o=t.charCodeAt(0);if(43===o||45===o){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var i,l=t.slice(2),c=0,d=l.length;c<d;c++)if(i=l.charCodeAt(c),i<48||i>r)return NaN;return parseInt(l,n)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof f&&(v?l((function(){h.valueOf.call(a)})):o(a)!=m)?i(new g(b(t)),a,f):b(t)};for(var w,$=a("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;$.length>O;O++)r(g,w=$[O])&&!r(f,w)&&u(f,w,d(g,w));f.prototype=h,h.constructor=f,a("2aba")(n,m,f)}},ec00:function(e,t,a){"use strict";a("fa2a")},fa2a:function(e,t,a){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);