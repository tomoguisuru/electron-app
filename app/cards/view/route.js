import Ember from 'ember';

const {
  Route,
  get,
  set,
  inject: { service },
} = Ember;

const CardsViewRoute = Route.extend({

  store: service(),

  model(params) {
    const { multiverseid } = params;

    if (multiverseid) {
      return get(this, 'store').findRecord('card', multiverseid);
    }
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      set(controller, 'model', null);
    }
  }

});

export default CardsViewRoute;
