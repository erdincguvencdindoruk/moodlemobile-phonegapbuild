webpackJsonp([79],{2015:function(n,l,a){"use strict";function e(n){return u._42(0,[u._37(402653184,1,{wikiComponent:0}),(n()(),u._16(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),u._15(2,16384,null,0,M.a,[E.a,u.p,u.K,[2,L.a]],null,null),(n()(),u._40(-1,null,["\n    "])),(n()(),u._16(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),u._15(5,49152,null,0,A.a,[B.a,[2,L.a],[2,F.a],E.a,u.p,u.K],null,null),u._15(6,212992,null,0,J.a,[A.a,N.a,O.a,W.a],null,null),(n()(),u._40(-1,3,["\n        "])),(n()(),u._16(8,0,null,3,3,"ion-title",[],null,null,null,q.b,q.a)),u._15(9,49152,null,0,z.a,[E.a,u.p,u.K,[2,G.a],[2,A.a]],null,null),(n()(),u._16(10,0,null,0,1,"core-format-text",[],null,null,null,null,null)),u._15(11,540672,null,0,H.a,[u.p,Q.a,S.a,U.a,O.a,N.a,X.a,Y.a,Z.a,$.a,nn.a,ln.a,[2,F.a],[2,an.a],[2,en.a],un.a,W.a],{text:[0,"text"]},null),(n()(),u._40(-1,3,["\n\n        "])),(n()(),u._16(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),u._15(14,16384,null,1,tn.a,[E.a,u.p,u.K,[2,G.a],[2,A.a]],null,null),u._37(603979776,2,{_buttons:1}),(n()(),u._40(-1,null,["\n            "])),(n()(),u._40(-1,null,["\n        "])),(n()(),u._40(-1,3,["\n    "])),(n()(),u._40(-1,null,["\n"])),(n()(),u._40(-1,null,["\n"])),(n()(),u._16(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,on.b,on.a)),u._15(22,4374528,null,0,an.a,[E.a,N.a,dn.a,u.p,u.K,B.a,_n.a,u.D,[2,L.a],[2,F.a]],null,null),(n()(),u._40(-1,1,["\n    "])),(n()(),u._16(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,a){var e=!0;if("ionRefresh"===l){e=!1!==n.component.wikiComponent.doRefresh(a)&&e}return e},null,null)),u._15(25,212992,null,0,rn.a,[N.a,an.a,u.D,sn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),u._40(-1,null,["\n        "])),(n()(),u._16(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,pn.b,pn.a)),u._15(28,114688,null,0,cn.a,[rn.a,E.a],{pullingText:[0,"pullingText"]},null),u._32(131072,gn.a,[O.a,u.i]),(n()(),u._40(-1,null,["\n    "])),(n()(),u._40(-1,1,["\n\n    "])),(n()(),u._16(32,0,null,1,1,"addon-mod-wiki-index",[],null,[[null,"dataRetrieved"]],function(n,l,a){var e=!0;if("dataRetrieved"===l){e=!1!==n.component.updateData(a)&&e}return e},P.c,P.b)),u._15(33,245760,[[1,4]],0,d.a,[u.u,bn.a,[2,an.a],fn.a,hn.a,F.a,X.a,In.a,wn.a,kn.a,mn.a],{module:[0,"module"],courseId:[1,"courseId"],action:[2,"action"],pageId:[3,"pageId"],pageTitle:[4,"pageTitle"],wikiId:[5,"wikiId"],subwikiId:[6,"subwikiId"],userId:[7,"userId"],groupId:[8,"groupId"]},{dataRetrieved:"dataRetrieved"}),(n()(),u._40(-1,1,["\n"])),(n()(),u._40(-1,null,["\n"]))],function(n,l){var a=l.component;n(l,6,0);n(l,11,0,a.title);n(l,25,0,a.wikiComponent.loaded);n(l,28,0,u._19(1,"",u._41(l,28,0,u._29(l,29).transform("core.pulltorefresh")),""));n(l,33,0,a.module,a.courseId,a.action,a.pageId,a.pageTitle,a.wikiId,a.subwikiId,a.userId,a.groupId)},function(n,l){n(l,4,0,u._29(l,5)._hidden,u._29(l,5)._sbPadding);n(l,21,0,u._29(l,22).statusbarPadding,u._29(l,22)._hasRefresher);n(l,24,0,"inactive"!==u._29(l,25).state,u._29(l,25)._top);n(l,27,0,u._29(l,28).r.state)})}Object.defineProperty(l,"__esModule",{value:!0});var u=a(1),t=(a(0),a(7),a(4)),i=a(32),o=a(752),d=a(518),_=function(){function n(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.action=n.get("action")||"page",this.pageId=n.get("pageId"),this.pageTitle=n.get("pageTitle"),this.wikiId=n.get("wikiId"),this.subwikiId=n.get("subwikiId"),this.userId=n.get("userId"),this.groupId=n.get("groupId"),this.title=this.pageTitle||this.module.name}return n.prototype.updateData=function(n){this.title="string"==typeof n?n:this.pageTitle||n.title||this.title},n.prototype.ionViewDidEnter=function(){this.wikiComponent.ionViewDidEnter()},n.prototype.ionViewDidLeave=function(){this.wikiComponent.ionViewDidLeave()},n}(),r=function(){return function(){}}(),s=a(1471),p=a(1472),c=a(1473),g=a(1474),b=a(1475),f=a(1476),h=a(1477),I=a(1478),w=a(1479),k=a(1480),m=a(1481),v=a(1482),x=a(1483),R=a(1486),T=a(1487),D=a(1484),y=a(1485),C=a(1488),K=a(1490),P=a(1550),V=a(1567),M=a(365),E=a(8),L=a(39),j=a(713),A=a(209),B=a(35),F=a(20),J=a(471),N=a(17),O=a(19),W=a(12),q=a(714),z=a(309),G=a(245),H=a(42),Q=a(2),S=a(5),U=a(11),X=a(3),Y=a(24),Z=a(6),$=a(18),nn=a(10),ln=a(14),an=a(27),en=a(26),un=a(38),tn=a(366),on=a(179),dn=a(34),_n=a(102),rn=a(152),sn=a(40),pn=a(210),cn=a(168),gn=a(28),bn=a(230),fn=a(286),hn=a(287),In=a(68),wn=a(44),kn=a(66),mn=a(156),vn=a(72),xn=u._14({encapsulation:2,styles:[],data:{}}),Rn=u._12("page-addon-mod-wiki-index",_,function(n){return u._42(0,[(n()(),u._16(0,0,null,null,1,"page-addon-mod-wiki-index",[],null,null,null,e,xn)),u._15(1,49152,null,0,_,[vn.a],null,null)],null,null)},{},{},[]),Tn=a(9),Dn=a(23),yn=a(361),Cn=a(362),Kn=a(364),Pn=a(363),Vn=a(470),Mn=a(712),En=a(110),Ln=a(30),jn=a(270),An=a(71),Bn=a(272),Fn=a(269);a.d(l,"AddonModWikiIndexPageModuleNgFactory",function(){return Jn});var Jn=u._13(r,[],function(n){return u._25([u._26(512,u.n,u._6,[[8,[s.a,p.a,c.a,g.a,b.a,f.a,h.a,I.a,w.a,k.a,m.a,v.a,x.a,R.a,T.a,D.a,y.a,C.a,K.a,P.a,V.a,Rn]],[3,u.n],u.B]),u._26(4608,Tn.m,Tn.l,[u.x,[2,Tn.w]]),u._26(4608,Dn.x,Dn.x,[]),u._26(4608,Dn.d,Dn.d,[]),u._26(4608,yn.b,yn.a,[]),u._26(4608,Cn.a,Cn.b,[]),u._26(4608,Kn.b,Kn.a,[]),u._26(4608,Pn.b,Pn.a,[]),u._26(4608,O.a,O.a,[Vn.a,yn.b,Cn.a,Kn.b,Pn.b,O.b,O.c]),u._26(512,i.a,i.a,[]),u._26(512,Tn.b,Tn.b,[]),u._26(512,Dn.v,Dn.v,[]),u._26(512,Dn.i,Dn.i,[]),u._26(512,Dn.s,Dn.s,[]),u._26(512,Mn.a,Mn.a,[]),u._26(512,t.a,t.a,[]),u._26(512,En.a,En.a,[]),u._26(512,Ln.a,Ln.a,[]),u._26(512,jn.a,jn.a,[]),u._26(512,An.a,An.a,[]),u._26(512,Bn.a,Bn.a,[]),u._26(512,o.a,o.a,[]),u._26(512,Mn.b,Mn.b,[]),u._26(512,r,r,[]),u._26(256,O.c,void 0,[]),u._26(256,O.b,void 0,[]),u._26(256,Fn.a,_,[])])})}});