var alexa = require('alexa-app');
var app = new alexa.app('my_macros');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;
module.exports = app;



function initializeGameState(session) {

}

function updateGoals(newGoal) {

}

function updateWeight(newWeight) {

}

function logFood(gameState) {

}

app.launch(function(req,res) {
  var gameState = initializeGameState(req.getSession());
  req.getSession().set("gameState", gameState);
  var moveState = alexaMove(req.getSession(), gameState);
  
  var chips = gameState.startingChips;
  console.log(chips + " chips to start");

	res.say("WelcomeMessage");
	res.shouldEndSession (false, "To hear the rules, say help. To get the current game state, say status. To " +
                        "leave the game, say exit.");
});

app.intent('BriefingIntent', 
    {
        "slots": {},
        "utterances": [
            "status", "how are my macros", "flash briefing"
        ]
    },
    function (req, res) {
      // report nutrition status
    }    
);

app.intent('HelpIntent', 
    {
        "slots": {},
        "utterances": [
            "help", "how to play"
        ]
    },
    function (request, response) {
	    response.say("TODO - add help message");
      response.shouldEndSession(false);  
    }    
);

app.intent('logFood', {
  "slots": { "CHIPS": "NUMBER" },
  "utterances": ["I ate x food"]
}, function(req, res) {

    // add the food to tracking

});

app.intent('updateWeight', {
  "slots": { "CHIPS": "NUMBER" },
  "utterances": ["I take {1-4|CHIPS} chips", "I take {1-4|CHIPS}", "Take {1-4|CHIPS} chips", "Take {1-4|CHIPS}", "{1-4|CHIPS} CHIPS"]
}, function(req, res) {

    // change a user's weight

});

app.intent('AMAZON.StopIntent', stopSession);
app.intent('AMAZON.CancelIntent', stopSession);
app.sessionEnded(stopSession);

function stopSession(request, response) {

  response.say("Thanks for playing.  You won " + playerWins + " games and I won " + alexaWins + " games.");
  response.shouldEndSession(true);  
}


// error handler example
app.error = function(e, request, response) {
  response.say("I captured the exception! It was: " + e.message);
};

Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help