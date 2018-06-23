const expect = require('expect');
var {isRealString} = require('./validation')



//import isRealString

describe('validation test', () =>{
    it('validation must come back true', () =>{
        var res = isRealString(98);
        expect(res).toBe(false);
    })
    it('should reject string with only spaces', () =>{
        var res = isRealString('         ');
        expect(res).toBe(false);
    })
    it('should allow string with non-space characters', () =>{
        var res = isRealString('   asdf   gh   ');
        expect(res).toBe(true);
    })
    



})

//