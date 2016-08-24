import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params ={
        name: this.get('name'),
        cost: this.get('cost'),
        details: this.get('details'),
        category: this.get('category'),
        featured: this.get('featured'),
        feedbacks: [],
        image: this.get('image')? this.get('image') : "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97400&w=350&h=400"
      };
      this.sendAction('save', params);
    }

  }
});
