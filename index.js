var alexa = require('alexa-app');
var app = new alexa.app('my_macros');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;
module.exports = app;

app.launch(function(req,res) {

	res.say("WelcomeMessage");
	res.shouldEndSession (false, "To hear the rules, say help. To get the current game state, say status. To " +
                        "leave the game, say exit.");
});

app.intent('FlashBriefIntent', flashBrief);
app.intent('HelpIntent', help);
app.intent('LogFoodIntent', logFood);
app.intent('OnboardIntent', onboard);
app.intent('AMAZON.StopIntent', stopSession);
app.intent('AMAZON.CancelIntent', stopSession);
app.sessionEnded(stopSession);

function stopSession(request, response) {

  response.say("G T F O");
  response.shouldEndSession(true);  
}

function updateGoals(newGoal) {

}

function onboard(session) {

}

function logFood(session) {

}

function flashBrief(session) {

}


// error handler example
app.error = function(e, request, response) {
  response.say("I captured the exception! It was: " + e.message);
};
