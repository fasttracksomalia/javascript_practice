

// setTimeout(
//     function () {
//         console.log("It is morning wake up")
//     }, 000
// )
let timer = setInterval(() => console.log("It is morning, wake up"), 2000);


setTimeout(() => clearInterval(timer),20000)
