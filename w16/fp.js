class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    otherFood,
    waterConsumption,
    waterDoubled,
    housePurchase
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.otherFood = otherFood;
    this.waterConsumption = waterConsumption;
    this.waterDoubled = waterDoubled;
    this.housePurchase = housePurchase;
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodChoicePoints();
    this.otherFoodPoints();
    this.waterConsumptionPoints();
    this.total();
  }
  houseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }
  houseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if ((this.houseSize = "small")) {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }
  foodChoicePoints() {
    if (this.foodChoice === "daily") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "weekly") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "wild") {
      this.foodChoicePoints = 2;
    } else if (this.foodChoice === "packaged") {
      this.foodChoicePoints = 12;
    }
  }
  otherFoodPoints() {
    if (this.otherFood === "prepackaged") {
      this.otherFoodPoints = 12;
    } else if (this.otherFood === "balanced") {
      this.otherFoodPoints = 6;
    } else if (this.otherFood === "fresh") {
      this.otherFoodPoints = 2;
    }
  }
  waterConsumptionPoints() {
    if (this.waterConsumption === "high") {
      this.waterConsumptionPoints = 3;
    } else if (this.waterConsumption === "average") {
      this.waterConsumptionPoints = 2;
    } else if (this.waterConsumption === "low") {
      this.waterConsumptionPoints = 1;
    } else if (this.waterConsumption === "none") {
      this.waterConsumptionPoints = 0;
    }
  }
  total() {
    if (this.waterDoubled === "yes") {
      this.total =
        this.houseHoldPoints +
        this.houseSizePoints +
        this.foodChoicePoints +
        this.otherFoodPoints +
        (this.waterConsumptionPoints * 2) +
        this.housePurchase
    } else if (this.waterDoubled === "no") {
      this.total =
        this.houseHoldPoints +
        this.houseSizePoints +
        this.foodChoicePoints +
        this.otherFoodPoints +
        this.waterConsumptionPoints +
        this.housePurchase
    }
  }
}

export{FP}

