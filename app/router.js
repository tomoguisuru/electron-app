import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cards', { path: '/' }, function() {
    this.route('index', { path: '/' });
    this.route('view', { path: '/:multiverseid' });
  });
});

export default Router;
