# Discord Bot - Projet Personnel

Voici une base de bot Discord avec commandes slash, modifiable selon vos besoins. Il est souvent difficile de trouver des bases fonctionnelles dès le clonage du dépôt. C'est pourquoi je mets à disposition ce bot afin de faciliter la tâche à de nombreux développeurs Discord.  
<br>

## Fonctionnalités

- **<ins>Connexion au serveur cible</ins>** : Le bot se connecte directement au serveur grâce à l'ID défini dans le fichier `.env`.  
- **<ins>Adaptabilité</ins>** : Le code est modulaire et conçu comme une base facilement personnalisable.  
- **<ins>Commandes slash</ins>** : Il suffit d'ajouter des fichiers de commande dans le dossier dédié pour intégrer de nouvelles fonctionnalités au bot.
<br>

## Dépendances  

> [!TIP]  
> Avant de commencer l'installation, assurez-vous que Node.js est installé !  
> Si ce n’est pas le cas, téléchargez-le ici : [Node.js](https://nodejs.org/).  

- Une fois Node.js installé, exécutez les commandes suivantes :  

```bash
node -v
npm install discord.js
node -e "console.log(require('discord.js').version)"
```
<br>

## Téléchargement en local  

Une fois les étapes précédentes terminées, clonez ce dépôt sur votre machine locale :  

```bash
git clone https://github.com/TISEPSE/Bot-Discord-Cody.git
```
<br>

## Création d'une application sur Discord Developer Portal  

1. Rendez-vous sur : [Discord Developer Portal](https://discord.com/developers/docs/intro)  
2. Cliquez sur <ins>**Applications**</ins>  
3. Cliquez sur <ins>**New Application**</ins> en haut à droite  
4. Donnez un nom à votre <ins>**Application**</ins>  
5. Accédez à l'onglet <ins>**Bot**</ins> et cliquez sur <ins>**Reset Token**</ins>  
6. Copiez le jeton généré et collez-le entre guillemets dans le fichier `.env`, comme suit :

```env
DISCORD_TOKEN="votre_token_ici"
```
<br>

> [!CAUTION]  
> **Ne partagez jamais votre token d'authentification !** Gardez-le précieusement caché.
<br>

7. Ensuite dans l'onglet <ins>**Bot**</ins> cocher les switches **"Presence Intent"**, **"Server Members Intent"** et **"Message Content Intent"**.
8. Pour finir Rendez vous sur Discord et faite un clique droit sur le logo du serveur vous devriez avoir ceci:

![{9581D0D2-AB4F-4142-8E2B-F2F1FFCC8E4D}](https://github.com/user-attachments/assets/4dfe424e-c991-4549-9e78-90859aee3d95)

9. Cliquez sur **Copier l'identifiant du serveur** et collez-le entre guillemets dans le fichier `.env`, comme suit :

```env
CLIENT_ID="votre_ID_ici"
```
## Lancement du bot
1. Dans VSCode faite `CTRL+J` et tapez:

```terminale VSCode
npm start
```
