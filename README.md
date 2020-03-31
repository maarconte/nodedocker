# TP1

##Conteneurisation d'un serveur Node.

Construire un conteneur qui permet de lancer un serveur node .

Livré l'image qui permet de lancer le conteneur, une fois lancé le serveur node doit etre accessible depuis le navigateur sur le port 8080 avec un conteneur configuré en 8090.

## Build image :
```docker build -t nodedocker .```

## Run image :
```docker run -p 8080:8090 nodedocker```
