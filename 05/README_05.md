podman build -t frontend:v1.0 .

podman build -t backend:v1.0 .

kubectl apply -f minikube-config.yaml  
kubectl apply -f minikube-credentials.yaml  
kubectl apply -f minikube-mongo-pv.yaml  
kubectl apply -f minikube-mongo-pvc.yaml  
kubectl apply -f minikube-mongo-service.yaml  
kubectl apply -f minikube-mongo-deployment.yaml  

https://youtu.be/X48VuDVv0do?t=2377
