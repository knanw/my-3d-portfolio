



docker compose up -d
docker compose up --build
docker compose down -v
docker down
docker stop
docker start

docker images
docker ps -a
docke container ls
docker rmi
docker rm

docker compose exec three-dev npm install front-matter
docker compose exec three-dev rm -rf node_modules/.cache
docker compose exec three-dev rm -rf node_modules/.vite

docker volumes


##### 🚀 Docker Compose (Orchestrierung)

| Befehl | Beschreibung | 
| -------| --------------| 
| docker compose up -d | Startet alles im Hintergrund (detached). |
| docker compose up --build | Erzwingt den Neubau der Images vor dem Start. |
| docker compose stop | Stoppt die Container (bleiben erhalten). |
| docker compose down | Stoppt und entfernt die Container und Netzwerke. |
| docker compose down -v | "Wie oben, löscht aber auch alle Volumes (Daten weg!)." |
| docker compose logs -f | Zeigt Live-Logs aller Container an (sehr wichtig!). |

##### 📦 Container Management
- Anzeigen:
    - docker ps (zeigt nur laufende container)
    - docker ps -a (zeigt alle)
- Aufräumen:
    - docke rm <ID/NAME> (löscht einen container)
    - docker container prune (löscht alle gestoppten container)
- Interaktion:
    - docker compose exec <service-name> <befehl> (führt in container befehl aus)
    - docker compose exec <service-name> sh (oder bash) (im container um dort manuell zu arbeiten)


##### 🖼️ Images (Baupläne)
- docker images (listet alle heruntergeladenen/gebauten images)
- docker rmi <Image-ID>: (löscht ein image)
- docker image prune: löscht alle ungenutzten images (spart massiv Speicherplatz).

##### 💾 Volumes (Persistente Daten)
- docker volume ls (zeigt alle volumnes)
- docker volumne inspect <name> (zeigt wo auf echter festplatte die daten liegen)
- docker volumne rm <name> (löscht spezifischisches volume)
- docker volume prune (löscht alle volumes, die von keinem container genutzt werden)

##### 🛠️ Profi-Tipps für dein Projekt
1. Dateien kopieren: docker cp <container-id>:/pfad/im/container ./lokaler/pfad
2. Alles platt machen: docker system prune -a --volumes (öscht alles - Images, Container, Netzwerke, Volumes),
