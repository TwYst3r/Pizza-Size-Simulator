// Éléments DOM
const diameterSlider = document.getElementById('diameter-slider');
const diameterValue = document.getElementById('diameter-value');
const sizeButtons = document.querySelectorAll('.size-btn');
const priceInput = document.getElementById('price-input');
const peopleCountInput = document.getElementById('people-count-input');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const decreasePriceBtn = document.getElementById('decrease-price-btn');
const increasePriceBtn = document.getElementById('increase-price-btn');
const pizzaAreaDisplay = document.getElementById('pizza-area');
const pricePerCm2Display = document.getElementById('price-per-cm2');
const areaPerPersonDisplay = document.getElementById('area-per-person-display');

// Variables
let currentDiameter = 26;
let currentPrice = 8.5;
let currentPeopleCount = 1;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Event listeners pour le slider
    diameterSlider.addEventListener('input', function() {
        currentDiameter = parseInt(this.value);
        updateDiameterDisplay();
        updateCalculations();
        updateActiveButton();
    });

    // Event listeners pour les boutons de taille fixe
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const size = parseInt(this.dataset.size);
            currentDiameter = size;
            diameterSlider.value = size;
            updateDiameterDisplay();
            updateCalculations();
            updateActiveButton();
        });
    });

    // Event listeners pour les champs de saisie
    priceInput.addEventListener('input', function() {
        currentPrice = parseFloat(this.value) || 0;
        updateCalculations();
    });

    peopleCountInput.addEventListener('input', function() {
        let value = parseInt(this.value);
        
        // Si la valeur est vide ou invalide, ne rien faire
        if (isNaN(value)) {
            return;
        }
        
        // Limiter entre 1 et 10
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        
        currentPeopleCount = value;
        updateCalculations();
    });

    peopleCountInput.addEventListener('blur', function() {
        // Quand l'utilisateur quitte le champ, s'assurer que la valeur est correcte
        let value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
            this.value = 1;
            currentPeopleCount = 1;
        } else if (value > 10) {
            this.value = 10;
            currentPeopleCount = 10;
        } else {
            this.value = value;
            currentPeopleCount = value;
        }
        updateCalculations();
    });

    // Event listeners pour les boutons + et -
    decreaseBtn.addEventListener('click', function() {
        if (currentPeopleCount > 1) {
            currentPeopleCount--;
            peopleCountInput.value = currentPeopleCount;
            updateCalculations();
        }
    });

    increaseBtn.addEventListener('click', function() {
        if (currentPeopleCount < 10) {
            currentPeopleCount++;
            peopleCountInput.value = currentPeopleCount;
            updateCalculations();
        }
    });

    // Event listeners pour les boutons de prix + et -
    decreasePriceBtn.addEventListener('click', function() {
        currentPrice = Math.max(0, currentPrice - 0.5);
        priceInput.value = currentPrice.toFixed(1);
        updateCalculations();
    });

    increasePriceBtn.addEventListener('click', function() {
        currentPrice += 0.5;
        priceInput.value = currentPrice.toFixed(1);
        updateCalculations();
    });

    // Initialiser l'affichage
    updateDiameterDisplay();
    updateCalculations();
    updateActiveButton();
}

function updateDiameterDisplay() {
    diameterValue.textContent = currentDiameter;
}

function updateActiveButton() {
    sizeButtons.forEach(button => {
        const buttonSize = parseInt(button.dataset.size);
        if (buttonSize === currentDiameter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function updateCalculations() {
    // Calculer la surface de la pizza
    const radius = currentDiameter / 2;
    const pizzaArea = Math.PI * radius * radius;
    
    // Calculer le prix par cm²
    const pricePerCm2 = currentPrice / pizzaArea;
    
    // Calculer la surface par personne
    const areaPerPerson = pizzaArea / currentPeopleCount;
    
    // Mettre à jour l'affichage
    pizzaAreaDisplay.textContent = `${Math.round(pizzaArea)} cm2`;
    pricePerCm2Display.textContent = `${pricePerCm2.toFixed(3)} €/cm2`;
    areaPerPersonDisplay.textContent = `${Math.round(areaPerPerson)} cm2`;
}

// Fonctions utilitaires
function formatNumber(number, decimals = 0) {
    return new Intl.NumberFormat('fr-FR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(number);
}

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur dans l\'application:', e.error);
});
