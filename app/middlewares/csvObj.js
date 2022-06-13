const path = require('path')

const csv = require('csvtojson');

const csvFilePath = path.join(__dirname, '../../public/uploads/annuaire.csv')

//todo sortir le tableau objetAnnuaire pour s'en servir ailleur

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
  
  //! Parse pas possible à cause des caractères spéciaux
  // Pour chaque élément, on remplace 
  // 'Prénom' => Prenom / 'Lieu/Bâtiment => Lieu / 'N° Interne => Num / 'Téléphone' => Phone / 'Info complémentaire' => Info
  //? Majuscule pour cohérence avec Nom, Service et Mobile qui sortent ok
  // On push le tout dans un tableau d'objets bien propre
  
  for (let i = 0; i < jsonObj.length; i++) {
    const objetAnnuaire = [];
    objetAnnuaire.push(JSON.parse((JSON.stringify(jsonObj[i]).replace("Prénom", "Prenom").replace("Lieu/Bâtiment", "Lieu").replace("N° Interne", "Num").replace("Téléphone", "Phone").replace("Info complémentaire", "Info")))) ;
    console.log(objetAnnuaire)
    
  }
  
  
  
})




