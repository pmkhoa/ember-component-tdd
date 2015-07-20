/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Person ${i}`; },
  email(i) { return `person${i}@test.com`; }
});
