/*
Promises används enbart för asynkrona händelser. Alltså händelser som gör sitt vid sidan av medans resten av koden fortsätter köra

Några exempel är:
* när du använder setTimeout och setInterval för att göra tidsbaserade saker
* när du hämtar data från något api, då du inte vet hur lång tid det tar att få data du behöver

*/

/******************************************************/
//
// Det finns 4 olika funktioner. Byt ut och testa lite
//
/******************************************************/


/*
En funktion som returnerar ett nytt promise. Ett promise tar emot en callback med resolve och reject som parametervärden.
Inuti callback-funktionen behöver något asynkront ske och när det är klart så ska en return skickas med värdet som du vill få ut.
Du skickar tillbaka värdet i din resolve som ett funktions-anrop med värdet inuti.
Blir det fel så använder du istället reject på samma sätt och skickar tillbaka det som blir fel
 */
const doSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('resolved!')
        }, 1000)
    })
}

const doSomethingError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject('you received an error')
        }, 1000)
    })
}

const doSomethingFast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('resolved!')
        }, 500)
    })
}

const doSomethingSlow = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('resolved!')
        }, 5000)
    })
}


/*
Funktioner som skickar tillbaka promises hanteras med ett .then på slutet av funktionen.
Den funktionen tar emot en callback med resultatet från din promise som du kan då kan hantera hur du vill inuti din callback.

Avsluta med en catch för att fånga felen som sker och hantera det med hjälp av en callback på samma sätt
 */
doSomething()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

/*
Promise-objektet har flera inbyggda funktioner, t ex att hantera fler funktioner samtidigt som i exemplet nedan
Värdet du får tillbaka är en array med svar från alla funktioner och svaret kommer så fort alla funktioner är klara
 */
Promise.all([doSomething(), doSomething(), doSomething()]).then(result => {
    console.log(result)
})

/*
Det går även att skicka flera i en array och enbart få tillbaka funktionen som är klar först
 */
Promise.race([doSomething(), doSomethingSlow(), doSomethingFast()]).then(result => {
    console.log(result)
})
