sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	],
	function(Controller,MessageToast){
		
		Controller.extend("com.numen.myapp.controller.App",{
			
			onShowHello: function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				
				MessageToast.show(sMsg);
			}
		});
	
});