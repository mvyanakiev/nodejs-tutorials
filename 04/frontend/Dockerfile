# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy your HTML file into the Nginx container
COPY index.html /usr/share/nginx/html/index.html
COPY ./scripts/script.js /usr/share/nginx/html/scripts/script.js

EXPOSE 80
