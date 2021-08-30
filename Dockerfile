FROM node:current
WORKDIR /app
COPY package.json package-lock.json /app/
copy . .
RUN npm install -D nodemon
RUN npm install
EXPOSE 3000
CMD npm run dev