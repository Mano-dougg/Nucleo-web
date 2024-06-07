# Use the official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /6-CrudMembros

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
