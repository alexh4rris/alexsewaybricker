sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"com/numen/myapp/model/formatter"
	],
	function(Controller,MessageToast, formatter){
		
		Controller.extend("com.numen.myapp.controller.App",{
			
			formatter : formatter,
			
			onShowHello: function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				
				MessageToast.show(sMsg);
			}
		});
	
});