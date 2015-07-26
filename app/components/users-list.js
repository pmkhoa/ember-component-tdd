import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties : ['name'],
  sortAscending : true,
  classNames: ['users'],
  tagName: 'ul',

  usersCount : function() {
    return this.get('users').get('length');
  }.property('@each'),

  inflection : function() {
    var contact = this.get('usersCount');
    return contact === 1 ? 'Contact' : 'Contacts';
  }.property('usersCount'),

});
