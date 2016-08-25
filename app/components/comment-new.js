import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        item: this.get('item'),
        user: this.get('user'),
        rating: this.get('rating'),
        message: this.get('message'),
        date: Date()
      };
      this.sendAction('save', params);
    }
  }
});
