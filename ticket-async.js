// Import du module FileSystem ("fs")
const fs = require('fs');

const commande = {
    nomProduit: "Kores, White Board Cleaner",
    prix: 15.75,
    client: "2iTech",
}

console.log("Rédaction du ticket");
// Écrire dans un fichier (synchrone)
fs.writeFile('./trucs.txt', JSON.stringify(commande), (err) => {
    if (err) console.error(err);
    console.log("Ticket écrit");
});

console.log("Autre action");
// Lire un fichier (synchrone), si on ne précise pas l'encodage, on récupère un Buffer (valeur binaire brute)
fs.readFile("./trucs.txt", { encoding: 'utf-8' }, (err, data) => {
    if (err) console.error(err);
    console.log({ data })
});

// // exemple avec Buffer
// fs.readFile("./trucs.txt", (err, data) => {
//     if (err) console.error(err);
//     console.log({ data: data.toString() })
// });
