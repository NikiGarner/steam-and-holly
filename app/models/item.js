import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cost: DS.attr(),
  details: DS.attr(),
  category: DS.attr(),
  feedbacks: DS.hasMany('feedback', {async: true}),
  featured: DS.attr(),
  image: DS.attr()
});
