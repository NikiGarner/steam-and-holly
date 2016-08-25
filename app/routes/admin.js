import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    new() {
      this.transitionTo('admin.new')
    },

    delete(item) {
      item.destroyRecord();
      this.transitionTo('admin.index')
    }
  }
});
