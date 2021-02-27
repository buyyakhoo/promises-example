const one = new Promise((resolve, reject) => {
    resolve('Yes')
})

const two = new Promise((resolve, reject) => {
    resolve('Yes')
})

const three = new Promise((resolve, reject) => {
    resolve('Yes')
})

Promise.all([
    one,
    two,
    three
]).then((message) => {
    console.log(message)
})