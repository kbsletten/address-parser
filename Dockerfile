FROM node:latest
COPY package.json package-lock.json ./
RUN npm ci
COPY ./ ./
CMD [ "make" ]
