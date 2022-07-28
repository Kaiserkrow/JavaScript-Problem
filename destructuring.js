const HIGH_TEMPERATURES = {
    yesterday: 75, 
    today: 77,
    tomorrow: 80
};
 // note: use curly bracket {} if you're going to destructure an object and use brackets [] if destructuring an array 
const{today, tomorrow} = HIGH_TEMPERATURES; //getting the value of an object using destructuring method
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; //giving the extracted value a variable name

const personTwo = {
    name: "lolski",
    age: 22,
    favoriteFood: "chicken",
    address: {
        street: "idk",
        baranggay: "talisay"
    }
}

const {name, favoriteFood, address: {street}} = personTwo;

console.log(street);
console.log(`${highToday} and ${highTomorrow}`);  //string literal


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) =>  (max + min)/ 2.0;    //wrap your head around this, don't know na pwede pala idestructure ang object na walang pinagkukunan na object, kasi isa siyang function????? 
// Only change code above this line

console.log(half(stats));