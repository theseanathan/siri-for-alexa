var foodapi = require('../utils/foodApi.js');

function addfood(req, resp) {
    foodName = req.slots['Food'].value;
    foodList = req.getSession().get("Foods");
    if (! foodList) {
        foodList = [];
    }
    foodList.push(foodName)
    resp.session.get("Foods", foodList);
    nutritionInfo = foodapi.nutrientsByFood(foodName);
    calories = nutrionalInfo;
    resp.say("Added " + foodName + "to your list. " + foodName + " has " + calories + " calories". )
    resp.shouldEndSession(false);
}


module.exports = {
    init: function(app) {
        app.intent("AddFoodIntent", null, addfood)
    }
}
