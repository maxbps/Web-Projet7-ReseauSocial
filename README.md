
# Procédure d'installation
## Prérequis
### Node doit être installé sur votre machine : https://nodejs.org/en/download/
### Expo doit être installé sur votre machine : `npm install -g expo-cli`
## Base de Donnée
### Dans MySQLworkbench, dans votre base de donnée, lancez le script situer dans /SQL/createtables afin de créer les tables users et posts qui serviront pendant l'utilisation de l'application.
## Back-end
### Dans le dossier back-end lancez la commande `npm install`
### Dans le fichier back-end/.env ajoutez les données concernant votre base de donnée. Les données actuelles de ce fichier sont fausses et servent d'exemple.
## Front-end
### Dans le dossier front-end lancez la commande `npm install`

# Procédure de lancement
## Base de donnée
### Assurez vous que votre base de donnée soit bien connectée
## Back-end
### Tapez la commande `node server`
## Front-end
### Tapez la commande `npm install`, puis suivez ces instructions:
## Pour lancer l'application sur simulateur:
### -iOS: Depuis votre device, après avoir installé l'application explo, lancez l'application Appareil photo pour scanner le QR Code de votre terminal
### -Android: Depuis votre device, lancez l'application Expo. Vous devriez avoir un bouton "Scan QR Code". Cliquez sur ce bouton et scannez le QR Code affiché dans votre terminal
## Pour lancer l'application sur votre smartphone:
### -iOS : Installez la dernière version de Xcode et au moins un simulateur, lancez le simulateur, lancez expo `npm start` puis pour ouvrir l'application sur le simulateur, dans le même terminal que celui qui à démarré expo avec la commande précédente ( un QRCode doit etre present ) tapez `i`
### -Android : Il faut configurer l'environnement propre à Android, c'est-à-dire Python 2, un JDK(https://www.oracle.com/java/technologies/javase-downloads.html), un SDK Android et une machine virtuelle Android avec AVD. Je vous invite à vous référer à la documentation React Native et à la partie Building Projects with Native(https://reactnative.dev/docs/getting-started.html)
### Attention : Votre smartphone doit être connecté au même réseau que votre machine.
### Attention : Si vous hébergez la base de donnée en local, votre smartphone ne pourra pas y accéder.

