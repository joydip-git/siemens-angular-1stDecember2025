const divide = (a, b) => {
  const p = new Promise(
    //executor function
    //reference of Proimse API's static methods, resolve and reject, are passed to the executor function as two arguments by Promise itself, while calling your executor callback
    (resolveFnRef, rejectFnRef) => {
      //task
      const res = a / b;
      if (res === Infinity) {
        //throw new Error("divisor should NOT be zero");
        const error = new Error("divisor should NOT be zero");
        rejectFnRef(error);
      }
      //return res;
      console.log(res);
      resolveFnRef();
      //resolveFnRef(res);
    }
  );
  return p;
};

const add = (a, b) => a + b;

// const divRes = divide(12, 3);
// console.log(divRes);

// divide(12, 3).catch((err) => {
//   console.log(err);
// });

//divide(12, 3);

const divPromise = divide(12, 3);
divPromise
  .then(
    //onSuccess callback
    (data) => {
      console.log(data);
      //return data;
    }
  )
  .catch(
    //onFailure callback
    (err) => {
      console.log(err);
      //throw err;
    }
)

const addRes = add(12, 3);
console.log(addRes);
