import DS from 'ember-data';

const {
  RESTAdapter,
} = DS;

export default RESTAdapter.extend({
  namespace: 'v1',
  host:      'https://api.magicthegathering.io',
});
