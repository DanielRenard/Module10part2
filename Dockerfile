FROM node:19-alpine
WORKDIR /app
COPY . .
EXPOSE 8088
RUN npm install
CMD ["npm", "start"]