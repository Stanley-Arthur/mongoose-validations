const router = require("express").Router;
const { 
    createPost,
     getAllPost ,
     getSinglePost,
     deletePost,
     updatePost,
    } = require("./post.controller");

const postsRouter = router();

postsRouter.route("/").get(getAllPost).post(createPost);
postsRouter.route("/:postId").get(getSinglePost).patch(updatePost).delete(deletePost);

module.exports = postsRouter;
