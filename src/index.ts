import { Prisma, PrismaClient } from "@prisma/client/extension";
import express from "express";

const app = express()

const prismaclient = new PrismaClient();

app.get("/",(req,res) => {
    const data = prismaclient.user.findMany()
    res.json({
        msg:"chandan here is",
        data
    })
})

app.post("/post",async (req,res) => {
    await prismaclient.user.create({
        data: {
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json({
        msg:"post here is happening"
    })
})
app.listen(3000);