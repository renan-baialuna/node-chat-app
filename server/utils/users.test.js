const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'mike',
                room: 'Node Course'
            }, {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            }, {
                id: '3',
                name: 'Norm',
                room: 'Node Course'
            }
        ]
    })

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'andy',
            room: 'the office fans'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user])
    })

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['mike', 'Norm'])
    })
    it('should return react for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen'])
    })


    it('should return the user called', () =>{
        var userExp = users.getUser('1');
        expect(userExp).toEqual({
            id: '1',
            name: 'mike',
            room: 'Node Course'
        })
    })
    
    it('should not return user', () =>{
        var userExp = users.getUser('10');
        expect(userExp).toNotExist()
    })

    it('should remove a user', () =>{
        var userId = '1';
        var user=users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })
    it('should not remove a user', () =>{
        var userId = '10';
        var user=users.removeUser(userId);
        
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    })
})