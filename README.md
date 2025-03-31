# 🤖 Discord Bot - Projet Personnel
<br>

Voici une base de bot Discord avec commandes slash, modifiable selon vos besoins. Il est souvent difficile de trouver des bases fonctionnelles dès le clonage du dépôt. C'est pourquoi je mets à disposition ce bot afin de faciliter la tâche à de nombreux développeurs Discord.

## 🚀 Fonctionnalités

- 🔗 **Connexion au serveur cible** : Le bot se connecte directement au serveur grâce à l'ID défini dans le fichier `.env`.
- 🔧 **Adaptabilité** : Le code est modulaire et conçu comme une base facilement personnalisable.
- 📝 **Commandes slash** : Il suffit d'ajouter des fichiers de commande dans le dossier dédié pour intégrer de nouvelles fonctionnalités au bot.
<br>

## 📦 Dépendances
> [!IMPORTANT]
> **Avant de commencer l'installation, assurez-vous que Node.js est installé !**  
> Si ce n’est pas le cas, téléchargez-le ici : [Node.js](https://nodejs.org/).

Une fois Node.js installé, exécutez les commandes suivantes pour vérifier son installation et installer Discord.js :

```bash
node -v
npm install discord.js
node -e "console.log(require('discord.js').version)"
```
<br>

## 📥 Téléchargement en local

Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/TISEPSE/Bot-Discord-Cody.git
```
<br>

## 🔧 Création d'une application sur Discord Developer Portal

1. 🔗 Rendez-vous sur le [Discord Developer Portal](https://discord.com/developers/docs/intro).
2. 🖱️ Cliquez sur **Applications**.
3. ➕ Cliquez sur **New Application** en haut à droite.
4. ✏️ Donnez un nom à votre **Application**.
5. 🔑 Accédez à l'onglet **Bot** et cliquez sur **Reset Token**.
6. 📋 Copiez le jeton généré et collez-le entre guillemets dans le fichier `.env` :

```env
DISCORD_TOKEN="votre_token_ici"
```
>[!CAUTION]
> ⚠️ **Ne partagez jamais votre token d'authentification !** Gardez-le précieusement caché.

7. Dans l'onglet **Bot**, cochez les options suivantes :
   - ✅ **Presence Intent**
   - ✅ **Server Members Intent**
   - ✅ **Message Content Intent**

8. 🖱️ Pour récupérer l'ID du serveur, faites un clic droit sur l'icône du serveur dans Discord et cliquez sur **Copier l'identifiant du serveur**. Ensuite, collez-le dans le fichier `.env` :

```env
CLIENT_ID="votre_ID_ici"
```
<br>

## ▶️ Lancement du bot

1. 🖥️ Ouvrez VSCode, appuyez sur `CTRL+J` pour ouvrir le terminal intégré.
2. 🚀 Exécutez la commande suivante :

```bash
npm start
```
