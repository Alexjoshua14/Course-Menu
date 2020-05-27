let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
      return this._courses.appetizers();
  },
  set appetizers(appet) {
      this._courses.appetizers.push(appet);
  },
  get mains() {
      return this._courses.mains;
  },
  set mains(main) {
      this._courses.mains.push(main);
  },
  get desserts() {
      return this._courses.desserts();
  },
  set desserts(dessert) {
      this._courses.desserts.push(dessert);
  },
  get courses() {
    return _courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this[`${courseName}`] = dish;
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[`${courseName}`];
    let ranInd = Math.floor(Math.random() * dishes.length);
    return dishes[ranInd];
  },
  generateRandomMeal() {
    let meal = [];
    meal.push(this.getRandomDishFromCourse('appetizers'));
    meal.push(this.getRandomDishFromCourse('mains'));
    meal.push(this.getRandomDishFromCourse('desserts'));
    let totPrice = 0;
    meal.forEach(dish => totPrice += dish.price);
    return `${meal[0].name}, ${meal[1].name}, ${meal[2].name}, \$ ${totPrice}`
    
  }

};

menu.addDishToCourse('appetizers', 'onion rings', 4);
menu.addDishToCourse('appetizers', 'fries', 3);
menu.addDishToCourse('appetizers', 'wings', 6);

menu.addDishToCourse('mains', 'steak', 21);
menu.addDishToCourse('mains', 'spagetti', 18);
menu.addDishToCourse('mains', 'prawns', 23);

menu.addDishToCourse('desserts', 'cheesecake', 11);
menu.addDishToCourse('desserts', 'fruit cup', 7);
menu.addDishToCourse('desserts', 'ice cream', 8);

console.log(menu.getRandomDishFromCourse('mains'));
console.log(menu.generateRandomMeal());
