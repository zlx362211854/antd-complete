webpackJsonp([20],{833:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),u=r(n),o=a(201),c=r(o),s=a(342),i=r(s);a(343);var m=a(339),p=a(337);t.default={namespace:"form",state:{step:{},regularFormSubmitting:!1,stepFormSubmitting:!1,advancedFormSubmitting:!1},effects:{submitRegularForm:c.default.mark(function e(t,a){var r=t.payload,n=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeRegularFormSubmitting",payload:!0});case 2:return e.next=4,n(p.fakeSubmitForm,r);case 4:return e.next=6,u({type:"changeRegularFormSubmitting",payload:!1});case 6:i.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)}),submitStepForm:c.default.mark(function e(t,a){var r=t.payload,n=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeStepFormSubmitting",payload:!0});case 2:return e.next=4,n(p.fakeSubmitForm,r);case 4:return e.next=6,u({type:"saveStepFormData",payload:r});case 6:return e.next=8,u({type:"changeStepFormSubmitting",payload:!1});case 8:return e.next=10,u(m.routerRedux.push("/form/step-form/result"));case 10:case"end":return e.stop()}},e,this)}),submitAdvancedForm:c.default.mark(function e(t,a){var r=t.payload,n=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeAdvancedFormSubmitting",payload:!0});case 2:return e.next=4,n(p.fakeSubmitForm,r);case 4:return e.next=6,u({type:"changeAdvancedFormSubmitting",payload:!1});case 6:i.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var a=t.payload;return(0,u.default)({},e,{step:(0,u.default)({},e.step,a)})},changeRegularFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{regularFormSubmitting:a})},changeStepFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{stepFormSubmitting:a})},changeAdvancedFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{advancedFormSubmitting:a})}}},e.exports=t.default}});