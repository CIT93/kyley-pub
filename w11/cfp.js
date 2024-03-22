const determineHouseSizePts = (size = 100) => {
    let houseSizePoints = 0;
    if (size === "large") {
      houseSizePoints = 10;
    } else if (size === "medium") {
      houseSizePoints = 7;
    } else if (size === "small") {
      houseSizePoints = 4;
    } else if (size === "apartment") {
      houseSizePoints = 2;
    }
    return houseSizePoints;
  }
  
  const determineHouseHoldPts = (numberInHousehold = 100) => {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
    return houseHoldPoints;
  }

  const determineFoodChoicePts = (foodChoice = 100) => {
    let foodChoicePoints = 0;
    if (foodChoice === "daily") {
      foodChoicePoints = 10;
    } else if (foodChoice === "weekly") {
      foodChoicePoints = 8;
    } else if (foodChoice === "vegetarian") {
      foodChoicePoints = 4;
    } else if (foodChoice === "wild") {
      foodChoicePoints = 2;
    } else if (foodChoice === "packaged") {
      foodChoicePoints = 12;
    } 
    return foodChoicePoints;
  }

  export {determineHouseHoldPts, determineHouseSizePts, determineFoodChoicePts};