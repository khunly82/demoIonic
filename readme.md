# IONIC

## Installation

```bash
npm i -g @ionic/cli
```

## Créer un projet 
```bash
ionic start « nom du projet »
```

## Démarrer un projet Ionic
```bash
ionic serve
// ou
npm start
```

## Créer une page
```bash
ionic g page « chemin/de/la/page »
```

## Composants

### [Buttons](https://ionicframework.com/docs/api/button)
```html
<!-- bouton simple -->
<ion-button>Text du bouton</ion-button>
<!-- bouton + couleur -->
<ion-button color="primary|secondary|tertiary|success|warning|danger">Text du bouton</ion-button>
```

### Liens
```html
<ion-nav-link routerLink="lien">Text du lien</ion-nav-link>
```

### [Icones](https://ionicframework.com/docs/api/icon)

[liste complète](https://ionic.io/ionicons?_gl=1*1vo4xbi*_ga*ODczMDAyMjAyLjE3MTU2NzE2MTU.*_ga_REH9TJF6KF*MTcxNTY4Nzc1Mi4zLjEuMTcxNTY4NzkzMS4wLjAuMA..)

```html
<ion-icon name="home"></ion-icon>
```

```ts
import {home} from "ionicons/icons";

export class MyComponent {
  constructor() {
    addIcon({
      home
    })
  }
}
```



