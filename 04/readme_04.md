
###Mongo
podman run -d --name mongo -p 27017:27017 -v ~/Tools/containers-data/mongo:/data -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo  

###frontend:  
podman build -t frontend .  
podman run -d --name frontend -p 8080:80 frontend  

###backend:  
podman build -t backend .  
sudo podman run -d --name backend -p 8005:8005 backend  

###network:
podman network create localnetwork  

podman network connect localnetwork mongo   
podman network connect localnetwork backend  
podman network connect localnetwork frontend  
