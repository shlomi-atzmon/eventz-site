FROM node


COPY . /src/besababa/frontend

RUN apt-get update &&\
    apt-get install -y nginx

RUN cd /src/besababa/frontend &&\
    npm install &&\
    npm run build --prod&&\
    mv /src/besababa/frontend/dist/events/* /var/www/html/

CMD ["nginx", "-g", "daemon off;"]
