webpackJsonp([33],{2056:function(n,e,a){"use strict";function t(n){return o._42(0,[(n()(),o._16(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),o._40(-1,null,["\n            "])),(n()(),o._16(2,0,null,null,2,"core-dynamic-component",[],null,null,null,T.b,T.a)),o._15(3,901120,null,0,C.a,[K.a,o.n,o.w,[2,A.a],o.i,o.p,i.a],{component:[0,"component"],data:[1,"data"]},null),o._33(4,{items:0}),(n()(),o._40(-1,null,["\n        "]))],function(n,e){var a=e.component;n(e,3,0,a.areaComponent,n(e,4,0,a.items))},null)}function l(n){return o._42(0,[(n()(),o._16(0,0,null,null,15,"ion-header",[],null,null,null,null,null)),o._15(1,16384,null,0,w.a,[E.a,o.p,o.K,[2,L.a]],null,null),(n()(),o._40(-1,null,["\n    "])),(n()(),o._16(3,0,null,null,11,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,R.b,R.a)),o._15(4,49152,null,0,j.a,[U.a,[2,L.a],[2,A.a],E.a,o.p,o.K],null,null),o._15(5,212992,null,0,k.a,[j.a,B.a,F.a,J.a],null,null),(n()(),o._40(-1,3,["\n        "])),(n()(),o._16(7,0,null,3,6,"ion-title",[],null,null,null,O.b,O.a)),o._15(8,49152,null,0,V.a,[E.a,o.p,o.K,[2,W.a],[2,j.a]],null,null),(n()(),o._40(9,0,["",""])),o._32(131072,$.a,[F.a,o.i]),o._33(11,{tagarea:0,tag:1}),o._33(12,{$a:0}),o._32(131072,$.a,[F.a,o.i]),(n()(),o._40(-1,3,["\n    "])),(n()(),o._40(-1,null,["\n"])),(n()(),o._40(-1,null,["\n"])),(n()(),o._16(17,0,null,null,20,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,q.b,q.a)),o._15(18,4374528,null,0,z.a,[E.a,B.a,G.a,o.p,o.K,U.a,H.a,o.D,[2,L.a],[2,A.a]],null,null),(n()(),o._40(-1,1,["\n    "])),(n()(),o._16(20,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,a){var t=!0;if("ionRefresh"===e){t=!1!==n.component.refreshData(a)&&t}return t},null,null)),o._15(21,212992,null,0,Q.a,[B.a,z.a,o.D,S.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),o._40(-1,null,["\n        "])),(n()(),o._16(23,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,X.b,X.a)),o._15(24,114688,null,0,Y.a,[Q.a,E.a],{pullingText:[0,"pullingText"]},null),o._32(131072,$.a,[F.a,o.i]),(n()(),o._40(-1,null,["\n    "])),(n()(),o._40(-1,1,["\n    "])),(n()(),o._16(28,0,null,1,8,"core-loading",[],null,null,null,Z.b,Z.a)),o._15(29,638976,null,0,nn.a,[F.a,o.p,J.a,en.a],{hideUntil:[0,"hideUntil"]},null),(n()(),o._40(-1,0,["\n        "])),(n()(),o._11(16777216,null,0,1,null,t)),o._15(32,16384,null,0,an.k,[o.W,o.T],{ngIf:[0,"ngIf"]},null),(n()(),o._40(-1,0,["\n        "])),(n()(),o._16(34,0,null,0,1,"core-infinite-loading",[],null,[[null,"action"]],function(n,e,a){var t=!0;if("action"===e){t=!1!==n.component.loadMore(a)&&t}return t},tn.b,tn.a)),o._15(35,573440,null,0,ln.a,[[2,z.a],i.a],{enabled:[0,"enabled"],error:[1,"error"]},{action:"action"}),(n()(),o._40(-1,0,["\n    "])),(n()(),o._40(-1,1,["\n"])),(n()(),o._40(-1,null,["\n"]))],function(n,e){var a=e.component;n(e,5,0);n(e,21,0,a.loaded);n(e,24,0,o._19(1,"",o._41(e,24,0,o._29(e,25).transform("core.pulltorefresh")),""));n(e,29,0,a.loaded);n(e,32,0,a.loaded);n(e,35,0,a.canLoadMore,a.loadMoreError)},function(n,e){var a=e.component;n(e,3,0,o._29(e,4)._hidden,o._29(e,4)._sbPadding);n(e,9,0,o._41(e,9,0,o._29(e,13).transform("core.tag.itemstaggedwith",n(e,12,0,n(e,11,0,o._41(e,9,0,o._29(e,10).transform(a.areaNameKey)),a.tagName)))));n(e,17,0,o._29(e,18).statusbarPadding,o._29(e,18)._hasRefresher);n(e,20,0,"inactive"!==o._29(e,21).state,o._29(e,21)._top);n(e,23,0,o._29(e,24).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var o=a(1),r=(a(0),a(7),a(4)),i=a(5),u=a(156),s=a(200),c=function(){function n(n,e,a,t,l,o){this.injector=e,this.translate=a,this.tagProvider=t,this.domUtils=l,this.tagAreaDelegate=o,this.loaded=!1,this.items=[],this.nextPage=0,this.canLoadMore=!1,this.loadMoreError=!1,this.tagId=n.get("tagId"),this.tagName=n.get("tagName"),this.collectionId=n.get("collectionId"),this.areaId=n.get("areaId"),this.fromContextId=n.get("fromContextId"),this.contextId=n.get("contextId"),this.recursive=n.get("recursive"),this.areaNameKey=n.get("areaNameKey"),this.componentName=n.get("componentName"),this.itemType=n.get("itemType"),this.items=n.get("items")||[],this.nextPage=n.get("nextPage")||0,this.canLoadMore=!!n.get("canLoadMore")}return n.prototype.ionViewDidLoad=function(){var n=this;(this.componentName&&this.itemType&&this.items.length&&0!=this.nextPage?Promise.resolve():this.fetchData(!0)).then(function(){return n.tagAreaDelegate.getComponent(n.componentName,n.itemType,n.injector).then(function(e){n.areaComponent=e})}).finally(function(){n.loaded=!0})},n.prototype.fetchData=function(n){var e=this;void 0===n&&(n=!1),this.loadMoreError=!1;var a=n?0:this.nextPage;return this.tagProvider.getTagIndexPerArea(this.tagId,this.tagName,this.collectionId,this.areaId,this.fromContextId,this.contextId,this.recursive,a).then(function(n){var t=n[0];return e.tagAreaDelegate.parseContent(t.component,t.itemtype,t.content).then(function(n){if(!n||!n.length)return Promise.reject(e.translate.instant("core.tag.errorareanotsupported"));0==a?e.items=n:(l=e.items).push.apply(l,n),e.componentName=t.component,e.itemType=t.itemtype,e.areaNameKey=e.tagAreaDelegate.getDisplayNameKey(t.component,t.itemtype),e.canLoadMore=!!t.nextpageurl,e.nextPage=a+1;var l})}).catch(function(n){e.loadMoreError=!0,e.domUtils.showErrorModalDefault(n,"Error loading tag index")})},n.prototype.loadMore=function(n){return this.fetchData().finally(function(){n()})},n.prototype.refreshData=function(n){var e=this;this.tagProvider.invalidateTagIndexPerArea(this.tagId,this.tagName,this.collectionId,this.areaId,this.fromContextId,this.contextId,this.recursive).finally(function(){e.fetchData(!0).finally(function(){n.complete()})})},n}(),_=a(30),d=a(32),h=function(){return function(){}}(),g=a(1471),m=a(1472),f=a(1473),p=a(1474),b=a(1475),v=a(1476),y=a(1477),x=a(1478),I=a(1479),P=a(1480),N=a(1481),D=a(1482),M=a(1483),T=a(715),C=a(192),K=a(6),A=a(20),w=a(365),E=a(8),L=a(39),R=a(713),j=a(209),U=a(35),k=a(471),B=a(17),F=a(19),J=a(12),O=a(714),V=a(307),W=a(245),$=a(28),q=a(179),z=a(27),G=a(34),H=a(102),Q=a(152),S=a(40),X=a(210),Y=a(168),Z=a(51),nn=a(48),en=a(3),an=a(9),tn=a(369),ln=a(270),on=a(72),rn=o._14({encapsulation:2,styles:[],data:{}}),un=o._12("page-core-tag-index-area",c,function(n){return o._42(0,[(n()(),o._16(0,0,null,null,1,"page-core-tag-index-area",[],null,null,null,l,rn)),o._15(1,49152,null,0,c,[on.a,o.u,F.a,u.a,i.a,s.a],null,null)],null,null)},{},{},[]),sn=a(23),cn=a(361),_n=a(362),dn=a(364),hn=a(363),gn=a(470),mn=a(712),fn=a(110),pn=a(268);a.d(e,"CoreTagIndexAreaPageModuleNgFactory",function(){return bn});var bn=o._13(h,[],function(n){return o._25([o._26(512,o.n,o._6,[[8,[g.a,m.a,f.a,p.a,b.a,v.a,y.a,x.a,I.a,P.a,N.a,D.a,M.a,un]],[3,o.n],o.B]),o._26(4608,an.m,an.l,[o.x,[2,an.w]]),o._26(4608,sn.x,sn.x,[]),o._26(4608,sn.d,sn.d,[]),o._26(4608,cn.b,cn.a,[]),o._26(4608,_n.a,_n.b,[]),o._26(4608,dn.b,dn.a,[]),o._26(4608,hn.b,hn.a,[]),o._26(4608,F.a,F.a,[gn.a,cn.b,_n.a,dn.b,hn.b,F.b,F.c]),o._26(512,an.b,an.b,[]),o._26(512,sn.v,sn.v,[]),o._26(512,sn.i,sn.i,[]),o._26(512,sn.s,sn.s,[]),o._26(512,mn.a,mn.a,[]),o._26(512,r.a,r.a,[]),o._26(512,d.a,d.a,[]),o._26(512,fn.a,fn.a,[]),o._26(512,_.a,_.a,[]),o._26(512,mn.b,mn.b,[]),o._26(512,h,h,[]),o._26(256,F.c,void 0,[]),o._26(256,F.b,void 0,[]),o._26(256,pn.a,c,[])])})}});