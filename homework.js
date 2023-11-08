class Hamster {
    constructor(owner, name, price) {
      this.owner = owner;
      this.name = name;
      this.price = price;
    }
    wheelRun() {
      console.log('squeak squeak');
    }
    eatFood() {
      console.log('nibble nibble');
    }
    getPrice() {
      return this.price;
    }
  } const gus = new Hamster('Timmy', 'Gus',15);
  
  
  class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
      this.name = name;
      this.age = age;
      this.height = height || 0;
      this.weight = weight || 0;
      this.mood = mood || 0;
      this.hamsters = hamsters || [];
      this.bankAccount = bankAccount || 0;
    }
    getName() {
      console.log(this.name);
    }
    getAge() {
      console.log(this.age);
    }
    getWeight() {
      console.log(this.weight)
    }
    greet(name) {
      console.log(`Hi ${name}! How are you?`);
    }
    eat() {
      this.weight = this.weight + 1;
      this.mood = this.mood + 1;
    }
    exercise() {
      this.weight = this.weight - 1;
    }
    ageUp(years) {
      this.age += years;
      this.height += years;
      this.weight += years;
      this.mood -= years;
      this.bankAccount += 10 * years;
    }
     
    buyHamster(hamster) {
      this.mood += 10;
      this.hamsters.push(hamster);
      this.bankAccount -= hamster.getPrice();
    }
  } 
  const timmy = new Person('Timmy');
  
  // timmy.buyHamster(gus);
  // console.log(timmy);
  
  timmy.ageUp(5);
  
  timmy.eat();
  timmy.eat();
  timmy.eat();
  timmy.eat();
  timmy.eat();
  
  timmy.exercise();
  timmy.exercise();
  timmy.exercise();
  timmy.exercise();
  timmy.exercise();
  
  timmy.ageUp(9);
  

  
  timmy.buyHamster(gus);
  
  timmy.ageUp(15);
  
  timmy.eat();
  timmy.eat();
  
  timmy.exercise();
  timmy.exercise();

  console.log (timmy);

  class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
      
    }
  }
  
  class Chef{
    static generateMeal(appetizer, entree, dessert){
        const newDinner = new Dinner ('appetizer', 'entree', 'dessert');
       return console.log(newDinner);
    }
  }

  Chef.generateMeal();
  Chef.generateMeal();
  Chef.generateMeal();

 