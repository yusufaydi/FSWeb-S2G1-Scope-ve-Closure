import functions from './index';

const inning = function() {
    return Math.floor(Math.random() * Math.floor(3));
  }
  

describe('asFunction', ()=>{
    it('as returns sa', ()=>{
        expect(functions.foo()).toBe('as');
    })
});

describe('takimSkoru', ()=>{
    it('takimSkoru returns a random number', ()=>{
        expect(functions.takimSkoru()).toBeLessThanOrEqual(25);
    })
});

describe('macSkoru', ()=>{
    it('maxSkoru returns an object', ()=>{
        expect(functions.macSkoru(takimSkoru, 4)).toEqual(expect.objectContaining({
            EvSahibi: expect.any(Number),
            KonukTakim: expect.any(Number),
          }))
    })
});

describe('periyotSkoru', ()=>{
    it('periyotSkoru returns an object', ()=>{
        expect(functions.periyotSkoru(takimSkoru)).toEqual(expect.objectContaining({
            EvSahibi: expect.any(Number),
            KonukTakim: expect.any(Number),
          }));
    });
});


