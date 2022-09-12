const express = require("express");
const {dbConnect} = require ("./config/db.Connect")
const postsRouter = require("./modules/posts/post.route")

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("welcome to my server. use /posts to get all posts")
})
app.use("/posts", postsRouter)

async function start(){
    await dbConnect();

    app.listen(4000, (err) => {
      console.log("🚀server running on http://localhost:4000");
    });
}

start();


