var db = require('../utils/database');

function flashBrief(req, res) {
    var dailyCaloricIntake, dailyCarbIntake, dailyFatIntake, dailyProteinIntake;
    var totalCaloricIntake, totalCarbIntake, totalFatIntake, totalProteinIntake;
}

module.exports = {
    init: function(app) {
        app.intent('FlashBriefingIntent', null, null)
    }
}
