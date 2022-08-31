({
	showSuccess : function(event) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            				title : 'Success',
            				message: 'Contact Saved Successfully !!',
            				duration:' 5000',
            				key: 'info_alt',
            				type: 'success',
            				mode: 'pester'
        		});
        		toastEvent.fire();
		
	},
    showError : function(event){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            	title : 'Error',
           		message:'Failed to save contact, please enter valid data.',
            	duration:' 5000',
            	key: 'info_alt',
            	type: 'error',
            	mode: 'pester'
        		});
        		toastEvent.fire();  
    }
})
