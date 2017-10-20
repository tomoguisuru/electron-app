import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

const CardModel = Model.extend({
  name:     attr('string'),
  imageUrl: attr('string'),
  flavor:   attr('string'),
  text:     attr('string'),

  multiverseid: attr('number')
});

export default CardModel;
