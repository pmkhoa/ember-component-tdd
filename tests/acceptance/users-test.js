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

test('visiting index route /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should list all users', function(assert) {
  var users = server.createList("user", 6);

  visit('/');

  andThen(function() {
    assert.equal(find(".user").length, 6);
    assert.equal(find(".user:first").text(), users[0].name);
    assert.equal(find(".user:last").text(), users[users.length - 1].name);
  });
});

test('should list user on user detail page', function(assert) {
  var user = server.create('user', {name: 'Khoa Pham', email: 'khoapham@test.com'});

  visit('/users/'+user.id);

  andThen(function() {
    assert.equal(find('h1:contains(Hello Khoa Pham)').length, 1);
  });
});

test('clicking user detail link should load detail info', function(assert) {
  var users = server.createList("user", 6);

  visit('/');
  click('.user .user-detail-link:eq(0)');

  andThen(function() {
    var user = users[0];
    assert.equal(currentURL(), '/users/1');
    assert.equal(find('.username').text(), user.name);
    assert.equal(find('.email-address').text(), user.email);
  });

});
