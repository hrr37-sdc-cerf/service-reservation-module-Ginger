const db = require('./index.js');
const faker = require('faker');


var generateReservations = function() {

  //for (var i = 1; i <= 2000; i++) {
  for (var i = 1; i <= 100000; i++) {

    //var randomRestaurantId = faker.random.number({"min": 1, "max": 1});
    var randomRestaurantId = faker.random.number({"min": 1, "max": 100});
    var randomTableNumber = faker.random.number({"min": 1, "max": 4});
    var randomDate = faker.date.between('2019-04-12', '2019-05-01');
    var randomTime = faker.random.objectElement({tenAm: 600, onePm: 780, twoPm: 840, fourPm: 960, sixPm: 1080, sevenPm: 1140, eightPm: 1200
    });
    var formattedRandomDate = randomDate.toISOString().slice(0,10);
    db.addReservation(randomRestaurantId, randomTableNumber, formattedRandomDate, randomTime, function(err, results) {
      if (err) {
        console.log('Can not add reservations');
      } else {
        console.log(results);
      }
    });
  }
}


var generateTables = function() {

  //for (var restaurantId = 1; restaurantId <= 1; restaurantId++) {
  for (var restaurantId = 1; restaurantId <= 100; restaurantId++) {
    var tableNumber = 1;
    for (var i = 1; i <= 4; i++) {
      var maxOccupancy = faker.random.objectElement({two: 2, four: 4, six: 6, eight: 8});

      db.addTable(restaurantId, tableNumber, maxOccupancy, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          console.log(results);
        }
      });
      tableNumber += 1;
    }
  }
}


generateReservations();
generateTables();



