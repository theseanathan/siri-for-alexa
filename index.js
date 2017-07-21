var alexa = require('./alexa-app');
var app = new alexa.app('my_macros');
var onboard = require('./intents/onboard.js');
var flashbriefing = require('./intents/flashbriefing.js');
var fs = require('fs');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;
module.exports = app;

onboard.init(app);
flashbriefing.init(app);
app.launch(function(req,res) {

	res.say("WelcomeMessage");
	res.shouldEndSession (false, "To hear the rules, say help. To get the current game state, say status. To " +
                        "leave the game, say exit.");
});

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

fs.writeFile('output/intents.json', app.schema(), function(err) {
    if (err) {
        console.log(err)
    }
})
//Contact GitHub API Training Shop Blog About
//© 2017 GitHub, Inc. Terms Privacy Security Status Help
//Contact GitHub API Training Shop Blog About
//© 2017 GitHub, Inc. Terms Privacy Security Status Help
