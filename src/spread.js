const fruitsFromSweden = ['apple', 'granny smith', 'pear', 'strawberry']

const fruitsFromSomewhereElse = ['sharon', 'dragon fruit', 'orange']

const name = 'jesper'

const allFruits = []
fruitsFromSweden.forEach((fruit) => {
    allFruits.push(...fruit)
})



console.log(allFruits)