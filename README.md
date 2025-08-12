# Angular Todo List

Front-end Angular standalone consommant une API REST de mon backend Python pour gérer la gestion des tâches à faire.

## 🎯 Objectifs du projet

- Consommer l'API REST exposé par mon backend Python
- Construire une UI de type Todolist en Angular
- Utiliser les bonnes pratiques Angular récentes : standalone components, `signal`, routing moderne

## 📋 Fonctionnalités

- ✅ Afficher la liste des tâches
- ➕ Ajouter une nouvelle tâche
- ✏️ Modifier une tâche existante
- 🗑️ Supprimer une tâche

## 🚀 Technologies utilisées

- **Angular (≥17)** — standalone components, signal, nouvelle syntaxe de template
- **TypeScript (strict)** — typage des modèles
- **HttpClient** — requêtes HTTP vers l'API
- **Jest / Karma** — tests unitaires

## 📁 Structure du projet

```
src/
├── app/
│   ├── app.config.ts              # Configuration de l'application
│   ├── app.component.ts           # Composant principal
│   ├── app.component.html         # Template principal
│   ├── todo.model.ts              # Modèle de données Todo
│   ├── todo.service.ts            # Service pour l'API
│   └── todo-list/                 # Composant liste des tâches
│       ├── todo-list.component.ts
│       ├── todo-list.component.html
│       ├── todo-list.component.css
│       └── todo-list.component.spec.ts
```

## 🔧 Installation et configuration

### Prérequis

- Node.js (>=18 recommandé)
- npm ou pnpm
- Angular CLI (optionnel pour scaffolding)
- Backend API (ex. `http://localhost:8080`) disponible

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/mtuhaud/todolist-front.git
cd todolist-front
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer l'application**
```bash
ng serve
# ou
npm start
```

L'application sera accessible sur `http://localhost:4200`

## 🔌 API Backend

L'application communique avec un backend Python exposant les endpoints suivants :

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/todos` | Récupérer toutes les tâches |
| POST | `/todos` | Créer une nouvelle tâche |
| PUT | `/todos/{id}` | Modifier une tâche |
| DELETE | `/todos/{id}` | Supprimer une tâche |

### Format des données

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Faire les courses",
      "description": "Acheter du lait",
      "completed": false,
      "created_at": "2025-08-10T12:34:56Z",
      "updated_at": "2025-08-10T12:34:56Z"
    }
  ],
  "count": 1
}
```

## 🏗️ Architecture

### Modèle de données (todo.model.ts)
Définit la structure TypeScript des objets Todo

### Service (todo.service.ts)
- Gestion des appels HTTP vers l'API Python
- Méthodes CRUD (Create, Read, Update, Delete)

### Composant Todo-List
- Affichage de la liste des tâches
- Gestion des interactions utilisateur
- Communication avec le service
- Gestion des erreurs


Les fichiers de build seront générés dans le dossier `dist/`.

## 📝 Utilisation

1. **Voir les tâches** : Les tâches s'affichent automatiquement au chargement
2. **Ajouter une tâche** : Utilisez le formulaire en haut de la liste
3. **Modifier une tâche** : Cliquez sur l'icône d'édition
4. **Supprimer une tâche** : Cliquez sur l'icône de suppression
5. **Marquer comme terminée** : Cochez la case à côté de la tâche

