# 🍕 Pizza Calculator - Calculateur de Taille de Pizza

Une application web interactive pour calculer la taille de pizza optimale selon le nombre de personnes et identifier le meilleur rapport qualité-prix.

## ✨ Fonctionnalités

### 🎯 Sélection du nombre de personnes
- Interface intuitive avec 3 options : 1, 2 ou 3 personnes
- Mise à jour instantanée des recommandations
- Design responsive et moderne

### 📊 Calculs précis
- **Surface exacte** : Calcul basé sur la formule π × r²
- **Prix au cm²** : Comparaison objective du rapport qualité-prix
- **Surface par personne** : Répartition équitable selon le groupe
- **Diamètre** : Affichage des dimensions réelles

### 🏆 Recommandations intelligentes
- **Pizzas recommandées** : Mise en évidence des tailles optimales
- **Meilleur rapport qualité-prix** : Identification automatique
- **Conseils personnalisés** : Adaptés au nombre de personnes

### 📈 Comparaison visuelle
- **Graphique interactif** : Comparaison des surfaces
- **Représentation visuelle** : Cercles proportionnels aux tailles
- **Indicateurs visuels** : Badges et couleurs distinctives

## 🎨 Interface utilisateur

### Design moderne
- **Gradient coloré** : Arrière-plan attrayant
- **Animations fluides** : Effets de survol et transitions
- **Typographie soignée** : Police Poppins pour une meilleure lisibilité
- **Icônes Font Awesome** : Interface intuitive

### Responsive design
- **Mobile-first** : Optimisé pour tous les écrans
- **Grid adaptatif** : Disposition automatique selon la taille d'écran
- **Touch-friendly** : Boutons et interactions adaptés au tactile

## 🧮 Données des pizzas

| Taille | Diamètre | Prix | Recommandé pour |
|--------|----------|------|-----------------|
| Petite | 26 cm | 8,50 € | 1 personne |
| Moyenne | 32 cm | 12,50 € | 1-2 personnes |
| Grande | 38 cm | 16,50 € | 2-3 personnes |
| Extra Large | 45 cm | 22,00 € | 3 personnes |

## 🚀 Installation et utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation requise

### Lancement
1. Ouvrez le fichier `index.html` dans votre navigateur
2. Sélectionnez le nombre de personnes
3. Consultez les recommandations et comparaisons
4. Identifiez la meilleure valeur

### Structure des fichiers
```
pizza-calculator/
├── index.html          # Page principale
├── styles.css          # Styles et animations
├── script.js           # Logique de calcul
└── README.md           # Documentation
```

## 🔧 Fonctionnalités techniques

### Calculs mathématiques
```javascript
// Surface d'une pizza
const area = Math.PI * (diameter / 2) ** 2;

// Prix au cm²
const pricePerCm2 = price / area;

// Surface par personne
const areaPerPerson = area / peopleCount;
```

### Algorithme de recommandation
1. **Calcul des surfaces** pour toutes les tailles
2. **Détermination du prix au cm²** pour comparaison
3. **Identification du meilleur rapport** (prix le plus bas par cm²)
4. **Application des recommandations** selon le nombre de personnes

### Gestion des événements
- **Sélection du nombre de personnes** : Mise à jour instantanée
- **Effets de survol** : Animations interactives
- **Responsive design** : Adaptation automatique

## 📱 Compatibilité

### Navigateurs supportés
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Fonctionnalités utilisées
- **CSS Grid** : Disposition moderne
- **CSS Flexbox** : Alignement flexible
- **ES6+ JavaScript** : Fonctionnalités modernes
- **CSS Animations** : Effets visuels

## 🎯 Cas d'usage

### Pour 1 personne
- **Petite pizza** : Économique, portion parfaite
- **Moyenne pizza** : Plus de pizza, restes pour le lendemain

### Pour 2 personnes
- **Moyenne pizza** : Partage équitable
- **Grande pizza** : Meilleur rapport qualité-prix

### Pour 3 personnes
- **Grande pizza** : Partage confortable
- **Extra Large** : Abondance garantie

## 🔮 Améliorations futures

### Fonctionnalités envisagées
- [ ] Personnalisation des prix par pizzeria
- [ ] Calcul des calories approximatives
- [ ] Historique des choix
- [ ] Export des résultats
- [ ] Mode sombre
- [ ] Support multilingue

### Optimisations techniques
- [ ] Service Worker pour le mode hors ligne
- [ ] Base de données locale pour les préférences
- [ ] API pour les prix en temps réel
- [ ] PWA (Progressive Web App)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 👨‍💻 Auteur

Développé avec ❤️ pour tous les amateurs de pizza !

---

**Note** : Cette application est conçue pour être éducative et informative. Les prix et recommandations sont basés sur des estimations moyennes et peuvent varier selon les pizzerias.
