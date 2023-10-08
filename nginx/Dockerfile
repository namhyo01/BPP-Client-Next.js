FROM --platform=linux/amd64 nginx:1.23.2-alpine AS dev

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx","-g","daemon off;"]
