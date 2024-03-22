import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts, determineFoodChoicePts} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {cfpData, saveLS} from "./storage.js";
import {FP} from "./fp.js";

const start = (...formInfo) => {
  const houseHoldPTS = determineHouseHoldPts(formInfo[2]);
  const houseSizePTS = determineHouseSizePts(formInfo[3]);
  const foodChoicePTS = determineFoodChoicePts(formInfo[4])
  const total = houseHoldPTS + houseSizePTS + foodChoicePTS;
  cfpData.push({
    firstName: formInfo[0],
    lastName: formInfo[1],
    houseM: formInfo[2],
    houseS: formInfo[3],
    foodC: formInfo[4],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);


const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
}


FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', e => {
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodc.value);
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodc.value);
        // fpObj.houseHoldPoints();
        // fpObj.houseSizePoints();
        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    
    }
});


// const me = {
//     name: "Rio",
//     hairColor: "Red",
//     location: "Office",
//     sleepScore: 95,
//     introduce: function() {
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`)
//     }
// }


// const you = {
//     name: "Jan",
//     hairColor: "Brown",
//     location: "Home",
//     sleepScore: 55,
//     introduce: function() {
//         console.log(this)
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`)
//     }
// }


// me.introduce();
// you.introduce();


class Human {
  constructor(name, hairColor, location, sleepScore){
      this.name = name
      this.hairColor = hairColor
      this.location = location
      this.sleepScore = sleepScore
  }
  introduce() {
      console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleep score of ${this.sleepScore}!`)
  }
}

const rio = new Human("Rio", "Red", "office", 95);
const jane = new Human("Jan", "Brown", "home", 55);
rio.introduce();
jane.introduce();
rio.hrv = 50;
