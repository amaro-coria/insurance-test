FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install bcryptjs
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
