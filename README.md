
# Procédure d'installation
## Prérequis
### Node doit etre installé sur votre machine : https://nodejs.org/en/download/
### Expo doit etre installé sur votre machine : `npm install -g expo-cli`

### Attention : Votre smartphone doit etre connécté au meme réseau que votre machine.
### Attention : Si vous hébergez la base de donnée en local, votre smartphone ne pourra pas y accéder.
## Base de Donnée
### Dans MySQLworkbench, dans votre base de donnée, lancer le script situer dans /SQL/createtables afin de creer les tables users et posts qui serviront pendant l'utilisation de l'application.
## Back-end
### Dans le dossier back-end lancer la commande `npm install`
Dans le fichier back-end/.env ajouter les données concernant votre database. Les données actuelles de ce fichier sont fausses et servent d'exemple.
## Front-end
#### Dans le dossier front-end lancer la commande `npm install`

#Procédure de lancement
##Base de donnée
###Assurez vous que votre base de donnée soit bien connectée
##Back-end
###Tapez la commande `node server`
##Front-end
###Tapez la commande `npm install`, puis suivez ces instructions
### Pour lancer l'application sur simulateur:
### -iOS: Depuis votre device, après avoir installé l'application explo, lancer l'aaplication Appareil photo pour scanner le QRCode de votre terminal
### -Android: Depuis votre device, lancez l'application Expo. Vous devriez avoir un bouton "Scan QR Code". Cliquez sur ce bouton et scannez le QR Code affiché dans votre terminal
### Pour lancer l'application sur votre smartphone:
### -iOS : Installer la dernière version de Xcode et au moins un simulateur, lancer le simulateur, lancer expo `npm start` puis pour ouvrir l'application sur le simulateur, dans le meme terminal que celui qui à demarré expo avec la commande précédente ( un QRCode doit etre present ) taper `i`
### -Android : Il faut configurer l'environnement propre à Android, c'est-à-dire Python 2, un JDK(https://www.oracle.com/java/technologies/javase-downloads.html), un SDK Android et une machine virtuelle Android avec AVD. Je vous invite à vous référer à la documentation React Native et à la partie Building Projects with Native(https://reactnative.dev/docs/getting-started.html)


