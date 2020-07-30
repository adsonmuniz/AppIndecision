var nameVar = 'Adson';
var nameVar = 'Muniz';
console.log('nameVar', nameVar);

let nameLet = 'Ben';
nameLet += ' 10';
console.log('nameLet',nameLet);

const nameConst = 'Chapolin';
//nameConst = ' Colorado';
console.log('nameConst',nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Adson Muniz';
let firstName;
if(fullName) {
     firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);