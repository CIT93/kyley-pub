import {renderTbl} from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {cfpData, saveLS} from "./storage.js";
import {FP} from "./fp.js";


const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return {
        glass: e.target.glass.checked,
        plastic: e.target.plastic.checked,
        paper: e.target.paper.checked,
        aluminum: e.target.aluminum.checked,
        steel: e.target.steel.checked,
        compost: e.target.compost.checked,
        recyclePoints: (24 - (numberChecked * 4))
    }
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
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodc.value, FORM.otherfood.value, FORM.water.value, FORM.waterdoubled.value, parseInt(FORM.housepurchase.value), parseInt(e.target.waste.value), determineRecycleItems(e), parseInt(e.target.personal.value), parseInt(e.target.public.value), parseInt(e.target.flight.value));
        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    
    }
});



