FROM node:18
WORKDIR /usr/src/clean-node-api
ARG BUILD_DATE
COPY package*.json ./
RUN npm install --legacy-peer-deps --only=prod
COPY . .
EXPOSE 5050
# RUN npx husky install
ENV HUSKY_SKIP_INSTALL=1
CMD ["npm", "run", "debug"]

