const HIGH_TEMPERATURES = {
    yesterday: 75, 
    today: 77,
    tomorrow: 80
};

const{today, tomorrow} = HIGH_TEMPERATURES; //getting the value of an object using destructuring method


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
