/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.name.firstName
  // name: 'Peter',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // }

  // firstName: faker.name.firstName       // using faker
  // lastName: faker.name.firstName
  // zipCode: faker.address.zipCode
});
