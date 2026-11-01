
//1
function delayGreet(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`hellow ${name}`)

        }, delay);
    })
}
delayGreet('shoam', 5000).then((message) => {
    console.log(message)
})

//2 ignore

//3

function randomOperation() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("Success!");
        } else {
            reject("Failure!");
        }
    })
}

//4
function raceTimers() {
    return new Promise((resolve) => {
        let isFinished = false;


        setTimeout(() => {
            if (!isFinished) {
                isFinished = true;
                resolve("Timer A finished!");
            }
        }, 2000);


        setTimeout(() => {
            if (!isFinished) {
                isFinished = true;
                resolve("Timer B finished!");
            }
        }, 3000);
    });
}

//5 ignore

//6

function waitAll() {
   function waitAll() {
  
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('First');
    }, 1000);
  });

  const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Second');
    }, 2000);
  });

  const thirdPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Third');
    }, 3000);
  });

  return Promise.all([firstPromise, secondPromise, thirdPromise]);
}


waitAll()
  .then((results) => {
    console.log(results);
  });
}


//7 ignore
