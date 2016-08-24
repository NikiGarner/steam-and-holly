import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(this.store.findRecord('item', params.item_id));
    return this.store.findRecord('item', params.item_id);
  }
});
