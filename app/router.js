import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('mailer', function() {
    this.route('front', { path: '/' });
    this.route('back');
    this.route('area');
    this.route('deliver');
  });
});

export default Router;
