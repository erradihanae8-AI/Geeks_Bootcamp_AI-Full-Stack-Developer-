const promise1 = Promise.resolve(3);

promise1.then(result => console.log(result));

const promise2 = Promise.reject("Boo!");

promise2.catch(error => console.log(error));