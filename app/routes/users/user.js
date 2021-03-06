import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id)
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  }
});
