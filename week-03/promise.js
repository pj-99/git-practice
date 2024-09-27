function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here

// 從 https://javascript.info/promisify 看到的
// 假設我們要手動將 doJob 轉為 Promise 的話可以這樣轉：
let _doJobPromise = function (job, time) {
    return new Promise((resolve, reject) => {
        // 沒有 reject 的狀況，reject 其實可以拿掉

        // 過了 time 後，才算執行完成，因此在 callback 中放入 resolve
        // data 就是做完 job 後收到的完成時間字串
        doJob(job, time, (data) => {
            resolve(data);
        });
    })
}

// 因此可以寫個 promisify 去將 doJob 轉為 Promise
function promisify(func) {
    return function (...args) {
        return new Promise(resolve => {
            function callback(data) {
                resolve(data);
            }

            // doJob 的 callback 為最後一個參數
            args.push(callback);
            func.call(this, ...args);
        })
    }
}

// 接著便能使用會回傳 Promise 的 doJob 版本
let doJobPromise = promisify(doJob);

// 使用方法 1: 用 then 串接下去
doJobPromise('刷牙', 1000)
    .then(data => {
        console.log(data)
        return doJobPromise('吃早餐', 3000)
    })
    .then(data => {
        console.log(data)
        return doJobPromise('寫功課', 1000)
    })
    .then(data => {
        console.log(data)
        return doJobPromise('吃午餐', 2000)
    })
    .then(console.log)


// 使用方法 2: 用 async, await
// note that in order to use top-level await,
// we need to set "type": "module" in package.json

// 暫停一下避免跟上面的部分混再一起
await new Promise(resolve => setTimeout(resolve, 8000));

console.log("\n又是新的一天")
now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
console.log(await doJobPromise('刷牙', 1000));
console.log(await doJobPromise('吃早餐', 3000));
console.log(await doJobPromise('寫功課', 1000));
console.log(await doJobPromise('吃午餐', 2000));
