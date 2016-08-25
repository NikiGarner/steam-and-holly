import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id)
  },

  actions: {
    update(item, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('admin')
    },
    delete(item) {
      item.destroyRecord();
      this.transitionTo('admin.index');
    }
  }
});
