FROM node:18
WORKDIR /usr/src/clean-node-api
COPY package*.json ./
RUN npm run build
RUN npm install --legacy-peer-deps --only=prod
COPY . .
EXPOSE 5050
ENV HUSKY_SKIP_INSTALL=1
CMD ["node", "dist/main/server.js", "--inspect=0.0.0.0:9222", "--nolazy"]
