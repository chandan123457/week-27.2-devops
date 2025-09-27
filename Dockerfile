FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json 
COPY  ./package-lock.json ./package-lock.json 

RUN npm install 

COPY  . .
ENV   DATABASE_URL="postgresql://postgres:mysecretpassword@joker:5432/postgres"
# RUN npx prisma migrate dev 
RUN npx prisma generate 
RUN npm run build 

CMD ["npm", "run", "docker:start"]