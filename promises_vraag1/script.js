const getSucceedingPromise = message =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(message), 500);
  });

const getFailingPromise = errorMessage =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(errorMessage), 500);
  });

// Only using .then() call, passing it a succes and a failure handling function

let promise1 = getSucceedingPromise("promise 1 succeeds");

promise1.then(
  result => console.log(result),
  error => console.log(error)
);

let promise2 = getFailingPromise("error promise 2");

promise2.then(
  result => console.log(result),
  error => console.log(error)
);

// Here we use catch to catch errors, the result is very similar to example 1 and 2
// there's no advantage to using .catch(), yet.

let promise3 = getSucceedingPromise("promise 3 succeeds");

promise3
  .then(resolved => console.log(resolved))
  .catch(error => console.log(error));

let promise4 = getFailingPromise("error promise 4");

promise4
  .then(resolved => console.log(resolved))
  .catch(error => console.log(error));

// Now we chain multiple .then() calls. We only have to use catch once
// here instead of repeating the error handling function in every .then() call.

let promise5 = getSucceedingPromise("promise 5 succeeds");

promise5
  .then(resolved => getSucceedingPromise("chained promise 5-1"))
  .then(resolved => getSucceedingPromise("chained promise 5-2"))
  .then(resolved => getSucceedingPromise("chained promise 5-3"))
  .then(resolved => console.log(resolved))
  .catch(error => console.log(error));

let promise6 = getSucceedingPromise("promise 6 succeeds");

promise6
  .then(resolved => getSucceedingPromise("chained promise 6-1"))
  .then(resolved => getSucceedingPromise("chained promise 6-2"))
  .then(resolved => getFailingPromise("chained promise 6-3 error"))
  .then(resolved => console.log(resolved))
  .catch(error => console.log(error));
