# TP 2 : Gestion de l’état local et interactions utilisateurs avec React
---

### Réalisé par

**Abla MARGHOUB**

### Encadré par

**Pr. Mohamed LACHGAR**

### Module

**Développement et Design Web**

### Établissement

**École Normale Supérieure - Université Cadi Ayyad**

---

## 1. Objectif du TP

- Comprendre la gestion de l’état local avec useState.
- Mettre en place des interactions utilisateur via les événements onClick, onChange et onSubmit.
- Créer des formulaires contrôlés et gérer leurs valeurs.
- Utiliser useEffect pour gérer des effets secondaires.
- Respecter le flux unidirectionnel des données dans les composants React.
- Observer le comportement réactif et déclaratif des composants React.

---

## 2. Architecture du TP

### 2.1 Stack technologique

| Technologie | Rôle dans le projet |
|-------------|-------------------|
| **React.js** | Bibliothèque principale pour créer les composants UI réactifs |
| **JavaScript (ES6+)** | Langage de programmation utilisé pour les composants |
| **Node.js & npm** | Environnement d’exécution et gestionnaire de paquets |
| **Create React App** | Outil pour initialiser et configurer rapidement le projet |
| **Navigateur Web** | Pour visualiser le rendu et utiliser la console pour les effets |

### 2.2 Structure du projet

<img width="353" height="661" alt="00" src="https://github.com/user-attachments/assets/66009999-e11c-4c98-bbab-bc2b4f0d68e9" />

## 3. Résultat attendu

**Création du projet**
```
npx create-react-app tp-state
cd tp-state
npm start
```
<img width="522" height="345" alt="0" src="https://github.com/user-attachments/assets/3b499a52-49e1-4d16-99c4-bffdad8632f8" />

Le serveur démarre à http://localhost:3000 et affiche la page d’accueil de React.

<img width="747" height="838" alt="1" src="https://github.com/user-attachments/assets/7c950cd0-7c0f-499f-9824-66be71a92975" />

**Compteur simple** (`Compteur.js`)

<img width="752" height="247" alt="2" src="https://github.com/user-attachments/assets/85964bda-e8fb-445f-8961-ebefd1abe70c" />
<img width="558" height="245" alt="3" src="https://github.com/user-attachments/assets/2b5dd8c3-611a-4f71-891f-7e5cc6209e59" />


**Message avec bouton** (`MessageBouton.js`)

<img width="542" height="320" alt="4" src="https://github.com/user-attachments/assets/49fd5bfd-e3a0-4b37-8441-9a9fc5e43ad0" />

**Formulaire contrôlé** (`FormulaireNom.js`)

<img width="793" height="262" alt="5" src="https://github.com/user-attachments/assets/3073381a-f745-4d20-bcaf-ce0ee244cbc7" />

**Compteur avec effet** (`CompteurEffet.js`)

<img width="707" height="342" alt="6" src="https://github.com/user-attachments/assets/a816dd17-b5e4-4c82-8a13-fd8e5b31cc97" />

**Exercice 1 : Affichage dynamique** (`textchange.js`)

<img width="751" height="493" alt="image" src="https://github.com/user-attachments/assets/bb41d8be-3ccd-4c09-aa04-8a7a3a9b9c77" />

**Exercice 2 : Formulaire d’inscription** (`inscription.js`)

<img width="751" height="633" alt="7" src="https://github.com/user-attachments/assets/178115d6-08fb-406e-ba3a-d40bb65c4b09" />

**Exercice 3 : Compteur avec effet personnalisé** (`CompEffetPers.js`)

<img width="760" height="847" alt="8" src="https://github.com/user-attachments/assets/13bd8938-9df2-4817-a34f-64cb28bf14db" />




