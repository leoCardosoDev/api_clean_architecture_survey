FROM node:18
WORKDIR /usr/src/clean-node-api
COPY package*.json ./
RUN npm install --legacy-peer-deps --only=prod
RUN npm run build
COPY . .
EXPOSE 5050
ENV HUSKY_SKIP_INSTALL=1
CMD ["node", "dist/main/server.js", "--inspect=0.0.0.0:9222", "--nolazy"]
