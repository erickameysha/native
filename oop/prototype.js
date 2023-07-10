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
function sostavChisla(massivChisel, chislo) {
    massivChisel.sort((a,b)=> a-b)
    let result = [];

    function findCombinations(combination, target, index) {
        if (target === 0) {
            result.push(combination.slice());
            return;
        }

        for (let i = index; i < massivChisel.length; i++) {
            let currNum = massivChisel[i];
            if (currNum > target) {
                break;
            }
            combination.push(currNum);
            findCombinations(combination, target - currNum, i + 1);
            combination.pop();
        }
    }

    findCombinations([], chislo, 0);
    return result;
}
const g = sostavChisla([8, 2, 3, 4, 6, 7, 1], 5)
console.log(g)
