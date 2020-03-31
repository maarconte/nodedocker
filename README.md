# TP2:

## Multi-conteneurs:

Mettre à disposition un fichier docker-compose qui permet de lancer un serveur web node avec une BDD Redis qui compte chaque connexion.
## Build image :
```docker build -t nodedocker .```

Une fois le conteneur lancé on doit pouvoir se connecter en local via son navigateur et chaque connexion doit être comptée et stockée dans Redis.

### Start the app :
```docker-compose up```