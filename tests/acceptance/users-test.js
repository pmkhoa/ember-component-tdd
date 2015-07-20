import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'test-component-example/tests/helpers/start-app';

var application;

module('Acceptance | users', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /users', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});

test('should list all users', function(assert) {
  var users = server.createList("user", 6);

  visit('/users');

  andThen(function() {
    assert.equal(find(".user").length, 6);
    assert.equal(find(".user:first").text(), users[0].name);
    assert.equal(find(".user:last").text(), users[users.length - 1].name);
  });
});
