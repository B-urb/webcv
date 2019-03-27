FROM nginx:latest
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/ /usr/share/nginx/html
