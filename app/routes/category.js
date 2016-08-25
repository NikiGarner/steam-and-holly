import Ember from 'ember';

export default Ember.Route.extend({
  categoryName: "",

  model(params) {
    this.set('categoryName', params.category_id);
    return this.store.query('item', {
      orderBy: 'category',
      equalTo: params.category_id
    })
  }

});
