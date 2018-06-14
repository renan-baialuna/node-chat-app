var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () =>{
    it('should generate correct location object', ()=>{
        var from= 'jjj'
        var latitude = 1
        var longitude = 2
        var url = `http://www.google.com/maps?q=${latitude},${longitude}`

        var message = generateLocationMessage(from, latitude, longitude)
        expect(message).toInclude({url, from})
        expect(message.createdAt).toBeA('number')



    })
})