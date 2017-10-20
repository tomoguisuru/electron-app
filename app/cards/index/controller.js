import Ember from 'ember';

import { task } from 'ember-concurrency';

const {
  Controller,
  get,
  inject: { service },
  set,
} = Ember;

const CardsController = Controller.extend({

  store: service(),

  cards: null,

  searchCards: task(function* (search) {
    yield get(this, 'store').query('card', { name: search }).then(results => {
      set(this, 'cards', results);
    });
  }).restartable(),

  actions: {
    viewCard(card) {
      this.transitionToRoute('cards.view', card);
    },
  }
});

export default CardsController;
