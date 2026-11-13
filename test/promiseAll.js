const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((res) => {
          results[i] = res;
          resolved++;
          if (resolved === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
};

myPromiseAll([Promise.resolve(1), Promise.resolve(), Promise.reject("errorr")])
  .then((res) => console.log("REsolved", res))
  .catch((err) => console.log("Error", err));
