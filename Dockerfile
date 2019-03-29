FROM node:8.9.0

#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/ /usr/local/public
RUN npm install -g serve
CMD serve -s public -l 3000
#RUN apt-get update && apt-get install -y dnsutils curl
