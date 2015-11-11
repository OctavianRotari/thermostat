// 'use strict';

describe ('Thermostat',function(){
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it ('has a default temperature of 20 c',function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Can be increased by 1 degree', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Can be decreased by 1 degree', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it ('has a minimum temp of 10 C',function(){
    for (var i=0; i<11; i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a max temperature of 25 when power saving mode is on', function(){
    thermostat.powerSaving();
    for (var i=0; i<6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('has a max temperature of 32 when power saving mode is on', function(){
    thermostat.powerSaving(false);
    for (var i=0; i<13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
});



});
