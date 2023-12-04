

// let multiplyByTwo =  function (num1) {
//     return num1 * 2;
// }

// variable function
//let multiplyByTwo = (num1, num2) => num1 * num2;

//let multiplyByTwo = () => 8 * 8;

// normal
// function multiplyByTwo(num1) {
//     return num1 * 2;
// }

// let result = multiplyByTwo()
// console.log(result)

// let multiply = (num1, num2) => num1 * num2;





// let result = addFive(23,2)
// console.log(" the result is " + result)


// let multiply =  (first, second) => first * second;
// console.log(multiply(2,5))



// let addFive = num =>   num + 5;
// let result = addFive(23)
// console.log(" the result is " + result)




// let shoppingItem = ["Sugar", "Tea", "Milk", "Tamato"]

// shoppingItem.forEach(param1 => console.log("Get ", param1))

// console.log(shoppingItem)

// Origin, double each number
// let theOriginalArray;

// const firstName = "Maryam"
// console.log(`She goes to school. but her mum  ${firstName} said don't go `)
// console.log(` ${firstName}  was right because her daughter was too young to go to school `)

// "strict mode"
// lastName = "Ali"
// console.log(lastName)

// runtime errors 
// compile errors


// let students = ["Ali", "Maryam", "Idle", "Bile"]
// let valuePrinter = (item, index) => console.log(item + " is good at index " + index)
// students.forEach(valuePrinter)

let err = new Error("You don't have internet")

try {
    const isThereInternet = true
    throw err;

    if (isThereInternet == true) {
        console.log("Download the file")
    } else {
        console.log("no internet")

    }
} catch (e) {
    console.log(e.message)
    console.log("Please connect to the internet")

} finally {
    console.log("regardless of error or not, I will run")
}


