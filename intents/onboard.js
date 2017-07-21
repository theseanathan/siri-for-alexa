
function onboard(req, resp) {
    dialog = req.getDialog();i
    if (dialog.isStarted || dialog.isInProgress()) {
        dialog.handleDialogDelegation();
    }
    else if(dialog.isCompleted()) {
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
        resp.say("Thank you! Go ahead and log your food for the day and we'll keep track of your daily nutritional value");
        resp.session.set("UserInfo", userInfo);
        resp.shouldEndSession(false);
    }
}
schema = {
    'dialog': {
        'type': 'delegate'
    },
    'utterances': [
        'onboard',
        'set up',
        'get started',
        'new user',
        'start',
        'go'
    ],
    'slots': {
        "Weight": "AMAZON.NUMBER",
        "Feet": "AMAZON.NUMBER",
        "Inches": "AMAZON.NUMBER",
        "Age": "AMAZON.NUMBER",
        "Sex": "SEX"
    }
}

module.exports = {
    init: function(app) {
        app.intent('OnboardIntent', schema, onboard)
    }
}

