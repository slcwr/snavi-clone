FROM node:20.18.0

WORKDIR /app
USER root
# nodeユーザーに必要な権限を付与
RUN chown -R node:node /app
RUN echo "root:Docker!" | chpasswd
#RUN chmod 666 /var/run/docker.sock


RUN mkdir -p /home/node/.npm-global \
    && chown -R node:node /home/node/.npm-global

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

# Install dependencies
COPY --chown=node:node package*.json ./

#RUN npm install

# Copy source code
COPY --chown=node:node . .

# Build application
#RUN npm run build

EXPOSE 3000 6006

#CMD ["npm", "run", "dev"]