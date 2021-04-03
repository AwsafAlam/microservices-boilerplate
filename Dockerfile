FROM node:10.23.0-alpine
WORKDIR /home/node/app
COPY user-app /home/node/app
RUN npm install
CMD npm run app