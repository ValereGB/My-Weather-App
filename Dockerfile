# première étape: Construction du projet Angular
# utilisation d'une image node
FROM node:alpine as build
# dossier de départ
WORKDIR /react
# copie des fichiers du projet
COPY . .
# installation des dépendances de Node
RUN npm install
# build du projet
RUN npm run build --optimization=false

# seconde étape: création de l'image Web (nginx)
FROM nginx:alpine
# Copie de l'app construite depuis l'étape de construction
COPY --from=build /react/build/ /usr/share/nginx/html
# COPY  dist/ng-todo/ /usr/share/nginx/html

