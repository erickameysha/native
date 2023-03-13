const deleteUser = (userID) => {
  const action ={
      type: 'DELETE-USER',
      payload: {
          userid: userID
      },

  }
  return action
}

const action1 = deleteUser('211')
const action2 = deleteUser('211')
console.log(action1)
console.log(action2)

function commandHello() {
    console.log(`I'm ${this.name} from ${this.site}`)
}
const userFabric = (name) => {
  const user ={
      name: name,
      site: 'it-incubator.by',
      dateOfBirth: new Date(1980, 1,2),
      hello: commandHello
  }
  return user
}
const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

console.log(u1)
u2.hello()
u1.hello()