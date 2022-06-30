FROM node AS development

RUN mkdir -p /reactApp
WORKDIR /reactApp

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY ./ ./

EXPOSE 3000

CMD ["npm","run", "dockerstart"]