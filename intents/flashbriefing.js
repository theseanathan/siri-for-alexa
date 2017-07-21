var db = require('../utils/database');

var nutrition = require('../utils/nutrition');
var macroInfo = nutrition.getMacros(180, 20, "male", 170, 3);

function flashBrief(req, res) {
    var dailyCaloricIntake = macroInfo.calories; 
    var dailyCarbIntake = macroInfo.carbs;
    var dailyFatIntake = macroInfo.total_fat;
    var dailyProteinIntake = macroInfo.protein;

    var totalCaloricIntake = req.getSession().get("calories");
    var totalCarbIntake = req.getSession().get("carbs"); 
    var totalFatIntake = req.getSession().get("fat");
    var totalProteinIntake= req.getSession().get("protein");
    
    var dailyMacroBrief = "Your daily caloric intake goal is " + dailyCaloricIntake
        + ". You should be eating " + dailyCarbIntake + " grams or carbs, " 
        + dailyFatIntake + "grams of fat, and " + dailyProteinIntake 
        + " grams of protein.";
    var totalMacroBrief = "You've eaten about " + totalCaloricIntake 
        + " calories today. Among the calories you've eaten, you've had "
        + totalCarbIntake + " grams of carbs, " + totalFatIntake + "grams of fat"
        + ", and " + totalProteinIntake + " grams of fat."; 
    var leftoverCalories = "You have " + (dailyCaloricIntake - totalCaloricIntake) 
        + " calories left for the day.";
    
    res.say(dailyMacroBrief + totalMacroBrief + leftoverCalories).send();
}

module.exports = {
    init: function(app) {
        app.intent('FlashBriefingIntent', null, flashBrief)
    }
}
