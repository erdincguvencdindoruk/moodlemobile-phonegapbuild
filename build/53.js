webpackJsonp([53],{2038:function(n,e,l){"use strict";function t(n){return i._42(0,[(n()(),i._16(0,0,null,null,8,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,m.b,m.a)),i._15(1,4374528,null,0,y.a,[C.a,D.a,H.a,i.p,i.K,L.a,T.a,i.D,[2,w.a],[2,R.a]],null,null),(n()(),i._40(-1,1,["\n    "])),(n()(),i._16(3,0,null,1,4,"div",[["class","core-bglogo"]],null,null,null,null,null)),(n()(),i._40(-1,null,["\n        "])),(n()(),i._16(5,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,x.b,x.a)),i._15(6,114688,null,0,N.a,[C.a,i.p,i.K],null,null),(n()(),i._40(-1,null,["\n    "])),(n()(),i._40(-1,1,["\n"])),(n()(),i._40(-1,null,["\n"]))],function(n,e){n(e,6,0)},function(n,e){n(e,0,0,i._29(e,1).statusbarPadding,i._29(e,1)._hasRefresher);n(e,5,0,i._29(e,6)._paused)})}Object.defineProperty(e,"__esModule",{value:!0});var i=l(1),a=(l(0),l(7),l(740)),o=l(10),r=l(146),u=l(2),s=l(41),_=l(123),d=function(){function n(n,e,l,t,i,a){this.navCtrl=n,this.appProvider=e,this.initDelegate=l,this.sitesProvider=t,this.loginHelper=i,this.splashScreen=a}return n.prototype.ionViewDidLoad=function(){var n=this;this.initDelegate.ready().then(function(){var e=n.appProvider.getRedirect();return e.siteId&&(n.appProvider.storeRedirect("","",""),Date.now()-e.timemodified<2e4)?e.siteId!=s.a.NO_SITE_ID?n.sitesProvider.loadSite(e.siteId,e.page,e.params).then(function(l){if(l)return n.loginHelper.goToSiteInitialPage(n.navCtrl,e.page,e.params,{animate:!1})}).catch(function(){return n.loadPage()}):n.loginHelper.goToNoSitePage(n.navCtrl,e.page,e.params):n.loadPage()}).then(function(){setTimeout(function(){n.splashScreen.hide()},100)})},n.prototype.loadPage=function(){var n=this;return this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()?this.sitesProvider.logout().then(function(){return n.loadPage()}):this.loginHelper.goToSiteInitialPage():this.navCtrl.setRoot("CoreLoginSitesPage")},n}(),g=function(){return function(){}}(),p=l(1471),c=l(1472),h=l(1473),f=l(1474),v=l(1475),P=l(1476),b=l(1477),I=l(1478),S=l(1479),m=l(179),y=l(27),C=l(8),D=l(17),H=l(34),L=l(35),T=l(102),w=l(39),R=l(20),x=l(129),N=l(113),O=i._14({encapsulation:2,styles:[],data:{}}),K=i._12("page-core-login-init",d,function(n){return i._42(0,[(n()(),i._16(0,0,null,null,1,"page-core-login-init",[],null,null,null,t,O)),i._15(1,49152,null,0,d,[R.a,o.a,r.a,u.a,_.a,a.a],null,null)],null,null)},{},{},[]),M=l(9),j=l(23),k=l(712),B=l(268);l.d(e,"CoreLoginInitPageModuleNgFactory",function(){return E});var E=i._13(g,[],function(n){return i._25([i._26(512,i.n,i._6,[[8,[p.a,c.a,h.a,f.a,v.a,P.a,b.a,I.a,S.a,K]],[3,i.n],i.B]),i._26(4608,M.m,M.l,[i.x,[2,M.w]]),i._26(4608,j.x,j.x,[]),i._26(4608,j.d,j.d,[]),i._26(512,M.b,M.b,[]),i._26(512,j.v,j.v,[]),i._26(512,j.i,j.i,[]),i._26(512,j.s,j.s,[]),i._26(512,k.a,k.a,[]),i._26(512,k.b,k.b,[]),i._26(512,g,g,[]),i._26(256,B.a,d,[])])})}});