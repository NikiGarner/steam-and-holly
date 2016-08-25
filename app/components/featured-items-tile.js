import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  avgRating: Ember.computed('item.feedbacks.@each.rating', function(){
    var ratingTotal = 0;
    var count = 0;
    this.get('item.feedbacks').forEach(function(feedback){
      ratingTotal += parseInt(feedback.get('rating'));
      console.log(feedback.get('rating'));
      count += 1;
    })
    return count !== 0 ? (ratingTotal / count).toFixed(2) : "Unrated";
  }),
});
