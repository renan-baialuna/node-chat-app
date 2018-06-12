var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () =>{
    it('should generate correct message object', () =>{
        var from= 'jjj'
        var text = 'ge'
        var message= generateMessage(from, text)
        expect(message.createdAt).toBeA("number")
        expect(message).toInclude({
            from,
            text
        })
        expect(message.from).toBe(from)
        expect(message.text).toBe(text)



    });
})