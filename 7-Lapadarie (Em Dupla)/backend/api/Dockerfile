FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install packages in the container
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Generate the Prisma client
RUN npx prisma generate

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
