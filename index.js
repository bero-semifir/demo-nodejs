console.log('Hello World');
// Import du module FileSystem ("fs")
const fs = require('fs');

const commande = {
    nomProduit: "Kores, White Board Cleaner",
    prix: 15.75,
    client: "2iTech",
}

console.log("Rédaction du ticket");
// Écrire dans un fichier (synchrone)
fs.writeFileSync('./trucs.txt', JSON.stringify(commande));
console.log("Ticket écrit");

console.log("Autre action");
// Lire un fichier (synchrone), si on ne précise pas l'encodage, on récupère un Buffer (valeur binaire brute)
const fileContent = fs.readFileSync("./trucs.txt", { encoding: 'utf-8' });

console.log({fileContent});
