import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isLongEnough: Ember.computed.gte('message.length', 5),
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isValid: Ember.computed.and('isLongEnough','isValidEmail'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {

      const email = this.get('emailAddress');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newMessage.save().then((response) => {
        this.set('respsonseMessage', `We got your message and we'll be in touch soon`);
        this.setProperties({emailAddress: '', message: ''});
      });
    }
  }
});
