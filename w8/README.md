My Understanding of the Code

Firstly in order to begin understanding the code I set break points in specific areas in order to run through the code and get a better understanding of the code.

Once the eventlistner is read when the submit button is clicked the values entered into the HTML are valued set and those values are taken by the variables labeled with const.

After the values are taken and the variables are created the start function is ran taking all the information. Here derterminHouseHoldPts and determineHouseSizePts are ran using the values that were taken from the HTML. 

These values are then aquired from cfp.js where each data is set to a certain value. We had to parse the array for houseMembers to an Int in order for this step to work correctly.

After the houseHoldPTS and houseSizePTS values are established the data is then pushed into an array variable labled cfpData.

With the data pushed in and variables changed to easier to managed values OUTPUT.innerHTML = ""; clears any left over data that was already saved to ensure only the new data will be outputed.

Next the renderTbl(cfpData) code line is ran.

First cfpData is transferd into renderTbl(data) and the variable is now changed to data instead of cfpData.

renderTblHeading() function is ran here a table is created using document.createElement and is referenced to "table" in the HTML.

Next thead is created the same way using the same code line.

Next tr is created using the same code.

The next code that is ran is the loop headingTextArr.forEach. This function is ran a set number of times depending on the number of values that are stored. Which is shown by the forEach.

(Text) that is labled is actually the headingTextArr array that is taken before and the values are the values set and established before in the code lines above.

This creates a textcontent that is stored and then pushed out to the HTML when appended to the tr.

Afterwards the code is saved appended to the thead and table and table is returned.

The code then returned to renderTbl(data) function where a similar forEach function loop is ran creating the same textcontent and then appending steps as renderTblHeading. This time though the values are taken from before the cfpData that was pushed after being collected from the HTML.

Each line creates an "td" and the the values are sent to their corresponding "td" using appendChild. Afterwards the new table is appended containing all data and thus outputted onto the DOM.

Lastly the code FORM.reset() is ran in order to clear the data that the user had written in prior. Now awaiting for new data to be entered.


HOW TO POPULATE DATA AFTER CLICKING EDIT?
You would enter the data back manually by setting the array's values to the given values by the user.
