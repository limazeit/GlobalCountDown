({
    doInit : function(component, event, helper) {
        helper.adjustSyle(component, event, helper);   
        setInterval(() => {
            helper.countdown(component, event, helper);   
        }, 1000);
    }
})