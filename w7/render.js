const TBL = document.getElementById("tab-data")

function renderTblHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["First", "Last", "HouseHold", "HouseSize", "Footprint"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }

  function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    data.forEach(function (item) {
      const tr = document.createElement("tr");
      const tdArr1 = document.createElement("td");
      const tdArr2 = document.createElement("td");
      const tdArr3 = document.createElement("td");
      const tdArr4 = document.createElement("td");
      const tdArr5 = document.createElement("td");
      tdArr1.textContent = item.firstName;
      tdArr2.textContent = item.lastName;
      tdArr3.textContent = item.houseMPTS;
      tdArr4.textContent = item.houseSPTS;
      tdArr5.textContent = item.cfpTotal;
      tr.appendChild(tdArr1);
      tr.appendChild(tdArr2);
      tr.appendChild(tdArr3);
      tr.appendChild(tdArr4);
      tr.appendChild(tdArr5);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

  export {renderTbl, renderTblHeading};