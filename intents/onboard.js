
function onboard(req, resp) {
    console.log("IN ONBOARDINGNJSDIFBNJDSKBFJDKSBFHJDSHJFBHDJSKFBHJKDSFHJKDSHJFKB\n")
    dialog = req.getDialog();
    if (dialog.isStarted() || dialog.isInProgress()) {
        dialog.handleDialogDelegation();
        console.log("6");
        resp.send();
    }
    else if(dialog.isCompleted()) {
        console.log("9");
        userInfo = {};
        if ('Weight' in req.slots) {
            userInfo['Weight'] = req.slots['Weight'].value;
        }
        if ('Age' in req.slots) {
            userInfo['Age'] = req.slots['Age'].value;
        }
        if ('Sex' in req.slots) {
            userInfo['Sex'] = req.slots['Sex'].value;
        }
        if ('Feet' in req.slots && 'Inches' in req.slots) {
            userInfo['Height'] = parseInt(req.slots['Feet'].value) * 12 + parseInt(req.slots['Inches'].value);
        }
        console.log("22");
        resp.say("Thank you! Go ahead and log your food for the day and we'll keep track of your daily nutritional value");
        resp.session.set("UserInfo", userInfo);
        console.log("25");
        resp.shouldEndSession(false, "");
        resp.send();
        console.log("37");
    }
}


module.exports = {
    init: function(app) {
        app.intent('OnboardIntent', null, onboard)
    },
    onboard: function(req, resp) {
    dialog = req.getDialog();
    if (dialog.isStarted() || dialog.isInProgress()) {
        dialog.handleDialogDelegation();
        console.log("6");
    }
    else if(dialog.isCompleted()) {
        console.log("9");
        userInfo = {};
        if ('Weight' in req.slots) {
            userInfo['Weight'] = req.slots['Weight'].value;
        }
        if ('Age' in req.slots) {
            userInfo['Age'] = req.slots['Age'].value;
        }
        if ('Sex' in req.slots) {
            userInfo['Sex'] = req.slots['Sex'].value;
        }
        if ('Feet' in req.slots && 'Inches' in req.slots) {
            userInfo['Height'] = parseInt(req.slots['Feet'].value) * 12 + parseInt(req.slots['Inches'].value);
        }
        console.log("22");
        resp.say("Thank you! Go ahead and log your food for the day and we'll keep track of your daily nutritional value");
        resp.session.set("UserInfo", userInfo);
        console.log("25");
        resp.shouldEndSession(false, "");
        console.log("37");
    }
}

}

