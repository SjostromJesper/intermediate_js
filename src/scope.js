// alla variabler utanför kodblock räknas som globala variabler och tillhör det globala scopet
let name = 'jesper' // globalt scope

console.log(name)


/*************************************************************/


/*
      En funktion skapar ett lokalt scope, men även en funktionsscope.
      Funktionsscope är det enda scopet som gör lokalt scope för variabeltypen 'var'
 */
function x() {

    // lokalt scope
    let lastname = 'sjöström'

    // age-variabeln blir lokalt scopad inne i funktionen
    var age = 33
}

console.log(lastname)
console.log(age)


/*************************************************************/


// scopes som är lokala men
if(true) {

    // fruit-variabeln blir lokalt scopad till detta kodblocket
    let fruit = 'banana'

    // vehicle-variabeln blir INTE lokalt scopad eftersom att det är en var-variabel
    var vehicle = 'motorcycle'
}

console.log(fruit)
console.log(vehicle)


/*************************************************************/


//alla kodblock blir lokalt scopade för let och const, men inte för var
{
    var a = 'a'
    let b = 'b'
    const c = 'c'
}

console.log(a)
console.log(b)
console.log(c)