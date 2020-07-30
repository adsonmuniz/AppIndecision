class Person  {
    constructor(name = 'Fulano', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Oi, eu sou o ${this.name}!`;
    }
    getDescription() {
        return `${this.name} tem ${this.age} ano(s) de idade.`
    }
}

class Student extends Person {
    constructor(name, age, course = undefined) {
        super(name, age);
        this.course = course;
    }
    hasCourse() {
        return !!this.course;
    }
    getDescription() {
        let description = super.getDescription();
        return description + (this.hasCourse() ? ' Faz o curso ' + this.course + '.' : ' Não faz curso.');
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation = undefined) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHome() {
        return !!this.homeLocation;
    }
    getGretting() {
        let gretting = super.getGretting();
        if (this.hasHome()) {
            gretting += ` Estou viajando a partir de ${this.homeLocation}.`;
        } else {
            gretting += ' E não tenho lar.'
        }
        return gretting;
    }
}

const me = new Traveller('Adson Muniz', 33, 'Montes Claros - MG');
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());