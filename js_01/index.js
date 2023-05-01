// приметивы
// number, string, boolean, null, undefined, NaN, Infinity, BigInt, Symbol
// объекты :
// array, function, object


//1. сложная структура
//2. Имеет свойства и методы

const num = 5;
const obj = () => {};

const num_2 = num;
const obj_2 = obj;
console.log('ggg');

obj_2.name = 'Alex';
console.log(obj);
const array = [];

class Student {
};
const st = new Student();

const user = {
    name: 'Bob',
    age: 22
}

const copyUser = {...user, student: true}
console.log(copyUser)
