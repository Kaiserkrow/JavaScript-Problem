const HIGH_TEMPERATURES = {
    yesterday: 75, 
    today: 77,
    tomorrow: 80
};

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
