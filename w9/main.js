import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM} from "./global.js";
import {cfpData, saveLS} from "./storage.js";

const firstNameError = document.getElementById('firstname');
const lastNameError = document.getElementById('lastname');


function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);



    // Function to validate a single field
function validateField(event) {
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
};

// Attach blur event listeners
firstNameError.addEventListener('blur', validateField);
lastNameError.addEventListener('blur', validateField);


FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameError.getElementById('firstName').value !== '';
  const lastNameIsValid = lastNameError.getElementById('lastName').value !== '';
    if (firstNameIsValid && lastNameIsValid) {
      const houseMembers = parseInt(FORM.housem.value);
      const houseSize = FORM.houses.value;
      start(firstName, lastName, houseMembers, houseSize);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    }
})
