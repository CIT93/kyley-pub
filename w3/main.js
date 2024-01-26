let carbonFootprintPoints = 0;

function determineHouseHoldPts(numberInHousehold) {
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(`Based on the number of member in the household of ${numberInHousehold} the total points would be ${carbonFootprintPoints}.`);
}

// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

function determineHouseSizePts(houseSize) {
    if (houseSize === "large") {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (houseSize === "medium") {
      carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (houseSize === "small") {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "apartment") {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the house size of ${houseSize} the total points would be ${carbonFootprintPoints}.`);
  }

determineHouseHoldPts(6);
determineHouseSizePts("medium");
