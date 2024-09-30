//Zad 1
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World");
      }, 2000);
    });
  }
  helloWorld().then((result) => {
    console.log(result);
  });
  //Zad 2
  const checkEvenOdd = (number) =>
    new Promise((resolve, reject) =>
      number % 2 === 0 ? resolve("Even") : reject(new Error("Odd"))
    );
  checkEvenOdd(1).then(console.log).catch(err => console.error(err.message));
  checkEvenOdd(2).then(console.log).catch(err => console.error(err.message));
  //Zad 3
  function numberPromise(initialValue) {
    return new Promise((resolve) => {
      resolve(initialValue);
    });
  }
  numberPromise(5)
    .then(result => result + 5)
    .then(result => result * 2)
    .then(result => console.log(result))
    //Zad 4
    function waitForBoth(promiseFunc1, promiseFunc2) {
        return Promise.all([promiseFunc1(), promiseFunc2()]);
      }
      const promise1 = () => new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000));
      const promise2 = () => new Promise((resolve) => setTimeout(() => resolve('Result 2'), 2000));
      
      waitForBoth(promise1, promise2)
        .then(results => console.log(results))
        //Zad 5
        function timeoutPromise() {
            return new Promise((_, reject) => {
              setTimeout(() => {
                reject(new Error("Request timed out"));
              }, 3000);
            });
          }
          timeoutPromise()
            .catch(error => console.error(error.message)); 
        //Zad 6
        function promisesRace() {
            const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 won'), 2000));
            const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 won'), 1000));
            return Promise.race([promise1, promise2]);
          }
          promisesRace()
            .then(result => console.log(result))
            .catch(error => console.error(error));      
            //Zad 7
            function randomPromise() {
                return new Promise((resolve, reject) => {
                  const success = Math.random() >= 1; 
                  setTimeout(() => {
                    if (success) {
                      resolve("Success");
                    } else {
                      reject(new Error("Error"));
                    }
                  }, 1000); 
                });
              }
              randomPromise()
                .then(result => console.log(result))
                .catch(error => console.error(error.message)) 
                .finally(() => console.log("Finished"));  
      
 
