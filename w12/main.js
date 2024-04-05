const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output")

const start = (callback, time) => {
    setTimeout(() => {
        const done = `🏆`;
        callback(done);
    },time * 600)
}

const complete = done => {
    const finished = document.createElement("h3");
    finished.textContent = "STOP";
    const congrats = document.createElement("h4");
    congrats.textContent = `Congratulations ${done}!`;
    OUTPUT.appendChild(finished);
    OUTPUT.appendChild(congrats);
}

const syncrFoodText = (foods, rounds) => {
    OUTPUT.innerHTML = "";
    if (rounds > 1) {
    const newP = document.createElement("p");
    newP.textContent = `You have ${rounds} rounds to eat --- Goal is to eat as many ${foods} in the alloted time frame!`;
    OUTPUT.appendChild(newP);
    } else {
    const newP = document.createElement("p");
    newP.textContent = `You have ${rounds} round to eat --- Goal is to eat as many ${foods} in the alloted time frame!`;
    OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener('submit', e => {
  e.preventDefault();
  const foods = FORM.foods.value;
  const rounds = parseInt(FORM.rounds.value);
  const time = parseInt(FORM.time.value);
  start(complete, time);
  syncrFoodText(foods, rounds);
  FORM.reset();
});

