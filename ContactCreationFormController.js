({
	doSave : function(component, event, helper) {
        var action = component.get("c.createContact");
        action.setParams({'contObj':component.get('v.cont')});
        action.setCallback(this,function(response){
            var state=response.getState();
            if( state === "SUCCESS"){
                helper.showSuccess(event);
                component.set('v.contactItem',response.getReturnValue());   
            }
            else{
                helper.showError(event);
                console.log("Failed with state : " + state);
            }
        });	
        $A.enqueueAction(action);
	}    
})
