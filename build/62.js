webpackJsonp([62],{2095:function(e,t,s){"use strict";function r(e){return o._42(0,[],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),n=(s(0),s(7),s(4)),i=s(10),u=s(12),a=s(2),c=s(5),l=s(11),d=s(52),h=s(97),f=s(15),p=s(37),v=s(176),C=function(){function e(e,t,s,r,o,n,i,a,c,l,d,h,p,v,C,g){var m=this;this.navCtrl=e,this.sitesProvider=s,this.domUtils=r,this.textUtils=o,this.coursesProvider=i,this.platform=a,this.modalCtrl=c,this.translate=l,this.eventsProvider=d,this.courseOptionsDelegate=h,this.courseHelper=p,this.courseProvider=v,this.courseFormatDelegate=C,this.zone=g,this.canAccessCourse=!0,this.component="CoreCoursesCoursePreview",this.selfEnrolInstances=[],this.avoidOpenCourse=!1,this.prefetchCourseData={downloadSucceeded:!1,prefetchCourseIcon:"spinner",title:"core.course.downloadcourse"},this.isGuestEnabled=!1,this.waitStart=0,this.pageDestroyed=!1,this.course=t.get("course"),this.avoidOpenCourse=t.get("avoidOpenCourse"),this.isMobile=n.isMobile(),this.isDesktop=n.isDesktop(),this.downloadCourseEnabled=!this.coursesProvider.isDownloadCourseDisabledInSite(),this.downloadCourseEnabled&&(this.courseStatusObserver=this.eventsProvider.on(u.a.COURSE_STATUS_CHANGED,function(e){e.courseId!=m.course.id&&e.courseId!=f.a.ALL_COURSES_CLEARED||m.updateCourseStatus(e.status)},this.sitesProvider.getCurrentSiteId()))}return e.prototype.ionViewDidLoad=function(){var e=this,t=this.sitesProvider.getCurrentSite(),s=t&&t.getURL();this.paypalEnabled=this.course.enrollmentmethods&&this.course.enrollmentmethods.indexOf("paypal")>-1,this.guestWSAvailable=this.coursesProvider.isGuestWSAvailable(),this.enrolUrl=this.textUtils.concatenatePaths(s,"enrol/index.php?id="+this.course.id),this.courseUrl=this.textUtils.concatenatePaths(s,"course/view.php?id="+this.course.id),this.paypalReturnUrl=this.textUtils.concatenatePaths(s,"enrol/paypal/return.php"),this.course.overviewfiles&&this.course.overviewfiles.length>0&&(this.course.courseImage=this.course.overviewfiles[0].fileurl),this.selfEnrolModal=this.modalCtrl.create("CoreCoursesSelfEnrolPasswordPage"),this.selfEnrolModal.onDidDismiss(function(t){void 0!==t&&e.selfEnrolInCourse(t,e.currentInstanceId)}),this.getCourse().finally(function(){e.downloadCourseEnabled&&e.courseHelper.getCourseStatusIconAndTitle(e.course.id).then(function(t){if(e.prefetchCourseData.prefetchCourseIcon=t.icon,e.prefetchCourseData.title=t.title,"spinner"==t.icon){var s=e.courseHelper.getCourseDownloadPromise(e.course.id);s?s.catch(function(t){e.pageDestroyed||e.domUtils.showErrorModalDefault(t,"core.course.errordownloadingcourse",!0)}):e.courseProvider.setCoursePreviousStatus(e.course.id)}})})},e.prototype.ngOnDestroy=function(){this.pageDestroyed=!0,this.courseStatusObserver&&this.courseStatusObserver.off()},e.prototype.canAccessAsGuest=function(){if(!this.isGuestEnabled)return Promise.reject(null);this.guestInstanceId=void 0;for(var e=0;e<this.enrollmentMethods.length;e++){var t=this.enrollmentMethods[e];if("guest"==t.type){this.guestInstanceId=t.id;break}}return this.guestInstanceId?this.coursesProvider.getCourseGuestEnrolmentInfo(this.guestInstanceId).then(function(e){return e.status?e.passwordrequired:Promise.reject(null)}):Promise.reject(null)},e.prototype.getCourse=function(e){var t=this;return this.selfEnrolInstances=[],this.coursesProvider.getCourseEnrolmentMethods(this.course.id).then(function(e){t.enrollmentMethods=e,t.enrollmentMethods.forEach(function(e){"self"===e.type?t.selfEnrolInstances.push(e):t.guestWSAvailable&&"guest"===e.type&&(t.isGuestEnabled=!0)})}).catch(function(e){t.domUtils.showErrorModalDefault(e,"Error getting enrolment data")}).then(function(){return t.coursesProvider.getUserCourse(t.course.id).then(function(e){return t.isEnrolled=!0,e}).catch(function(){return t.isEnrolled=!1,t.coursesProvider.getCourse(t.course.id)}).then(function(e){t.course.fullname=e.fullname||t.course.fullname,t.course.summary=e.summary||t.course.summary,t.canAccessCourse=!0}).catch(function(){return t.canAccessAsGuest().then(function(e){t.canAccessCourse=!e}).catch(function(){t.canAccessCourse=!1})})}).finally(function(){if(!t.sitesProvider.getCurrentSite().isVersionGreaterEqualThan("3.7"))return t.coursesProvider.isGetCoursesByFieldAvailableInSite().then(function(e){if(e)return t.coursesProvider.getCourseByField("id",t.course.id).then(function(e){t.course.customfields=e.customfields})}).catch(function(){})}).finally(function(){t.dataLoaded=!0})},e.prototype.openCourse=function(){this.canAccessCourse&&!this.avoidOpenCourse&&this.courseFormatDelegate.openCourse(this.navCtrl,this.course)},e.prototype.paypalEnrol=function(){var e,t,s,r,o,n=this,i=!1,u=function(t){-1!=t.url.indexOf(n.paypalReturnUrl)?i=!0:-1!=t.url.indexOf(n.courseUrl)&&i&&(a(),e.close())},a=function(){c(),n.dataLoaded&&(n.dataLoaded=!1,n.refreshData())},c=function(){t&&t.unsubscribe(),s&&s.unsubscribe(),r&&r.unsubscribe(),o&&o.unsubscribe()};this.sitesProvider.getCurrentSite().openInAppWithAutoLogin(this.enrolUrl).then(function(i){e=i,(n.isDesktop||n.isMobile)&&(t=e.on("loadstart").subscribe(function(e){n.zone.run(function(){return u(e)})}),r=e.on("exit").subscribe(function(){n.zone.run(a)})),n.isDesktop&&(s=e.on("loadstop").subscribe(u),o=n.platform.resume.subscribe(function(){n.dataLoaded&&(n.dataLoaded=!1,n.refreshData())}))})},e.prototype.selfEnrolClicked=function(e){var t=this;this.domUtils.showConfirm(this.translate.instant("core.courses.confirmselfenrol")).then(function(){t.selfEnrolInCourse("",e)}).catch(function(){})},e.prototype.selfEnrolInCourse=function(e,t){var s=this,r=this.domUtils.showModalLoading("core.loading",!0);return this.coursesProvider.selfEnrol(this.course.id,e,t).then(function(){s.isEnrolled=!0,s.dataLoaded=!1,s.waitForEnrolled(!0).then(function(){s.refreshData().finally(function(){s.eventsProvider.trigger(d.a.EVENT_MY_COURSES_UPDATED,{course:s.course},s.sitesProvider.getCurrentSiteId())})})}).catch(function(r){r&&r.code===d.a.ENROL_INVALID_KEY&&(s.selfEnrolModal.present(),s.currentInstanceId=t,!e)||s.domUtils.showErrorModalDefault(r,"core.courses.errorselfenrol",!0)}).finally(function(){r.dismiss()})},e.prototype.refreshData=function(e){var t=this,s=[];return s.push(this.coursesProvider.invalidateUserCourses()),s.push(this.coursesProvider.invalidateCourse(this.course.id)),s.push(this.coursesProvider.invalidateCourseEnrolmentMethods(this.course.id)),s.push(this.courseOptionsDelegate.clearAndInvalidateCoursesOptions(this.course.id)),this.sitesProvider.getCurrentSite().isVersionGreaterEqualThan("3.7")&&s.push(this.coursesProvider.invalidateCoursesByField("id",this.course.id)),this.guestInstanceId&&s.push(this.coursesProvider.invalidateCourseGuestEnrolmentInfo(this.guestInstanceId)),Promise.all(s).finally(function(){return t.getCourse(!0)}).finally(function(){e&&e.complete()})},e.prototype.updateCourseStatus=function(e){var t=this.courseHelper.getCourseStatusIconAndTitleFromStatus(e);this.prefetchCourseData.prefetchCourseIcon=t.icon,this.prefetchCourseData.title=t.title},e.prototype.waitForEnrolled=function(e){var t=this;return e&&(this.waitStart=Date.now()),this.coursesProvider.invalidateUserCourses().catch(function(){}).then(function(){return t.coursesProvider.getUserCourse(t.course.id)}).catch(function(){if(!(t.pageDestroyed||Date.now()-t.waitStart>6e4))return new Promise(function(e,s){setTimeout(function(){t.pageDestroyed?e():t.waitForEnrolled().then(e)},5e3)})})},e.prototype.prefetchCourse=function(){var e=this;this.courseHelper.confirmAndPrefetchCourse(this.prefetchCourseData,this.course).catch(function(t){e.pageDestroyed||e.domUtils.showErrorModalDefault(t,"core.course.errordownloadingcourse",!0)})},e}(),g=s(30),m=s(32),b=s(110),E=function(){return function(){}}(),P=s(1471),y=s(1472),D=s(1473),_=s(1474),I=s(1475),w=s(1476),S=s(1477),U=s(1478),A=s(1479),M=s(1480),O=s(1481),L=s(1482),x=s(1483),G=s(20),F=s(72),T=s(17),R=s(169),k=s(19),H=o._14({encapsulation:2,styles:[],data:{}}),N=o._12("page-core-courses-course-preview",C,function(e){return o._42(0,[(e()(),o._16(0,0,null,null,1,"page-core-courses-course-preview",[],null,null,null,r,H)),o._15(1,180224,null,0,C,[G.a,F.a,a.a,c.a,l.a,i.a,d.a,T.a,R.a,k.a,u.a,h.a,p.a,f.a,v.a,o.D],null,null)],null,null)},{},{},[]),V=s(9),j=s(23),B=s(361),W=s(362),q=s(364),z=s(363),Y=s(470),J=s(712),K=s(268);s.d(t,"CoreCoursesCoursePreviewPageModuleNgFactory",function(){return Q});var Q=o._13(E,[],function(e){return o._25([o._26(512,o.n,o._6,[[8,[P.a,y.a,D.a,_.a,I.a,w.a,S.a,U.a,A.a,M.a,O.a,L.a,x.a,N]],[3,o.n],o.B]),o._26(4608,V.m,V.l,[o.x,[2,V.w]]),o._26(4608,j.x,j.x,[]),o._26(4608,j.d,j.d,[]),o._26(4608,B.b,B.a,[]),o._26(4608,W.a,W.b,[]),o._26(4608,q.b,q.a,[]),o._26(4608,z.b,z.a,[]),o._26(4608,k.a,k.a,[Y.a,B.b,W.a,q.b,z.b,k.b,k.c]),o._26(512,V.b,V.b,[]),o._26(512,j.v,j.v,[]),o._26(512,j.i,j.i,[]),o._26(512,j.s,j.s,[]),o._26(512,J.a,J.a,[]),o._26(512,n.a,n.a,[]),o._26(512,m.a,m.a,[]),o._26(512,b.a,b.a,[]),o._26(512,g.a,g.a,[]),o._26(512,J.b,J.b,[]),o._26(512,E,E,[]),o._26(256,k.c,void 0,[]),o._26(256,k.b,void 0,[]),o._26(256,K.a,C,[])])})}});