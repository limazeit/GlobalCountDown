({
    adjustSyle : function(component, event, helper) {
        //Set colors for the text count down
        var elementsText = document.getElementsByClassName("text");
        for (var i=0; i<elementsText.length; i++) {
            elementsText[i].style.backgroundColor = component.get("v.timeColor");
        }

        //Set colors for the numbers count down
        var elementsNum = document.getElementsByClassName("num");
        for (var i=0; i<elementsNum.length; i++) {
            elementsNum[i].style.color = component.get("v.footerColor");
        }

    }, 
    countdown : function(component, event, helper) {

        //Output value in milliseconds
        var endDate = new Date(component.get("v.dateTime"));
        let endTime = endDate;

        let todayDate = new Date();
        //Output value in milliseconds
        let todayTime = todayDate.getTime();

        let remainingTime = endTime - todayTime;
        //60sec => 1000 milliseconds
        let oneMin = 60 * 1000;
        //1hr => 60 minutes
        let oneHr = 60 * oneMin;
        //1 day => 24 hours
        let oneDay = 24 * oneHr;
    
        //Function to format number if it is single digit
        let addZeroes = (num) => (num < 10 ? `0${num}` : num);
    
        //If end dat is before today date
        if (endTime < todayTime) {
            component.set("v.timeOut", true);
        }
        //If end date is not before today date
        else {
            //Calculating remaining days, hrs,mins ,secs
            let daysLeft = Math.floor(remainingTime / oneDay);
            let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
            let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
            let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

            //Displaying Valurs
            if(component.find("days") != undefined){
                try {
                    component.find("days").getElement().innerText = addZeroes(daysLeft);
                    component.find("hours").getElement().innerText = addZeroes(hrsLeft);
                    component.find("minutes").getElement().innerText = addZeroes(minsLeft);
                    component.find("seconds").getElement().innerText = addZeroes(secsLeft);
                } catch (error) {
                    
                }
            }
        }

    }
})