FROM node:alpine
RUN mkdir alfred
COPY . /alfred
RUN cd /alfred && npm install -y
ENTRYPOINT cd /alfred && npm run start
