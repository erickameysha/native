console.log('fff')

function DeleteUserAction(userId) {
    this.type = 'DELETE-USER',
        this.payload = {
            userID: userId
        }
}


const action1 = new DeleteUserAction(1112)
const action2 = new DeleteUserAction(2221)
console.log(action1)
console.log(action2)

function User(name, site,dob) {
    this.name= name;
    this.site = site;
    this.dateofBirthday= dob
}
User.prototype.hello = function () {
    console.log(`I'm ${this.name} site ${this.site}, date: ${this.dateofBirthday}`)
}
const u1 = new User('Dimich', 'ire', new Date(1740, 3, 1))
const u2 = new User('Max', 'ire.com', new Date(2001, 3, 1))
u1.hello()
u2.hello()