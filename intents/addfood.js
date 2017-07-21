var foodapi = require('../utils/')

function addfood(req, resp) {
    foodName = req.slots['Food'].value

}


module.exports = {
    init: function(app) {
        app.intent("AddFoodIntent", null, addfood)
    }
}
