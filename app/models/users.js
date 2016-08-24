import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  feedbacks: DS.hasMany('feedback', {async: true})
});
