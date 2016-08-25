import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  formDisplay: false,
  actions: {
    showCommentForm() {
      this.set('formDisplay', true);
    },
    save(params) {
      this.sendAction('save', params);
    },
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
