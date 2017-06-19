import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    sendMessage(newContactMessage) {
      newContactMessage.save().then(() => {
        this.controller.set('responseMessage', `We got your message and we'll be in touch soon`);
        this.controller.setProperties({email: '', message: ''});
      });
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
