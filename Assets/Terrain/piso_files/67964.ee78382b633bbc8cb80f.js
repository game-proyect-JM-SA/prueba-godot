"use strict";(this.webpackChunk_hz_project_x=this.webpackChunk_hz_project_x||[]).push([[67964],{346038:(e,t,n)=>{var s;n.d(t,{Vd:()=>a,_5:()=>s,t3:()=>i}),function(e){e._example="_example-draft-1",e._test="_test-draft-1",e.debugComponentTransform="debug-component-transform-draft-1",e.interactions="interactions",e.variants="variants",e.stickyLayoutGrid="sticky-layout-grid-draft-1",e.filterFacelab="filter-facelab-draft-3",e.graphApiFilters="graph-api-filters-draft-1",e.compositeShapeDraft="composite-shape-draft-2",e.neuralShapeEffects="neural-shape-effects-draft-1",e.charts="charts-draft-9",e.effectGraph="effect-graph-draft-1",e.auraSnapshotPrompt="aura-snapshot-prompt-draft-1"}(s||(s={}));const i=new Set(Object.values(s)),a=new Set(globalThis&&globalThis._hzTempDDMS||[])},754013:(e,t,n)=>{n.d(t,{R:()=>y,s:()=>C});var s=n(905035),i=n(636554),a=n(472310),r=n(882620),o=n(826762),c=n(302454),l=n(38856),h=n(365979),u=n(25754),_=n(980659),d=n(861559),v=n(820551);const g={maxAttempts:3,shouldRetry:e=>!(e instanceof i.o&&!1===e.retryable),delay:500},p={eventName:o.CA.EVENT_PAGENAME,type:o.CA.EVENT_TYPE,subType:o.CA.EVENT_SUBTYPE,workflow:o.CA.EVENT_WORKFLOW,subCategory:o.CA.EVENT_SUBCATEGORY},E=new Set(Object.values(o.CA));let C=class{trigger(e){if(!this._analyticsClient)throw new Error("AnalyticsEvent instance without AnalyticsClient detected. Please register the event with AnalyticsClient.");const t={};for(const[e,n]of Object.entries(p))t[n]=this._spec[e];if(e){let n,s;const i=e;o.a0.TIME_START in i&&(n=new Date(i[o.a0.TIME_START]),i[o.CA.EVENT_TIME_START]=n.toISOString(),delete i[o.a0.TIME_START]),o.a0.TIME_END in i&&(s=new Date(i[o.a0.TIME_END]),i[o.CA.EVENT_TIME_END]=s.toISOString(),delete i[o.a0.TIME_END]),n&&s&&(i[o.CA.EVENT_VALUE]=s.getTime()-n.getTime());const a=i[o.a0.IS_FAILURE];void 0!==a&&(a&&(i[o.CA.EVENT_TYPE]="error"),delete i[o.a0.IS_FAILURE]);for(const n of Object.keys(e))E.has(n)||0!==n.indexOf("custom.")&&console.warn("Unrecognized AnalyticsPropertyName",{invalidName:n}),t[n]=e[n]}this._analyticsClient._sendEvent(t)}set name(e){this._spec.eventName=e}get name(){return`${this._spec.eventName}`}get type(){return this._spec.type}get subType(){return this._spec.subType}get workflow(){return this._spec.workflow}get subCategory(){return this._spec.subCategory}set client(e){this._analyticsClient=e}get client(){return this._analyticsClient}constructor(e,t){this._spec=e,t&&(this._analyticsClient=t,this._analyticsClient._registerEvent(this))}},y=class e{static get defaultInstance(){if(!e._defaultInstance){const t=a.y.singleton(),n=t.attach(l.q),s=n.then((()=>({useExperienceEdge:l.q.useExperienceEdge.isEnabled(),enableAEPAnalytics:l.q.enableAEPAnalytics.isEnabled(),aepConfigId:l.q.aepConfigId.value,launchURL:l.q.launchURL.value,marketingTechURL:l.q.marketingTechURL.value}))),h=new _.$(t.getHost(),s),d=n.then((()=>({otDomainId:l.q.otDomainId.value,privacyUrl:l.q.privacyURL.value}))),v=new u.h(t.getHost(),d),g=n.then((()=>({env:l.q.env.value,envName:l.q.envName.value,includeIngestBuildPrefix:l.q.includeIngestBuildPrefix.enabled,appSAPCode:l.q.appSAPCode.value,appVersion:l.q.appVersion.value,ingestAppCategory:l.q.ingestAppCategory.value,aaTrackingServer:l.q.aaTrackingServer.value,aaSecureTrackingServer:l.q.aaSecureTrackingServer.value,buildInfo:t.buildInfo,bundleHash:l.q.bundleHash.value,useExperienceEdge:l.q.useExperienceEdge.enabled,aepConfigId:l.q.aepConfigId.value,launchURL:l.q.launchURL.value,marketingTechURL:l.q.marketingTechURL.value}))),p=new c.f(t.getHost(),t.sessionId,g,h),E=n.then((()=>({ingestProcessingInterval:l.q.ingestProcessingInterval.value,analyticsBufferLimit:l.q.analyticsBufferLimit.value,ingestConfig:{ingestApiKey:l.q.ingestAPIKey.value,ingestAppCategory:l.q.ingestAppCategory.value,ingestProject:l.q.ingestProject.value,envName:l.q.ingestHostAlwaysProdEnabled.enabled?o.kC.ENVIRONMENT_PROD:l.q.envName.value,ingestHost:l.q.ingestHostAlwaysProdEnabled.enabled?l.q.ingestHostAlwaysProd.value:l.q.ingestHost.value,token:"",ingestWaitForAppStartup:l.q.ingestWaitForAppStartup.enabled}}))),C=new r.v(t.getHost(),E),y=i.k.createInstance(t.getHost(),E.then((e=>e.ingestConfig)));e._defaultInstance=new e(t,C,p,h,v,y);const f=e._defaultInstance,A=f._setUserConsentCb(),T=f._sendDataToIngestCb();f._privacyService.addConsentChangeListener(A,T),f._setExecutionEnvironment(),n.then((()=>{f.setAnalyticsFlag(l.q.enableAnalytics.enabled)}))}return e._defaultInstance}async shutdown(){await this._eventDataTransport.shutdown(),this.context?.shutdown()}get appConfig(){return this._appConfig}get context(){return this._analyticsContext}get transport(){return this._eventDataTransport}trigger(e,t){this._registerEvent(e),e.client=this,e.trigger(t)}_processOrQueueEvent(e){this.userConsent===o.Yz.ALLOWED&&this._processAnalyticsEvents([e]),this.userConsent===o.Yz.UNINITIALIZED&&this._eventQueue.queueEventData(e)}_sendEvent(e){!1!==this._enableAnalytics&&this.userConsent!==o.Yz.DENIED&&(this._analyticsContext.isInitialized()?(this._analyticsContext.adornEventData(e),this._processOrQueueEvent(e)):this._analyticsContext.initialized().then((()=>{this._analyticsContext.adornEventData(e),this._processOrQueueEvent(e)})))}async _setExecutionEnvironment(){const e=a.y.singleton();await e.attach(l.q);const t=await e.getHost();this._executionEnvironment=t.executionEnvironment()}async _eventQueueDeliveryFunction(e){this._enableAnalytics&&this.userConsent===o.Yz.ALLOWED&&await this._processAnalyticsEvents(e,!0)}async _sendToDunamis(e){const t=(0,s.XD)(this._ingestService.sendEventData,g);await t(e).catch((e=>{console.warn("Analytics encountered an unexpected error while sending data to Ingest: ",e)}))}async _processAnalyticsEvents(e,t=!1){!0===t?await this._sendToDunamis(e):this._sendToDunamis(e),e.forEach((e=>{switch(this._executionEnvironment){case h.st.Worker:postMessage({type:o.kC.PAYLOAD_FROM_WORKER,payload:e});break;case h.st.Browser:this.notifyListeners(e),this._marketingTechService.sendEvent(e);break;default:console.log(`The execution environment ${this._executionEnvironment} does not support callbacks.`)}}))}notifyListeners(e){this._callListeners(e)}_registerEvent(e){this._events[e.name]=e}addEventListener(e){this._listeners.add(e)}removeEventListener(e){this._listeners.delete(e)}_callListeners(e){this._listeners.forEach((t=>{try{t(e)}catch(e){console.warn("Error occurred while calling Analytics event listener: ",e)}}))}startEventContext(){const e=(0,d.Z)();this.context.addContextGUID(e)}endEventContext(){this.context.removeContextGUID()}setAnalyticsFlag(e){this._enableAnalytics=e}addConsentListener(e){this._consentListeners.add(e),this._broadcastUserConsentUpdate()}deleteConsentListener(e){this._consentListeners.delete(e)}addNonCrossThreadConsentListener(e){this._consentListeners.add(e)}ensureUserConsentIsAvailable(){return this._privacyService.load()}get privacyServiceInstance(){return this._privacyService}_parseCookieGroup(){if(this._executionEnvironment===h.st.Browser){return(window?.adobePrivacy?.activeCookieGroups()||[]).includes("C0002")?o.Yz.ALLOWED:o.Yz.DENIED}return o.Yz.DENIED}_updateUserConsentCb(){this.userConsent=this._parseCookieGroup()}_broadcastUserConsentUpdate(){if(0===this._consentListeners.size)return;if(this._userConsentFromCookies===o.Yz.UNINITIALIZED)return;const e={userConsent:this._userConsentFromCookies};this._consentListeners.forEach((t=>{t(e)}))}set userConsent(e){this._userConsentFromCookies=e,this._userConsentFromCookies===o.Yz.ALLOWED&&(this._eventQueueShutdownPromise=this._eventQueue?.shutdown()),this._broadcastUserConsentUpdate()}get userConsent(){return this._userConsentFromCookies}set crashLogsConsent(e){this._crashLogsConsent=e}get crashLogsConsent(){return this._crashLogsConsent}_sendDataToIngestCb(){return this._ingestService.sendEventData.bind(this)}_setUserConsentCb(){return this._updateUserConsentCb.bind(this)}constructor(e,t,n,s,i,a){this._appConfig=e,this._analyticsContext=n,this._eventDataTransport=t,this._marketingTechService=s,this._privacyService=i,this._events={},this._listeners=new Set,this._consentListeners=new Set,this._executionEnvironment=h.st.Browser,this._enableAnalytics=!0,this._userConsentFromCookies=o.Yz.UNINITIALIZED,this._crashLogsConsent=!1,this._ingestService=a,this._eventQueue=new v.NH(this._eventQueueDeliveryFunction.bind(this)),this._eventQueue.maxQueueLength=20,this._eventQueue.batchSize=10}}}}]);
//# sourceMappingURL=67964.ee78382b633bbc8cb80f.js.map