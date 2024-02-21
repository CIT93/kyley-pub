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

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint is ${obj.cfpTotal}.`;
  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on number in and size of home`;
  const newP = document.createElement("p");
  newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS})`;
  newP.textContent += ` and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
  output.appendChild(newH2);
  output.appendChild(newH3);
  output.appendChild(newP);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  // const cfpObj = {
  //   houseM: houseHoldMembers,
  //   houseS: houseSize,
  //   houseMPTS: houseHoldPTS,
  //   houseSPTS: houseSizePTS,
  //   cfpTotal: total,
  // };
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });

  // displayOutObj(cfpObj);
}

// function displayOutput() {
//   for (arr of cfpData){
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint is ${arr[4]}.`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in and size of home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[2]})`;
//     newP.textContent += ` and a ${arr[1]} size of home (score: ${arr[3]}).`;
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

// function displayOutput() {
//   for (let i = 0; i < cfpData.length; i++){
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint is ${cfpData[i][4]}.`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in and size of home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of people in the house of ${cfpData[i][0]} (score: ${cfpData[i][2]})`;
//     newP.textContent += ` and a ${cfpData[i][1]} size of home (score: ${cfpData[i][3]}).`;
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

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

// const cfpData = [{

// }, {

// }]