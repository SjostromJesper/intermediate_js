const fruits = ['apple', 'banana', 'orange', 'pear', 'kiwi', 'mango', 'papaya']

const a = fruits[3]
const b = fruits[4]
const c = fruits[5]


const [x, y, z] = fruits

// console.log(x)




/**********************************/

// kommer från ett personregister-api
const person = {
    first_name: 'Jesper',
    last_name: 'Sjöström',
    age: 33
}

const {first_name: firstName, last_name: lastName} = person

console.log(firstName, lastName)