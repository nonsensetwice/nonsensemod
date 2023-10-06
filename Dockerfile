FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . ./
RUN chown -R node /app
USER node
CMD ["npm", "start"]
