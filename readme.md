# Project Setup Guide

This guide explains how to set up and run the project using **manual installation** or **Docker**.

---

## Manual Installation

1. **Install Node.js locally**

   * Make sure you have [Node.js](https://nodejs.org/) installed.

2. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the PostgreSQL database locally**

   ```bash
   docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```

   Alternatively, you can use [Neon.tech](https://neon.tech/) to get a managed PostgreSQL database.

5. **Configure environment variables**

   * Create a `.env` file in the root directory.
   * Add your database credentials:

     ```env
     DATABASE_URL="postgresql://postgres:mysecretpassword@postgress:5432/postgres"
     ```

6. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev
   ```

7. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

8. **Build the project**

   ```bash
   npm run build
   ```

9. **Start the project**

   ```bash
   npm run start
   ```

---

## Docker Installation
install docker 
-start new network `docker network create data
start postgres 
 -docker run --network data --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- build  the images -(docker build --network=host -t user-progress .)
- start the image -(docker run --network data -d -p 3000:3000 user-project)

### Docker Compose Installation Steps

-install docker docker-compose
-RUN `docker-compose-up`
