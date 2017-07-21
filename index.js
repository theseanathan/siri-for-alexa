var alexa = require('./alexa-app');
var app = new alexa.app('my_macros');
var flashbriefing = require('./intents/flashbriefing.js');
var addfood = require('./intents/addfood.js');
var fs = require('fs');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;
module.exports = app;

// function onboard(req, resp) {
//     console.log("IN ONBOARDINGNJSDIFBNJDSKBFJDKSBFHJDSHJFBHDJSKFBHJKDSFHJKDSHJFKB\n")
//     dialog = req.getDialog();
//     console.log(dialog);
//     if (dialog.isStarted() || dialog.isInProgress()) {
//         dialog.handleDialogDelegation(req, resp);
//         console.log("6");
//         resp.send();
//     }
//     else if(dialog.isCompleted()) {
//         console.log("9");
//         userInfo = {};
//         if ('Weight' in req.slots) {
//             userInfo['Weight'] = req.slots['Weight'].value;
//         }
//         if ('Age' in req.slots) {
//             userInfo['Age'] = req.slots['Age'].value;
//         }
//         if ('Sex' in req.slots) {
//             userInfo['Sex'] = req.slots['Sex'].value;
//         }
//         if ('Feet' in req.slots && 'Inches' in req.slots) {
//             userInfo['Height'] = parseInt(req.slots['Feet'].value) * 12 + parseInt(req.slots['Inches'].value);
//         }
//         console.log("22");
//         resp.say("Thank you! Go ahead and log your food for the day and we'll keep track of your daily nutritional value").send();
//         resp.session.set("UserInfo", userInfo);
//         console.log("25");
//         resp.shouldEndSession(false, "").send();
//         resp.send();
//         console.log("37");
//     }
//     else {

//     	// resp.shouldEndSession(false);
//         dialog.handleDialogDelegation(req, resp);
//         console.log("6");
//         resp.send();
//     }
//     req.send();
// }

flashbriefing.init(app);
addfood.init(app);
app.launch(function(req,res) {

	res.say("WelcomeMessage, go ahead and say today i ate item").send();
});

// app.intent('OnboardIntent', null, onboard);
app.intent('AMAZON.StopIntent', stopSession);
app.intent('AMAZON.CancelIntent', stopSession);
app.sessionEnded(stopSession);

function stopSession(request, response) {

  response.say("G T F O");
  response.shouldEndSession(true);
}

app.error = function(e, request, response) {
  response.say("I captured the exception! It was: " + e.message);
};

exports.handler = app.lambda();

//Contact GitHub API Training Shop Blog About
//© 2017 GitHub, Inc. Terms Privacy Security Status Help
//Contact GitHub API Training Shop Blog About
//© 2017 GitHub, Inc. Terms Privacy Security Status Help


