const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output")

const start = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const done = `🏆`;
            resolve(done);
        },time * 600);
    });
};

const complete = (done) => {
    return new Promise((resolve, reject) => {
        const finished = document.createElement("h3");
        finished.textContent = "STOP";
        const congrats = document.createElement("h4");
        congrats.textContent = `Congratulations ${done}!`;
        OUTPUT.appendChild(finished);
        OUTPUT.appendChild(congrats);
        resolve();
    });
};

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

const onError = () => {
    console.log('ERROR')
}

const onFinally = () => {
    console.log('GO GO GO FINISH STRONG!')
}

FORM.addEventListener('submit', e => {
  e.preventDefault();
  const foods = FORM.foods.value;
  const rounds = parseInt(FORM.rounds.value);
  const time = parseInt(FORM.time.value);
  start(time)
    .then(syncrFoodText(foods, rounds))
    .then(complete)
    .catch(onError)
    .finally(onFinally)
    FORM.reset();
});

