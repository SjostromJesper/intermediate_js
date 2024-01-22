const fruits = ['apple', 'banana', 'pear', 'lemon']

fruits.forEach((fruit) => {
    console.log(fruit)
})

const myForEachFunc = (arr1, arr2, callback) => {
    const tempArr = [...arr1, arr2]

    for(let i = 0 ; i < tempArr.length ; i++) {
        callback(tempArr[i])
    }
}

myForEachFunc(fruits, (fruit) => {
    console.log(fruit)

})


document.addEventListener('click', (event) => {
    console.log(event)
})

fetch('någon.url').then((res) => {

})