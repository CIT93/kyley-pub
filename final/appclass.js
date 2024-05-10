class CLASS {
    constructor(first, last, birthYear, currentYear, monthNumber, hemiLocation) {
        this.first = first;
        this.last = last;
        this.birthYear = birthYear;
        this.currentYear = currentYear;
        this.monthNumber = monthNumber;
        this.hemiLocation = hemiLocation;
        this.calendarMonthName();
        this.earthSeason();
        this.userAge();
    }
    calendarMonthName() {
        if (this.monthNumber === 1) {
            this.calendarMonthName = "January";
          } else if (this.monthNumber === 2) {
            this.calendarMonthName = "Febuary";
          } else if (this.monthNumber === 3) {
            this.calendarMonthName = "March";
          } else if (this.monthNumber === 4) {
            this.calendarMonthName = "April";
          } else if (this.monthNumber === 5) {
            this.calendarMonthName = "May";
          } else if (this.monthNumber === 6) {
            this.calendarMonthName = "June";
          } else if (this.monthNumber === 7) {
            this.calendarMonthName = "July";
          } else if (this.monthNumber === 8) {
            this.calendarMonthName = "August";
          } else if (this.monthNumber === 9) {
            this.calendarMonthName = "September";
          } else if (this.monthNumber === 10) {
            this.calendarMonthName = "October";
          } else if (this.monthNumber === 11) {
            this.calendarMonthName = "November";
          } else if (this.monthNumber === 12) {
            this.calendarMonthName = "December";
          }
    }
    earthSeason() {
        if (this.hemiLocation === "Northern") {
            if (this.monthNumber === 9 || this.monthNumber === 10 || this.monthNumber === 11) {
                this.earthSeason = "Autumn";
            } else if (this.monthNumber === 6 || this.monthNumber === 7 || this.monthNumber === 8) {
                this.earthSeason = "Summer";
            } else if (this.monthNumber === 3 || this.monthNumber === 4 || this.monthNumber === 5) {
                this.earthSeason = "Spring";
            } else if (this.monthNumber === 1 || this.monthNumber === 2 || this.monthNumber === 12) {
                this.earthSeason = "Winter";
            }
        } else if (this.hemiLocation === "Southern") {
            if (this.monthNumber === 9 || this.monthNumber === 10 || this.monthNumber === 11) {
                this.earthSeason = "Spring";
            } else if (this.monthNumber === 6 || this.monthNumber === 7 || this.monthNumber === 8) {
                this.earthSeason = "Winter";
            } else if (this.monthNumber === 3 || this.monthNumber === 4 || this.monthNumber === 5) {
                this.earthSeason = "Autumn";
            } else if (this.monthNumber === 1 || this.monthNumber === 2 || this.monthNumber === 12) {
                this.earthSeason = "Summer";
            }
        }
    }
    userAge() {
        this.userAge = this.currentYear - this.birthYear;
    }
}

export{CLASS}

