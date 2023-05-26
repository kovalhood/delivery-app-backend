FROM node

WORKDIR /main

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "node", "index" ]