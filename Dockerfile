FROM node:20.18.0

WORKDIR /app

# nodeユーザーに必要な権限を付与
RUN chown -R node:node /app

USER node

# Install dependencies
COPY --chown=node:node package*.json ./
RUN npm install

# Copy source code
COPY --chown=node:node . .

# Build application
#RUN npm run build

EXPOSE 3000 6006

#CMD ["npm", "run", "dev"]