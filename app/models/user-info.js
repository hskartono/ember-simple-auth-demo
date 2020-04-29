import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  userName: DS.attr('string'),
  firstName:  DS.attr('string')
});
