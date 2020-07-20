!function(e){var i={};function t(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)t.d(s,n,function(i){return e[i]}.bind(null,n));return s},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/js/",t(t.s=309)}({309:function(e,i,t){"use strict";t.r(i);t(310),t(311);t.nc=btoa(OC.requestToken),t.p=OC.linkTo("files_sharing","js/dist/")},310:function(e,i){OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.App={_inFileList:null,_outFileList:null,_overviewFileList:null,_pendingFileList:null,initSharingIn:function(e){return this._inFileList||(this._inFileList=new OCA.Sharing.FileList(e,{id:"shares.self",sharedWithUser:!0,fileActions:this._createFileActions(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._extendFileList(this._inFileList),this._inFileList.appName=t("files_sharing","Shared with you"),this._inFileList.$el.find("#emptycontent").html('<div class="icon-shared"></div><h2>'+t("files_sharing","Nothing shared with you yet")+"</h2><p>"+t("files_sharing","Files and folders others share with you will show up here")+"</p>")),this._inFileList},initSharingOut:function(e){return this._outFileList||(this._outFileList=new OCA.Sharing.FileList(e,{id:"shares.others",sharedWithUser:!1,fileActions:this._createFileActions(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._extendFileList(this._outFileList),this._outFileList.appName=t("files_sharing","Shared with others"),this._outFileList.$el.find("#emptycontent").html('<div class="icon-shared"></div><h2>'+t("files_sharing","Nothing shared yet")+"</h2><p>"+t("files_sharing","Files and folders you share will show up here")+"</p>")),this._outFileList},initSharingLinks:function(e){return this._linkFileList||(this._linkFileList=new OCA.Sharing.FileList(e,{id:"shares.link",linksOnly:!0,fileActions:this._createFileActions(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._extendFileList(this._linkFileList),this._linkFileList.appName=t("files_sharing","Shared by link"),this._linkFileList.$el.find("#emptycontent").html('<div class="icon-public"></div><h2>'+t("files_sharing","No shared links")+"</h2><p>"+t("files_sharing","Files and folders you share by link will show up here")+"</p>")),this._linkFileList},initSharingDeleted:function(e){return this._deletedFileList||(this._deletedFileList=new OCA.Sharing.FileList(e,{id:"shares.deleted",defaultFileActionsDisabled:!0,showDeleted:!0,sharedWithUser:!0,fileActions:this._restoreShareAction(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._extendFileList(this._deletedFileList),this._deletedFileList.appName=t("files_sharing","Deleted shares"),this._deletedFileList.$el.find("#emptycontent").html('<div class="icon-share"></div><h2>'+t("files_sharing","No deleted shares")+"</h2><p>"+t("files_sharing","Shares you deleted will show up here")+"</p>")),this._deletedFileList},initSharingPening:function(e){return this._pendingFileList||(this._pendingFileList=new OCA.Sharing.FileList(e,{id:"shares.pending",showPending:!0,sharedWithUser:!0,fileActions:this._acceptShareAction(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._extendFileList(this._pendingFileList),this._pendingFileList.appName=t("files_sharing","Pending shares"),this._pendingFileList.$el.find("#emptycontent").html('<div class="icon-share"></div><h2>'+t("files_sharing","No pending shares")+"</h2><p>"+t("files_sharing","Shares you have received but not confirmed will show up here")+"</p>")),this._pendingFileList},initShareingOverview:function(e){return this._overviewFileList||(this._overviewFileList=new OCA.Sharing.FileList(e,{id:"shares.overview",config:OCA.Files.App.getFilesConfig(),isOverview:!0,shown:!0}),this._extendFileList(this._overviewFileList),this._overviewFileList.appName=t("files_sharing","Shares"),this._overviewFileList.$el.find("#emptycontent").html('<div class="icon-share"></div><h2>'+t("files_sharing","No shares")+"</h2><p>"+t("files_sharing","Shares will show up here")+"</p>")),this._overviewFileList},removeSharingIn:function(){this._inFileList&&this._inFileList.$fileList.empty()},removeSharingOut:function(){this._outFileList&&this._outFileList.$fileList.empty()},removeSharingLinks:function(){this._linkFileList&&this._linkFileList.$fileList.empty()},removeSharingDeleted:function(){this._deletedFileList&&this._deletedFileList.$fileList.empty()},removeSharingPending:function(){this._pendingFileList&&this._pendingFileList.$fileList.empty()},removeSharingOverview:function(){this._overviewFileList&&this._overviewFileList.$fileList.empty()},destroy:function(){OCA.Files.fileActions.off("setDefault.app-sharing",this._onActionsUpdated),OCA.Files.fileActions.off("registerAction.app-sharing",this._onActionsUpdated),this.removeSharingIn(),this.removeSharingOut(),this.removeSharingLinks(),this._inFileList=null,this._outFileList=null,this._linkFileList=null,this._overviewFileList=null,delete this._globalActionsInitialized},_createFileActions:function(){var e=new OCA.Files.FileActions;return e.registerDefaultActions(),e.merge(OCA.Files.fileActions),this._globalActionsInitialized||(this._onActionsUpdated=_.bind(this._onActionsUpdated,this),OCA.Files.fileActions.on("setDefault.app-sharing",this._onActionsUpdated),OCA.Files.fileActions.on("registerAction.app-sharing",this._onActionsUpdated),this._globalActionsInitialized=!0),e.register("dir","Open",OC.PERMISSION_READ,"",(function(e,i){OCA.Files.App.setActiveView("files",{silent:!0}),OCA.Files.App.fileList.changeDirectory(OC.joinPaths(i.$file.attr("data-path"),e),!0,!0)})),e.setDefault("dir","Open"),e},_restoreShareAction:function(){var e=new OCA.Files.FileActions;return e.registerAction({name:"Restore",displayName:t("files_sharing","Restore"),altText:t("files_sharing","Restore share"),mime:"all",permissions:OC.PERMISSION_ALL,iconClass:"icon-history",type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(e,i){var s=i.$file.data("shareId");$.post(OC.linkToOCS("apps/files_sharing/api/v1/deletedshares",2)+s).success((function(e){i.fileList.remove(i.fileInfoModel.attributes.name)})).fail((function(){OC.Notification.showTemporary(t("files_sharing","Something happened. Unable to restore the share."))}))}}),e},_acceptShareAction:function(){var e=new OCA.Files.FileActions;return e.registerAction({name:"Accept share",displayName:t("files_sharing","Accept share"),mime:"all",permissions:OC.PERMISSION_ALL,iconClass:"icon-checkmark",type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(e,i){var s=i.$file.data("shareId");$.post(OC.linkToOCS("apps/files_sharing/api/v1/shares/pending",2)+s).success((function(e){i.fileList.remove(i.fileInfoModel.attributes.name)})).fail((function(){OC.Notification.showTemporary(t("files_sharing","Something happened. Unable to accept the share."))}))}}),e.registerAction({name:"Reject share",displayName:t("files_sharing","Reject share"),mime:"all",permissions:OC.PERMISSION_ALL,iconClass:"icon-close",type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(e,i){var s=i.$file.data("shareId");$.ajax({url:OC.linkToOCS("apps/files_sharing/api/v1/shares",2)+s,type:"DELETE"}).success((function(e){i.fileList.remove(i.fileInfoModel.attributes.name)})).fail((function(){OC.Notification.showTemporary(t("files_sharing","Something happened. Unable to reject the share."))}))}}),e},_onActionsUpdated:function(e){_.each([this._inFileList,this._outFileList,this._linkFileList],(function(i){i&&(e.action?i.fileActions.registerAction(e.action):e.defaultAction&&i.fileActions.setDefault(e.defaultAction.mime,e.defaultAction.name))}))},_extendFileList:function(e){e.fileSummary.$el.find(".filesize").remove()}},window.addEventListener("DOMContentLoaded",(function(){$("#app-content-sharingin").on("show",(function(e){OCA.Sharing.App.initSharingIn($(e.target))})),$("#app-content-sharingin").on("hide",(function(){OCA.Sharing.App.removeSharingIn()})),$("#app-content-sharingout").on("show",(function(e){OCA.Sharing.App.initSharingOut($(e.target))})),$("#app-content-sharingout").on("hide",(function(){OCA.Sharing.App.removeSharingOut()})),$("#app-content-sharinglinks").on("show",(function(e){OCA.Sharing.App.initSharingLinks($(e.target))})),$("#app-content-sharinglinks").on("hide",(function(){OCA.Sharing.App.removeSharingLinks()})),$("#app-content-deletedshares").on("show",(function(e){OCA.Sharing.App.initSharingDeleted($(e.target))})),$("#app-content-deletedshares").on("hide",(function(){OCA.Sharing.App.removeSharingDeleted()})),$("#app-content-pendingshares").on("show",(function(e){OCA.Sharing.App.initSharingPening($(e.target))})),$("#app-content-pendingshares").on("hide",(function(){OCA.Sharing.App.removeSharingPending()})),$("#app-content-shareoverview").on("show",(function(e){OCA.Sharing.App.initShareingOverview($(e.target))})),$("#app-content-shareoverview").on("hide",(function(){OCA.Sharing.App.removeSharingOverview()}))}))},311:function(e,i){var s;(s=function(e,i){this.initialize(e,i)}).prototype=_.extend({},OCA.Files.FileList.prototype,{appName:"Shares",_sharedWithUser:!1,_linksOnly:!1,_showDeleted:!1,_showPending:!1,_clientSideSort:!0,_allowSelection:!1,_isOverview:!1,initialize:function(e,i){OCA.Files.FileList.prototype.initialize.apply(this,arguments),this.initialized||(i&&i.sharedWithUser&&(this._sharedWithUser=!0),i&&i.linksOnly&&(this._linksOnly=!0),i&&i.showDeleted&&(this._showDeleted=!0),i&&i.showPending&&(this._showPending=!0),i&&i.isOverview&&(this._isOverview=!0))},_renderRow:function(){return OCA.Files.FileList.prototype._renderRow.apply(this,arguments)},_createRow:function(e){var i=OCA.Files.FileList.prototype._createRow.apply(this,arguments);if(i.find(".filesize").remove(),i.find("td.date").before(i.children("td:first")),i.find("td.filename input:checkbox").remove(),i.attr("data-share-id",_.pluck(e.shares,"id").join(",")),this._sharedWithUser){i.attr("data-share-owner",e.shareOwner),i.attr("data-mounttype","shared-root");var s=parseInt(i.attr("data-permissions"))|OC.PERMISSION_DELETE;i.attr("data-permissions",s)}if((this._showDeleted||this._showPending)&&(s=e.permissions,i.attr("data-share-permissions",s)),this._linksOnly){var n=0;e.shares&&null!==e.shares[0].expiration&&(n=moment(e.shares[0].expiration).valueOf()),i.attr("data-expiration",n);var a,r,o=Math.round((n-(new Date).getTime())/1e3/60/60/24*5);o>=160&&(o=160),n>0?(a=OC.Util.formatDate(n),r=OC.Util.relativeModifiedDate(n)):(a=t("files_sharing","No expiration date set"),r="",o=160),td=$("<td></td>").attr({"class":"date"}),td.append($("<span></span>").attr({"class":"modified","title":a,"style":"color:rgb("+o+","+o+","+o+")"}).text(r).tooltip({placement:"top"})),i.append(td)}return i},setSharedWithUser:function(e){this._sharedWithUser=!!e},updateEmptyContent:function(){var e=this.getCurrentDirectory();"/"===e?(this.$el.find("#emptycontent").toggleClass("hidden",!this.isEmpty),this.$el.find("#filestable thead th").toggleClass("hidden",this.isEmpty),this._linksOnly||this.$el.find("th.column-expiration").addClass("hidden")):OCA.Files.FileList.prototype.updateEmptyContent.apply(this,arguments)},getDirectoryPermissions:function(){return OC.PERMISSION_READ|OC.PERMISSION_DELETE},updateStorageStatistics:function(){},updateRow:function(e,i,t){return e},reload:function(){this.showMask(),this._reloadCall&&this._reloadCall.abort(),this._setCurrentDir("/",!1);var e=[],i={url:OC.linkToOCS("apps/files_sharing/api/v1",2)+"deletedshares",data:{format:"json",include_tags:!0},type:"GET",beforeSend:function(e){e.setRequestHeader("OCS-APIREQUEST","true")}},t={url:OC.linkToOCS("apps/files_sharing/api/v1/shares",2)+"pending",data:{format:"json"},type:"GET",beforeSend:function(e){e.setRequestHeader("OCS-APIREQUEST","true")}},s={url:OC.linkToOCS("apps/files_sharing/api/v1")+"shares",data:{format:"json",shared_with_me:!1!==this._sharedWithUser,include_tags:!0},type:"GET",beforeSend:function(e){e.setRequestHeader("OCS-APIREQUEST","true")}},n={url:OC.linkToOCS("apps/files_sharing/api/v1")+"remote_shares",data:{format:"json",include_tags:!0},type:"GET",beforeSend:function(e){e.setRequestHeader("OCS-APIREQUEST","true")}};this._showDeleted?e.push($.ajax(i)):this._showPending?e.push($.ajax(t)):(e.push($.ajax(s)),(!1!==this._sharedWithUser||this._isOverview)&&e.push($.ajax(n)),this._isOverview&&(s.data.shared_with_me=!s.data.shared_with_me,e.push($.ajax(s)))),this._reloadCall=$.when.apply($,e);var a=this.reloadCallback.bind(this);return this._reloadCall.then(a,a)},reloadCallback:function(e,i,s){delete this._reloadCall,this.hideMask(),this.$el.find("#headerSharedWith").text(t("files_sharing",this._sharedWithUser?"Shared by":"Shared with"));var n=[];return e[0]&&e[0].ocs&&(e=e[0]),i&&i[0]&&i[0].ocs&&(i=i[0]),s&&s[0]&&s[0].ocs&&(s=s[0]),e.ocs&&e.ocs.data&&(n=n.concat(this._makeFilesFromShares(e.ocs.data,this._sharedWithUser))),i&&i.ocs&&i.ocs.data&&(n=n.concat(this._makeFilesFromRemoteShares(i.ocs.data))),s&&s.ocs&&s.ocs.data&&(n=n.concat(this._makeFilesFromShares(s.ocs.data,!this._sharedWithUser))),this.setFiles(n),!0},_makeFilesFromRemoteShares:function(e){var i=e;return i=_.chain(i).map((function(e){var i={shareOwner:e.owner+"@"+e.remote.replace(/.*?:\/\//g,""),name:OC.basename(e.mountpoint),mtime:1e3*e.mtime,mimetype:e.mimetype,type:e.type,id:e.file_id,path:OC.dirname(e.mountpoint),permissions:e.permissions,tags:e.tags||[]};return i.shares=[{id:e.id,type:OC.Share.SHARE_TYPE_REMOTE}],i})).value()},_makeFilesFromShares:function(e,i){var t=e;return this._linksOnly&&(t=_.filter(e,(function(e){return e.share_type===OC.Share.SHARE_TYPE_LINK}))),(t=_.chain(t).map((function(e){var t={id:e.file_source,icon:OC.MimeType.getIconUrl(e.mimetype),mimetype:e.mimetype,tags:e.tags||[]};return"folder"===e.item_type?(t.type="dir",t.mimetype="httpd/unix-directory"):t.type="file",t.share={id:e.id,type:e.share_type,target:e.share_with,stime:1e3*e.stime,expiration:e.expiration},i?(t.shareOwner=e.displayname_owner,t.shareOwnerId=e.uid_owner,t.name=OC.basename(e.file_target),t.path=OC.dirname(e.file_target),t.permissions=e.permissions,t.path&&(t.extraData=e.file_target)):(e.share_type!==OC.Share.SHARE_TYPE_LINK&&(t.share.targetDisplayName=e.share_with_displayname,t.share.targetShareWithId=e.share_with),t.name=OC.basename(e.path),t.path=OC.dirname(e.path),t.permissions=OC.PERMISSION_ALL,t.path&&(t.extraData=e.path)),t})).reduce((function(e,i){var t=e[i.id],s=i.share.targetDisplayName,n=i.share.targetShareWithId;return t?(i.share.stime>t.mtime&&(t.mtime=i.share.stime),t.shares.push(i.share)):((t=e[i.id]=i).shares=[i.share],t.recipients={},t.recipientData={},t.shareTypes={},t.recipientsCount=0,t.mtime=i.share.stime),s&&(t.recipientsCount<4&&(t.recipients[s]=!0,t.recipientData[t.recipientsCount]={"shareWith":n,"shareWithDisplayName":s}),t.recipientsCount++),t.shareTypes[i.share.type]=!0,delete i.share,e}),{}).values().each((function(e){e.mountType="shared",delete e.recipientsCount,i?delete e.shareTypes:e.shareTypes=_.keys(e.shareTypes)})).value()).sort(this._sortComparator)}}),OCA.Sharing.FileList=s}});
//# sourceMappingURL=files_sharing.js.map