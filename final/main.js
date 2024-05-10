import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {renderTbl} from "./render.js";
import {appData, saveLS} from "./storage.js";
import {CLASS} from "./appclass.js";


const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field > 12 || field < 1) {
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
      const appObj = new CLASS(FORM.firstName.value, FORM.lastName.value, parseInt(FORM.startyear.value), parseInt(FORM.currentyear.value), parseInt(FORM.month.value), FORM.hemisphere.value)
      appData.push(appObj);
      saveLS(appData);
      renderTbl(appData);
      FORM.reset();
  } else {
      SUBMIT.textContent = "Form requires first name and last name";
  
  }
});
