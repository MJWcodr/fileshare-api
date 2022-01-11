FROM node:16

# Create app directory
WORKDIR /srv/www/fileshare-api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN echo 'test'

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN ls

RUN npm run build
EXPOSE 3090
CMD [ "node", "build/index.js" ]