# Use Node v8.9.0 LTS
FROM node:carbon

# Setup app working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

#npm config proxy
RUN npm config set proxy "http://135.245.48.34:8000" && npm config set https-proxy "http://135.245.48.34:8000"

# Install app dependencies
RUN npm install

# Copy sourcecode
COPY . ./server_api

# Start app
CMD [ "npm", "start" ]
