// Fonction perso
const sayHello = (person) => {
    if (!person) {
        person = "World";
    }
    console.log(`Hello ${person} !`);
}

const truc = () => {
    console.log("truc")
}

// export de la fonction
module.exports = { sayHello, truc };
