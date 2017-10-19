import Ember from 'ember';

const {
  Route,
  get,
  set,
  inject: { service },
} = Ember;

const CardsRoute = Route.extend({

  store: service(),

  model(params) {
    const { id } = params;

    if (id) {
      return get(this, 'store').findRecord('card', id);
    }
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      set(controller, 'model', null);
    }
  }

});

export default CardsRoute;
