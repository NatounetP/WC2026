// countries.js - Liste des pays partagée
const COUNTRIES = [
    "Suisse", "Brésil", "Argentine", "Mexique", "Afrique du Sud", 
    "Corée du Sud", "Canada", "Qatar", "Maroc", "Haiti", 
    "Ecosse", "USA", "Paraguay", "Australie", "Allemagne", 
    "Curacao", "Cote d'Ivoire", "Equateur", "Pays-Bas", "Japon", 
    "Tunisie", "Belgique", "Egypte", "Iran", "Nouvelle Zélande", 
    "Espagne", "Cap Vert", "Arabie Saoudite", "Uruguay", "France", 
    "Sénégal", "Norvège", "Algérie", "Autriche", "Jordanie", 
    "Portugal", "Ouzbékistan", "Colombie", "Angleterre", "Croatie", 
    "Ghana", "Panama", "PO D", "PO A", "PO C", "PO B", "PO 1", "PO 2"
];

// Optionnel: trier alphabétiquement
COUNTRIES.sort((a, b) => a.localeCompare(b, 'fr'));

// Fonction utilitaire pour peupler un select
function populateCountrySelect(selectElement, defaultOption = "Sélectionnez un pays") {
    if (!selectElement) return;
    
    // Vider le select
    selectElement.innerHTML = '';
    
    // Ajouter l'option par défaut
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = `-- ${defaultOption} --`;
    selectElement.appendChild(defaultOpt);
    
    // Ajouter tous les pays
    COUNTRIES.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        selectElement.appendChild(option);
    });
}

// Exporter pour les modules ES6 (optionnel)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COUNTRIES, populateCountrySelect };
}