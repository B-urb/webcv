FROM node:14.19.2
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/ /usr/local/public
RUN npm install -g serve
CMD serve -s /usr/local/public -l 3000
EXPOSE 3000
#RUN apt-get update && apt-get install -y dnsutils curl
