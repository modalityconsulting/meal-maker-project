var menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse: function(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    };
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName) {
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal includes: Appetizer - ${appetizer.name}, Main - ${main.name}, Dessert - ${dessert.name}. Total price: $${totalPrice}.`;
  }
};

// Adding dishes to each course using the addDishToCourse() method 
// add appetizers
menu.addDishToCourse('appetizers', 'Brushetta', 5.50);
menu.addDishToCourse('appetizers', 'Fried Calamari', 7.50);
menu.addDishToCourse('appetizers', 'Caprese Salad', 6.00);
// add mains
menu.addDishToCourse('mains', 'Lasagna', 13.75);
menu.addDishToCourse('mains', 'Filet Mignon',29.75);
menu.addDishToCourse('mains', 'Grilled Salmon', 18.50);
// add desserts
menu.addDishToCourse('desserts', 'Tiramisu', 6.50);
menu.addDishToCourse('desserts', 'Chocolate Pie', 4.50);
menu.addDishToCourse('desserts', 'Gelato', 4.50);
// Generated a Meal
var meal = menu.generateRandomMeal();
console.log(meal);
