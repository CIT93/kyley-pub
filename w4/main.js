const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints;
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

function determineHouseHoldPts(numberInHousehold) {
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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}


function displayOutput() {
  for (arr of cfpData){
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `Carbon Footprint total is ${arr[4]}.
    The number of household members is ${arr[0]}. Which gives is a carbon footprint score of ${arr[2]}.
    The size of the house is ${arr[1]}. Which gives is a carbon footprint score of ${arr[3]}.`
    output.appendChild(newP);
  }
}

start(7, "apartment");
start(7, "large");
start(7, "medium");
start(7, "small");
start(6, "apartment");
start(6, "large");
start(6, "medium");
start(6, "small");
start(5, "apartment");
start(5, "large");
start(5, "medium");
start(5, "small");
start(4, "apartment");
start(4, "large");
start(4, "medium");
start(4, "small");
start(3, "apartment");
start(3, "large");
start(3, "medium");
start(3, "small");
start(2, "apartment");
start(2, "large");
start(2, "medium");
start(2, "small");
start(1, "apartment");
start(1, "large");
start(1, "medium");
start(1, "small");

displayOutput()