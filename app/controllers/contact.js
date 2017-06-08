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
      alert(`${this.get('emailAddress')}: ${this.get('message')}`);
      this.set('respsonseMessage', `We got your message and we'll be in touch soon`);
      this.setProperties({emailAddress: '', message: ''});
    }
  }

});
