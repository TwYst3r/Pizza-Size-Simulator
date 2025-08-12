// Éléments DOM
const diameterSlider = document.getElementById('diameter-slider');
const diameterValue = document.getElementById('diameter-value');
const sizeButtons = document.querySelectorAll('.size-btn');
const priceInput = document.getElementById('price-input');
const peopleCountInput = document.getElementById('people-count-input');
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
    
    // Initialiser l'affichage
    updateDiameterDisplay();
    updateCalculations();
    updateActiveButton();
}

function updateDiameterDisplay() {
    diameterValue.textContent = currentDiameter;
    
    // Mettre à jour la barre de progression du slider
    const slider = document.querySelector('.slider');
    const progressWidth = ((currentDiameter - 5) / (100 - 5)) * 100;
    slider.style.setProperty('--progress-width', progressWidth + '%');
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
    
    // Mettre à jour l'affichage avec animation
    animateValue(pizzaAreaDisplay, Math.round(pizzaArea), ' cm2');
    animateValue(pricePerCm2Display, pricePerCm2.toFixed(3), ' €/cm2');
    animateValue(areaPerPersonDisplay, Math.round(areaPerPerson), ' cm2');
    
    // Ajouter un effet visuel sur les valeurs
    addValueEffect(pizzaAreaDisplay);
    addValueEffect(pricePerCm2Display);
    addValueEffect(areaPerPersonDisplay);
}

// Fonction pour animer les changements de valeurs
function animateValue(element, newValue, unit) {
    const currentValue = parseFloat(element.textContent.replace(/[^\d.-]/g, ''));
    const targetValue = parseFloat(newValue);
    
    if (currentValue !== targetValue) {
        element.style.transform = 'scale(1.1)';
        element.style.color = '#d4a574';
        
        setTimeout(() => {
            element.textContent = newValue + unit;
            element.style.transform = 'scale(1)';
            element.style.color = '';
        }, 150);
    } else {
        element.textContent = newValue + unit;
    }
}

// Fonction pour ajouter un effet visuel sur les valeurs
function addValueEffect(element) {
    element.style.transition = 'all 0.3s ease';
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.textShadow = '0 0 10px rgba(188, 108, 37, 0.5)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.textShadow = '';
    });
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
