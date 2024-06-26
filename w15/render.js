import {FORM, TBL} from "./global.js";
import {saveLS} from "./storage.js";


const averageData = (data) => {
  const reduceData = data.reduce((sum, ea) => 
    sum + ea.total, 
    0,
  );
  const tableHOF = document.getElementById("table-id");
  const newRow = tableHOF.insertRow(-1);
  const cellOne = newRow.insertCell(0);
  const cellTwo = newRow.insertCell(0);
  const cellThree = newRow.insertCell(0);
  const cellFour = newRow.insertCell(0);
  const cellFive = newRow.insertCell(0);
  const newLabel = document.createTextNode(`Average Footprint `);
  const newText = document.createTextNode(`${Math.floor(reduceData/data.length)}`)
  cellTwo.appendChild(newLabel);
  cellOne.appendChild(newText);
}


const renderTblHeading = () => {
    const table = document.createElement("table");
    table.setAttribute("id", "table-id");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "FoodChoice", "Footprint", "Actions"];
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
    FORM.housem.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.foodc.value = obj.foodChoice;
    onUpdate(index, data);
  })
  return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
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
    averageData(data);
  }
    
}

export {renderTbl};

