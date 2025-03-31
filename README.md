# Discord Bot - Projet Personnel

## Description

Voici une base de bot Discord avec commandes slash. Il peut être modifié comme bon vous semble. Il est généralement difficile de trouver des bases de bots Discord fonctionnelles dès le clonage du dépôt. Je mets donc à disposition ce petit bot pour faciliter la tâche de nombreux développeurs Discord. 

## Fonctionnalités

- **<ins>Connection au serveur cible<ins>** : Le bot se connecte directement au serveur grâce à l'ID situé dans le fichier ".env".
- **<ins>Adaptabilité<ins>** : Le code est modulaire et, puisque ce n'est qu'une base, il peut être très facilement modifié.
- **<ins>Commande slash<ins>** : En créant simplement des commandes slash dans le dossier, il est très facile d'intégrer de nouvelles commandes pour le bot.

## Dépendances
> [!WARNING]  
> Avant de commencer l'instalation, assure toi d'avoir nodeJs d'installer !
 Si ce n’est pas le cas, télécharge-le ici : https://nodejs.org/

- Une fois Node Js d'installer tapez les commandes ci-dessous:
```bash

   node -v
   npm install discord.js
   node -e "console.log(require('discord.js').version)"
```

## Télécharger en locale:

1. Une fois les étapes précédentes terminers, Clonez ce dépôt sur votre machine locale :

   ```bash

   git clone https://github.com/TISEPSE/Bot-Discord-Cody.git
   ```

##Création du compte Discord Portal:

1. Aller sur ce site: https://discord.com/developers/docs/intro
2. Cliquez sur "**Application**"
3. Cliquez sur "**New Application**" en haut a droite
4. Donnez un nom a votre "**Application**"
5. Aller dans l'onglet "**Bot**" et cliquez sur "**Reset Token**"
