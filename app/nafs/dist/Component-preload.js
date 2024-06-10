//@ui5-bundle ns/nafs/Component-preload.js
sap.ui.require.preload({
	"ns/nafs/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(n){"use strict";return n.extend("ns.nafs.Component",{metadata:{manifest:"json"}})});
},
	"ns/nafs/i18n/i18n.properties":'# This is the resource bundle for ns.nafs\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Nfa Form\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,30\nflpTitle=management\n',
	"ns/nafs/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"ns.nafs","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.5","toolsId":"437a25f8-fa35-467b-a680-1b2202968447"},"dataSources":{"mainService":{"uri":"odata/v4/service/nfa/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"nafs-display":{"semanticObject":"nafs","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.nafs.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"NfasList","target":"NfasList"},{"pattern":"Nfas({key}):?query:","name":"NfasObjectPage","target":"NfasObjectPage"}],"targets":{"NfasList":{"type":"Component","id":"NfasList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Nfas","variantManagement":"Page","navigation":{"Nfas":{"detail":{"route":"NfasObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"NfasObjectPage":{"type":"Component","id":"NfasObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Nfas"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"management"}}'
});
//# sourceMappingURL=Component-preload.js.map
