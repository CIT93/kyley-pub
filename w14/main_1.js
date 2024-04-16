// -----------------------------------------------------------------------------------------------------------------------
// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(46)
//         }, 1)
//     })
// }

// async function start() {
//     const result = await getData()
//     console.log(result)
// }

// async function start2() {
//     getData()
//         .then(result => {
//             console.log(result)
//         })
// }

// start()
// -----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------
// async function start() {
//     const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     const result = await data.json()
//     console.log(result.properties.periods[1].shortForecast)
// }

// async function start2() {
//     fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//         .then(data => data.json())
//         .then(result => {
//             console.log(result.properties.periods[1].shortForecast)
//         })
// }

// start()
// start2()
// -----------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------
// function getData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             // resolve('KHERE is you DATA')
//             reject('Something went wrong!')
//         }, 1)
//     })
// }

// async function start() {
//     try {
//         const result = await getData()
//     }   catch (error) {
//         console.log(`ERROR: ${error}`)
//     }
// }

// async function start2() {
//     const result = await getData()
//         .catch(error => {
//             console.log(`ERROR: ${error}`)
//         })
//     console.log(result)
// }

// start()
// start2()
// -----------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------
// function getData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             // resolve('KHERE is you DATA')
//             reject('Something went wrong!')
//         }, 1)
//     })
// }

// function onSuccess() {
//     console.log(`Success ${result}`)
// }

// function onFailure() {
//     console.log(`ERROR: ${error}`)
// }

// async function start() {
//     try {
//         const result = await getData()
//         onSuccess()
//     }   catch (error) {
//         onFailure()
//     }
// }

// start()
// -----------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------------------
// function getData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             // resolve('KHERE is you DATA')
//             reject('Something went wrong!')
//         }, 1)
//     })
// }

// async function start() {
//     try {
//         const result = await getData()
//         // SUCCESS
//     }   catch (error) {
//         // FAILURE
//     }
// }

// start()
// -----------------------------------------------------------------------------------------------------------------------


async function start() {
    try {
      const data = await fetch('https://api.weather.gov/gridpoints/HNX/53,99/forecast');
      const result = await data.json();
      onSuccess(result.properties.periods[0].temperature);
    } catch(e) {
      onError(e);
    }
  }
  
  function onSuccess(result) {
    console.log(`The temperature low of Fresno, California is ${result}`);
  }
  
  function onError(e) {
    console.log(`ERROR: ${e}`);
  }
  
  start();