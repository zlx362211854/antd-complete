webpackJsonp([22],{831:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),s=n(r),u=a(201),i=n(u),c=a(337);t.default={namespace:"activities",state:{list:[],loading:!0},effects:{fetchList:i.default.mark(function e(t,a){var n,r=a.call,s=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,r(c.queryActivities);case 4:return n=e.sent,e.next=7,s({type:"saveList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveList:function(e,t){return(0,s.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,s.default)({},e,{loading:t.payload})}}},e.exports=t.default}});