const assert = require('assert');
const Park = require('../park');

describe('Park', function(){
  let park;

  beforeEach(function(){
    park = new Park ("Jurassic Park", "£30")
    trex = new Dinosaur ("T-Rex", "carnivore", "100")
  });

  it ('can add a Dinosaur', function(){
    dinosaur.addDinosaur(trex);
    const actual = park.dinosaurs.length;
    assert.strictEquals(actual, 1);
  })

  xit('')

});
