var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var APPLICATION_ID = "d58add05";
var APPLICATION_KEY = "e0723d8ec13aa3b88440fb1f4bc7a365";

console.log(nutrientsByFood("turkey sandwich"));

function nutrientsByFood(foodName)
{
    var endpoint = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    var xhttp = new XMLHttpRequest();
    var body = {
	"query":foodName
    }

    xhttp.open("POST", endpoint , false);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("x-app-id", APPLICATION_ID);
    xhttp.setRequestHeader("x-app-key", APPLICATION_KEY);

    xhttp.send(JSON.stringify(body));
    var response = JSON.parse(xhttp.responseText);
    var foods="foods";
    return {
	"total_fat": response[foods][0]["nf_total_fat"],
	    "sat_fat": response[foods][0]["nf_saturated_fat"],
	    "cholesterol": response[foods][0]["nf_cholesterol"],
	    "sodium": response[foods][0]["nf_sodium"],
	    "carbs": response[foods][0]["nf_total_carbohydrate"],
	    "fiber": response[foods][0]["nf_dietary_fiber"],
	    "sugar": response[foods][0]["nf_sugars"],
	    "protein": response[foods][0]["nf_protein"],
	    "potassium": response[foods][0]["nf_potassium"]
    }

}
