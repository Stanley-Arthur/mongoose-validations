const router = require("express").Router;
const { 
    createPost,
     getAllPost ,
     getSinglePost,
     deletePost,
     updatePost,
    } = require("./post.controller");
    const {authRequired} = require("../middlewares/authRequired")

const postsRouter = router();

postsRouter.route("/").all(authRequired).get(getAllPost).post(createPost);
postsRouter.route("/:postId").all(authRequired).get(getSinglePost).patch(updatePost).delete(deletePost);

module.exports = postsRouter;
