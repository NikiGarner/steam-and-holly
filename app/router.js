import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('item', {path: 'item/:item_id'});
  this.route('category', {path: 'category/:category_id'});
  this.route('cart');
  this.route('admin', function() {
    this.route('new');
    this.route('edit', {path: 'edit/:item_id'});
  });
});

export default Router;
