import {FORM, TBL} from "./global.js";
import {saveLS, getLS} from "./storage.js";

const renderTblHeading = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["First Name", "Last Name", "Birth Year", "Current Year", "Month", "Hemisphere Location", "Age", "Season" , "Actions"];
    headingTextArr.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', e => {
    onUpdate(index, data);
  })
  btnEdit.addEventListener('click', e => {
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.startyear.value = obj.birthYear;
    FORM.currentyear.value = obj.currentYear;
    FORM.month.value = obj.monthNumber;
    FORM.hemisphere.value = obj.hemiLocation;
    onUpdate(index, data);
  })
  return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "last", "birthYear", "currentYear", "calendarMonthName", "hemiLocation", "userAge", "earthSeason"]
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td); 
      })
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  })
    return tbody;
  }

const renderTbl = data => {
  TBL.innerHTML = "";
  if(data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

const dataFromLocalStorage = getLS();
if (dataFromLocalStorage) {
    renderTbl(dataFromLocalStorage);
}


export {renderTbl};