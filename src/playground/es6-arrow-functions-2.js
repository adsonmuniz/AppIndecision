/* const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55,1,100)); */

const user = {
    name: 'Adson',
    cities: ['Montes Claros', 'Uberlandia', 'Viçosa', 'Rio de Janeiro', 'Piracicaba'],
    printPlacesLived() {
         return this.cities.map((city) => this.name + ' Has lived in ' + city);
        /* this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        }); */
    },
};

console.log(user.printPlacesLived());

const multiplier = {
    arrayNumber: [5,6,9,12,55],
    multiplierNumber: 2,
    multiply() {
        return this.arrayNumber.map((number) => number * this.multiplierNumber);
    }, 
}

console.log(multiplier.multiply());