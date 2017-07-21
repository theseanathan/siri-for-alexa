var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var APPLICATION_ID = "d58add05";
var APPLICATION_KEY = "e0723d8ec13aa3b88440fb1f4bc7a365";

console.log(nutrientsByFood(process.argv[2]));

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

    if (!response.hasOwnProperty("foods"))
    {
	return {"name":"FAIL"}
    }

    return {
	"name": getValue(response,"food_name"),
	    "calories": getValue(response,"nf_calories"),
	    "total_fat": getValue(response,"nf_total_fat"),
	    "sat_fat": getValue(response,"nf_saturated_fat"),
	    "cholesterol": getValue(response,"nf_cholesterol"),
	    "sodium": getValue(response,"nf_sodium"),
	    "carbs": getValue(response,"nf_total_carbohydrate"),
	    "fiber": getValue(response,"nf_dietary_fiber"),
	    "sugar": getValue(response,"nf_sugars"),
	    "protein": getValue(response,"nf_protein"),
	    "potassium": getValue(response,"nf_potassium")
    }
}

function getValue(response, key)
{
    return !response["foods"][0][key] ? 0 : response["foods"][0][key];
}