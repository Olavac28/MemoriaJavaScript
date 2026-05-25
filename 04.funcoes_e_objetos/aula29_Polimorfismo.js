class Animal {
    falar() {
        console.log('um som qualquer');
    }
}

class Cachorro extends Animal {
    falar() {
        console.log('au');
    }
}

const cachorro = new Cachorro();
cachorro.falar();