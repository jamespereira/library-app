import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then(() => {
        this.controller.set('responseMessage', `Thank you! We saved your email address with the following id: ${newInvitation.get('id')}`);
        this.controller.setProperties({email: '', message: ''});
      });
    }
  }
});
