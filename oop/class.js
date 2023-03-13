class User {
    #name = ' '
    constructor(name, site,dob) {
        this.#name= name;
        this.site = site;
        this.dateofBirthday= dob
        this.counter = 0
    }
    get name(){
        return this.#name
    }

    setName(value){
        this.#name = value
    }

    hello () {
        this.counter++
        console.log(`I'm ${this.#name} site ${this.site}, date: ${this.dateofBirthday}`)
    }
}


const u1 = new User('Dimich', 'ire', new Date(1740, 3, 1))
const u2 = new User('Max', 'ire.com', new Date(2001, 3, 1))
u1.hello()
// u2.hello()
// console.log(u1.hello())
// u1.setName('Alex')
// console.log(u1.getName())

//наследование

//
// u1.setName('Igor')
// let users = [u1,u2]
// users.forEach(u=> u.hello())


class Coder  extends User{
    constructor(name, site,dob, tech) {
        super(name, site,dob);
        this.tech = tech

    }
    code(){
        console.log(`I m ${this.name},my tech: ${this.tech} here is my code: Func sum(a,b)=> a+B`)
    }
    hello(){
       super.hello()
        console.log(`go away`)
    }
}
const coder1 = new Coder('DimichCoder', 'ire', new Date(1740, 3, 1), 'c#')
//
coder1.hello()
// coder1.code()
