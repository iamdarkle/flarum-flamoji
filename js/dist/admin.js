module.exports=function(t){var e={};function i(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=171)}({0:function(t,e){t.exports=flarum.core.compat["common/app"]},1:function(t,e,i){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}i.d(e,"a",(function(){return a}))},10:function(t,e){t.exports=flarum.core.compat["common/components/Select"]},11:function(t,e){t.exports=flarum.core.compat["common/Component"]},12:function(t,e){t.exports=flarum.core.compat["utils/Stream"]},13:function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},15:function(t,e){t.exports=flarum.core.compat["admin/components/AdminPage"]},16:function(t,e,i){(function(i){var o,a,n;a=[],void 0===(n="function"==typeof(o=function(){"use strict";function e(t,e,i){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,i)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(i){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i&&i.global===i?i:void 0,s=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,i,s){var r=n.URL||n.webkitURL,m=document.createElement("a");i=i||t.name||"download",m.download=i,m.rel="noopener","string"==typeof t?(m.href=t,m.origin===location.origin?a(m):o(m.href)?e(t,i,s):a(m,m.target="_blank")):(m.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(m.href)}),4e4),setTimeout((function(){a(m)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,n){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),i);else if(o(t))e(t,i,n);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){a(s)}))}}:function(t,i,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,i,o);var r="application/octet-stream"===t.type,m=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&m||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},c.readAsDataURL(t)}else{var u=n.URL||n.webkitURL,p=u.createObjectURL(t);a?a.location=p:location.href=p,a=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});n.saveAs=r.saveAs=r,t.exports=r})?o.apply(e,a):o)||(t.exports=n)}).call(this,i(26))},17:function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},171:function(t,e,i){"use strict";i.r(e);var o=i(2),a=i(7),n=i(0),s=i.n(n),r=i(15),l=i.n(r),c=function(){function t(){this.emojis=[],this.moreResults=!1,this.loading=!1}var e=t.prototype;return e.loadResults=function(t){return void 0===t&&(t=0),this.loading=!0,s.a.store.find("the-turk/emojis",{page:{limit:23,offset:t}}).then(this.parseResults.bind(this))},e.loadMore=function(){this.loading=!0,this.loadResults(this.emojis.length)},e.parseResults=function(t){var e;return(e=this.emojis).push.apply(e,t),this.loading=!1,this.moreResults=!!t.payload.links&&!!t.payload.links.next,m.redraw(),t},e.addToList=function(t){this.loading=!0,this.emojis.unshift(t),this.loading=!1},e.removeFromList=function(t){this.loading=!0;var e=this.emojis.findIndex((function(e){return t===e.id()}));this.emojis.splice(e,1),this.loading=!1},e.hasEmojis=function(){return this.emojis.length>0},e.isLoading=function(){return this.loading},e.hasMoreResults=function(){return this.moreResults},e.empty=function(){return!this.hasEmojis()&&!this.isLoading()},t}(),u=i(1),p=i(16),h=i(3),d=i.n(h),f=i(11),j=i.n(f),g=i(17),v=i.n(g),_=i(18),b=i.n(_),k=i(19),y=i.n(k),x=i(20),w=i.n(x),N=i(12),E=i.n(N),S=i(4),T=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),this.emoji=this.attrs.model||app.store.createRecord("emojis"),this.emojiTitle=E()(this.emoji.title()||""),this.textToReplace=E()(this.emoji.textToReplace()||""),this.path=E()(this.emoji.path()||"")},i.className=function(){return"EditEmojiModal Modal--small"},i.title=function(){var t="";return this.path()&&(t=Object(S.a)(this.path())?this.path():app.forum.attribute("baseUrl")+this.path()),this.emojiTitle()?this.path()?[m("img",{className:"EditEmojiModal-titleEmoji",src:t,alt:this.emojiTitle()}),this.emojiTitle()]:this.emojiTitle():app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.modal_title")},i.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},i.fields=function(){var t=new w.a;return t.add("title",m("div",{className:"Form-group"},m("label",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.emoji_title_label")),m("input",{className:"FormControl",bidi:this.emojiTitle})),50),t.add("textToReplace",m("div",{className:"Form-group"},m("label",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.text_to_replace_label")),m("input",{className:"FormControl",bidi:this.textToReplace})),40),t.add("path",m("div",{className:"Form-group"},m("label",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.path_or_url_label")),m("input",{className:"FormControl",placeholder:"/assets/emojis/batman.png",bidi:this.path})),30),t.add("submit",m("div",{className:"Form-group"},b.a.component({type:"submit",className:"Button Button--primary EditEmojiModal-save",loading:this.loading},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.submit_button")),this.emoji.exists?m("button",{type:"button",className:"Button EditEmojiModal-delete",onclick:this.delete.bind(this)},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_button")):""),-10),t},i.submitData=function(){return{title:this.emojiTitle(),textToReplace:this.textToReplace(),path:this.path()}},i.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var i=this.emoji.exists;this.emoji.save(this.submitData()).then((function(t){e.clearCache().then((function(){e.hide(),i||app.customEmojiListState.addToList(t),e.loading=!1,e.showSuccessMessage()}))}))},i.delete=function(){var t=this;confirm(app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.delete_emoji_confirmation"))&&this.emoji.delete().then((function(){t.clearCache().then((function(){t.hide(),app.customEmojiListState.removeFromList(t.emoji.id()),t.showSuccessMessage()}))}))},i.showSuccessMessage=function(){return app.alerts.show(v.a,{type:"success"},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.edit_emoji.saved_message"))},i.clearCache=function(){return app.request({method:"DELETE",url:app.forum.attribute("apiUrl")+"/cache"})},e}(y.a),F=i(21),L=i.n(F),O=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),app.customEmojiListState.loadResults()},i.view=function(){var t=app.customEmojiListState;return m("div",{className:"customEmoji-list"},t.isLoading()&&0===t.emojis.length?m(L.a,{display:"unset",size:"large"}):"",m("ul",null,t.emojis.map((function(t){var e=Object(S.a)(t.path())?t.path():app.forum.attribute("baseUrl")+t.path();return m("li",null,m("div",{class:"customEmoji"},m(d.a,{className:"Button Button--icon customEmoji-editButton",icon:"fas fa-pencil-alt",onclick:function(){return app.modal.show(T,{model:t})}}),m("div",{className:"customEmoji-imageWrapper"},m("img",{src:e,className:"customEmoji-image",alt:t.title(),title:t.textToReplace()})),m("div",{className:"customEmoji-title"},m("h4",null,t.title()))))})),m("li",null,m("div",{class:"customEmoji addEmoji"},m("div",{className:"customEmoji-imageWrapper"},m(d.a,{className:"Button Button--icon customEmoji-addButton",icon:"fas fa-plus",onclick:function(){return app.modal.show(T)}}))))),t.hasMoreResults()&&m("div",{className:"customEmoji-loadMore"},m(d.a,{className:"Button Button--primary",disabled:t.isLoading(),loading:t.isLoading(),onclick:function(){return t.loadMore()}},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.emoji_list.load_more_button"))))},e}(j.a),C=i(22),R=i.n(C),M=i(23),B=i.n(M),A=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var i=e.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e)},i.exportEmojiList=function(){var t={};app.store.find("the-turk/emojis").then((function(e){e.payload.data.map((function(e,i){var o=e.attributes;t[i]={title:o.title,text_to_replace:o.text_to_replace,path:o.path}}));var i=new Blob([JSON.stringify(t)],{type:"application/json;charset=utf-8"});Object(p.saveAs)(i,"flamoji.json")}))},i.importEmojiList=function(){if(confirm(app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.import_emojis_message"))){var t=document.createElement("input");t.type="file",t.onchange=function(t){app.customEmojiListState.loading=!0;var e=t.target.files[0],i=new FileReader;i.readAsText(e,"UTF-8"),i.onload=function(t){app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/the-turk/import-emojis",body:{data:JSON.parse(t.target.result)}}).then((function(){T.prototype.clearCache().then((function(){return window.location.reload()}))}))}},t.click()}},i.flamojiTopItems=function(){var t=this,e=new B.a;return e.add("import",m(d.a,{icon:"fas fa-sign-in-alt",onclick:function(){return t.importEmojiList()}},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.import_json_button"))),e.add("export",m(d.a,{icon:"fas fa-share",onclick:function(){return t.exportEmojiList()}},app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.export_json_button"))),e},i.view=function(){return m("div",{className:"ExtensionPage-customFlamoji"},m("div",{className:"ExtensionPage-customFlamoji-header"},m("div",{className:"container"},m("div",{className:"ExtensionTitle"},m("div",{className:"ExtensionName"},m("h2",null,app.translator.trans("the-turk-flamoji.admin.custom_emojis_section.heading_title"))),m("div",{class:"ExtensionPage-headerTopItems"},m("ul",null,R()(this.flamojiTopItems().toArray())))))),m("div",{className:"container"},m(O,null)))},e}(j.a),U=i(9),I=i.n(U),P=i(24),H=function(t){function e(){return t.apply(this,arguments)||this}return Object(u.a)(e,t),e.prototype.apiEndpoint=function(){return"/the-turk/emojis"+(this.exists?"/"+this.data.id:"")},e}(i.n(P)()(I.a,{title:I.a.attribute("title"),textToReplace:I.a.attribute("text_to_replace"),path:I.a.attribute("path")})),z=i(13),D=i.n(z),q=i(6),J=i(10),G=i.n(J),K=i(25),W=i.n(K),X=i(5),$=i.n(X);s.a.initializers.add("the-turk-flamoji",(function(t){t.store.models.emojis=H,t.customEmojiListState=new c;var e={};Object(q.a)().forEach((function(i){e[i]=t.translator.trans("the-turk-flamoji.admin.settings.emoji_categories."+i)}));var i={};a.availableLocale.forEach((function(t){i[t]=t})),Object(o.extend)(D.a.prototype,["oncreate","onupdate"],(function(){if("the-turk-flamoji"==this.extension.id){var t=this.$(".recentsCountSetting");this.setting(["the-turk-flamoji.show_recents"])()?t.show():t.hide()}})),Object(o.extend)(D.a.prototype,"oninit",(function(){"the-turk-flamoji"==this.extension.id&&(this.specifiedCategories=W()(JSON.parse(this.setting(["the-turk-flamoji.specify_categories"])()||"[]"))())})),Object(o.extend)(D.a.prototype,"sections",(function(t){"the-turk-flamoji"==this.extension.id&&(t.has("permissions")&&t.remove("permissions"),t.add("customFlamoji",m(A,null)))})),Object(o.override)(l.a.prototype,"dirty",(function(e){var i=this;if(!this.extension||"the-turk-flamoji"!=this.extension.id)return e();var o={},a=JSON.stringify(this.specifiedCategories);return a!==this.setting(["the-turk-flamoji.specify_categories"])()&&(o["the-turk-flamoji.specify_categories"]=a),Object.keys(this.settings).forEach((function(e){var a=i.settings[e]();a!==t.data.settings[e]&&(o[e]=a)})),o})),t.extensionData.for("the-turk-flamoji").registerSetting((function(){var o=this;return m("div",{className:"Flamoji--settingsContainer"},m("div",{className:"Flamoji--generalUISettingsContainer"},m("h3",null,t.translator.trans("the-turk-flamoji.admin.settings.general_ui_settings_heading")),m("hr",null),m("div",{className:"Flamoji--generalUISetting"},m("div",{className:"Form-group"},m($.a,{state:!!this.setting(["the-turk-flamoji.auto_hide"])()&&"0"!==this.setting(["the-turk-flamoji.auto_hide"])(),onchange:this.settings["the-turk-flamoji.auto_hide"]},t.translator.trans("the-turk-flamoji.admin.settings.auto_hide_label"))),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.auto_hide_text"))),m("div",{className:"Flamoji--generalUISetting"},m("div",{className:"Form-group"},m($.a,{state:!!this.setting(["the-turk-flamoji.show_preview"])()&&"0"!==this.setting(["the-turk-flamoji.show_preview"])(),onchange:this.settings["the-turk-flamoji.show_preview"]},t.translator.trans("the-turk-flamoji.admin.settings.show_preview_label"))),m("div",{className:"helpText"})),m("div",{className:"Flamoji--generalUISetting"},m("div",{className:"Form-group"},m($.a,{state:!!this.setting(["the-turk-flamoji.show_search"])()&&"0"!==this.setting(["the-turk-flamoji.show_search"])(),onchange:this.settings["the-turk-flamoji.show_search"]},t.translator.trans("the-turk-flamoji.admin.settings.show_search_label"))),m("div",{className:"helpText"}))),m("div",{className:"Flamoji--emojiSettingsContainer"},m("h3",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_settings_heading")),m("hr",null),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m($.a,{state:!!this.setting(["the-turk-flamoji.show_variants"])()&&"0"!==this.setting(["the-turk-flamoji.show_variants"])(),onchange:this.settings["the-turk-flamoji.show_variants"]},t.translator.trans("the-turk-flamoji.admin.settings.show_variants_label"))),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.show_variants_text"))),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_style_label")),m(G.a,{value:this.setting(["the-turk-flamoji.emoji_style"])()||"twemoji",options:{native:t.translator.trans("the-turk-flamoji.admin.settings.emoji_style_native_option"),twemoji:"Twemoji"},buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.emoji_style"]})),m("div",{className:"helpText"})),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_data_label")),m(G.a,{value:this.setting(["the-turk-flamoji.emoji_data"])()||"en",options:i,buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.emoji_data"]})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.emoji_data_text"))),m("div",{className:"Flamoji--emojiSetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.emoji_version_label")),m(G.a,{value:this.setting(["the-turk-flamoji.emoji_version"])()||"12.1",options:{"1.0":"1.0","2.0":"2.0","3.0":"3.0","4.0":"4.0","5.0":"5.0","11.0":"11.0","12.0":"12.0",12.1:"12.1"},buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.emoji_version"]})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.emoji_version_text")))),m("div",{className:"Flamoji--categorySettingsContainer"},m("h3",null,t.translator.trans("the-turk-flamoji.admin.settings.category_settings_heading")),m("hr",null),m("div",{className:"Flamoji--categorySetting"},m("div",{className:"Form-group"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.initial_category_label")),m(G.a,{value:this.setting(["the-turk-flamoji.initial_category"])()||"smileys",options:e,buttonClassName:"Button",onchange:this.settings["the-turk-flamoji.initial_category"]})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.initial_category_text"))),m("div",{className:"Flamoji--categorySetting"},m("div",{className:"Form-group"},m($.a,{state:!!this.setting(["the-turk-flamoji.show_category_buttons"])()&&"0"!==this.setting(["the-turk-flamoji.show_category_buttons"])(),onchange:this.settings["the-turk-flamoji.show_category_buttons"]},t.translator.trans("the-turk-flamoji.admin.settings.show_category_buttons_label"))),m("div",{className:"helpText"})),m("div",{className:"Flamoji--categorySetting"},m("div",{className:"Form-group"},m($.a,{state:!!this.setting(["the-turk-flamoji.show_recents"])()&&"0"!==this.setting(["the-turk-flamoji.show_recents"])(),onchange:this.settings["the-turk-flamoji.show_recents"]},t.translator.trans("the-turk-flamoji.admin.settings.show_recents_label"))),m("div",{className:"helpText"})),m("div",{className:"Flamoji--categorySetting recentsCountSetting"},m("div",{className:"Form-group recentsCountGroup"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.recents_count_label")),m("input",{className:"FormControl",type:"number",bidi:this.setting("the-turk-flamoji.recents_count")})),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.recents_count_text"))),m("div",{className:"Flamoji--categorySetting specifyCategoriesSetting"},m("div",{className:"Form-group specifyCategoriesGroup"},m("label",null,t.translator.trans("the-turk-flamoji.admin.settings.specify_categories_label")),m("div",{className:"helpText"},t.translator.trans("the-turk-flamoji.admin.settings.specify_categories_text")),m("div",{className:"options"},Object(q.a)().map((function(e){return m("div",{className:"cat-checkbox"},m("input",{type:"checkbox",name:"specifyCats[]",checked:o.specifiedCategories.indexOf(e)>-1,onchange:function(t){if(t.target.checked)o.specifiedCategories.push(e);else{var i=o.specifiedCategories.indexOf(e);i>-1&&o.specifiedCategories.splice(i,1)}}}),m("label",{for:e},t.translator.trans("the-turk-flamoji.admin.settings.emoji_categories."+e)))})))))))}))}))},18:function(t,e){t.exports=flarum.core.compat["components/Button"]},19:function(t,e){t.exports=flarum.core.compat["components/Modal"]},2:function(t,e){t.exports=flarum.core.compat["common/extend"]},20:function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},21:function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},22:function(t,e){t.exports=flarum.core.compat["common/helpers/listItems"]},23:function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},24:function(t,e){t.exports=flarum.core.compat["common/utils/mixin"]},25:function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},26:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},3:function(t,e){t.exports=flarum.core.compat["common/components/Button"]},4:function(t,e,i){"use strict";function o(t){var e=new RegExp("^(http|https)://","i");return!!t.match(e)}i.d(e,"a",(function(){return o}))},5:function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},6:function(t,e,i){"use strict";function o(){return["smileys","people","animals","food","activities","travel","objects","symbols","flags"]}i.d(e,"a",(function(){return o}))},7:function(t,e,i){"use strict";i.r(e),i.d(e,"availableLocale",(function(){return o}));var o=["af","am","ar-SA","ar","as","ast","az","bg","be","bn","br","bs","ca","ccp","ceb","chr","ckb","cs","cy","da","de-CH","de","doi","el","en-001","en-AU","en-CA","en-GB","en-IN","en","es-419","es-MX","es-US","es","et","eu","fa","fi","fil","fo","fr-CA","fr","ga","gd","gl","gu","ha-NE","ha","he","hi","hr","hu","hy","ia","id","ig","is","it","ja","jv","ka","kab","kk","kl","km","kn","ko","kok","ku","ky","lb","lo","lt","lv","mai","mi","mk","ml","mn","mni","mr","ms","mt","my","ne","nl","nn","no","or","pa-Arab","pa","pcm","pl","ps","pt-PT","pt","qu","rm","ro","root","ru","rw","sa","sat","sd","si","sk","sl","so","sq","sr-Cyrl-BA","sr-Cyrl","sr-Latn-BA","sr-Latn","sr","su","sv","sw-KE","sw","ta","te","tg","th","ti","tk","to","tr","tt","ug","uk","ur","uz","vi","wo","xh","yo-BJ","yo","yue-Hans","yue","zh-Hant-HK","zh-Hant","zh","zu"]},9:function(t,e){t.exports=flarum.core.compat["common/Model"]}});
//# sourceMappingURL=admin.js.map