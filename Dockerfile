FROM node:16
WORKDIR /usr/src/clean-node-api
COPY package*.json ./
RUN npm install --only=prod
COPY . .
# RUN npx husky install
ENV HUSKY_SKIP_INSTALL=1
CMD ["npm", "run", "debug"]

