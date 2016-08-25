import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.belongsTo('item', {async: true}),
  user: DS.attr(),
  rating: DS.attr(),
  message: DS.attr(),
  date: DS.attr()
});
