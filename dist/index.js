import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const prismaclient = new PrismaClient();
app.get("/", async (req, res) => {
    try {
        const data = await prismaclient.user.findMany();
        res.json({
            data
        });
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
app.post("/post", async (req, res) => {
    try {
        await prismaclient.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
        res.json({
            msg: "post here is happening"
        });
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
// import express from "express";
// const app = express()
// const prismaclient = new PrismaClient();
// app.get("/",async(req,res) => {
//     const data = await prismaclient.user.findMany()
//     res.json({
//         data
//     })
// })
// app.post("/post",async (req,res) => {
//     await prismaclient.user.create({
//         data: {
//             username:Math.random().toString(),
//             password:Math.random().toString()
//         }
//     })
//     res.json({
//         msg:"post here is happening"
//     })
// })
// app.listen(3000);
//# sourceMappingURL=index.js.map