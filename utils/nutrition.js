var PROTEIN_PER_KG = .825;
var PROTEIN_GRAMS_TO_CALORIES = 4;
var FAT_CALS_PER_TDEE = .25;
var FAT_CALS_TO_GRAMS = 9;
var CARBS_CALS_TO_GRAMS = 4;

var SEDENTARY_FACTOR = 1.2;
var LIGHT_ACTIVITY_FACTOR = 1.375;
var MODERATE_ACTIVITY_FACTOR = 1.55;
var VERY_ACTIVE_FACTOR = 1.725;

function nutrition(weight, age, sex, height, activityLevel) {
    var ree;
    var tdee;
    var protein, proteinCals, fat, fatCals, carbs, carbsCals;
    var weightInKg, heightInCm;

    weightInKg = lbToKg(weight);
    heightInCm = inToCm(height);

    if(sex === "male") {
        ree = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5;
    } else {
        ree = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161;
    }

    switch(activityLevel) {
        case 1:
            tdee = ree * SEDENTARY_FACTOR;
            break;
        case 2:
            tdee = ree * LIGHT_ACTIVITY_FACTOR;
            break;
        case 3: 
            tdee = ree * MODERATE_ACTIVITY_FACTOR;
            break;
        case 4: 
            tdee = ree * VERY_ACTIVE_FACTOR;
            break;
        default: 
            tdee = ree * LIGHT_ACTIVITY_FACTOR;
            break;
    }

    protein = weightInKg * PROTEIN_PER_KG;
    proteinCals = protein * PROTEIN_GRAMS_TO_CALORIES; 
    fatCals = tdee * FAT_CALS_PER_TDEE;
    fat = fatCals / FAT_CALS_TO_GRAMS;
    carbsCals = tdee - proteinCals - fatCals;
    carbs = carbsCals / CARBS_CALS_TO_GRAMS;

    var userMacros = {
        "totalCalories": tdee,
        "protein": protein,
        "fat": fat,
        "carbs": carbs
    }

    return userMacros;
}

function lbToKg(weight) {
    return weight * 0.453592;
}

function inToCm(height) {
    return height * 2.54;
}

console.log(JSON.stringify(nutrition(180, 20, "male", 70, 3), null, 2));
//10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE

//10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 = REE

//Sedentary == REE x 1.2
//Light activity == REE x 1.375
//Moderate activity == REE x 1.55
//Very Active == REE x 1.725
//
//Protein: .825 grams/lb
//Fat: .25 of total caloric intake.
//Carbs: TDEE - proteinCals - fatCals
