# Use the official Node.js image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install bcryptjs
RUN npm install bcryptjs

# Copy the rest of the application code
COPY . .

# Build the Nest.js application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
