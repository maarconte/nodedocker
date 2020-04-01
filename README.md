# TP3:

## Objectif:
Lancement d'un docker compose avec l'utilisation des secrets Swarm.
## TO DO:
- Créer un fichier docker-compose qui lance un service postgres.
- Lors de la création d'une instance postgres il faut passer en argument un user et un mdp.
- Utiliser des fichiers txt qui contiendront les mdp et usr pour mettre à disposition des secrets dans le docker compose.
- Communiquer ses secrets a postgres via la conf du docker-compose.yml

## Bonus:
Ajouter un service node qui se connecte à la BDD Postgres.

## Build image :
```docker build -t nodedocker .```

Une fois le conteneur lancé on doit pouvoir se connecter en local via son navigateur et chaque connexion doit être comptée et stockée dans Redis.

### Start the app :
```docker-compose up```