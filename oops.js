// var player = new Object();
// player.firstName = "Cristiano"
// player.lastName = "Ronaldo"
// player.age = 38
// //console.log(player.lastName)

// player.shoot = function () {
//    let lastName = "Waryaa"
//    console.log(player.firstName + " " + player.lastName + " shot the ball")
// }

// console.log(player.shoot())


// create literal object
// var player = {
//    firstName: "Cristiano",
//    lastName: "Ronaldo",
//    age: 38,
//    shoot: function () {
//       console.log(player.firstName + " " + player.lastName + " shot the ball")
//    }
// };
// console.log(player.shoot())


// let player2 = {
//     firstName : "Renaldo",
//     lastName : "Ferari",
//     age:99,
//     children: ["Lewis", "Carlos"]
// }

// player2.yearOfBirth = function() {
//     let now = new Date()
//     now.setFullYear(now.getFullYear() - player2.age)
//     console.log(now.getFullYear())
// }

// player2.yearOfBirth()
// constructor function 
// before 2015
// function Player(firstName, lastName, age, team, shirtNumber) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.age = age;
//    this.team = team;
//    this.shirtNumber = shirtNumber;

//    this.shoot = function () {
//       console.log(this.firstName + " has shot the ball");
//    }

// }

// let player1 = new Player("Cristiano", "Ronaldo", 38, "Al-Nasir", "7")
// let player2 = new Player("Lionel", "Messi", 36, "Miami", "10")
// let player3 = new Player("Erling", "Halland", 23, "Man City", "9")

// console.log(player1)
// console.log(player2)
// console.log(player3)


// function Fan(firstName, lastName, age, seatNumber) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.age = age;
//    this.seatNumber = seatNumber;

//    this.waveFlag = function () {
//       console.log(firstName + " is waving the flag");
//    }

// }
class Fan {

   constructor(firstName, lastName, age, seatNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.seatNumber = seatNumber;

   }
   waveFlag() {
      let firstName = "Waryaa"
      console.log(this.firstName + " is waving the flag");
   }

}

let fan1 = new Fan("Jushua", "Lo", 33, 55)
let fan2 = new Fan("Abdi", "Ali", 20, 33)
let fan3 = new Fan("Fatima", "Said", 19, 109)

console.log(fan1.waveFlag())

// let { firstName } = fan1; // destructuring Accessor Notation
// console.log(firstName)
// console.log(fan1, fan2, fan3)
// fan1.firstName = "Waryaa"
//console.log(fan1.firstName) // Dot Accessor Notation
// console.log(fan1['lastName']) // Square Accessor Notation



// let fan2 = {
//     firstName : "Alan",
//     lastName : "Shirer",
//     age : 33,
//     seatNumber : 55
// }


// console.log(fan2)

// class Fan {
//     constructor(firstName, lastName, age, seatNumber) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.seatNumber = seatNumber;
//     }


//     waveFlag() {
//         console.log(this.firstName + " is waving the flag");
//     }

//     celebrate() {
//         console.log(this.firstName + " is celebrating");
//     }
// }




//console.log(fan1["firstName"])

// let {lastName,seatNumber} = fan1;
// console.log(seatNumber)

//     fan1.waveFlag()

// var fan2 = new Fan("Ali","Ahmed",31,45)
//     fan2.waveFlag()
// var fan3 = new Fan("Nor","Sayid",23,29)
//     fan3.waveFlag()

// console.log(fan1)
// console.log(fan2)
// console.log(fan3)



//console.log(player2)

let biggerNumber = Math.max(2,5,37,89, 99)
console.log(biggerNumber)

// 




