import DS from 'ember-data';
import attr from 'ember-data/attr';

const { Model } = DS;

export default Model.extend({
  // Attributes
  userId: attr('string'),
  name: attr('string'),
  password: attr('string'),
  passwordExpiry: attr('string')
});
