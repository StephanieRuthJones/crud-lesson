FROM nginx:latest
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html/style/
COPY app.js /usr/share/nginx/html/js/
EXPOSE 80