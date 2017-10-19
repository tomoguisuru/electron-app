import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

const CardModel = Model.extend({
  name:   attr('string'),
  //names:  attr('array'),
});

export default CardModel;
